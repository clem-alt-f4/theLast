import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Commencer = () => {


    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("https://ghibliapi.vercel.app/films").then((res) => {
            setData(res.data);
        });
    }, []);

    return (

        <div className='acceuil'>
            <div className="cont">
                <header>
                    <div className="header">
                        <div className="logo"></div>
                    </div>
                </header>
                <ul >
                    {data.map(home =>
                        <Link key={home.id} to={`/film/${home.id}`}>
                            <li className="card">
                                <img
                                    src={home.image}
                                    alt={home.image}
                                />
                                <div className="infos">
                                    <h2>{home.original_title}</h2>
                                    <h4>{home.title}</h4>
                                    <p>released in : {home.release_date}</p>
                                </div>
                            </li>

                        </Link >
                    )}
                </ul>

            </div>
        </div>
    );
};

export default Commencer;