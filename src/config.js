const config = {
    STRIPE_KEY: "pk_test_51HjzdiJ5PpiL9fg2rgy4DcAzrZQYN8Z3oe5S7Fp6ox7O0TpCxXO2vXW0MAo5TbRbwilCKWxTqR5ut9VgHbwFZRoF00xvHyLeIX",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-2",
        BUCKET: "my.notes.app.bucket",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://2idtix9fl2.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_dnaHlUjke",
        APP_CLIENT_ID: "eg9bkrk1dpl5m4imofuprhut2",
        IDENTITY_POOL_ID: "us-east-2:3c1f559e-b39a-4c6c-ad9e-297cd57f9570",
    },
};

export default config;