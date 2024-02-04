export default `
query UserCards {
  userCards {
    values {
      nfts {
        id
        amount
        edition
      }
      normal {
        amount
      }
    }
    card {
      id
      name
      season
      settings {
        faction {
          name
        }
      }
      art {
        imageRoute
      }
    }
  }
}
`
