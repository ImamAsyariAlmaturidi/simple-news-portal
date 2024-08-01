import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';
const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [categoryId, setCategoryId] = useState(1); 

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImgUrlChange = (e) => setImgUrl(e.target.value);
  const handleCategoryChange = (e) => setCategoryId(Number(e.target.value));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://server.imam-asyari.online/article', {
        title,
        content,
        imgUrl,
        categoryId
      }, {
        headers : {
            Authorization : `Baerer ${localStorage.access_token}`
        }
      });
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className='flex flex-col items-center p-8 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/sunset-view-aesthetic-anime-couple-dy2za3mf25sxevmm.jpg")' }}>
      <div className='bg-white bg-opacity-80 p-8 rounded-xl shadow-xl w-full max-w-md'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>Anime Form</h1>
        
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4 w-full'>
            <label htmlFor="title" className='mb-2 text-gray-800 font-semibold text-lg flex items-center'>
              <svg className='w-5 h-5 mr-2 text-pink-600' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' /></svg>
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Type here"
              className="input bg-gray-100 border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className='flex flex-col mb-4 w-full'>
            <label htmlFor="content" className='mb-2 text-gray-800 font-semibold text-lg flex items-center'>
              <svg className='w-5 h-5 mr-2 text-pink-600' fill='currentColor' viewBox='0 0 24 24'><path d='M19 13H5v-2h14v2zm0-4H5V7h14v2zm0-4H5V3h14v2zm0 16H5v-2h14v2zm4-2V3H1v14h22z' /></svg>
              Content
            </label>
            <input
              id="content"
              type="text"
              value={content}
              onChange={handleContentChange}
              placeholder="Type here"
              className="input bg-gray-100 border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className='flex flex-col mb-4 w-full'>
            <label htmlFor="imgUrl" className='mb-2 text-gray-800 font-semibold text-lg flex items-center'>
              <svg className='w-5 h-5 mr-2 text-pink-600' fill='currentColor' viewBox='0 0 24 24'><path d='M22 7V4h-2V2H4v2H2v3h20zM2 21h20v-8H2v8zm16-9H6v2h12v-2zm0-4H6v2h12V8zm-4 4h-4v2h4v-2z' /></svg>
              Image URL
            </label>
            <input
              id="imgUrl"
              type="text"
              value={imgUrl}
              onChange={handleImgUrlChange}
              placeholder="Type here"
              className="input bg-gray-100 border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className='flex flex-col mb-4 w-full'>
            <label htmlFor="categoryId" className='mb-2 text-gray-800 font-semibold text-lg flex items-center'>
              <svg className='w-5 h-5 mr-2 text-pink-600' fill='currentColor' viewBox='0 0 24 24'><path d='M3 11h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0-12h18v2H3zm0-4h18v2H3z' /></svg>
              Category
            </label>
            <select
              id="categoryId"
              value={categoryId}
              onChange={handleCategoryChange}
              className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value={1}>Anime</option>
              <option value={2}>Manga</option>
            </select>
          </div>

          <Button />
        </form>
      </div>
    </div>
  );
};

export default Form;
