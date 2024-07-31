import Side from "./Side";
import Card from "./Card";
import axios  from "axios";
import { useState, useEffect } from "react";
const Main = () => {
  const [articleAnime, setArticleAnime] = useState([])
  const [articleManga, setArticleManga] = useState([])
  const [allArticle, setAllArticle] = useState([])
  
  async function getArticleAnime() {
    try {
      const { data } = await axios.get('https://server.imam-asyari.online/public/article/?filter=1')
      setArticleAnime(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function getArticleManga() {
    try {
      const { data } = await axios.get('https://server.imam-asyari.online/public/article/?filter=2')
      setArticleManga(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function getAllArticle() {
    try {
      const { data } = await axios.get('https://server.imam-asyari.online/public/article')
      setAllArticle(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArticleAnime()
    getArticleManga()
    getAllArticle()
  }, [])
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="grid grid-cols-1 gap-4 my-[50px] mx-10">
          <span className="text-3xl font-bold text-white tracking-wider border-b-2 border-orange-600 font-bebas">
            Latest News
          </span>
           <Side articleAnime={articleAnime}/>
        </div>
        <div className="grid col-span-2 gap-4 my-[50px] mx-10 border-x-2  border-neutral-500 px-4">
          <span className="text-3xl font-bold text-white tracking-wider border-b-2 border-orange-600 font-bebas ">
            Manga
          </span>
          <Card articleManga={articleManga} />
        </div>
        <div className="grid col-span-1 grid-cols-1 gap-4 my-[50px] mx-10">
          <span className="text-3xl font-bold text-white tracking-wider border-b-2 border-orange-600 font-bebas">
            Anime
          </span>
          <Side articleAnime={articleAnime}/>
        </div>
      </div>
      <span className="w-full px-8 my-8 grid grid-cols-3 gap-4 ">
        <span className="text-3xl font-bold text-center text-white tracking-widest border-b-2 border-orange-600 font-bebas">
          <p className="mb-2">All News</p>
          <p className="text-sm">You heard it here first! Stay up to date on the latest anime and manga news straight out of Japan.</p>
          <p>&#9885; &#9885; &#9885; &#9885; &#9885;</p>
        </span>
        <Card articleManga={allArticle}/>
      </span>
    </div>
  );
};

export default Main;
