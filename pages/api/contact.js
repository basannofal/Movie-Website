// import dbConn from "../../utils/dbConn";
// import Contact from "../../models/contact";

// export default async function handler(req, res) {
//   console.log(req.method);
//   if (req.method === "POST") {
//     try {
//       console.log(JSON.parse(req.body));
//       const data =  JSON.parse(req.body);
//       await dbConn();
//       console.log("Connected to the database!");

//       await Contact.create(data);

//       res.status(200).json({
//         message: "Message sent successfully!",
//       });
//     } catch (e) {
//       console.log(e);
//       res.status(500).json({
//         message: "Server error, please try again!",
//       });
//     }
//   }
// }
