/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    schema: true,

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        nickname: {
            type: 'string',
            required: true
            // unique: true
        },
        email: {
          type: 'email',
          required: true
          // unique: true
        },
        yearOfBirth: {
          type: 'integer'
        },
        //gender
        encryptedPassword: {
          type: 'string'
        },
        profileImage: {
            model: 'profileImage'
        },

        toJSON: function(){
          var obj = this.toObject();
          delete obj.encryptedPassword;
          delete obj.password;
          delete obj.passwordConfirmation;
          delete obj._csrf;
          return obj;
        }

    },
    beforeCreate: function(values, next){
        if (!values.password || values.password != values.passwordConfirmation){
            return next({err: ["Password doesnt match confirmation."]});
        }
        require('bcryptjs').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword){
            if (err) {
                next(err);
            }
            console.log('Encrypted password: ' + encryptedPassword);
            values.encryptedPassword = encryptedPassword;
            // values.online = true;
            next();
        });
    }
};

