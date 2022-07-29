import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ props.title }</h5>
                    <img src={props.img} alt="image" />
                    <p> {props.foot} </p>
                </div>
            </div>
        </>
    )
}

export default Card