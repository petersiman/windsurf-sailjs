/**
* Image.js
*
* @description :: Image model - represents the uploaded image.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      id: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true
      },
      fileName: {
          type: 'string',
          defaultsTo: 'unknown.jpg'
      },
      imageDate: {
          type: 'binary'
      },
      type: {
          type: 'string',
          defaultsTo: 'jpg'
      },
      advert: {
          model: 'advert'
      }

  }
};

