import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(id);
  useEffect(() => {
    axios.get(`https://vj9x3n-3002.csb.app/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  console.log(data);

  let [bouton1Actif, setBouton1Actif] = useState(true);
  let [bouton2Actif, setBouton2Actif] = useState(false);

  const activerBouton = (bouton) => {
    if (bouton === 1) {
      setBouton1Actif(true);
      setBouton2Actif(false);
    } else {
      setBouton1Actif(false);
      setBouton2Actif(true);
    }
  };
  return (
    <div>
      {data ? (
        <div>
          <img src={data.movie_banner} alt={data.title} className="ban" />
          <Link className="home" to={"/"}>
            {" "}
            <div className="home">
              <div className="fond"></div>
            </div>{" "}
          </Link>
          <div className="tout">
            <div className="joe">
              <img src={data.image} alt={data.image} />
              <div className="info">
                <div className="int">
                  <h1>{data.title}</h1>
                  <h1>{data.original_title_romanised}</h1>
                  <h1>{data.original_title}</h1>
                  <div className="infofo">
                    <h2>Sortie en {data.release_date}</h2>
                    <h2>Durée {data.running_time} min </h2>
                    <h3>Realisé par {data.director} </h3>
                    <h3>Produit par {data.producer} </h3>
                    <h4>Note : {data.rt_score}/100</h4>
                  </div>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading...{id}</p>
        </div>
      )}
      <div className="params">
        <div className="language">
          <div>
            <button
              className="vf"
              style={{
                backgroundColor: bouton1Actif ? "rgb(183, 183, 183)" : "white",
                padding: bouton1Actif ? "7px" : "5px",
              }}
              onClick={() => activerBouton(1)}
            >
              VF
            </button>
            <button
              style={{
                backgroundColor: bouton2Actif ? "rgb(183, 183, 183)" : "white",
                padding: bouton2Actif ? "7px" : "5px",
              }}
              onClick={() => activerBouton(2)}
              className="vostfr"
            >
              VOSTFR
            </button>
          </div>
        </div>
      </div>

      <div
        className="movie"
        style={{ display: bouton2Actif ? "none" : "flex" }}
      >
        {data ? (
          <iframe
            src={data.movie}
            width="640"
            height="360"
            title={data.title}
            frameborder="0"
            allowfullscreen="1"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            className="filmvf"
          ></iframe>
        ) : (
          <div></div>
        )}
      </div>
      <div
        className="movie"
        style={{ display: bouton1Actif ? "none" : "flex" }}
      >
        {data ? (
          <iframe
            src={data.vost}
            width="640"
            height="360"
            title={data.title}
            frameborder="0"
            allowfullscreen="1"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            className="filmvf"
          ></iframe>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Movie;
