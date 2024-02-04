import RequestService from "./RequestService";

const UpdateAliasGQL = `
mutation UpdateAlias($alias: String!) {
  updateAlias(alias: $alias) {
    success
    nextAliasUpdateAt
    lastAliasUpdateAt
  }
}`

class UpdateProfileService {

  /**
   * A function that takes in an object with email and password properties and returns a promise.
   * @param {LoginUserWithEmail}  - LoginUserWithEmail - This is the type of the parameters that will
   * be passed to the function.
   * @returns The return value is a promise.
   */
  public async updateAlias({ alias }: {alias: string}): Promise<any> {
    return await RequestService.call({
      body: {
        query: UpdateAliasGQL,
        variables: {
          alias,
        }
      }
    })
  }

}

export default new UpdateProfileService();
