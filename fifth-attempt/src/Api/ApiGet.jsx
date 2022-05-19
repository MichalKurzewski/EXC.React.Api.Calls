import React from "react";
import Button from "../Components/Button";
import { useState, useEffect } from "react";
export default function ApiGet() {
  const [apiCallData, setApiCallData] = useState([]);
  const [index, setIndex] = useState(1);
  const onClickHandle = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${index}`
    );
    setIndex((current) => current + 1);
    const data = await response.json();
    const newData = [...apiCallData, data];
    setApiCallData(newData);
    console.log(newData);
  };
  const titleChange = (title) => {
    const newTitleSplit = title.split(" ");
    const newTitle = newTitleSplit
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    console.log(newTitle);
    return newTitle;
  };
  return (
    <>
      <Button onClick={onClickHandle} />
      <div>ApiGet</div>
      {apiCallData.map((data, key) => (
        <p key={key}>{`Title-"${titleChange(data.title)}"; Completed-${
          data.completed
        }`}</p>
      ))}
    </>
  );
}
