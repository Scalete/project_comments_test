import { connectToDb } from "@/lib/db";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  try {
    connectToDb();

    const user = await User.findOne({username: 'juliusomo'});
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch comments!");
  }
};