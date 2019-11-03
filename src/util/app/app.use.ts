import { Application, Express } from 'express';
import errorHandler from 'errorhandler';
import bodyParser from 'body-parser';

class AppUse {
    constructor(private app: Application) {
        this.setup();
    }
    private setup() {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(errorHandler());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
}
export default AppUse;
