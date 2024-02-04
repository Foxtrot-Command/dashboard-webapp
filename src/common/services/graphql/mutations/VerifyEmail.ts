export default `
mutation VerifyEmail($code: Int!, $email: String!) {
  verifyEmail(code: $code, email: $email) {
    success
  }
}
`
