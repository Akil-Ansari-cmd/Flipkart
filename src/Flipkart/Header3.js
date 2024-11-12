import React from 'react'

function Header3() {
    const product = [{
        id: 1,
        name: "Facewash",

        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    }, {
        id: 2,
        name: "Printer",

        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    }, {
        id: 3,
        name: "Mount",

        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    }, {
        id: 4,
        name: "Mouse",

        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    }, {
        id: 5,
        name: "Monitor",
        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    },
    {
        id: 5,
        name: "Monitor",
        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    },
    {
        id: 5,
        name: "Monitor",
        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    },
    {
        id: 5,
        name: "Monitor",
        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    },
    {
        id: 5,
        name: "Monitor",
        src: 'https://rukminim2.flixcart.com/image/210/210/kxp0mfk0/deodorant/c/c/g/-original-imaga36afsjdsrrp.jpeg?q=80',
        price: "From $4999"
    }]
    return (
        <div>
            <div className=' mt-3 font-semibold text-2xl'>Beauty & more</div>
            <div className=' flex gap-4 mt-8 overflow-x-scroll'>
                {
                    product.map((items) =>
                        <div key={items.id} className='border border-gray-400 p-4 rounded-lg w-[150%] '>
                            <img className=' m-2 w-[150%]  h-[100%]' src={items.src}
                                alt={items.name}
                            />
                            <div className='flex flex-col text-center mt-8'>
                                <span>{items.name}</span>
                                <span className='font-semibold'>{items.price}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header3