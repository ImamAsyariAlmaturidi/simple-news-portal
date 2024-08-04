import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const TableSupport = () => {
  const [category, setCategory] = useState([]);

  async function getCategory() {
    try {
      const { data } = await axios.get(
        "https://server.imam-asyari.online/category",
        {
          headers: {
            Authorization: `Baerer ${localStorage.access_token}`,
          },
        }
      );
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCategoryById(id) {
    try {
      await axios.delete(`https://server.imam-asyari.online/category/${id}`, {
        headers: {
          Authorization: `Baerer ${localStorage.access_token}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="w-full flex justify-center py-80">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="grid grid-cols-5 gap-40">
              <th>Id</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {category.map((item) => {
              return (
                <>
                  <tr className="grid grid-cols-5 gap-40">
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
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

export default TableSupport;
