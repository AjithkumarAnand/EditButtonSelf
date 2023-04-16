import React, { useState } from "react";
import Modal from "./Modal";

const Table = () => {
  const [userList, setUserList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addUser = (username, desg) => {
    const newUser = {
      id: userList.length + 1,
      name: username,
      desg: desg,
    };
    setUserList([...userList, newUser]);
  };

  const edit = (i) => {
    setEditIndex(i);
  };

  const saveEdit = (newName, newDesg) => {
    const newUserList = [...userList];
    newUserList[editIndex].name = newName;
    newUserList[editIndex].desg = newDesg;
    setUserList(newUserList);
  };

  const deleteItem = (i) => {
    const newList = [...userList];
    newList.splice(i, 1);
    setUserList(newList);
  };

  return (
    <>
      <Modal
        addUser={addUser}
        editIndex={editIndex}
        saveEdit={saveEdit}
        userList={userList}
      />

      <div className="container">
        <h4 className="mt-4 mb-4" style={{ color: "Black" }}>
          User List
        </h4>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) => {
                        const newName = e.target.value;
                        const newDesg = userList[index].desg;
                        saveEdit(newName, newDesg);
                      }}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={user.desg}
                      onChange={(e) => {
                        const newDesg = e.target.value;
                        const newName = userList[index].name;
                        saveEdit(newName, newDesg);
                      }}
                    />
                  ) : (
                    user.desg
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <button
                      className="btn btn-success"
                      onClick={() => setEditIndex(null)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => edit(index)}
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
