//user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
      mobile: {
        type: String,
        required: true,
        unique: true
      },
      gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
      },
      dob: {
        type: Date,
        required: true
      },
      qualification: {
        type: String,
        required: true
      },
      school_clz: {
        type: String,
        required: true
      },
      specialization: {
        type: String
      },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Hash the password before saving to the database
 userSchema.pre('save', function (next) {
     const user = this;
    if (!user.isModified('password') && !user.isModified('confirmpassword')) {
         return next();
    }
     bcrypt.genSalt(10, function (err, salt) {
         if (err) {
             return next(err);
         }
     bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                 return next(err);
             }
            user.password = hash;
            bcrypt.hash(user.confirmpassword, salt, function (err, hash) {
                if (err) {
                  return next(err);
                }
                user.confirmpassword = hash;
            next();
         });
        })
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;