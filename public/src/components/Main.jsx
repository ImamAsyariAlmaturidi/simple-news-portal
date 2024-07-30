import Side from "./Side";
import Card from "./Card";
const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="grid grid-cols-1 gap-4 my-[50px] mx-10">
          <span className="text-3xl font-bold text-white tracking-wider border-b-2 border-orange-600">
            Latest News
          </span>
          <Side />
          <Side />
          <Side />
          <Side />
          <Side />
        </div>
        <div className="grid col-span-2 gap-4 my-[50px] mx-10 border-x-2  border-neutral-500 px-4">
          <span className="text-3xl font-bold text-white tracking-wider border-b-2 border-orange-600 ">
            Manga
          </span>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="grid col-span-1 grid-cols-1 gap-4 my-[50px] mx-10">
          <span className="text-3xl font-bold text-white tracking-wider border-b-2 border-orange-600">
            Anime
          </span>
          <Side />
          <Side />
          <Side />
          <Side />
          <Side />
        </div>
      </div>
      <span className="w-full px-8 my-8 grid grid-cols-3 gap-4 ">
        <span className="text-3xl font-bold text-center text-white tracking-wider border-b-2 border-orange-600">
          <p className="mb-2">All News</p>
          <p className="text-sm">You heard it here first! Stay up to date on the latest anime and manga news straight out of Japan.</p>
          <p>&#9885; &#9885; &#9885; &#9885; &#9885;</p>
        </span>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </span>
    </div>
  );
};

export default Main;
