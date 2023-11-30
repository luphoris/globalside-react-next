"use client";

import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const DynamicTaskList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/reactNextExercise.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log("Response:", response); // Log the response
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((myJson) => {
        console.log("Data:", myJson); // Log the data
        setData(myJson);
      })
      .catch((error) => {
        console.log("Error:", error); // Log any errors
      });
  }, []);

  return (
    <div className=" bg-white border border-gray-200 rounded-xl  sm:p-8 mt-1 text-black">
      {data &&
        data.length > 0 &&
        data.map((item) => <UserCard key={item.ID} item={item} />)}
    </div>
  );
};

export default DynamicTaskList;
