import mongoose from 'mongoose';
import IProject from '../interface/project.interface';

const schema = new mongoose.Schema({
    name: String,
    id: Number,
    description: String,
    webUrl: String,
    avatarUrl: String,
    gitSSHUrl: String,
    gitHTTPUrl: String,
    namespace: String,
    visibilityLevel: Number,
    pathWithNamespace: String,
    defaultBranch: String,
    ciConfigPath: String,
    homepage: String,
    url: String,
    sshUrl: String,
    httpUrl: String,
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
});

const MProject = mongoose.model<IProject & mongoose.Document>('Project', schema);
export default MProject;
