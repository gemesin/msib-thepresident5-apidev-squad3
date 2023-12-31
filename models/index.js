const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        port: dbConfig.PORT,
        define: {
            timestamps: false,
            freezeTableName: true
        },
        logging: false
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userModel = require('./user.model')(sequelize, Sequelize);
db.Weather = require('./weather.model')(sequelize, Sequelize);
db.Artikel = require('./artikel.model.js')(sequelize, Sequelize);
db.Modul = require('./modul.model.js')(sequelize, Sequelize);
db.ForumModel = require('./forum.model')(sequelize, Sequelize);
db.commentModel = require('./comment.model')(sequelize, Sequelize);
db.Likes = require('./likes.model')(sequelize, Sequelize);
 


module.exports = db;
