"use client";
import React from "react";
import Link from "next/link";
const BtnGoToCheckout = ({ onCloseDrawer }) => {
  return (
    <div>
      <Link className="nav-link" href="/kassan">
        <button
          className="btn btn-primary btn-lg"
          role="button"
          onClick={onCloseDrawer}
        >
          GÅ TILL KASSAN
        </button>
      </Link>
    </div>
  );
};

export default BtnGoToCheckout;
