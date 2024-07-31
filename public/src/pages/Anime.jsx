import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const Anime = () => {
  const [anime, setAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getArticleAnime() {
    try {
      const { data } = await axios.get(
        "https://server.imam-asyari.online/public/article/?filter=1"
      );
      setAnime(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getArticleTopAnime() {
    try {
      const { data } = await axios.get(
        "https://server.imam-asyari.online/public/article/?sort=id&page[number]=3&page[size]=5&filter=1"
      );
      setTopAnime(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticleAnime();
    getArticleTopAnime();
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
                Anime
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card articleManga={anime} />
              </div>
            </div>
            <div className="col-span-1 space-y-5 border-l-2 px-7">
              <h1 className="text-2xl font-bold border-b-4 border-orange-600 pb-2">
                Top Anime
              </h1>
              <Card articleManga={topAnime} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Anime;
