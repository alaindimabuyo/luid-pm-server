module.exports = {
  apps: [
    {
      name: "project-management",
      script: "npm",
      args: "rundev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
