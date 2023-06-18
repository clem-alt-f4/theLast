import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Movie = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [datal, setDatal] = useState([]);
    const [datar, setDatar] = useState([]);




    useEffect(() => {
        axios.get(`https://ghibliapi.vercel.app/films/${id}`).then((res) => {
            setData(res.data);
        });
    }, [id]);

    useEffect(() => {
        axios.get(`http://localhost:3001/films/${id}`).then((res) => {
            setDatar(res.data);
        });
    }, [id]);
    console.log(datar)


    useEffect(() => {
        axios.get(`https://studio-ghibli-films-api.herokuapp.com/api/${data.title}`).then(async (res) => {
            await setDatal(res.data);
        });
    }, [data.title]);
    return (
        <div>

            {
                data ? (

                    <div >

                        <img src={data.movie_banner} alt={data.title} className='ban' />
                        <Link className='home' to={'/'}>  <div className="home"><div className="fond"></div></div>       </Link>
                        <div className='tout'>
                            <div className="joe">
                                <img src={data.image} alt={data.image} />
                                <div className="info">

                                    <div className="int">
                                        <h1>{data.title}</h1>
                                        <h1>{data.original_title_romanised}</h1>
                                        <h1>{data.original_title}</h1>
                                        <div className="infofo">
                                            <h2>Released in :{data.release_date}</h2>
                                            <h2>Duration : {data.running_time} min </h2>
                                            <h3>Directed by {data.director} </h3>
                                            <h3>Produced by {data.producer} </h3>
                                            {datal ? (<h3>music by {datal.music}</h3>) : (<div>Loading...</div>)}
                                            <h4>Rotten tomatoes score {data.rt_score}</h4></div>
                                        <p>{data.description}</p></div>


                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div>
                        <p>Loading...{id}</p></div>


                )
            }
            <div className="movie">
                {datar ? (<iframe src={datar.movie} width="640" height="360" title={datar.title} frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>) : (<div></div>)}
            </div>
        </div >
    );
};

export default Movie;
