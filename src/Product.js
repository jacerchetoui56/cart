import React from 'react'

export default function Product(props) {
    const { title, price, amount, img } = props;
    return (
        <div className='product'>
            <img src={img} alt={title} />
            <div className="infos">
                <div className="name">
                    {title}
                </div>
                <div className="category">
                    Phone
                </div>
            </div>
            <div className="amout">
                <button>-</button>
                <span>
                    {amount}
                </span>
                <button>+</button>
            </div>
            <div className="price__remove">
                <div className="price">
                    ${price}
                </div>
                <div className='remove-btn'>
                    Remove
                </div>
            </div>
        </div>
    )
}
