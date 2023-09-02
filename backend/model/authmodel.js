// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/first_connection_t", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connection sucessfull...");
//   })
//   .catch((err) => console.log(err));

// const raj = mongoose.Schema({
//   name: String,
//   roll: Number,
//   color: String,
// });
// const raj_item = mongoose.model("raj_item", raj);

// const create_new_item = async () => {
//   try {
//     const raj_item_1 = await new raj_item({
//       name: "soham",
//       email: "soham@gmail.com",
//       phone: "7023521333",
//     });

//     const raj_item_2 = await new raj_item({
//       name: "sgghgggfg",
//       email: "ham@gmail.com",
//       phone: "7023555533",
//     });

//     const raj_item_3 = await new raj_item({
//       name: "yash",
//       email: "yash@gmail.com",
//       phone: "7324563643",
//     });

//     const result = await raj_item.insertMany([
//       raj_item_1,
//       raj_item_2,
//       raj_item_3,
//     ]);
//     // console.log(result);
//     for (var i = 0; i < result.length; i++) {
//       // printing data using for loop.
//       console.log(i + " is " + result[i]);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
// create_new_item();
