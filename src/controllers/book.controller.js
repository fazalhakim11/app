const {book: bookModel} = require("../models")

const index = async (req, res, next)=>{
    const books = await bookModel.findAll({
        attributes: {
            include: [
                [
                    bookModel.sequelize.literal(
                        `(SELECT SUM(quantity) FROM order_details WHERE order_details.book_id = book.id)`
                    ),
                    "sold"
                ]
            ]
        },
        include: [
            {
                association: "authors",
                attributes: ["name"],
                through: {attributes: []}
            }
        ],
        order: [[bookModel.sequelize.literal("price"), "DESC"]]
    })

    return res.send({
        message: "Success",
        data: books.map((book)=>{
            const authors = book.authors.map((author)=> author.name).join(", ")

            return {
                id: book.id,
                isbn: book.isbn,
                title: book.title,
                price: parseFloat(book.price),
                sold: parseInt(book.get("sold")),
                authors
            }
        })
    })
}

module.exports = {index}