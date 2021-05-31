import { createMessageAction } from '../../../reduxContent/message/actions';

import { cloneDecryptedSigner } from '../../../utils/wallet';
import { getSelectedKeyStore } from '../../../utils/general';
import { getMainNode, getMainPath } from '../../../utils/settings';

import { sendDexterBuy, sendDexterSell, sendQuipuBuy, sendQuipuSell } from './util';

export function buyDexter(marketAddress: string, tokenAmount: string, coinAmount: string, password: string) {
    return async (dispatch, state) => {
        return await callMarket(marketAddress, tokenAmount, coinAmount, password, dispatch, state, sendDexterBuy);
    };
}

export function sellDexter(marketAddress: string, tokenAddress: string, tokenAmount: string, coinAmount: string, password: string) {
    return async (dispatch, state) => {
        return await callMarket(marketAddress, tokenAmount, coinAmount, password, dispatch, state, sendDexterSell);
    };
}

export function buyQuipu(marketAddress: string, tokenAddress: string, tokenAmount: string, coinAmount: string, password: string) {
    return async (dispatch, state) => {
        return await callMarket(marketAddress, tokenAmount, coinAmount, password, dispatch, state, sendQuipuBuy);
    };
}

export function sellQuipu(marketAddress: string, tokenAddress: string, tokenAmount: string, coinAmount: string, password: string) {
    return async (dispatch, state) => {
        return await callMarket(marketAddress, tokenAmount, coinAmount, password, dispatch, state, sendQuipuSell);
    };
}

async function callMarket(marketAddress: string, tokenAmount: string, coinAmount: string, password: string, dispatch: any, state: any, marketFunction) {
    const { selectedNode, nodesList, selectedPath, pathsList } = state().settings;
    const { identities, walletPassword } = state().wallet;
    const { selectedParentHash, isLedger, signer } = state().app;
    const mainNode = getMainNode(nodesList, selectedNode);
    const { tezosUrl } = mainNode;

    if (password !== walletPassword && !isLedger) {
        const error = 'components.messageBar.messages.incorrect_password';
        dispatch(createMessageAction(error, true));
        return false;
    }

    const mainPath = getMainPath(pathsList, selectedPath);
    const keyStore = getSelectedKeyStore(identities, selectedParentHash, selectedParentHash, isLedger, mainPath);

    const operationId: string | undefined = await marketFunction(
        tezosUrl,
        keyStore,
        isLedger ? signer : await cloneDecryptedSigner(signer, password),
        marketAddress,
        coinAmount,
        tokenAmount
    ).catch((err) => {
        const errorObj = { name: err.message, ...err };
        console.error(`market operation failed with ${JSON.stringify(errorObj)}`);
        dispatch(createMessageAction(errorObj.name, true));
        return undefined;
    });

    if (operationId === undefined) {
        return false;
    }

    dispatch(createMessageAction('components.messageBar.messages.started_token_success', false, operationId));

    return true;
}
