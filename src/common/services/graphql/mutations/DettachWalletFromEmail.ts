export default `
mutation DettachWalletFromEmail($address: String!, $blockchain: Chain!) {
  dettachWalletFromEmail(address: $address, blockchain: $blockchain) {
    success
  }
}
`
