// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
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
  res.json({ message: "Este es el endpoint /api/test" });
}
