import React from "react";

import "./landing.scss";

export default function UsersSection({ data }) {
  const dataCopy = data;

  return (
    <div className="users-section ">
      <div className="wrapper">
        {dataCopy &&
          dataCopy.map((user) => (
            <div className="user" key={user?.id}>
              <div className="wrapper">
                <div className="top">
                  <img src={user?.img} alt="" />
                </div>
                <div className="middle">
                  <div className="name">{user?.name}</div>
                  <div className="info">
                    {user?.location !== null ? (
                      <div className="location">In {user?.location}</div>
                    ) : null}

                    <div
                      className={`type ${
                        user?.user_type === "VENDOR" ? "vendor" : ""
                      }`}
                    >
                      {user?.user_type}
                    </div>
                  </div>
                </div>
                <div className="bottom">{user?.text}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
