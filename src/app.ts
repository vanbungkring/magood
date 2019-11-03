import express from 'express';
import mongoose from 'mongoose';
import AppUse from './util/app/app.use';
import { CONFIG } from './util/App/App.config';
import Controller from './interface/controller.interface';
import { logger } from './util/App/App.logger';
import MongoSingleton from './util/storage/mongo.singeleton';
class App {
  /// initialized what application need
  public app: express.Application;
  private usable: AppUse;
  private mongoSingleton: MongoSingleton;
  /// declaring navigation here
  constructor(apiControllers: Controller[], webcontroller: Controller[]) {
    this.app = express();
    this.usable = new AppUse(this.app);
    this.mongoSingleton = new MongoSingleton(CONFIG.DB_URL);
    this.storageMongoConnection();
    this.initializedWebController(webcontroller);
    this.initializedControllerAPIController(apiControllers);

  }
  public listen() {
    this.app.listen(CONFIG.PORT, () => {
        logger.info(`run on ${CONFIG.APP_ENV}`);
        // tslint:disable-next-line: indent
      	 logger.info(`Server Started! Express: http://localhost:${CONFIG.PORT}`);
     });
  }
  private initializedControllerAPIController(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/api/v1/', controller.router);
    });
  }
  // tslint:disable-next-line: no-empty
  private initializedWebController(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/web/', controller.router);
    });
  }
  storageMongoConnection() {
    this.mongoSingleton.connect();
  }
  public getServer() {
    return this.app;
  }
}

export default App;
