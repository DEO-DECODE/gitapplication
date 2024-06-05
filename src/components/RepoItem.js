import React, { useState, useEffect } from "react";

const RepoItem = (props) => {
  const {
    created_at,
    full_name,
    language,
    name,
    html_url,
    languages_url,
    visibility,
  } = props;


  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {visibility} </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <p className="card-text">{full_name}</p>
          
          <button type="button" className="btn btn-light">
            {"Created at : "}
            {new Date(created_at).toGMTString()}
          </button>
          <a
            rel="noreferrer"
            href={html_url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Get Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
