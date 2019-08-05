const mongoose = require('mongoose');
const Discord = require('discord.js');

// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname, details set
const url = "mongodb+srv://dbUser:OWk1oBapNkvNcsp1@cluster0-x6p65.mongodb.net/test?retryWrites=true&w=majority";

var UserSchema = new mongoose.Schema({
    id: Number,
    purchased: Array
});

var User = mongoose.model('UserData', UserSchema);

mongoose.connect(url, {useNewUrlParser: true},(err, res)=>{
  if(err) throw(err);
  console.log('DB connection succesful');
});


module.exports.run = async(bot, user) => {
    var query = User.find({ id: `${user.id}`});
    var promise = query.exec();
    promise.then((value) => {
        console.log(value);
        if (array.length == 0) {
            new User({ id: `${user.id}`, purchased: [] });
            console.log("New user created with userid " + user.id);
        }
    }).catch((err) => {console.log(err)});
}
