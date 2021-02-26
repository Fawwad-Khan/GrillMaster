const appVersion = '0.0.1';
const __DEV__ = true;

const config = {
    auth_key: null,
    api: 'http://localhost:3000',
};

const log = (...msgs) => {
    let header = 'Dev-Log: ';
    __DEV__ && console.log(header, ...msgs);
};

export {
    config,
    appVersion,
    log,
};