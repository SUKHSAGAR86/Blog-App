const cloudinary = require("cloudinary").v2;

// COULDINARY_SECRET_KEY = eI3Q7Y3j6GqXbAX4r9v06ohEpTo;
// COUDINARY_API_KEY = 432415471629151;

const uploadCoudinary = async (local_file_path, old_file_id = "") => {
  cloudinary.config({
    cloud_name: "dof1dzli0",
    // api_key: process.env.COULDINARY_API_KEY,
    api_key: "432415471629151",
    api_secret: "eI3Q7Y3j6GqXbAX4r9v06ohEpTo",
  });

  try {
    await cloudinary.uploader.destroy(old_file_id);

    const uploadResult = await cloudinary.uploader.upload(local_file_path, {
      public_id: "blogs", // Optional
    });
    return uploadResult; // return for use
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};

module.exports = uploadCoudinary;
