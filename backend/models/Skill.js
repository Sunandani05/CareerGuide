const mongoose = require('mongoose');


const skillSchema = new mongoose.Schema({
   
        name: {
          type: String,
          required: true
        },
        skills: {
          type: [{
            name: {
              type: String,
              required: true
            }
          }],
          
        }
      }, { timestamps: true });
      
      
      const Skill = mongoose.model('skill', skillSchema);

      module.exports = Skill;