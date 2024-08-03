import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const TableMain = () => {
  const [article, setArticle] = useState([]);
  async function getAllArticle() {
    try {
      const { data } = await axios.get(
        "https://server.imam-asyari.online/article",
        {
          headers: {
            Authorization: `Baerer ${localStorage.access_token}`,
          },
        }
      );
      setArticle(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteArticle(id) {
    try {
      await axios.delete(`https://server.imam-asyari.online/article/${id}`, {
        headers: {
          Authorization: `Baerer ${localStorage.access_token}`,
        },
      });
      getAllArticle();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllArticle();
  }, []);
  return (
    <div className="flex justify-center items-center pt-24 shadow-lg">
      <div className="overflow-x-auto">
        <table className="table bg-black " >
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {article.map((item) => {
              return (
                <>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.imgUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.title}</div>
                          <div className="text-sm opacity-50">
                            {item.User.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.content}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {item.createdAt}
                      </span>
                    </td>
                    <td>anime</td>
                    <th>
                      <span className="grid grid-cols-2 gap-4">
                      <button
                          className="btn btn-warning btn-xs" 
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-error btn-xs" 
                          onClick={() => deleteArticle(item.id)}
                        >
                          Delete
                        </button>
                      </span>
                    </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableMain;
