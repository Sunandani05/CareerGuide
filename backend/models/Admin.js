// admin.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Hash the password before saving to the database
adminSchema.pre('save', function (next) {
    const admin = this;

    // Only hash the password if it has been modified or is new
    if (!admin.isModified('password')) {
        return next();
    }

    // Generate a salt and hash the password
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }

        bcrypt.hash(admin.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }

            // Replace the plaintext password with the hashed password
            admin.password = hash;
            next();
        });
    });
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;