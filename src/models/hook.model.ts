import mongoose from 'mongoose';
import IHook from '../interface/hook.interface';

const schema = new mongoose.Schema({
    name: String,
    data: mongoose.Schema.Types.Mixed,
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
});
const MHook = mongoose.model<IHook & mongoose.Document>('Hook', schema);
export default MHook;
