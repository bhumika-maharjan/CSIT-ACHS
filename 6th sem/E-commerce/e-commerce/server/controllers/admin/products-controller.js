



// const { imageUploadUtils } = require("../../helpers/cloudinary");

// const handleImageUpload = async(req, res) => {
//     try {
//         // Convert file buffer to base64 format for storage
//         const b64 = Buffer.from(req.file.buffer).toString('base64');

//         const url = "data:" + req.file.mimetype + ";base64," + b64;

//         // Call imageUploadUtils to upload the file to Cloudinary
//         const result = await imageUploadUtils(req.file);  // Passing the file directly instead of the URL

//         res.json({
//             success: true,
//             result
//         });

//     } catch (error) {
//         console.log(error);
//         res.json({
//             success: false,
//             message: "Error occurred",
//         });
//     }
// };

// module.exports = { handleImageUpload };




// const { imageUploadUtil } = require("../../helpers/cloudinary");
// const Product = require("../../models/Product");

// const handleImageUpload = async (req, res) => {
//   try {
//     const b64 = Buffer.from(req.file.buffer).toString("base64");
//     const url = "data:" + req.file.mimetype + ";base64," + b64;
//     const result = await imageUploadUtil(url);

//     res.json({
//       success: true,
//       result,
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({
//       success: false,
//       message: "Error occured",
//     });
//   }
// };

// //add a new product
// const addProduct = async (req, res) => {
//   try {
//     const {
//       image,
//       title,
//       description,
//       category,
//       brand,
//       price,
//       salePrice,
//       totalStock,
//       averageReview,
//     } = req.body;

//     console.log(averageReview, "averageReview");

//     const newlyCreatedProduct = new Product({
//       image,
//       title,
//       description,
//       category,
//       brand,
//       price,
//       salePrice,
//       totalStock,
//       averageReview,
//     });

//     await newlyCreatedProduct.save();
//     res.status(201).json({
//       success: true,
//       data: newlyCreatedProduct,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Error occured",
//     });
//   }
// };

// //fetch all products

// const fetchAllProducts = async (req, res) => {
//   try {
//     const listOfProducts = await Product.find({});
//     res.status(200).json({
//       success: true,
//       data: listOfProducts,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Error occured",
//     });
//   }
// };

// //edit a product
// const editProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       image,
//       title,
//       description,
//       category,
//       brand,
//       price,
//       salePrice,
//       totalStock,
//       averageReview,
//     } = req.body;

//     let findProduct = await Product.findById(id);
//     if (!findProduct)
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });

//     findProduct.title = title || findProduct.title;
//     findProduct.description = description || findProduct.description;
//     findProduct.category = category || findProduct.category;
//     findProduct.brand = brand || findProduct.brand;
//     findProduct.price = price === "" ? 0 : price || findProduct.price;
//     findProduct.salePrice =
//       salePrice === "" ? 0 : salePrice || findProduct.salePrice;
//     findProduct.totalStock = totalStock || findProduct.totalStock;
//     findProduct.image = image || findProduct.image;
//     findProduct.averageReview = averageReview || findProduct.averageReview;

//     await findProduct.save();
//     res.status(200).json({
//       success: true,
//       data: findProduct,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Error occured",
//     });
//   }
// };

// //delete a product
// const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product)
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });

//     res.status(200).json({
//       success: true,
//       message: "Product delete successfully",
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Error occured",
//     });
//   }
// };

// module.exports = {
//   handleImageUpload,
//   addProduct,
//   fetchAllProducts,
//   editProduct,
//   deleteProduct,
// };











const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      });
    }
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataUri = `data:${req.file.mimetype};base64,${b64}`;
    const result = await imageUploadUtil(dataUri);

    res.json({ success: true, result });
  } catch (error) {
    console.log("Image upload error:", error);
    res.status(500).json({
      success: false,
      message: "Error occured during image upload",
    });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { image, title, description, category, brand, price, salePrice, totalStock, averageReview } = req.body;

    if (!title || !price) {
      return res.status(400).json({ success: false, message: "Title and Price are required" });
    }

    const newlyCreatedProduct = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    });

    await newlyCreatedProduct.save();
    res.status(201).json({ success: true, data: newlyCreatedProduct });
  } catch (e) {
    console.error("Add Product Error:", e.message);
    res.status(500).json({ success: false, message: "Server Error", error: e.message });
  }
};

// Fetch all products
const fetchAllProducts = async (req, res) => {
  try {
    const listOfProducts = await Product.find({});
    res.status(200).json({ success: true, data: listOfProducts });
  } catch (e) {
    console.error("Fetch Products Error:", e.message);
    res.status(500).json({ success: false, message: "Server Error", error: e.message });
  }
};

// Edit a product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, description, category, brand, price, salePrice, totalStock, averageReview } = req.body;

    let findProduct = await Product.findById(id);
    if (!findProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    findProduct.image = image || findProduct.image;
    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.category = category || findProduct.category;
    findProduct.brand = brand || findProduct.brand;
    findProduct.price = price ?? findProduct.price; // Keep 0 if not provided
    findProduct.salePrice = salePrice ?? findProduct.salePrice;
    findProduct.totalStock = totalStock ?? findProduct.totalStock;
    findProduct.averageReview = averageReview ?? findProduct.averageReview;

    await findProduct.save();
    res.status(200).json({ success: true, data: findProduct });
  } catch (e) {
    console.error("Edit Product Error:", e.message);
    res.status(500).json({ success: false, message: "Server Error", error: e.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (e) {
    console.error("Delete Product Error:", e.message);
    res.status(500).json({ success: false, message: "Server Error", error: e.message });
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
};