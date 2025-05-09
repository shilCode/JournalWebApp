const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin_user:test_user_123!@cluster0.eh2ed1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { tls: true }
);

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", PostSchema);

module.exports = { User, Post };
