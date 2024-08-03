import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
const Dialog = ({ buttonName }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      content,
      imgUrl,
      category,
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
      setCategory(1);
      Toastify({
        text: `Success Create Article ${title}`,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    } catch (error) {
      if (
        error.response.data.message === "Validation notEmpty on title failed"
      ) {
        Toastify({
          text: `input tidak boleh kosong`,
          duration: 2000,
          newWindow: false,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#00B29F",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
      }
    }
  };

  return (
    <div>
      <button
        className={`${
          buttonName === "Update" ? "bg-blue-500" : "bg-rose-600"
        } text-white rounded-lg font-comic-sans px-4 py-2`}
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        {buttonName}
      </button>
      <dialog id="my_modal_4" className="modal">
        <form
          className="modal-box w-11/12 max-w-5xl bg-cover bg-center rounded-lg p-6 shadow-lg"
          onSubmit={handleSubmit}
          style={{
            backgroundImage: "url('path-to-anime-background.jpg')",
          }}
        >
          <div className="mb-4">
            <label className="block text-pink-500 font-bold text-lg mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-pink-500 rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-pink-500 font-bold text-lg mb-2">
              Content
            </label>
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border-2 border-pink-500 rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-pink-500 font-bold text-lg mb-2">
              Image Url
            </label>
            <input
              type="text"
              name="imgUrl"
              value={imgUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="border-2 border-pink-500 rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-pink-500 font-bold text-lg mb-2">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(parseInt(e.target.value))}
              className="border-2 border-pink-500 rounded p-2 w-full"
            >
              <option value={1}>Anime</option>
              <option value={2}>Manga</option>
            </select>
          </div>
          <div className="modal-action flex justify-end gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-lg px-4 py-2"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 text-white rounded-lg px-4 py-2"
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
