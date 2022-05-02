import React from 'react'

function Journal(props) {
  return (
      <>
    <div className='journal'>
        <img src= {`./images/${props.imageUrl}`} alt='image' className='journal--image'/>
        <div className='journal--details'>
            <h4><img src='./images/locater.png ' alt='location logo' className='journal--locater'/> <span className='journal--location'>{props.location.toUpperCase()}</span> <a href= {props.googleMapsUrl} className='journal--links'>View on Google Maps</a></h4>
            <h4 className='journal--date'>{props.startDate} - {props.endDate}</h4>
            <p className='journal--para'>{props.description}</p>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Journal