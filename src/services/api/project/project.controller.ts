import Controller from '../../../interface/controller.interface';
import express from 'express';
import QueryProxy from '../../../models/queryProxy';
import MProject from '../../../models/project.model';
import HttpOutput from '../../../util/common/httpOutput';
import {Status} from '../../../util/common/status';
import _ from 'lodash';
class ProjectController implements Controller {
    public path = '/project';
    public router = express.Router();
    private queryProxy: QueryProxy;
    constructor() {
        this.queryProxy = new QueryProxy(MProject);
        this.initializedRouter();
    }

    private initializedRouter() {
        this.router.get(`${this.path}/all`, this.all);
        this.router.post(`${this.path}/create`, this.create);
    }

    private all =  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        this.queryProxy.findall({}, {}, null, null).then((data: any) => {
             return res.status(200).send(new HttpOutput(Status.success, data));
         }).catch((error: any) => {
             return res.status(500).send(new HttpOutput(Status.error, error));
         });
    }

    private create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const transformRequest: any = _.mapKeys(req.body, (v: any, k: any) => _.camelCase(k));
        this.queryProxy.create(transformRequest).then((data: any) => {
            return res.status(200).send(new HttpOutput(Status.success, data));
        }).catch((error: any) => {
            return res.status(500).send(new HttpOutput(Status.error, error));
        });
    }
}
export default ProjectController;
