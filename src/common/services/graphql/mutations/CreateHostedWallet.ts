export default `
mutation CreateHostedWallet($password: String!) {
  createHostedWallet(password: $password) {
    address
    isWalletVerified
    custodyType
    blockchain {
      id
      name
      rpc
      isSideChain
    }
  }
}
`
