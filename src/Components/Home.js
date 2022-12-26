import React, { useEffect, useState } from 'react'
import Card from './Card'

function Home(props) {
  const [type, setType] = useState(props.type);
  const [data, setdata] = useState([]);

  const HandleOnChange=(e)=>{
    localStorage.setItem("AType",e.target.value);
  }
  const handleOnClick=(e)=>{
    e.preventDefault();
    setType(localStorage.getItem("AType"));
  }

  const activity=async()=>{
    const url=`https://www.boredapi.com/api/activity?type=${type}`;
    const fetchData=await fetch(url);
    const response=await fetchData.json();
    setdata(response);
  }

  useEffect(() => {
    activity();
  },[type])

  // ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  return (
    <>
    <div className="container text-center my-2">
      <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="You can search this Type of Activities=>education, recreational, social, diy, charity, cooking, relaxation, music, busywork " aria-label="Search" onChange={HandleOnChange}/>
          <button className="btn btn-outline-success" onClick={handleOnClick} type="submit">Search</button>
      </form>
    </div>
    <div className="container my-2">
      <Card title={data.type} activity={data.activity}/>
    </div>
    </>
  )
}


Home.defaultProps = {
  type:"education"
};

export default Home