import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";

const UserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [auth, setAuth] = useAuth();
  const fetchUserData = async () => {
    const apiUrl = `https://api.github.com/users/${auth.user}`;
    try {
      const response = await fetch(apiUrl);
      //   console.log(response);
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log("Error in fetching data ", error);
    }
    /*
    The useEffect hook in React is a powerful tool for managing side effects in functional components. such as data fetching, subscriptions, or manual DOM manipulations
    Empty Dependency Array: The effect runs only once after the initial render.
    useEffect(() => {
  // Code runs only once
}, []);
With Dependencies: The effect runs when the specified dependencies change.
useEffect(() => {
  // Code runs when `someValue` changes
}, [someValue]);
    */
  };
  useEffect(() => {
    fetchUserData();
  }, [auth.user]);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 my-5">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={userData && userData.avatar_url}
                  className="img-fluid rounded-start object-fit-cover"
                  alt={`Avatar of ${userData && userData.login}`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {(userData && userData.name) ||
                      (userData && userData.login)}
                  </h5>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Name:</strong>{" "}
                      {(userData && userData.name) || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <strong>Company:</strong>{" "}
                      {(userData && userData.company) || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <strong>Bio:</strong>{" "}
                      {(userData && userData.bio) || "N/A"}
                    </li>
                  </ul>
                  <a
                    href={userData && userData.html_url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Additional Details</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Location:</strong>{" "}
                  {(userData && userData.location) || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong>{" "}
                  {(userData && userData.email) || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Hireable:</strong>{" "}
                  {userData && userData.hireable ? "Yes" : "No" || "N/A"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
