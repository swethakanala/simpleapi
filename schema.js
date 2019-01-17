const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const userSchema = new Schema({
  firstname:{
    type:String
  },
  lastname:{
    type: String
  },
  role:{
    type:String
  }
})

module.exports=mongoose.model('User',userSchema);
