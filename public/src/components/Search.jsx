import React, { useState } from "react";
import axios from "axios";

const Search = ({ setData }) => {
  const [input, setInput] = useState("");

  const formOnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
  
      const {data} = await axios.get(`https://server.imam-asyari.online/public/article/?search=${input}`);
      setData(data.data); 
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center py-6">
    <form onSubmit={formOnSubmitHandler} className="flex items-center w-full max-w-md">
      <input
        className="border border-gray-300 rounded-lg py-2 px-4 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-pink-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
      />
      <button
        type="submit"
        className="ml-3 bg-pink-500 text-white rounded-lg py-2 px-4 text-sm font-semibold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        Search
      </button>
    </form>
  </div>
  
  );
};

export default Search;
