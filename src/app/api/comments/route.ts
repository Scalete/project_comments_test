import { connectToDb } from "@/lib/db";
import { Comment } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  try {
    connectToDb();

    const coments = await Comment.find();
    return NextResponse.json(coments);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch comments!");
  }
};