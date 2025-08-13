import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { name: "Client A", value: 100, size: 20 },
    { name: "Client B", value: 150, size: 40 },
    { name: "Client C", value: 80, size: 25 },
    { name: "Client D", value: 200, size: 35 }
  ]);
}
