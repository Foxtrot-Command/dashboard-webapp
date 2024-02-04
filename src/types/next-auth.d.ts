import NextAuth from "next-auth"
import { AUTH_TYPE } from "app/auth"

declare module "next-auth" {
  interface Session {
    account: {
      email: string,
      uuid: string,
      createdAt?: string,
      updatedAt?: string,
      roles: string[],
      user: {
        alias: string,
        coinBlance: number,
        level: number,
        experience: number,
        lastAliasUpdateAt?: string | null,
        nextAliasUpdateAt?: string | null,
      },
      wallets: {
        blockchain: string,
        address: string,
        isWalletVerified: boolean,
      }[]
    },
    expires: string,
    authType: AUTH_TYPE,
    accessToken: string,
  }

}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    email: string,
    authType: AUTH_TYPE,
    profile: {
      createdAt?: string,
      updatedAt?: string,
      uuid: string,
      roles: string[],
      user: {
        alias: string,
        coinBlance: number,
        level: number,
        experience: number,
      },
      wallets: {
        blockchain: string,
        address: string,
        isWalletVerified: boolean,
      }[]
    },
    accessToken: string,
  }
}
