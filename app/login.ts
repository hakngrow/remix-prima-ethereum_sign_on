import { ethers } from "ethers";

export const authenticate = async (
    address: string, 
    signature: string, 
    nonce: number) => {

    let authenticated = false;

    const decodedMessage = ethers.utils.verifyMessage(nonce.toString(), signature);

    if( decodedMessage === address )
        authenticated = true;

    return authenticated;
};