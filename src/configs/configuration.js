const configuration = {
  MONGO_DATABASE_CONFIGS: {
    USER: `${process.env.MONGO_DB_USER}`,
    PASS: `${process.env.MONGO_DB_PASS}`,
    DB_NAME: `${process.env.MONGO_DB_NAME}`,
    HOST: `mongodb+srv://${this.USER}:${this.PASS}@cluster0.jhzfs.mongodb.net/${this.DB_NAME}?retryWrites=true&w=majority`,
    USER_OPTIONS:{
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};

module.exports = configuration;