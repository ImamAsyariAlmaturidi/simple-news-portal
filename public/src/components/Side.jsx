const Side = ({ articleAnime }) => {
  return (
    <>
      {/* Modal */}
      <div onClick={() => document.getElementById("my_modal_1").showModal()}>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">title</h3>
            <p className="py-4">content</p>
            <button className="btn">See Details!</button>
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
              <div className="flex justify-around my-5">
                <p>category</p>
                <p>{item.createdAt}</p>
              </div>
              <h4 className="text-center my-3 mx-3 font-poppins">
                {item.title}
              </h4>
              <h1 className="mb-2 text-emerald-500 hover:underline cursor-pointer transition-all">
                Creator
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Side;
