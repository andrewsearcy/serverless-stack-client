const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "my.note.app.uploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: " https://ogyd46wv0f.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_YrhZZ3hPQ",
    APP_CLIENT_ID: "5a3dlm3jcokp31ehldn9ddjo55",
    IDENTITY_POOL_ID: "andrews-notes-user-pool",
  },
};

export default config;
