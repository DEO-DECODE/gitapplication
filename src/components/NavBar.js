import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [searchValue, setSearchValue] = useState("DEO-DECODE");
  const handleSearch = () => {};
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid" style={{ margin: "2px" }}>
          <Link className="navbar-brand" to="/">
            GitApp
          </Link>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
