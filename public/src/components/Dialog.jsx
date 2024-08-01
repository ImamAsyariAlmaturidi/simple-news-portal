import { useEffect } from "react";

export default function Dialog({ item }) {
  useEffect(() => {
    if (Object.keys(item).length !== 0) {
        document.getElementById("my_modal_1").showModal();
    }
  }, [item]);
  return (
    <>
      <dialog key={item.id} id="my_modal_1" className="modal">
        <div className="modal-box">
          <img
            className="mb-3 rounded-lg shadow-lg shadow-black"
            src={item.imgUrl}
            alt={item.title}
          />
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="py-4">{item.content}</p>
          <div className="flex justify-around my-5">
            <p>{item.createdAt}</p>
          </div>
          <h1 className="mb-2 text-white font-poppins font-bold hover:underline cursor-pointer transition-all"></h1>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
