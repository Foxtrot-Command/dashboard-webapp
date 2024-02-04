export default `
mutation ExportPrivateKey($password: String!, $address: String!) {
  exportPrivateKey(password: $password, address: $address) {
    address
    privateKey
    mnemonic
  }
}
`;
