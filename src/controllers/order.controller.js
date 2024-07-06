const { or, where } = require("sequelize")
const {order: orderModel, order_detail: orderDetailModel } = require("../models")

const index = async (req, res, next)=>{
    const orders = await orderModel.findAll({
        where: {
            customer_id: req.user.id
        }
    })

    return res.send({
        message: "Success",
        data: orders.map((order)=>{
            return {
                id: order.id,
                customer_id: order.customer_id,
                order_date: order.order_date,
                shipping_address: order.shipping_address,
                total: parseFloat(order.total)
            }
        })
    })
}

const create = async (req, res, next)=>{
    const {items} = req.body

    const orderData= {
        customer_id: req.user.id,
        shipping_address: req.user.shipping_address,
        order_date: new Date(),
        total: 0
    }

    const order = await orderModel.create(orderData)

    const orderDetailsData = items.map(item => {
        return {
            order_id: order.id,
            book_id: item.book_id,
            quantity: item.quantity,
            price: item.price
        }
    })
    await orderDetailModel.bulkCreate(orderDetailsData)
    return res.send({
        message: "Order Created"
    })
}

module.exports = {index, create}