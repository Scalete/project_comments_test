import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
    },
    image: {
        png: {
            type: String,
            required: true,
        },
        webp: {
            type: String,
            required: true,
        },
    },
    },
    { timestamps: true }
  );
  
  const commentSchema = new mongoose.Schema(
    {
      content: {
        type: String,
        required: true,
      },
      date_comment: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
      user: {
        username: {
          type: String,
          required: true,
        },
        img: {
          type: String,
        },
      },
      replies: [{
        content: {
          type: String,
          required: true,
        },
        date_comment: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
        replyingTo: {
          type: String,
        },
        user: {
          username: {
            type: String,
            required: true,
          },
          img: {
            type: String,
          },
        },
      }],
    },
    { timestamps: true }
  );
  
  const User = mongoose.models?.User || mongoose.model("User", userSchema);
  const Comment = mongoose.models?.Comment || mongoose.model("Comment", commentSchema);
  
  export { User, Comment };