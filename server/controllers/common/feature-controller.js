const {Feature} = require("../../models");
console.log("🚀 ~ Feature:", Feature)

const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    console.log(image, "image");

    const featureImages = new Feature({
      image,
    });

    await featureImages.save();

    res.status(201).json({
      success: true,
      data: featureImages,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const getFeatureImages = async (req, res) => {
  try {
    const images = await Feature.findAll();

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = { addFeatureImage, getFeatureImages };
