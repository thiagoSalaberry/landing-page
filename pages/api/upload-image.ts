// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { cloudinary } from "@/lib/cloudinary";
type Data = {
  imgUrl: string;
};
type Message = {
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Message>
) {
  try {
    const { base64 } = req.body;
    if (!base64)
      return res
        .status(400)
        .send({ message: "Se necesita la base64 de la imagen." });
    const tattooImage = await cloudinary.uploader.upload(base64, {
      resource_type: "image",
      discard_original_filename: true,
    });
    res.status(201).json({ imgUrl: tattooImage.secure_url });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al subir la imagen a Cloudinary" });
  }
}
