module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('Bill', {
    id : {
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : DataTypes.INTEGER,
    },

    date : {
      type : DataTypes.TEXT,
    },
    numCommande : {
      type : DataTypes.INTEGER,
    },
    createdAt : {
      allowNull : false,
      type      : DataTypes.DATE,
    },

    updatedAt : {
      allowNull : false,
      type      : DataTypes.DATE,
    },
  });
  return Bill;
};
