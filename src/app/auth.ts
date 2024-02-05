import { authConfig } from "../../auth.config";
import AuthService from "common/services/graphql/AuthService";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials) return null;

        const payload: { email: string, password: string } = {
          email: credentials.email as string,
          password: credentials.password as string,
        };

        const responseData = await AuthService.loginWithEmail({
          email: payload.email,
          password: payload.password
        });

        if ('errors' in responseData)
          return Promise.reject(new Error(responseData.errors[0].message));

        if (responseData.data) {

          const payloadFromAccessToken = atob(responseData.data.loginWithEmail.accessToken?.split('.')[1]);

          const allowedRoles = ['Admin', 'CardManager'];
          const userRoles = JSON.parse(payloadFromAccessToken).roles;
          if (
            !allowedRoles
              .some(role => userRoles.includes(role))
          ) {
            return Promise.reject('Wrong connection.');
          }

          const user = {
            id: responseData.data.loginWithEmail.profile.uuid,
            email: payload.email,
            ...responseData.data.loginWithEmail
          }
          return Promise.resolve(user);
        }

        return null
      },

    })
  ]
});
