'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      book_author.belongsTo(models.book, {
        foreignKey: "book_id",
        as: "book"
      })
      book_author.belongsTo(models.author, {
        foreignKey: "author_id",
        as: "author"
      })
    }
  }
  book_author.init({
    book_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book_author',
    underscored: true,
  });
  return book_author;
};