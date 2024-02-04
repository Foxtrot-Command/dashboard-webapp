export default `
query UserAddresses {
  userAddresses {
    address
    isWalletVerified
    blockchain {
      id
      name
      rpc
      isSideChain
    }
  }
}
`
