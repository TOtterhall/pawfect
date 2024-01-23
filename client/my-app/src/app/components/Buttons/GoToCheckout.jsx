"use client";
import React from "react";
import Link from "next/link";
const BtnGoToCheckout = () => {
  return (
    <div>
      <Link className="nav-link" href="/kassan">
        <button className="btn btn-primary btn-lg" role="button">
          GÅ TILL KASSAN
        </button>
      </Link>
    </div>
  );
};

export default BtnGoToCheckout;
