var plugin = {
    name: "test-server-gap",
    matchPatterns: ["localhost"],
    credentialSchema: {
        fields: [
            { name: "test_credential_one", label: "Test Credential One", type: "password", required: true },
            { name: "test_credential_two", label: "Test Credential Two", type: "password", required: true }
        ]
    },
    transform: function(request, credentials) {
        request.headers["X-Test-Credential-One"] = credentials.test_credential_one;
        request.headers["X-Test-Credential-Two"] = credentials.test_credential_two;
        return request;
    }
};
