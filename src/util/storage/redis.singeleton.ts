
import connectRedis from 'connect-redis';
import session from 'express-session';
const RedisStore = connectRedis(session);

class RedisSingleton {
    constructor() {
        this.initSession();
    }
    // tslint:disable-next-line: aling
    // tslint:disable-next-line: no-empty
    initSession() {
        return session({
            secret: 'secret',
            store: new RedisStore({host: '127.0.0.1', port: 6379}),
            resave: false,
            saveUninitialized: false,
        });
    }
}
export default RedisSingleton;
