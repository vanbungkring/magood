import mongoose from 'mongoose';
class MongoSingleton {
  private dbUrl: string;
    constructor(url: string) {
      this.dbUrl = url;
    }
    connect() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.dbUrl, {
          useNewUrlParser: true,
        });
    }
}

export default MongoSingleton;
