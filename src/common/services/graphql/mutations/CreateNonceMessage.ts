export default `mutation CreateNonceMessage($blockchain: Chain!, $address: String) {
  createNonceMessage(blockchain: $blockchain, address: $address) {
    nonce
  }
}`;
