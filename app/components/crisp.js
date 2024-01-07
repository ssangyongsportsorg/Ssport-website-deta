"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ae56efc0-058b-4e4f-9d35-1a552b1fcc6d");
  });

  return null;
}

export default CrispChat;
