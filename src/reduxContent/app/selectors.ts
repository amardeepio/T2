import { createSelector } from 'reselect';
import { RootState } from '../../types/store';
import { getAddressType } from '../../utils/account';
import { AddressType } from '../../types/general';
import { TRANSACTIONS } from '../../constants/TabConstants';

export const getApp = (state: RootState) => state.app;

const selectedAccountHashSelector = (state: RootState) => state.app.selectedAccountHash;
const selectedParentHashSelector = (state: RootState) => state.app.selectedParentHash;
const identitiesSelector = (state: RootState) => state.wallet.identities;

const defaultAccount = {
  balance: 0,
  activeTab: TRANSACTIONS,
  storeType: 0,
  status: '',
  script: undefined,
  privateKey: '',
  delegate_value: '',
  storage: '',
  regularAddresses: [],
  transactions: []
};

export const getAccountSelector = createSelector(
  selectedAccountHashSelector,
  selectedParentHashSelector,
  identitiesSelector,
  (accountHash, parentHash, identites) => {
    const selectedIdentity = identites.find(identity => identity.publicKeyHash === parentHash);
    if (selectedIdentity) {
      const { accounts, publicKeyHash, balance, privateKey } = selectedIdentity;
      const regularAddresses = [{ pkh: publicKeyHash, balance }];

      accounts.forEach(acc => {
        const { script, account_id } = acc;
        const addressType = getAddressType(account_id, script);
        if (addressType === AddressType.Delegated) {
          const newAddress = { pkh: account_id, balance: acc.balance };
          regularAddresses.push(newAddress);
        }
      });
      if (accountHash === parentHash) {
        return {
          ...defaultAccount,
          regularAddresses,
          ...selectedIdentity
        };
      }
      const selectedAccount = accounts.find(acc => acc.account_id === accountHash);
      if (selectedAccount) {
        return {
          ...defaultAccount,
          privateKey,
          ...selectedAccount
        };
      }
    }
    return defaultAccount;
  }
);
