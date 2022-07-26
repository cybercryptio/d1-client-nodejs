
export interface ICredentials {
  getToken(): Promise<string>;
}
