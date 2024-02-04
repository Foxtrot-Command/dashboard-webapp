export default `
query Cards($filter: IdsFilter) {
  cards(filter: $filter) {
    id
    name
    description
    descriptionPretty
    descriptionLore
    season
    linkedNfts {
      edition
      nftId
    }
    settings {
      rarity {
        id
        name
        color
      }
      type {
        id
        name
        description
      }
      stats {
        health
        attack
        mana
      }
      faction {
        id
        name
        description
        color
      }
      skills {
        description
        name
      }
    }
    art {
      artist {
        firstName
        lastName
      }
      imageRoute
      modelRoute
    }
    createdAt
    updatedAt
  }
}
`
