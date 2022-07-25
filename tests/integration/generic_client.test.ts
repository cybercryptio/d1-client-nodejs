import { D1GenericClient, UsernamePasswordCredentials } from '../../src/index';
import { d1 } from '../../src/proto';

describe("generic", () => {
    let endpoint: string;
    let client: D1GenericClient;
    beforeAll(() => {
        let uid: string;
        let password: string;
        if (process.env.E2E_TEST_UID) {
            uid = process.env.E2E_TEST_UID;
        } else {
            throw new Error("E2E_TEST_UID is not set");
        }
        if (process.env.E2E_TEST_PASS) {
            password = process.env.E2E_TEST_PASS;
        } else {
            throw new Error("E2E_TEST_PASS is not set");
        }
        if (process.env.E2E_TEST_ENDPOINT) {
            endpoint = process.env.E2E_TEST_ENDPOINT;
        } else {
            endpoint = "localhost:9000";
        }
        let creds = new UsernamePasswordCredentials(uid, password, endpoint);
        client = new D1GenericClient(endpoint, creds);
    })
    it("should be able to get version information", async () => {
        let res = await client.version.version({});
        expect(res).toBeDefined();
    })
    it("should be able to manage users", async () => {
        let createUserRes = await client.authn.createUser({ scopes: [] });
        let createGroupRes = await client.authn.createGroup({ scopes: [] });
        await client.authn.addUserToGroup({ userId: createUserRes.userId, groupId: createGroupRes.groupId });
        await client.authn.removeUserFromGroup({ userId: createUserRes.userId, groupId: createGroupRes.groupId });
        await client.authn.removeUser({ userId: createUserRes.userId });
    })
    it("should be able to encrypt data", async () => {
        let plaintext = Buffer.from("plaintext");
        let associatedData = Buffer.from("associatedData");
        let createUserResponse = await client.authn.createUser({ scopes: [d1.scopes.Scope.CREATE, d1.scopes.Scope.READ] });
        let client2 = new D1GenericClient(endpoint, new UsernamePasswordCredentials(createUserResponse.userId, createUserResponse.password, endpoint));

        let encryptResponse = await client2.generic.encrypt({ plaintext, associatedData });
        let decryptResponse = await client2.generic.decrypt({ objectId: encryptResponse.objectId, ciphertext: encryptResponse.ciphertext, associatedData });

        expect(plaintext).toStrictEqual(decryptResponse.plaintext);
        expect(associatedData).toStrictEqual(decryptResponse.associatedData);
    })
    it("should be able to add and search for keywords in index", async () => {
        const keywords = ["keyword1", "keyword2"];
        const identifier = "id1";
        let createUserRes = await client.authn.createUser({ scopes: [d1.scopes.Scope.INDEX] });
        let client2 = new D1GenericClient(endpoint, new UsernamePasswordCredentials(createUserRes.userId, createUserRes.password, endpoint));

        await client2.index.add({ keywords, identifier });
        for (let keyword of keywords) {
            let res = await client2.index.search({ keyword });
            expect(res.identifiers).toContain(identifier);
        }
    })
    it("should be able to delete keywords in index", async () => {
        const keywords = ["deletekeyword1", "deletekeyword2"];
        const identifier = "id2";
        let createUserRes = await client.authn.createUser({ scopes: [d1.scopes.Scope.INDEX] });
        let client2 = new D1GenericClient(endpoint, new UsernamePasswordCredentials(createUserRes.userId, createUserRes.password, endpoint));

        await client2.index.add({ keywords, identifier });
        await client2.index.delete({ keywords, identifier });
        for (let keyword of keywords) {
            let res = await client2.index.search({ keyword });
            expect(res.identifiers).toEqual([]);
        }
    })
})