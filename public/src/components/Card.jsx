const Card = ({ articleManga }) => {

  return (
    <>
        {articleManga.map((item) => {
          return (
            <div key={item.id} className="grid-cols-3">
              <figure>
                <img className="px-3 w-[500px] h-[210px] mx-auto" src={item.imgUrl} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
