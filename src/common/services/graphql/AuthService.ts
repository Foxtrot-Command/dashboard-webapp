import AttachWalletToEmail from "./mutations/AttachWalletToEmail";
import CreateAccountWithEmail from "./mutations/CreateAccountWithEmail";
import CreateHostedWallet from "./mutations/CreateHostedWallet";
import CreateNonceMessage from "./mutations/CreateNonceMessage";
import DettachWalletFromEmail from "./mutations/DettachWalletFromEmail";
import ExportPrivateKey from "./mutations/ExportPrivateKey";
import LoginWithEmail from "./mutations/LoginWithEmail";
import VerifyEmail from "./mutations/VerifyEmail";
import RequestService from "./RequestService";

type ILogin = {
  name?: string,
  email?: string,
  password?: string,
  signature?: string,
  wallet?: string
}

type LoginUserWithEmail = Pick<ILogin, "name" | "email" | "password">;

class AuthService {

  public async verifyEmail({ code, email }: { code: number, email: string }): Promise<any> {
    return await RequestService.call({
      body: {
        query: VerifyEmail,
        variables: {
          code,
          email
        }
      }
    })
  }

  /**
   * A function that takes in an object with email and password properties and returns a promise.
   * @param {LoginUserWithEmail}  - LoginUserWithEmail - This is the type of the parameters that will
   * be passed to the function.
   * @returns The return value is a promise.
   */
  public async loginWithEmail({ email, password }: LoginUserWithEmail): Promise<any> {
    return await RequestService.call({
      body: {
        query: LoginWithEmail,
        variables: {
          email,
          password
        }
      }
    })
  }

  /**
   * A function that takes in an object with email and password properties and returns a promise.
   * @param {LoginUserWithEmail}  - LoginUserWithEmail - This is the type of the parameters that will
   * be passed to the function.
   * @returns The return value is a promise.
   */
  public async registerWithEmail({ name, email, password }: LoginUserWithEmail): Promise<any> {
    return await RequestService.call({
      body: {
        query: CreateAccountWithEmail,
        variables: {
          data: {
            alias: name,
            email,
            password
          }
        }
      }
    })
  }
}

export default new AuthService();
