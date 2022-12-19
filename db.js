const Sequelize = require('sequelize');
const sequelize = new Sequelize("produto", "root", "12345678", {
    host: "localhost",
    dialect: 'mysql'
});


sequelize.authenticate().then(function() {
    console.log("Conectado")
}).catch(function(error) {
    console.log("Erro ao se conectar: " + error)
});