const productRouter = require('../routes/product/product')

module.exports = function (app) {

    app.use((req, res, next) => {
        console.log(`Received request: ${req.method} ${req.originalUrl}`);
        next(); // Continue to the next middleware or route handler
    });

    
    app.get('/', (req, res) => {
        return res.send('Welcome')
    })
    
    app.use('/api/v1/product',productRouter );
    

    app.use('*', (req, res) => {
        return res.status(404).send({ message: "The route you are looking for doesn't exist." })
    })
}