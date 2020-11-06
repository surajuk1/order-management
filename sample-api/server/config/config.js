
const config = {
  dev: 'development',
  test: 'test',
  prod: 'production',
  port: process.env.PORT || 8000,
  expireTime: '360000',
  secrets: {
    jwt: process.env.JWT || 'usermmmager',
  },
  dbMongoose: process.env.MONGODB, //Mongoose Db
  dbMongooseSSLCert: process.env.MONGODB_CERT,
};

// Setting environment variable
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

module.exports = config;
