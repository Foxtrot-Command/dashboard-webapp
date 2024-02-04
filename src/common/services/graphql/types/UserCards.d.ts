type CardQueryFromGraphql = {
  data: CardsQuery;
}

type UserCardQueryFromGraphql = {
  data: UserCardsQuery;
}

type UserCardsQuery = {
  userCards: UserCard[];
}

type UserCard = {
  cards?: Card;
}

type CardQuery = {
  cards: Card[];
}

type Card = {
  id?: string;
  name?: string;
  description?: string;
  descriptionPretty?: string;
  descriptionLore?: string;
  season?: string;
  linkedNfts?: LinkedNfts[];
  settings?: CardSettings;
  art?: CardArt;
  createdAt?: string;
  updatedAt?: string;
}

type LinkedNfts = {
  edition?: number;
  nftId?: string;
}

type CardSettings = {
  rarity?: Rarity;
  type?: CardType[];
  stats?: CardStats;
  faction?: Faction;
  skills?: Skill[];
}

type Rarity = {
  id?: string;
  name?: string;
  color?: string;
}

type CardType = {
  id?: string;
  name?: string;
  description?: string;
}

type CardStats = {
  health?: number;
  attack?: number;
  mana?: number;
}

type Faction = {
  id?: string;
  name?: string;
  description?: string;
  color?: string;
}

type Skill = {
  description?: string;
  name?: string;
}

type CardArt = {
  artist?: Artist;
  imageRoute?: string;
  modelRoute?: string;
}

type Artist = {
  firstName?: string;
  lastName?: string;
}
