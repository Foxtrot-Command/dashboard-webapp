import { auth } from "app/auth";
import getSession from "./session";

type ICall = {
  body?: any,
  method?: string,
  endpoint?: string,
  authorization?: boolean
  context?: any
  bearerToken?: string
}

let API_URL = "https://graphql.foxtrotcommand.com/graphql";

/* if(process.env.NODE_ENV === "development") {
  API_URL = "http://127.0.0.1:81/graphql"
} */
class RequestService {

  /**
   * It takes a GraphQL query and variables as parameters,
   * and returns a promise that resolves to the
   * response from the GraphQL server
   * @param {string} query - The GraphQL query you want to run.
   * @param variables - This is an object that contains the
   * variables that you want to pass to the
   * GraphQL query.
   * @returns A promise that resolves to the response from the server.
   */
  public async call<T>({
    body,
    method = "POST",
    endpoint = "",
    authorization = true,
    context = undefined,
    bearerToken = ""
  }: ICall): Promise<T> {

    let requestAuthentication = {};

    if(authorization) {
      const session = await getSession()

      if(session && !('accessToken' in session) && bearerToken === "") throw new Error("Authorization is required");

      requestAuthentication = { "Authorization": `Bearer ${session?.accessToken}`};

    }

    return new Promise<T>(async (resolve, reject) => {
      await fetch(API_URL + endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...requestAuthentication
        },
        body: JSON.stringify(body),
      })
        .then(async (response: any) => {
          let requestContentResponse = await response.json();

          if (requestContentResponse.hasOwnProperty("error") && requestContentResponse.error) {
            reject({ errors: requestContentResponse.error })
          }

          resolve(requestContentResponse)

        })
        .catch((err: any) => {
          reject(err)
        });
    });

  }
}

export default new RequestService();
