const Product = require("../../models/Product");

const getFilteredProducts = async (req, res) => {
  try {

    const { category = "", brand = "", sortBy = "price-lowtohigh" } = req.query;

    let filters = {};

    if (category.length) {
      filters.category = { $in: category.split(",") };
    }

    if (brand.length) {
      filters.brand = { $in: brand.split(",") };
    }

    let sort = {};
    switch (sortBy) {
      case "price-lowtohigh":
        sort.price = 1;
        break;
      case "price-hightolow":
        sort.price = -1;
        break;
      case "title-atoz":
        sort.title = 1;
        break;
      case "title-ztoa":
        sort.title = -1;
        break;
      default:
        sort.price = 1;
        break;
    }

    const products = await Product.find(filters).sort(sort);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (e) {
    console.error("Error in getProductDetails:", e); 
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

module.exports = { getFilteredProducts, getProductDetails };






// const Product = require('../../models/Product')

// const getFilteredProducts = async(req,res)=>{
//     try{

//         const products = await Product.find({})

//         res.status(200).json({
//             sucess:true,
//             data: products
//         })
       
//     }catch(e){
//         console.log(error);
//         res.status(500).json({
//             sucess:false,
//             message:'some error occured'

//         })
//     }
// }


// module.exports = {getFilteredProducts}





// const Product = require("../../models/Product");

// const getFilteredProducts = async (req, res) => {
//   try {
//     const { category = [], brand = [], sortBy = "price-lowtohigh" } = req.query;

//     let filters = {};

//     if (category.length) {
//       filters.category = { $in: category.split(",") };
//     }

//     if (brand.length) {
//       filters.brand = { $in: brand.split(",") };
//     }

//     let sort = {};

//     switch (sortBy) {
//       case "price-lowtohigh":
//         sort.price = 1;

//         break;
//       case "price-hightolow":
//         sort.price = -1;

//         break;
//       case "title-atoz":
//         sort.title = 1;

//         break;

//       case "title-ztoa":
//         sort.title = -1;

//         break;

//       default:
//         sort.price = 1;
//         break;
//     }

//     const products = await Product.find(filters).sort(sort);

//     res.status(200).json({
//       success: true,
//       data: products,
//     });
//   } catch (e) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured",
//     });
//   }
// };

// const getProductDetails = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);

//     if (!product)
//       return res.status(404).json({
//         success: false,
//         message: "Product not found!",
//       });

//     res.status(200).json({
//       success: true,
//       data: product,
//     });
//   } catch (e) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured",
//     });
//   }
// };

// module.exports = { getFilteredProducts, getProductDetails };













// const Product = require("../../models/Product");

// const getFilteredProducts = async (req, res) => {
//   try {
//     const { category = [], brand = [], sortBy = "price-lowtohigh" } = req.query;

//     let filters = {};

//     if (category.length) {
//       filters.category = { $in: category.split(",") };
//     }

//     if (brand.length) {
//       filters.brand = { $in: brand.split(",") };
//     }

//     let sort = {};

//     switch (sortBy) {
//       case "price-lowtohigh":
//         sort.price = 1;
//         break;
//       case "price-hightolow":
//         sort.price = -1;
//         break;
//       case "title-atoz":
//         sort.title = 1;
//         break;
//       case "title-ztoa":
//         sort.title = -1;
//         break;
//       default:
//         sort.price = 1;
//         break;
//     }

//     const products = await Product.find(filters).sort(sort);

//     res.status(200).json({
//       success: true,
//       data: products,
//     });
//   } catch (e) {
//     console.log(e); // Fixed the variable name from 'error' to 'e'
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred",
//     });
//   }
// };

// const getProductDetails = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);

//     if (!product)
//       return res.status(404).json({
//         success: false,
//         message: "Product not found!",
//       });

//     res.status(200).json({
//       success: true,
//       data: product,
//     });
//   } catch (e) {
//     console.log(e); // Fixed the variable name from 'error' to 'e'
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred",
//     });
//   }
// };

// module.exports = { getFilteredProducts, getProductDetails };











// const Product = require("../../models/Product");
// const mongoose = require("mongoose");

// const getFilteredProducts = async (req, res) => {
//   try {
//     const { category = "", brand = "", sortBy = "price-lowtohigh" } = req.query;

//     let filters = {};

//     if (category && category.trim().length) {
//       filters.category = { $in: category.split(",") };
//     }

//     if (brand && brand.trim().length) {
//       filters.brand = { $in: brand.split(",") };
//     }

//     let sort = {};
//     const validSortOptions = [
//       "price-lowtohigh",
//       "price-hightolow",
//       "title-atoz",
//       "title-ztoa",
//     ];

//     let sortingKey = sortBy;
//     if (!validSortOptions.includes(sortBy)) {
//       sortingKey = "price-lowtohigh";
//     }

//     switch (sortingKey) {
//       case "price-lowtohigh":
//         sort.price = 1;
//         break;
//       case "price-hightolow":
//         sort.price = -1;
//         break;
//       case "title-atoz":
//         sort.title = 1;
//         break;
//       case "title-ztoa":
//         sort.title = -1;
//         break;
//     }

//     const products = await Product.find(filters).sort(sort);

//     res.status(200).json({
//       success: true,
//       data: products,
//     });
//   } catch (e) {
//     console.error("Error fetching filtered products:", e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred",
//     });
//   }
// };

// const getProductDetails = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid product ID!",
//       });
//     }

//     const product = await Product.findById(id);

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found!",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: product,
//     });
//   } catch (e) {
//     console.error("Error fetching product details:", e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred",
//     });
//   }
// };

// module.exports = { getFilteredProducts, getProductDetails };









