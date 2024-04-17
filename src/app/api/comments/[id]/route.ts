import { connectToDb } from "@/lib/db";
import { Comment } from "@/lib/models";
import { NextResponse } from "next/server";

/**
 * Deletes a comment by its id
 * @param request The request containing the comment id in the request body
 * @returns The deleted comment
 */
export const DELETE = async (request: Request, { params }: {params: {id: string}}) => {

    const { id } = params;

    try {
      connectToDb();

      const comment = await Comment.deleteOne({_id: id});
      if (!comment) {
        throw new Error(`No comment found with id ${id}`);
      }
      return NextResponse.json(comment);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete comment!");
    }
  };