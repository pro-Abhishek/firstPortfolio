import React, { useState } from "react";
export default function Users() {
  const [userArray, setUserArray] = useState([]);

  const [userIndex, setUserIndex] = useState(-1);

  const saveUser = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    userArray.push(event.target.username.value);
    setUserArray([...userArray]);
    event.target.reset();
  };

  const deleteUser = (index) => {
    console.log("deleteUser call");
    userArray.splice(index, 1);
    setUserArray([...userArray]);
  };

  const editUser = (index) => {
    let userform = document.forms["userform"];
    console.log(userform);
    userform.username.value = userArray[index];
    setUserIndex(index);
  };

  const updateUser = () => {
    let userform = document.forms["userform"];
    userArray.splice(userIndex, 1, userform.username.value);
    userform.reset();
    userform.username.focus();
    setUserIndex(-1);
  };

  return (
    <>
      <form name="userform" onSubmit={saveUser}>
        <input type="text" name="username" placeholder="Enter User Name" />
        <input
          style={{ display: userIndex < 0 ? "inline-block" : "none" }}
          type="submit"
          value="Add User"
        />
        <input
          style={{ display: userIndex >= 0 ? "inline-block" : "none" }}
          type="button"
          value="Update User"
          onClick={updateUser}
        />
      </form>
      <h2>User List</h2>
      <ul>
        {userArray.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => deleteUser(index)}>Del</button>
            <button onClick={() => editUser(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}