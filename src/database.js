const { Sequelize } = require('sequelize');
const DB_CONN = process.env.DB_CONN;
const DB_NAME = process.env.DB_NAME;
const BD_USER = process.env.BD_USER;
const DB_PASS = process.env.DB_PASS;

const sequelize = new Sequelize (DB_NAME,BD_USER,DB_PASS, 
    {
        host: DB_CONN,
        dialect: 'mysql',
        port: 3306,
        logging: false
    }
);

const testConnection = async () => {
    try
    {
        await sequelize.authenticate();
        console.log('✅ Conexión a la base de datos establecida con éxito.');
    }
    catch (error)
    {
        console.error('❌ Error al conectar a la base de datos:', error);
    }
};

testConnection();

module.exports = sequelize;