const baseUrl =
  process.env.NODE_ENV == "development"
    ? "http://localhost:5000"
    : "http://localhost:5000";
export default baseUrl;

// const baseUrl =
//   process.env.NODE_ENV == "development"
//     ? "https://life-staking-bridge.herokuapp.com"
//     : "https://life-staking-bridge.herokuapp.com";
// export default baseUrl;

// const baseUrl =
//   process.env.NODE_ENV == "development"
//     ? "http://localhost:8080"
//     : "http://localhost:8080";
// export default baseUrl;
