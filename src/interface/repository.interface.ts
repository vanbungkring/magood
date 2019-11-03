import { MongooseDocument } from 'mongoose';
import mongoose from 'mongoose';

interface Repository {
    model: mongoose.Model<mongoose.Document>;
    delete(data?: any): Promise<any>;
    findall(data?: any, params?: any, skip?: number, limit?: number): Promise<any>;
    findById(id: string, params?: any): Promise<any>;
    findByIdAndUpdate(id: string, params?: any): Promise<any>;
    findOneAndUpdate(id: string, params?: any): Promise<any>;
    create(data: any): Promise<any>;
    createMany(data: any): Promise<any>;
    findOne(data?: any, params?: any, skip?: number, limit?: number): Promise<any>;
}
export default Repository;
