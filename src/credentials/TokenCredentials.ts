import { ICredentials } from './ICredentials';


export class TokenCredentials implements ICredentials {
  constructor(private readonly token: string) { }

  public async getToken(): Promise<string> {
    return this.token;
  }
}
