import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { month: "Jan", business: 3000, trend: 2500 },
    { month: "Feb", business: 4500, trend: 3800 },
    { month: "Mar", business: 5000, trend: 4200 },
    { month: "Apr", business: 4000, trend: 3700 }
  ]);
}
