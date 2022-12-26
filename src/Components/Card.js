import React from 'react'

function Card(props) {
    const {title,activity}=props;
    const imgurl=`https://source.unsplash.com/random/1366x768/?${title}`;
  return (
    <>
        <div className="container">
        <div className="card flex align-items-center border border-success">
            <div className="card-body text-center">
                <h3 className="card-title">Activity-Type &rArr; {title}</h3>
                <h5 className="card-text">Activity-Todo &rArr; {activity}</h5>
            <img src={imgurl} className="card-img-bottom mb-2" alt="..." style={{width:"80%",height:"40%"}}/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Card