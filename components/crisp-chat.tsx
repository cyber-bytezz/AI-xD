"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a09c6241-56f9-42ed-afed-315fb0b675bb");
  }, []);

  return null;
};
