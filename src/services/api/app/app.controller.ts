import Controller from '../../../interface/controller.interface';
import express from 'express';
import HttpOutput from '../../../util/common/httpOutput';
import { Status } from '../../../util/common/status';
class AppController implements Controller {
    public path = '/app';
    public router =  express.Router();
    constructor() {
        this.initializedRouters();
    }
    private initializedRouters() {
        this.router.get(`${this.path}/healthcheck`, this.healthCheck);
        this.router.get(`${this.path}/ping`, this.ping);
    }

    private ping = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(200).send(new HttpOutput(Status.success, 'PONG'));
    }

    private healthCheck = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(200).send(new HttpOutput(Status.success, 'HEALTCHECK'));
    }

}
export default AppController;
