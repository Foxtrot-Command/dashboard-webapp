export default `
mutation CreateAccountWithEmail($data: NoSignatureInput!) {
  createAccountWithEmail(data: $data) {
    success
  }
}
`;
