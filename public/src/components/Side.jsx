import { useState, useEffect } from "react";
import axios from "axios";

const Side = ({ articleAnime, setDataId }) => {

  return (
    <>
      {/* Modal */}
      <div>

        {/* Card Side */}
        {articleAnime.map((item) => {
          return (
            <div
              key={item.id}
              className="border-b-4 border-neutral-400 my-3 cursor-pointer"
            >
              <img src={item.imgUrl} />
              <h4 className="text-center my-3 mx-3 font-poppins">
                {item.title}
              </h4>
              <div className="modal-action my-6">
                <form method="dialog">
                  <button
                    type="submit"
                    onClick={() => setDataId(item.id)}
                    className="btn font-mono text-white"
                  >
                    See Details!
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Side;
