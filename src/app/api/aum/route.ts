import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    value: "12.19 Cr",
    change: 0.77
  });
}
