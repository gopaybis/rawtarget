export default async function (req) {
  const now = new Date().toISOString();
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const ua = req.headers.get("user-agent") || "unknown";

  return new Response(
    JSON.stringify({
      message: "🎉 Halo dari iworker.js yang valid!",
      ip,
      userAgent: ua,
      time: now,
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
