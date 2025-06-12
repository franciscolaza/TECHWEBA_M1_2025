import React, { useEffect, useState } from 'react'
import image1 from '../assets/image4.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import { Link } from 'react-router-dom'
import Carousel from '../component/Carousel'
import { BounceStagger } from '../component/RevealOnScroll'
import axios from 'axios'
import { toast } from 'react-toastify';

const PRODUITS = [
    {
        id: 1,
        name: 'addidas',
        description: 'DAILLY 3.0 SHOES',
        detail: 'Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.Regular fit Lace closure Rubber outsole with vulcanized look',
        price: '98.99',
        image: image1
    },
    {
        id: 2,
        name: 'Nike',
        description: 'Nike Air force Premuim',
        detail: 'Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.Regular fit Lace closure Rubber outsole with vulcanized look',
        price: '200',
        image: image2
    },
    {
        id: 3,
        name: 'Nike',
        description: 'Nike Air force Premuim',
        detail: 'Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.Regular fit Lace closure Rubber outsole with vulcanized look',
        price: '200',
        image: image3

    }

]
function Produit({ onCartChange }) {
    const [produits, setProduits] = useState([]);
    const [currentProduit, setCurrentProduit] = useState(PRODUITS[0]);
    const [quantity, setQuantity] = useState(1);
    const [panier, setPanier] = useState([])

    // Charger les produits depuis le backend
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/produit')
            .then(response => {
                const data = response.data.map(item => ({
                    ...item,
                    image: import.meta.env.VITE_API_URL + item.image,
                    plusdetail: JSON.parse(item.plusdetail) // Assuming the image path is relative to the API URL
                }));
                console.log(data)
                setProduits(data);
                setCurrentProduit(data[0]);
            })
            .catch(error => {
                console.error("Erreur de chargement des produits :", error);
            });
    }, []);

    const addToCart = () => {
        const produitToAdd = { ...currentProduit, quantity };
        setPanier([...panier, produitToAdd]);
        onCartChange([...panier, produitToAdd]); // Notify parent component about the cart change
        setQuantity(1); // Reset quantity after adding to cart


        // Afficher le toast
        toast.success(`${currentProduit.name} ajouté au panier !`);
    }

    if (!currentProduit) return <div>Chargement...</div>;

    return (
        <>
            <div className='px-4 md:px-80 '>
                <div className='p-4 mt-12 md:flex md:flex-row md:justify-center'>
                    <Carousel images={produits.map(x => x.image)} onChangeIndex={x => setCurrentProduit(produits[x])} />
                    <div>

                    </div>
                    <div className='p-4 md:w-180'>
                        <div className='rounded-lg  shadow-[0_0_25px_-20px_rgba(0,0,0,1)]   flex flex-col  gap-4'>
                            <div className='p-4 flex flex-col gap-3'>
                                <BounceStagger>
                                    <h1 className='font-bold'>{currentProduit.name}</h1>
                                    <p className='text-gray-500'>{currentProduit.description}</p>
                                    <h1 className='font-bold'>$ {currentProduit.price}</h1>
                                </BounceStagger>

                            </div>
                            <hr className='text-gray-300' />
                            <BounceStagger>
                                <p className='font-bold p-4'>Quannity</p>
                            </BounceStagger>

                            <div className=' px-4'>
                                <BounceStagger>
                                    <div className='flex justify-between  items-center w-30 border border-gray-500 rounded-lg  p-2 px-2'>
                                        <button onClick={x => setQuantity(quantity - 1)}>-</button>
                                        <p>{quantity}</p>
                                        <button onClick={x => setQuantity(quantity + 1)}>+</button>
                                    </div>
                                </BounceStagger>
                            </div>

                            <div className='flex justify-between items-center w-full p-4'>
                                <button className='bg-black text-white px-4 py-2 rounded-lg w-full font-bold' onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex gap-2 md:flex-row md:justify-between'>
                    <div className='md:w-[50%]'>
                        <BounceStagger>
                            <h1 className='font-bold'>Description</h1>
                            <p className='text-gray-500 text-sm'>{currentProduit.detail}

                            </p>
                            <ul className="mt-2 list-disc ml-5">
                                {(currentProduit.plusdetail || []).map((x, index) => (
                                    <li key={index} className="text-gray-500">{x}</li>
                                ))}
                            </ul>

                        </BounceStagger>

                    </div>
                    <div className='w-[100%] md:w-[40%] md:h-[40%]'>
                        <BounceStagger>
                            <img src={currentProduit.image} alt="" />
                        </BounceStagger>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Produit