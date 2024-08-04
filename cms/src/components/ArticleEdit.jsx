import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ArticleEdit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [category, setCategory] = useState('anime');
  const [imageFile, setImageFile] = useState(null);
  const { articleId } = useParams();

  // Fungsi untuk mendapatkan artikel berdasarkan ID
  const getArticleById = async () => {
    try {
      const response = await axios.get(
        `https://server.imam-asyari.online/article/${articleId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      const data = response.data.data;
      setTitle(data.title);
      setContent(data.content);
      setImgUrl(data.imgUrl);
      setCategory(data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticleById();
  }, [articleId]);

  // Fungsi untuk mengupdate artikel
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://server.imam-asyari.online/article/${articleId}`, {
        title,
        content,
        category
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await axios.patch(`https://server.imam-asyari.online/article/${articleId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        });
        console.log(response)
      }
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-60">
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-500 p-8 rounded-lg shadow-lg">
        <div>
          <label className="block text-yellow-500 text-lg font-bold">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full py-2 px-3 text-white"
          />
        </div>
        <div>
          <label className="block text-yellow-500 text-lg font-bold">Content</label>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border rounded w-full py-2 px-3 text-white"
          ></textarea>
        </div>
        <div>
          <label className="block text-yellow-500 text-lg font-bold">Image</label>
          {imgUrl && (
            <img src={imgUrl} alt="Article" className="mt-2 h-48 rounded-lg shadow-md" />
          )}
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="mt-2"
          />
        </div>
        <div>
          <label className="block text-yellow-500 text-lg font-bold">Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded w-full py-2 px-3 text-white"
          >
            <option value="anime">Anime</option>
            <option value="manga">Manga</option>
          </select>
        </div>
        <div>
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold">
            Update Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleEdit;
