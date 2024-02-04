export default `
mutation AttachWalletToEmail($address: String!, $blockchain: Chain!, $signature: String!) {
  attachWalletToEmail(address: $address, blockchain: $blockchain, signature: $signature) {
    success
  }
}
`
