/**
 * Types of the NFT actions.
 */
export const NFT_ACTION_TYPES = {
    COLLECTED: 'COLLECTED',
    MINTED: 'MINTED',
} as const;

/**
 * Tabs on the NFT page.
 */
export const NFT_PAGE_TABS = NFT_ACTION_TYPES;

/**
 * NFT platforms integrated with the application:
 */
export const NFT_PROVIDERS = {
    HIC_ET_NUNC: 'HIC_ET_NUNC',
    KALAMINT: 'KALAMINT',
    KUMULUS_OBJKT: 'KUMULUS_OBJKT',
    GOGOS_OBJKT: 'GOGOS_OBJKT',
    NEONZ_OBJKT: 'NEONZ_OBJKT',
    PIXEL_POTUS: 'PIXEL_POTUS',
    MOMENTS: 'MOMENTS',
    SKELE: 'SKELE',
    TWITZ: 'TWITZ',
    SUMO: 'SUMO',
    IPFS: 'IPFS',
} as const;

/**
 * The errors types that may occur on fetching data from NFR providers.
 */
export const NFT_ERRORS = {
    SOMETHING_WENT_WRONG: 'SOMETHING_WENT_WRONG',
    UNSUPPORTED_DATA_FORMAT: 'UNSUPPORTED_DATA_FORMAT',
    UNSUPPORTED_PROVIDER: 'UNSUPPORTED_PROVIDER',
} as const;

/**
 * Tabs in the NFT modal.
 */
export const NFT_MODAL_TABS = {
    MORE_INFO: 'MORE_INFO',
    SEND: 'SEND',
} as const;
