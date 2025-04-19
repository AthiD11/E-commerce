const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./Models/User.model'); 

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const existingAdmin = await User.findOne({ username: 'admin' });

    if (existingAdmin) {
      console.log(" Admin already exists");
    } else {
      const hashedPassword = await bcrypt.hash('admin123', 10);

      const adminUser = new User({
        username: 'admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
      });

      await adminUser.save();
      console.log(" Admin user created successfully");
    }

    mongoose.disconnect();
  } catch (error) {
    console.error(" Error creating admin:", error.message);
  }
};

createAdmin();