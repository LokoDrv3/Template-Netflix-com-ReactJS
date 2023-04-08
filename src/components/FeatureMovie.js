import React from "react";
import "./FeatureMovie.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {
  

  let tpoints = +((item.vote_average.toFixed(1)))

  let firstDate = new Date(item.first_air_date)
  let genres = [];
  for (let i in item.genres) {
    genres.push( item.genres[i].name )
  };

  let description = item.overview;
  if(description.lenght > 300){
    description = description.substring(0,300) + '...'
  }


 

  return(
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{tpoints} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''} </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a className="featured--watchbutton" href={`/watch/${item.id}`}>► Assistir</a>
            <a className="featured--mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista</a>

          </div>
          <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
        </div>
      </div>
    </section>
 
  )
}