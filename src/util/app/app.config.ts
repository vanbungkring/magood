import * as dotenv from 'dotenv';
dotenv.config();
let path;

switch (process.env.NODE_ENV) {
case 'test':
// tslint:disable-next-line: indent
	path = `${__dirname}/../../../config/.env.test`;
// tslint:disable-next-line: indent
	break;
case 'production':
// tslint:disable-next-line: indent
	path = `${__dirname}/../../../config/.env.production`;
// tslint:disable-next-line: indent
	break;
case 'development':
// tslint:disable-next-line: indent
	path = `${__dirname}/../../../config/.env.development`;
// tslint:disable-next-line: indent
	break;
default:
// tslint:disable-next-line: indent
	path = `${__dirname}/../../../.env`;
}
const env = dotenv.config({ path });
export const CONFIG = env.parsed;
