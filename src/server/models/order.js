export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id : {
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : DataTypes.INTEGER,
    },
    articleId : {
      type : DataTypes.INTEGER,
    },
    nom : {
      type : DataTypes.TEXT,
    },
    quantite : {
      type : DataTypes.INTEGER,
    },
    prixUnitaire : {
      type : DataTypes.REAL,
    },
    userId : {
      type : DataTypes.INTEGER,
    },
  });
  return Order;
};
