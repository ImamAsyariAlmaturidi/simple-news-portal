import Side from "./Side";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Carousel from "./Carousel";
import Loading from "./Loading";
import Search from "./Search";
import gif1 from '../assets/dance-dancing.gif'
const Main = () => {
  const [articleAnime, setArticleAnime] = useState([]);
  const [articleManga, setArticleManga] = useState([]);
  const [allArticle, setAllArticle] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  class fun {
    static async getArticleAnime() {
      try {
        const { data } = await axios.get(
          "https://server.imam-asyari.online/public/article/?filter=1"
        );
        setArticleAnime(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    static async getArticleManga() {
      try {
        const { data } = await axios.get(
          "https://server.imam-asyari.online/public/article/?filter=2"
        );
        setArticleManga(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    static async getAllArticle() {
      try {
        const { data } = await axios.get(
          `https://server.imam-asyari.online/public/article/?search=&filter=&sort=&page[number]=${currentPage}&page[size]=10`
        );
        setAllArticle(data.data);
        setTotalPage(data.totalPage);
        setCurrentPage(data.currentPage.number);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fun.getArticleAnime();
      await fun.getArticleManga();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fun.getAllArticle();
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
        <Carousel />
          <div className="grid grid-cols-4">
            <div className="grid grid-cols-1 gap-4 my-[50px] mx-10">
              <span className="text-3xl font-bold text-white tracking-wider border-b-2 border-orange-600 font-bebas">
                Anime
              </span>
              <Side articleAnime={articleAnime} />
            </div>
            <div className="grid col-span-2 gap-4 my-[50px] mx-10 border-x-2  border-neutral-500 px-4">
              <span className="text-3xl font-bold text-white tracking-wider border-b-2 border-orange-600 font-bebas ">
                Manga
              </span>
              <Card articleManga={articleManga} />
            </div>
            <div className="grid col-span-1 grid-cols-1 gap-4 my-[50px] mx-10">
              <img src={gif1} ></img>
              <img src={gif1} ></img>
              <img src={gif1} ></img>
              <img src={gif1} ></img>
              <img src={gif1} ></img>
              <img src={gif1} ></img>
              <img src={gif1} ></img>
              <img src={gif1} ></img>
            </div>
          </div>
          <center>
            <Search setData={setAllArticle} />
          </center>
        </>
      )}
    

      {loading ? (
        <Loading />
      ) : (
        <>
          <span className="w-full px-8 my-8 grid grid-cols-3 gap-4 ">
            <span className="text-3xl font-bold text-center text-white tracking-widest border-b-2 border-orange-600 font-bebas">
              <p className="mb-2">All News</p>
              <p className="text-sm">
                You heard it here first! Stay up to date on the latest anime and
                manga news straight out of Japan.
              </p>
              <p>&#9885; &#9885; &#9885; &#9885; &#9885;</p>
            </span>
            <Card articleManga={allArticle} />
          </span>
          <div className="flex justify-center">
            <Pagination
              setCurrentPage={setCurrentPage}
              setTotalPage={setTotalPage}
              totalPage={totalPage}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
