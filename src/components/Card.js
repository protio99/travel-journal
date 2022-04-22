import React from 'react'
//import travel from 'images/placeholder.png'



export default function Card(props){
    return(
        <div>
        <div className='card'>
            <img className='card-img' src = {props.item.imageUrl}></img>
            <div className='card-main'>
                <div className='card-main-info'>
                    <img src="images/placeholder.png"></img>
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl} >View on Google Maps</a>
                </div>
                <div className='card-main-text'>
                    <h2>{props.item.title}</h2>
                    <h5>{props.item.startDate} - {props.item.endDate}</h5>
                    <p>{props.item.description}</p>
                </div>
            </div>

        </div>
            <hr/>
        </div>
    )
}