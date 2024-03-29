import React from "react";

export const NotAuthorizedPopUp = () => {
  return (
    <div>
      <h3>Not authorized</h3>
      <p>Register or log in to continue</p>
      <ul>
        <li>
          <button>Registration</button>
        </li>
        <li>
          <button>Log In</button>
        </li>
      </ul>
    </div>
  );
};
