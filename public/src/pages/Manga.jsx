import Card from "../components/Card";

const Manga = () => {
  return (
    <>
      <div className="container mx-auto pt-20 px-4">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3 space-y-5">
            <h1 className="text-2xl font-bold border-b-4 border-orange-600 pb-2">
              Manga
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <h1 className="text-2xl font-bold border-b-4 border-orange-600 pb-2">
              Top Manga
            </h1>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manga;
