import React from "react";

export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res?.sessionToken as string;
  if (!sessionToken) {
    return Response.json({
      message: "Không nhận được token",
    });
  }
  return Response.json(res, {
    status: 200,
    headers: {
      "Set-cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly`,
    },
  });
}
