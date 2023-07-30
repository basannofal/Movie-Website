import React, { useState, useEffect } from 'react';
import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css"

const Movie = () => {
    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        
        const fetchMovieData = async () => {

            const url = process.env.NEXT_PUBLIC_NETFLIX_API;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '46e8abafc3msh086b739fb517117p1ef5c1jsn7aad4408e347',
                    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
                }
            };

            try {
                const res = await fetch(url, options);
                const data = await res.json();
                console.log(data);

                const mainData = data.titles;
                console.log(mainData.jawSummary)
                setMainData(mainData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovieData();
    }, []);

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    {
                        mainData.length > 0 ?
                            <div className={styles.card_section}>
                                {mainData.map((curElem) => (
                                    <MovieCard {...curElem} />
                                ))}
                            </div>
                            :
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <div className={styles.loadingspinner}></div>
                            </div>
                    }
                </div>
            </section>
        </>
    );
};

export default Movie;
