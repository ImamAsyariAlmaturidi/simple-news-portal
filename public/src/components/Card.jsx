const Card = () => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl shadow-black cursor-pointer">
        <figure>
          <img className="px-3"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </>
  );
};

export default Card;
