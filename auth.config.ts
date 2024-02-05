import { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers:[],

  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/account");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/account", request.nextUrl));
      }
      return true;
    },
    async jwt({ token, user, session, account, trigger }: any) {
      if (account && user) {
        const payloadFromAccessToken = atob(user.accessToken?.split('.')[1]);

        token.id = user.id;
        token.authType = user.authType;
        token.profile = {
          ...user.profile,
          roles: JSON.parse(payloadFromAccessToken).roles
        };
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      if (trigger === "update" && session?.newWallet) {
        token.profile.wallets = session.newWallet
      }

      if (trigger === "update" && session?.alias) {
        token.profile.user.alias = session.alias
        token.profile.user.lastAliasUpdateAt = session.lastAliasUpdateAt
        token.profile.user.nextAliasUpdateAt = session.nextAliasUpdateAt
      }

      return Promise.resolve(token);
    },

    async session({ session, token, user }: any) {
      session.account = {
        email: session.user.email,
        ...token.profile
      };
      session.user = undefined;
      session.authType = token.authType;
      session.accessToken = token.accessToken;
      return session;
    }
  },
  pages: {
    signIn: "/login",
    error: "/404",
  },
  debug: false/* process.env.NODE_ENV !== "production" */,
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60
  }
} satisfies NextAuthConfig
