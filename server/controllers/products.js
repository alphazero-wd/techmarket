const Product = require('../models/Product');
const getProducts = async (_req, res, next) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      success: true,
      nbHits: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product)
      return res.status(200).json({
        success: true,
        data: product,
      });
  } catch (error) {
    next(error);
  }
};

// const updateReviews = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { stars, comments } = req.body;
//     const product = await Product.findById(id);
//     if (product) {
//       const updatedProduct = await Product.findByIdAndUpdate(
//         id,
//         {
//           stars: [...product.stars, stars],
//           comments: [...product.comments, comments],
//         },
//         { new: true, runValidators: true }
//       );

//       return res.status(200).json({
//         success: true,
//         data: updatedProduct,
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = { getProducts, getProductDetail };
