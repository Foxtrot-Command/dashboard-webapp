import UserAddreses from "./query/UserAddreses";
import UserCards from "./query/UserCards";
import Cards from "./query/Cards";
import RequestService from "./RequestService";

export type AddressData = {
  address: string,
  isWalletVerified: boolean,
  blockchain: {
    id: string,
    name: string,
    rpc: string,
    isSideChain: boolean,
  }
}

export type Success = {
  data: {
    sync: boolean
  }
}

export type UserAddress = {
  data: {
    userAddresses: AddressData[]
  }
}

class AssetsService {

  static context: any;
  static bearerToken: string;

  public async setContext(context: any) {
    AssetsService.context = context;
  }

  public async setBearerToken(bearerToken: string) {
    AssetsService.bearerToken = bearerToken;
  }

  public async getUserAddresses(): Promise<UserAddress> {
    return await RequestService.call({
      body: {
        query: UserAddreses,
      }
    })
  }

  public async getCards(): Promise<CardQuery> {
    const request = await RequestService.call<CardQueryFromGraphql>({
      context: AssetsService.context,
      authorization: false,
      body: {
        query: Cards,
      }
    });

    return request.data;
  }

  public async getUserCards(): Promise<UserCardsQuery> {
    const request = await RequestService.call<UserCardQueryFromGraphql>({
      context: AssetsService.context,
      bearerToken: AssetsService.bearerToken,
      authorization: true,
      body: {
        query: UserCards,
      }
    });

    return request.data;
  }

  public async SynUserNFTs(): Promise<Omit<Success, 'data'>> {
    const request = await RequestService.call<Success>({
      context: AssetsService.context,
      bearerToken: AssetsService.bearerToken,
      authorization: true,
      body: {
        query: `
        query Sync {
          sync
        }
        `,
      }
    });

    return request.data;
  }
}

export default new AssetsService();
