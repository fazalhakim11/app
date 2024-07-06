"use strict";

const {
  user,
  book,
  author,
  book_author,
  order,
  order_detail,
} = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await order_detail.destroy({ truncate: true });
    await order.destroy({ truncate: true });
    await book_author.destroy({ truncate: true });
    await author.destroy({ truncate: true });
    await book.destroy({ truncate: true });
    await user.destroy({ truncate: true });

    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "John Doe",
        email: "test@example.com",
        shipping_address: "Jember, Jawa Timur, Indonesia",
        password:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu",
      },
    ]);
    await queryInterface.bulkInsert("books", [
      { id: 1, isbn: "1234567801", title: "Book 1", price: 10000 },
      { id: 2, isbn: "1234567802", title: "Book 2", price: 20000 },
      { id: 3, isbn: "1234567803", title: "Book 3", price: 30000 },
      { id: 4, isbn: "1234567804", title: "Book 4", price: 40000 },
      { id: 5, isbn: "1234567805", title: "Book 5", price: 50000 },
      { id: 6, isbn: "1234567806", title: "Book 6", price: 60000 },
      { id: 7, isbn: "1234567807", title: "Book 7", price: 70000 },
      { id: 8, isbn: "1234567808", title: "Book 8", price: 80000 },
      { id: 9, isbn: "1234567809", title: "Book 9", price: 90000 },
      { id: 10, isbn: "1234567810", title: "Book 10", price: 100000 },
      { id: 11, isbn: "1234567811", title: "Book 11", price: 110000 },
      { id: 12, isbn: "1234567812", title: "Book 12", price: 120000 },
      { id: 13, isbn: "1234567813", title: "Book 13", price: 130000 },
      { id: 14, isbn: "1234567814", title: "Book 14", price: 140000 },
      { id: 15, isbn: "1234567815", title: "Book 15", price: 150000 },
      { id: 16, isbn: "1234567816", title: "Book 16", price: 160000 },
      { id: 17, isbn: "1234567817", title: "Book 17", price: 170000 },
      { id: 18, isbn: "1234567818", title: "Book 18", price: 180000 },
      { id: 19, isbn: "1234567819", title: "Book 19", price: 190000 },
      { id: 20, isbn: "1234567820", title: "Book 20", price: 200000 },
      { id: 21, isbn: "1234567821", title: "Book 21", price: 210000 },
      { id: 22, isbn: "1234567822", title: "Book 22", price: 220000 },
      { id: 23, isbn: "1234567823", title: "Book 23", price: 230000 },
      { id: 24, isbn: "1234567824", title: "Book 24", price: 240000 },
      { id: 25, isbn: "1234567825", title: "Book 25", price: 250000 },
      { id: 26, isbn: "1234567826", title: "Book 26", price: 260000 },
      { id: 27, isbn: "1234567827", title: "Book 27", price: 270000 },
      { id: 28, isbn: "1234567828", title: "Book 28", price: 280000 },
      { id: 29, isbn: "1234567829", title: "Book 29", price: 290000 },
      { id: 30, isbn: "1234567830", title: "Book 30", price: 300000 },
    ]);
    await queryInterface.bulkInsert("authors", [
      { id: 1, name: "Author 1", biography: "Biography 1" },
      { id: 2, name: "Author 2", biography: "Biography 2" },
      { id: 3, name: "Author 3", biography: "Biography 3" },
      { id: 4, name: "Author 4", biography: "Biography 4" },
      { id: 5, name: "Author 5", biography: "Biography 5" },
    ]);
    await queryInterface.bulkInsert("book_authors", [
      { book_id: 1, author_id: 1 },
      { book_id: 1, author_id: 2 },
      { book_id: 1, author_id: 3 },
      { book_id: 2, author_id: 2 },
      { book_id: 2, author_id: 4 },
      { book_id: 3, author_id: 1 },
      { book_id: 3, author_id: 3 },
      { book_id: 4, author_id: 4 },
      { book_id: 5, author_id: 5 },
      { book_id: 6, author_id: 1 },
      { book_id: 7, author_id: 2 },
      { book_id: 8, author_id: 3 },
      { book_id: 9, author_id: 4 },
      { book_id: 10, author_id: 5 },
      { book_id: 11, author_id: 1 },
      { book_id: 12, author_id: 2 },
      { book_id: 13, author_id: 3 },
      { book_id: 14, author_id: 4 },
      { book_id: 15, author_id: 5 },
      { book_id: 16, author_id: 1 },
      { book_id: 17, author_id: 2 },
      { book_id: 18, author_id: 3 },
      { book_id: 19, author_id: 4 },
      { book_id: 20, author_id: 5 },
      { book_id: 21, author_id: 1 },
      { book_id: 22, author_id: 2 },
      { book_id: 23, author_id: 3 },
      { book_id: 24, author_id: 4 },
      { book_id: 25, author_id: 5 },
      { book_id: 26, author_id: 1 },
      { book_id: 27, author_id: 2 },
      { book_id: 28, author_id: 3 },
      { book_id: 29, author_id: 4 },
      { book_id: 30, author_id: 5 },
    ]);
    await queryInterface.bulkInsert("orders", [
      {
        id: 1,
        customer_id: 1,
        order_date: new Date(),
        shipping_address: "Jember, Jawa Timur, Indonesia",
        total: 50000,
      },
      {
        id: 2,
        customer_id: 1,
        order_date: new Date(),
        shipping_address: "Jember, Jawa Timur, Indonesia",
        total: 250000,
      },
    ]);
    await queryInterface.bulkInsert("order_details", [
      { order_id: 1, book_id: 1, quantity: 1, price: 10000, subtotal: 10000 },
      { order_id: 1, book_id: 2, quantity: 2, price: 20000, subtotal: 40000 },
      { order_id: 2, book_id: 3, quantity: 3, price: 30000, subtotal: 90000 },
      { order_id: 2, book_id: 4, quantity: 4, price: 40000, subtotal: 160000 },
    ]);
  },
  /**
   * @param {import('sequelize').QueryInterface} _queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async down(_queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};