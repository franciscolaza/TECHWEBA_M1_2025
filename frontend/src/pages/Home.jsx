import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { BounceStagger } from '../component/RevealOnScroll'
import axios from 'axios';


import image1 from '../assets/image1.svg'


function Home() {
    const [produits, setProduits] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/dernier/dernier-id')
            .then(response => {
                const data = response.data.map(item => ({
                    ...item,
                    image: import.meta.env.VITE_API_URL + item.image,
                }));
                console.log(data);
                setProduits(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Erreur lors du chargement des produit :', err);
                setLoading(false);
            });
    }, []);
    if (loading) return <p>Chargement...</p>;




    return (
        <>
            <div className="md:px-80">
                <div className="p-6 mt-10">
                    <div className="bg-[#eaeeef] flex flex-col justify-center md:justify-between items-center rounded-lg p-4 md:flex-row-reverse">
                        <div className="w-[50%] p-4">
                            <BounceStagger>
                                <img src={image1} alt="" />
                            </BounceStagger>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center md:items-start items-center text-white p-4">
                                <BounceStagger>
                                    <h1 className="text-3xl font-bold text-red-600">25% OFF</h1>
                                    <h1 className="text-3xl font-bold text-black">Summer Sale</h1>
                                    <p className="text-gray-500">Discover our summer styles with discount</p>
                                </BounceStagger>
                            </div>
                            <div className="flex justify-center md:justify-start items-center w-full p-2">
                                <Link to="/Produit" className="w-full">
                                    <button className="bg-black text-white px-4 py-2 rounded-lg w-full md:w-50 font-bold">
                                        Shop Now <i className="mdi mdi-arrow-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Derniers produits ajoutés</h2>

                    {/* Conteneur responsive */}
                    <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-4">
                        {produits.map(produit => (
                            <div
                                key={produit.id}
                                className="flex-shrink-0 w-64 md:w-auto bg-white rounded-lg shadow p-4"
                            >
                                <img
                                    src={produit.image}
                                    alt={produit.name}
                                    className="w-full h-48 object-cover mb-2 rounded"
                                />
                                <h3 className="font-semibold text-lg">{produit.name}</h3>
                                <p className="text-sm text-gray-500">ID: {produit.id}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Home;
