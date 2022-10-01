const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('demo1', 'root', null , {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
       await sequelize.authenticate()
       console.log('Connection DB successfully') 
    } catch(error) {
        console('Eroor:', error)
    }
}

module.exports = connectDB