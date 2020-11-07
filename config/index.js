const config = require('./config');

module.exports = {
    databaseUri: function(){
        return `mongodb+srv://${config.username}:${config.password}@cluster0.ayprn.mongodb.net/${config.database}?retryWrites=true&w=majority`;
    }
}