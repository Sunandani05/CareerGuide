const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpertSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique:true
  },
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Expert = mongoose.model('Expert', ExpertSchema);

module.exports = Expert;


