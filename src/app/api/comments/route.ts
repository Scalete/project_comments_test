import { connectToDb } from "@/lib/db";
import { Comment } from "@/lib/models";
import { NextResponse } from "next/server";

/**
 * GET request to get all comments
 * 
 * @param {Request} request The Next.js request object
 * @returns {Promise<NextResponse>} The array of comments or error message
 */
export const GET = async (request: Request): Promise<NextResponse> => {
  try {
    connectToDb();

    const coments = await Comment.find();
    return NextResponse.json(coments);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch comments!");
  }
};

/**
 * Creates a new comment
 * @param request The request containing the comment data in the request body
 * @returns The created comment
 */
export const POST = async (request: Request) => {
  try {
    connectToDb();

    const body = await request.json();
    const comment = new Comment(body);
    await comment.save();

    return NextResponse.json(comment);

  } catch (err) {
    console.log(err);
    throw new Error("Failed to create comment!");
  }
};
