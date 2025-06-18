async function handler(req) {
  return new Response("✅ Worker sukses dijalankan dari remote!", {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
}
