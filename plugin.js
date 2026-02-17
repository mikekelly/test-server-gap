var plugin = {
    name: "test-server-gap",
    matchPatterns: ["127.0.0.1"],
    credentialSchema: ["test_token"],
    transform: function(request, credentials) {
        request.headers["X-Test-Credential"] = credentials.test_token;
        return request;
    }
};
