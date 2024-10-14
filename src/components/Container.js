// function Container() {
//     return (
//         <div>
//             <img src="${product.imageUrl}" alt="${product.title}">
//                 <h2 class="card-title">${product.title}</h2>
//                 <p class="card-description">${product.description}</p>
//                 <p class="card-price">$${product.price}</p>
//                 <button class="card-button">Add to Cart</button>
//         </div>
//     )
// }
// export default Container;
import axios from "axios";
import "./App.css";
import ABButton from "./components/ABButton";
import Navbar from "./layouts/navbar";
import { useState, useEffect } from "react";

function App() {
  const [postData, setPostData] = useState([]);
  const getApiData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPostData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postApiData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: "abc",
        title: "ahj",
        userId: 100,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-20 h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-center font-bold  text-3xl md:text-8xl">
          <span className="hover:text-[maroon]">My </span>
          <span className="hover:text-[maroon]">Chatbot </span>
          <span className="hover:text-[maroon]">AI </span>
          <span className="hover:text-[maroon]">Assistant</span>
        </h1>
      </div>
      <div className="text-center p-5">
        <button onClick={getApiData}>Get Data</button>
        <button onClick={postApiData}>Post Data</button>
      </div>
      <div className="flex flex-wrap">
        {postData.map((x, i) => (
          <div className=" w-[300px] rounded shadow-lg border m-3 p-3" key={i}>
            <p className="text-xl font-bold">Title: {x.title}</p>
            <p className="">body: {x.body}</p>
            <p>userId: {x.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;