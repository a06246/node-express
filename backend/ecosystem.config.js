module.exports = {
  apps: [
    {
      name: "chatapp-backend",
      script: "index.js",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 5000,
        MONGODB_URI: "mongodb+srv://a06246:<db_password>@cluster0.dcznecx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        CORS_ORIGIN: "http://your-ec2-public-ip"
      },
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "500M"
    }
  ]
};
