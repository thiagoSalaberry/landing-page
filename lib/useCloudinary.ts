import { useEffect, useState } from "react";

export function useCloudinary(base64: string) {
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!base64) return;
    setLoading(true);
    const controller = new AbortController();
    fetch("http://localhost:9999/upload-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageURL: base64 }),
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setImgUrl(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [base64]);
  return { imgUrl, loading, error };
}
