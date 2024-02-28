import React, { useEffect } from "react";
import { useState } from "react";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        localStorage.setItem("data", JSON.stringify(res));
      })
      .catch((err) => {
        alert("err");
        console.log(err.message);
        setData(JSON.parse(localStorage.getItem("data")));
      });
  }, []);

  return (
    <div>
      Users
      {data.map((user) => (
        <>{user.id}</>
      ))}
    </div>
  );
}

export default Users;
