// import mongoose from 'mongoose';

// // Define the raj_item schema
// const rajSchema = mongoose.Schema({
//   name: String,
//   email: String, // Should be String, not Number, to store email addresses
//   phone: String,
// });

// // Create the raj_item model
// const raj_item = mongoose.model("raj_item", rajSchema);

// // Function to connect to the database
// const databaseConnect = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/mongoMigration", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('MongoDB Database Connected');
//   } catch (error) {
//     console.error(error);
//   }
// };

// export { databaseConnect, raj_item };
import mongoose from "mongoose";
const raj = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});
const raj_item = mongoose.model("raj_item", raj);

export const databaseConnect = async () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/mongoMigration", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb Database Connected");
    })
    .catch((error) => {
      console.log(error);
    });

  try {
    const raj_item_1 = await new raj_item({
      name: "soham",
      email: "soham@gmail.com",
      phone: "7023521333",
    });

    const raj_item_2 = await new raj_item({
      name: "sgghgggfg",
      email: "ham@gmail.com",
      phone: "7023555533",
    });

    const raj_item_3 = await new raj_item({
      name: "yash",
      email: "yash@gmail.com",
      phone: "7324563643",
    });

    await raj_item_1.save();
    await raj_item_2.save();
    await raj_item_3.save();
    // // console.log(result);
    // for(var i=0; i<result.length; i++){                // printing data using for loop.
    //     console.log(i +" is "+result[i] );
    // }
  } catch (err) {
    console.log(err);
  }
};
export default databaseConnect;
export { raj_item };
