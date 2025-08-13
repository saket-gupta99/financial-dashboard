import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { month: "Jan", revenue: 5000, expenses: 3500, profit: 1500 },
    { month: "Feb", revenue: 6200, expenses: 4000, profit: 2200 },
    { month: "Mar", revenue: 5800, expenses: 3900, profit: 1900 },
    { month: "Apr", revenue: 7000, expenses: 4500, profit: 2500 }
  ]);
}
