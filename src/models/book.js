'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      book.belongsToMany(models.author, {
        through: models.book_author,
        foreignKey: "book_id",
        as: "authors"
      })
      book.hasMany(models.order_detail, {
        foreignKey: "book_id",
        as: "order_details"
      })
    }
  }
  book.init({
    isbn: DataTypes.STRING,
    title: DataTypes.STRING,
    publication_year: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'book',
    underscored: true,
  });
  return book;
};