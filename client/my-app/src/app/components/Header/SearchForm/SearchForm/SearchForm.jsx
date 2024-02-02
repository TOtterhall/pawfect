"use Client";
import React from "react";

export default function SearchForm() {
  return (
    <form className="d-flex">
      <input
        className="form-control my-sm-0 d-none d-sm-flex "
        type="search"
        placeholder="Sök"
        aria-label="Sök"
      />

      <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
        <h4>SÖK</h4>
      </button>
    </form>
  );
}
