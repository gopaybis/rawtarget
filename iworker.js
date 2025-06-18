// File: worker.js
export default async function (request) {
  const now = new Date().toISOString();
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  return new Response(
    JSON.stringify({
      message: "Halo dari worker.js remote!",
      ip: ip,
      time: now,
      headers: Object.fromEntries(request.headers.entries())
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200
    }
  );
}
