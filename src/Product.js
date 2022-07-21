import React from 'react'
import { ACTIONS } from './Context';

export default function Product({ title, price, amount, img, id, dispatch }) {
    return (
        <>
            {
                amount > 0 &&
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
                        <button
                            onClick={() => dispatch({ type: ACTIONS.DECREMENT, payload: { id } })}
                        >-</button>
                        <span>
                            {amount}
                        </span>
                        <button
                            onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: { id } })}
                        >+</button>
                    </div>
                    <div className="price__remove">
                        <div className="price">
                            ${price}
                        </div>
                        <div className='remove-btn'
                            onClick={() => dispatch({ type: ACTIONS.REMOVE, payload: { id: id } })}
                        >
                            Remove
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
