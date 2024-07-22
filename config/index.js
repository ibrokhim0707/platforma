const { env } = process;

const config = {
  port: +env.PORT || 7700,
  jwtSecretKey: env.JWT_SECRET_KEY,
  jwtExpiresIn: env.JWT_EXPIRES_IN,
  mongoUri: env.MONGO_URI,
};

module.exports = config;
