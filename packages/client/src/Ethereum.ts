import { hashString } from "./Hash";

/**
 * This is a rewrite of the function `getItemId` implemented by Logion Smart Contract:
 * https://github.com/logion-network/logion-smc-test/blob/main/contracts/SimpleNft.sol
 */
export function generateEthereumTokenItemId(contractAddress: string, tokenId: string) {
    const itemId = `${contractAddress.toLowerCase()}${tokenId}`;
    return hashString(itemId);
}