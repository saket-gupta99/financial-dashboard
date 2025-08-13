import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type");

  const data: Record<string, { label: string; value: number }> = {
    purchases: { label: "Purchases", value: 253 },
    redemptions: { label: "Redemptions", value: 178 },
    rejected: { label: "Rejected Transactions", value: 5 },
    "sip-rejections": { label: "SIP Rejections", value: 3 },
    "new-sip": { label: "New SIP", value: 42 }
  };

  if (type && data[type]) {
    return NextResponse.json(data[type]);
  }

  return NextResponse.json(Object.values(data));
}
