'use strict';
module.exports = function(sequelize, DataTypes) {
  var EmailList = sequelize.define('EmailList', {
    email: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return EmailList;
};