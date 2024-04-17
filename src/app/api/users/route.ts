import { connectToDb } from "@/lib/db";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

/**
 * GET request to get a single user by username
 * 
 * @param {any} request The Next.js request object
 * @returns {Promise<NextResponse>} The user document or error message
 */
export const GET = async (request: any): Promise<NextResponse> => {
  try {
    connectToDb();

    const user = await User.findOne({ username: 'juliusomo' });

    if (!user) {
      throw new Error('User not found');
    }

    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch comments!');
  }
};
