



const Product = require('../../models/Product');

const searchProducts = async(req, res) => {
    try {
        // Support both params and query parameters
        const keyword = req.params.keyword || req.query.keyword;
        
        if(!keyword || typeof keyword !== 'string'){
            return res.status(400).json({
                success: false,
                message: "Keyword is required and must be in string format"
            });
        }
        
        const regEx = new RegExp(keyword, 'i');
        const createSearchQuery = {
            $or: [
                {title: regEx},
                {description: regEx},
                {category: regEx},
                {brand: regEx}
            ]
        };
        
        const searchResults = await Product.find(createSearchQuery);
        
        res.status(200).json({
            success: true,
            data: searchResults
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server error while searching products'
        });
    }
};

module.exports = {searchProducts};