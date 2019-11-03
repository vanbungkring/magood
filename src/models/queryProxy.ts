import mongoose from 'mongoose';
import Repository from '../interface/repository.interface';

class QueryProxy implements Repository {

    public model: mongoose.Model<mongoose.Document>;

    constructor(modelName: mongoose.Model<mongoose.Document>) {
        this.model = modelName;
    }

    public async delete(data?: any): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = this.model
                .remove(data);
            query.exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        return promise;
    }
    public async findById(id: string, params?: any): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = this.model
                .findById(id)
                .populate(params.populate ? params.populate : '')
                .maxTimeMS(300000)
                .select(params.filter ? params.filter : '');
            query.setOptions({
                lean: params.lean ? params.lean : false,
            });
            query.exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        return promise;
    }
    findByIdAndUpdate(id: string, params?: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    findOneAndUpdate(id: string, params?: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    create(data: any): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = new this.model(data);
            query.save((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        return promise;
    }

    createMany(data: any): Promise<any> {
        throw new Error('Method not implemented.');
    }

    public async findOne(data?: any, params?: any, skip?: number, limit?: number): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = this.model.findOne(data)
                .populate(params.populate ? params.populate : '')
                .select(params.selected ? params.selected : '');

            query.setOptions({
                lean: params.lean ? params.lean : false,
            });
            query.exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        return promise;
    }
    public async findall(data?: any, params?: any, skip?: number, limit?: number): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = this.model.find(data)
                .sort(params.sort ? params.sort : '')
                .limit(limit ? limit : 1000)
                .skip(skip ? skip : 0)
                .populate(params.populate ? params.populate : '')
                .select(params.selected ? params.selected : '');

            query.setOptions({
                lean: params.lean ? params.lean : false,
            });
            query.exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        return promise;
    }

}
export default QueryProxy;
