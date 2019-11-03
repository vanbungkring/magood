
interface IUser {
    // tslint:disable-next-line: variable-name
    _id: string;
    email: string;
    name: string;
    password: string;
    twoFactorAuthenticationCode?: string;
    isTwoFactorAuthenticationEnabled?: boolean;

  }
export default IUser;
