/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      id: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true
      },
      firstName: {
          type: 'string'
      },
      lastName: {
          type: 'string'
      }, 
      nickname: {
          type: 'string',
          required: true
      },
      dateOfBirth: {
          type: 'date'
      }

  }
};

