const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('hoidanit1', 'root', null , {
    host: '127.0.0.1',
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