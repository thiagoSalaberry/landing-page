import { v2 as cloudinary } from "cloudinary";
const CLOUDINARY_CLOUD_NAME = String(
  process.env.CLOUDINARY_CLOUD_NAME
); /* || "ddoaqw2yz"*/
const CLOUDINARY_API_KEY = String(
  process.env.CLOUDINARY_API_KEY
); /* || "946326219235799"*/
const CLOUDINARY_API_SECRET =
  process.env.CLOUDINARY_API_SECRET; /* || "MZJEYY7WdMPOZy_hdpACKpVgjII"*/
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});
// cloudinary.config({
//   cloud_name: "ddoaqw2yz",
//   api_key: "946326219235799",
//   api_secret: "MZJEYY7WdMPOZy_hdpACKpVgjII",
// });

export { cloudinary };
