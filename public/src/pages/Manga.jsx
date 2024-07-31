import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
const Manga = () => {
  const [manga, setManga] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getArticleManga() {
    try {
      const { data } = await axios.get(
        "https://server.imam-asyari.online/public/article/?filter=2"
      );
      setManga(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getArticleTopManga() {
    try {
      const { data } = await axios.get(
        "https://server.imam-asyari.online/public/article/?sort=id&page[number]=3&page[size]=5&filter=2"
      );
      setTopManga(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    async function fetch() {
      try {
        getArticleManga();
        getArticleTopManga();
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
    fetch();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto pt-20 px-4">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-3 space-y-5">
              <h1 className="text-2xl font-bold border-b-4 border-orange-600 pb-2">
                Manga
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card articleManga={manga} />
              </div>
            </div>
            <div className="col-span-1 space-y-5 border-l-2 px-7">
              <h1 className="text-2xl font-bold border-b-4 border-orange-600 pb-2">
                Top Manga
              </h1>
              <Card articleManga={topManga} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Manga;
