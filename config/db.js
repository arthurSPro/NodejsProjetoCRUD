if (process.env.NODE_ENV == "production") {
    module.exports = { mongoURI: "mongodb+srv://newUser:762556@cluster0.v7ih4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" }
} else {
    module.exports = { mongoURI: "mongodb://localhost/blogapp" }
}
