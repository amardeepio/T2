import { VaultToken, Token, TokenKind } from '../types/general';
import { TRANSACTIONS, DETAILS } from './TabConstants';

import stakerdaoIcon from '../../resources/contracts/stakerdao-icon.png';
import tzbtcIcon from '../../resources/contracts/tzbtc-icon.png';
import usdtzIcon from '../../resources/contracts/usdtz-icon.png';
import ethtzIcon from '../../resources/contracts/ethtz-icon.png';
import wxtzIcon from '../../resources/contracts/wXTZ-token-FullColor.png';

export const knownTokenContracts: (Token | VaultToken)[] = [
    {
        network: 'mainnet',
        address: 'KT1EctCuorV2NfVb1XTQgvzJ88MQtWP8cMMv',
        displayName: 'StakerDAO Token',
        symbol: 'STKR',
        balance: 0,
        transactions: [],
        activeTab: DETAILS,
        kind: TokenKind.stkr,
        icon: stakerdaoIcon,
        scale: 0,
        precision: 0,
        round: 0,
    },
    {
        network: 'mainnet',
        address: 'KT1PWx2mnDueood7fEmfbBDKx1D9BAnnXitn',
        displayName: 'tzBTC',
        symbol: 'tzBTC',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.tzbtc,
        icon: tzbtcIcon,
        scale: 8,
        precision: 8,
        round: 8,
    },
    {
        network: 'mainnet',
        address: 'KT1LN4LPSqTMS7Sd2CJw4bbDGRkMv2t68Fy9',
        displayName: 'USDtz',
        symbol: 'USDtz',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.tzip7,
        icon: usdtzIcon,
        scale: 6,
        precision: 6,
        round: 2,
    },
    {
        network: 'mainnet',
        address: 'KT19at7rQUvyjxnZ2fBv7D9zc8rkyG7gAoU8',
        displayName: 'ETHtz',
        symbol: 'ETHtz',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.tzip7,
        icon: ethtzIcon,
        scale: 18,
        precision: 18,
        round: 6,
    },
    {
        network: 'delphinet',
        address: 'KT1REPEBMQS3Be8ZybkQQfSwAv3g4pHJViuK',
        displayName: 'USDtz',
        symbol: 'USDtz',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.tzip7,
        icon: usdtzIcon,
        scale: 6,
        precision: 6,
        round: 2,
    },
    {
        network: 'delphinet',
        address: 'KT1DMWDco6ZsBT1eLScx4d6iZUZuzbD4HLaZ',
        displayName: 'Security Exchange Token',
        symbol: 'SECT',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.tzip7,
        scale: 0,
        precision: 0,
        round: 0,
    },
    {
        network: 'carthagenet',
        address: 'KT1N3YaxhH3JGr3u9Q7ULd6MnMxYo24jKKDF',
        displayName: 'StakerDAO Token',
        symbol: 'STKR',
        balance: 0,
        transactions: [],
        activeTab: DETAILS,
        kind: TokenKind.stkr,
        icon: stakerdaoIcon,
        scale: 0,
        precision: 0,
        round: 0,
    },
    {
        network: 'delphinet',
        address: 'KT1WhBK8hsji4YZtS6PwTWBAMX7cDbwtC7cZ',
        displayName: 'tzBTC',
        symbol: 'tzBTC',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.tzbtc,
        icon: tzbtcIcon,
        scale: 8,
        precision: 8,
        round: 8,
    },
    {
        network: 'delphinet',
        address: 'KT1U5mixvsmaSrnqUuVfRQDdWoND3iERquCJ',
        displayName: 'wXTZ',
        symbol: 'wXTZ',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.wxtz,
        icon: wxtzIcon,
        scale: 6,
        precision: 6,
        round: 6,
        vaultCoreAddress: 'KT1MjR9TYrE44nAQxQgH4nsse8tWzEzBg6F9',
        vaultRegistryMapId: 25903,
        vaultList: [],
    },
    {
        network: 'mainnet',
        address: 'KT1MvtUZBsxhzMcFhUfWfMr4uBeXzgxfRbWg',
        displayName: 'wXTZ',
        symbol: 'wXTZ',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.wxtz,
        icon: wxtzIcon,
        scale: 6,
        precision: 6,
        round: 6,
        vaultCoreAddress: 'KT1PegnsYmsMf2m44cWRqpxo3WsjnjU5V7sB',
        vaultRegistryMapId: 25903,
        vaultList: [],
    },
    {
        network: 'delphinet',
        address: 'KT1TVMrbibvGTxHZ7ttCDFAx3XGoh2zp2iDQ',
        displayName: 'Hungry Hungry Bhaskar Token',
        symbol: 'HHBt',
        balance: 0,
        transactions: [],
        activeTab: TRANSACTIONS,
        kind: TokenKind.tzip7,
        scale: 6,
        precision: 6,
        round: 6,
    },
];
