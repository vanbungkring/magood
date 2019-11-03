import mongoose from 'mongoose';
import IUser from '../interface/user.interface';
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    twoFactorAuthenticationCode: String,
    isTwoFactorAuthenticationEnabled: Boolean,
  });

const MUser = mongoose.model<IUser & mongoose.Document>('User', userSchema);
export default MUser;
