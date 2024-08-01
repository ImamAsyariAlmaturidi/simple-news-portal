import { useState, useEffect} from "react";
import axios from 'axios'
const Side = ({ articleAnime }) => {
  const [data, setData] = useState({})

  async function getDataById(id){
    try {
      const { data } = await axios.get(`https://server.imam-asyari.online/public/article/${id}`)
      setData(data.data)
      console.log(data);

      document.getElementById("my_modal_1").showModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* Modal */}
      <div>
          <dialog key={data?.key} id="my_modal_1" className="modal">
          <div className="modal-box">
            <img className="mb-3 rounded-lg shadow-lg shadow-black" src={data?.imgUrl}/>
            <h3 className="font-bold text-lg">{data?.title}</h3>
            <p className="py-4">{data?.content}</p>
            <div className="flex justify-around my-5">
                {/* <button className="bg-purple-500 px-2 rounded-lg transition-all hover:h-8 font-poppins text-black">{data.Category.name}</button> */}
                <p>{data.createdAt}</p>
              </div>
              <h1 className="mb-2 text-white font-poppins font-bold hover:underline cursor-pointer transition-all">
               {/* Creator:  {data.User.username.toUpperCase()} */}
              </h1>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>


        


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
              <form method="dialog"  >
                <button type="submit" onClick={()=> getDataById(item.id)} className="btn font-mono text-white">See Details!</button>
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
