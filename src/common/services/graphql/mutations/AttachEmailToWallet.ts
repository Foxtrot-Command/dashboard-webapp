export default `
mutation AttachEmailToWallet($email: String!, $password: String!) {
  attachEmailToWallet(email: $email, password: $password) {
    success
  }
}
`
