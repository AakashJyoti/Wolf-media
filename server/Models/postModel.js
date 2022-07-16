import mongoose from "mongoose";

const postScheema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", postScheema);
export default PostModel;
