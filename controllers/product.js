const Product = require('../models/product')

exports.createProducts = async (req, res) => {
    try {

        const products = req.body;

        if (!Array.isArray(products)){
            return res.status(400).json({ message: 'Invalid input: Expected an array of products' });
        }
        const validatedProducts = products.map(product => ({
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            stock: product.stock
        }));

        console.log(validatedProducts, 'iiiii')

        // Insert multiple products at once using insertMany
        const result = await Product.insertMany(validatedProducts);
        res.status(201).json({ message: ` ${result.length} Products created successfully` });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(400).json({ message: 'Error creating product', error: err.message });
    }
}


exports.getAllProducts = async (req, res) => {
    try {
      // Get the sorting option from the query params (default to 'asc' for low to high)
      const { sortBy } = req.query; // 'asc' for low to high, 'desc' for high to low
  
      // Build the sort object based on the provided sortBy value
      let sortOrder = {};
      if (sortBy === 'lth') { // Low to High
        sortOrder = { price: 1 }; // 1 for ascending order
      } else if (sortBy === 'htl') { // High to Low
        sortOrder = { price: -1 }; // -1 for descending order
      } else {
        sortOrder = { price: 1 }; // Default to low to high
      }
  
      // Fetch the products and apply sorting
      const products = await Product.find().sort(sortOrder);
      
      res.status(200).json({ products });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

  exports.getProductDetails = async( req, res) => {
    try {
        const { productId } = req.params;

        const productDetail = await Product.findById(productId);

        if (!productDetail) {
            return res.status(404).json({ message: 'product not found'})
        }

        res.status(200).json({ message: "Product found"})
    } catch (error) {
        res.status(400).json({ message: error.message });
      }
  }