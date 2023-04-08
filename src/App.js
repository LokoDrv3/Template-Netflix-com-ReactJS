import React, {useEffect, useState} from "react";
import "./App.css";
import Tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";
import loading from "../src/components/imgs/loading.gif"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {


  const[movieList, setMovieList] = useState([]);
  const[featureData, setFeatureData] = useState(null);
  const[blackHeader, setBlackHeader] = useState(false);

  useEffect(()=> {
     const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o feature
      let originals = list.filter(i=>i.slug === 'originals') 
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo); 
     }

     loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 17){
        setBlackHeader(true);
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[]) 

  return(
    <div>
      <div className="page">

        <Header black={blackHeader}/>

        {featureData &&
          <FeatureMovie item={featureData}/>        
        }

        <section className="lists">
          {movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>

          ))}
        </section>

        <footer>
          Feito por: Daniel Castro <span role="img" aria-label="cowboy kkj">🤠</span><br/>
          Direitos de imagem para Netflix<br/>
          Dados do site TheMovieDb.org

        </footer>
        {movieList.length <=0 &&
        <div className="loading">
          <img src={loading} alt="Carregando" />
        </div>
        }
      </div>
    </div>
  )
}