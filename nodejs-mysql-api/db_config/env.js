const env = {

    database: 'node_blog',
    username: 'root',
    password: 'aaaaaa',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }

};

module.exports = env