
export default async function handler(req, res) {
  console.log(req.method);
  if (req.method === "GET") {

    res.send("Hello This is Server!");
  }
}