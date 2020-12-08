const config = {
    STRIPE_KEY: "pk_test_51HjzdiJ5PpiL9fg2rgy4DcAzrZQYN8Z3oe5S7Fp6ox7O0TpCxXO2vXW0MAo5TbRbwilCKWxTqR5ut9VgHbwFZRoF00xvHyLeIX",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "my.note.app.uploads",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://ogyd46wv0f.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_YrhZZ3hPQ",
        APP_CLIENT_ID: "5a3dlm3jcokp31ehldn9ddjo55",
        IDENTITY_POOL_ID: "us-east-2:d6500249-bcf4-42ab-b97c-52d92221ea49",
    },
};

export default config;