export default `mutation LoginWithEmail($email: EmailAddress!, $password: String!) {
  loginWithEmail(email: $email, password: $password) {
    profile {
      uuid
      createdAt
      updatedAt
      user {
        nextAliasUpdateAt
        lastAliasUpdateAt
        alias
        coinBalance
        elo
        level
        experience
      }
      wallets {
        address
        custodyType
        isWalletVerified
      }
    }
    accessToken
    refreshToken
    isNewAccount
    emailVerifiedAt
  }
}`
