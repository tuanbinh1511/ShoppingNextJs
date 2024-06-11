import { decodeJWT } from "@/lib/utils";
import React from "react";

type PayloadJWT = {
  iat: number;
  exp: number;
  tokenType: string;
  userId: number;
};

export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res?.sessionToken as string;
  if (!sessionToken) {
    return Response.json({
      message: "Không nhận được token",
    });
  }

  const payload = decodeJWT<PayloadJWT>(sessionToken);

  const expiresDate = new Date(payload.exp * 1000).toUTCString();

  return Response.json(res, {
    status: 200,
    headers: {
      "Set-cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly; Expires=${expiresDate}`,
    },
  });
}
