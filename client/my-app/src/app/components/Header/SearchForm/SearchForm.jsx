"use Client";
import React from "react";

export default function SearchForm() {
  return (
    //lägg till styling och logik form från bootrap
    <div>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Sök"
          aria-label="Sök"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Sök
        </button>
      </form>
    </div>
  );
}
