import { NextResponse } from "next/server";

const users: string[] = [];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username } = body;
    users.push(username);
    return NextResponse.json({ success: true, users });  // ✅ Return success
  } catch (e) {
    return NextResponse.json({ message: "error occurred" }, { status: 400 });  // ✅ Return error
  }
}
