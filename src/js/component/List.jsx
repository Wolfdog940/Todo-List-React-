
import { element } from "prop-types";
import React, { useState } from "react";

const List = () => {
  const [todolist, setTodolilst] = useState([]);
 

  const addList = (element) => {
    setTodolilst([...todolist, element]);
  };
  const borrar =(i)=>{

    const newset=todolist.filter(element=>i !==i)
    setTodolilst(newset)
  
  }

  return (
    <div className="list">
      <h1>To Do List</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            addList(e.target.value);
            e.target.value="";
          }
        }}
      />
      <div className="">
        <ul>
          {todolist.map((item, i) => (
            <li key={i}>{item} <button onClick={borrar}>X</button></li>
          ))}
          <p>{todolist.length ==0?"no hay elementos en la lista":todolist.length +" elements left"}</p>
        </ul>
      </div>
    </div>
  );
};

export default List;
