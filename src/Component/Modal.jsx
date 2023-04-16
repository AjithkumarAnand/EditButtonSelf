import React, { useState } from "react";

const Modal = ({ addUser }) => {
  const [username, setUsername] = useState("");
  const [descript, setDescript] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, descript);
    if (username !== "" && descript !== "") {
      addUser(username, descript);
    } else {
      alert("Missing content");
    }
  };

  return (
    <>
      <div className="form-outer">
        <h2 className="form-title">Enter Details</h2>
        <form className="form-body" onSubmit={handleSubmit}>
          <div>
            <label className="input-label "> Name</label>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br></br>
            <label className="input-label">Desg</label>
            <input
              type="text"
              placeholder="Designation"
              value={descript}
              onChange={(e) => setDescript(e.target.value)}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Add
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default Modal;
