import React, { useState, useEffect } from 'react';
import styles from "../../styles/common.module.css"
import Image from "next/image";
import { useRouter } from 'next/router';

const Page = () => {
    const [mainData, setMainData] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            // const id = params.id;
            const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
                    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
                }
            };

            try {
                const res = await fetch(url, options);
                const data = await res.json();
                const mainData = data[0].details;
                setMainData(mainData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!mainData) {
        // Render a loading state or a fallback component while the data is being fetched
        return <div style={{ display: "flex", justifyContent: "center", marginTop:50 }}>
            <div className={styles.loadingspinner}></div>
        </div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Netflix \ <span> {mainData.type} </span> </h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={mainData.backgroundImage.url} alt={mainData.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{mainData.title}</h1>
                    <p>{mainData.synopsis}</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
