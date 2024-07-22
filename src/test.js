const mongoose = require("mongoose");
const User = require("./models/User");

const createAdminUser = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/platforma", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const user = await User.create({
      fullname: "admin",
      phone: "+99897777777",
      password: "adminpassword",
      isAdmin: true,
    });

    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await mongoose.disconnect();
  }
};

createAdminUser();
