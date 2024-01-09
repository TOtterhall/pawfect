"use Client";
import React from "react";

export default function SearchForm() {
  return (
    //lägg till styling och logik form från bootrap
    <div>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Sök"
          aria-label="Sök"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Sök
        </button>
      </form>
    </div>
  );
}
