const jwt = require("jsonwebtoken")

const validateToken = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"] || "";
        if(authHeader.split(" ").length !==2){
            return res.status(401).send({ message: "Input Token"})
        }

        const token = authHeader.split(" ")[1]
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        if (!userData){
            return res.status(401).send({ message: "Invalid Token"})
        }

        req.user = userData

        next()

    } catch (error) {
        if (error.name === "JsonWebTokenError"){
            return res.status(401).send({message: "Invalid"})
        }

        next(err)
    }
}
module.exports = {validateToken}