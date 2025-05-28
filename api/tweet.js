export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text, image_url, link } = req.body;

  // 추후 실제 트윗 업로드 코드는 여기 삽입
  console.log("📩 Tweet 요청 받음!");
  console.log("Text:", text);
  console.log("Image URL:", image_url);
  console.log("Link:", link);

  return res.status(200).json({
    message: "요청 성공! (아직 트윗은 안 보내고 있어요)",
    received: { text, image_url, link }
  });
}
