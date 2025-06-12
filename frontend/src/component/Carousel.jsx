import React, { useEffect, useState } from 'react'



function Carousel({ images, onChangeIndex }) {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        onChangeIndex(current)
    }
        , [current])
    const nextSlide = () => {
        setCurrent((current + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrent((current - 1 + images.length) % images.length)
    }

    const goToSlide = (index) => {
        setCurrent(index)
    }

    return (
        <div className="relative w-full max-w-xl mx-auto mt-10">
            <img
                src={images[current]}
                alt={`slide-${current}`}
                className="w-100 h-64 object-cover rounded-lg shadow-lg"
            />
            <div className='flex flex-row'>

                {/* Navigation boutons en bas */}
                <div className="w-full md:w-100 flex justify-between items-center px-4 py-2">
                    <button
                        onClick={prevSlide}
                        className="bg-gray-200 text-black w-10 h-10 rounded-full hover:bg-gray-700 transition"
                        aria-label="Previous Slide"
                    >
                        ‹
                    </button>
                    <div className="flex justify-center  space-x-2 py-5">
                        {/* Points */}
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full ${index === current ? 'bg-black' : 'bg-gray-400'
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="bg-gray-200  text-black w-10 h-10 rounded-full hover:bg-gray-700 transition"
                        aria-label="Next Slide"
                    >
                        ›
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Carousel
