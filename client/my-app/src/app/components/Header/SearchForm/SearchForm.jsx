"use Client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SearchForm() {
  return (
    //lägg till styling och logik form från bootrap
    <div>
      <form className="d-flex justify-content-end py-3">
        <input
          className="form-control my-sm-0 d-none d-sm-flex "
          type="search"
          placeholder="Sök"
          aria-label="Sök"
        />
        {/* ändra färg på knapp sedan */}
        <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}
