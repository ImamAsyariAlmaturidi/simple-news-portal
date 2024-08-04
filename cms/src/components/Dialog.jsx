import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Button from "./Button";

const Dialog = ({ buttonName }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      content,
      imgUrl,
      categoryId,
    };
    try {
      const response = await axios.post(
        "https://server.imam-asyari.online/article",
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      document.getElementById("my_modal_4").close();
      console.log(response.data);
      setTitle("");
      setContent("");
      setImageUrl("");
      setCategoryId(1);
      Toastify({
        text: `Success Create Article ${title}`,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #28a745, #218838)",
          color: "#fff",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          fontWeight: "bold",
          borderRadius: "8px",
        },
      }).showToast();
    } catch (error) {
      if (
        error.response.data.message === "Validation notEmpty on title failed"
      ) {
        Toastify({
          text: `Input tidak boleh kosong`,
          duration: 2000,
          newWindow: false,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #dc3545, #c82333)",
            color: "#fff",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            fontWeight: "bold",
            borderRadius: "8px",
          },
        }).showToast();
      }
    }
  };

  return (
    <div>
      <button
        className={`${
          buttonName === "Update" ? "bg-blue-500" : "btn-ghost"
        } text-white rounded-lg font-comic-sans px-4 py-2 hover:text-orange-600 transition-all`}
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        {buttonName}
      </button>
      <dialog id="my_modal_4" className="modal">
        <form
          className="modal-box w-11/12 max-w-5xl bg-gray-500 rounded-lg p-6 shadow-lg"
          onSubmit={handleSubmit}
          style={{
            backgroundImage: "none",
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold text-lg mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out hover:shadow-md"
              placeholder="Enter your title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold text-lg mb-2">
              Content
            </label>
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out hover:shadow-md"
              placeholder="Enter your content"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold text-lg mb-2">
              Image Url
            </label>
            <input
              type="text"
              name="imgUrl"
              value={imgUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out hover:shadow-md"
              placeholder="Enter image URL"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold text-lg mb-2">
              Category
            </label>
            <select
              name="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(parseInt(e.target.value))}
              className="border-2 border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out hover:shadow-md"
            >
              <option value={1}>Anime</option>
              <option value={2}>Manga</option>
            </select>
          </div>
          <div className="modal-action flex justify-end gap-2">
          <button
              type="button"
              className=" bg-green-400 text-white rounded-lg px-4 py-2 shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
              onClick={handleSubmit}
            >
             save
            </button>
            <button
              type="button"
              className="bg-red-500 text-white rounded-lg px-4 py-2 shadow-lg hover:bg-red-600 transition duration-300 ease-in-out"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Dialog;
