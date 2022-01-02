import React, { useEffect, useState } from "react";




const Temp=()=>{
    const [city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");
    useEffect(()=>{
            const ftechApi=async()=>{
                const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e8df00f36536dcaa3cb1aa6941d7d060`
                
                const response=await fetch(url);
                const resJson= await response.json();
                setCity(resJson.main);
            }


        ftechApi();
    },[search])
    return(
        <>
             <div className="container">
             <div className="yash">
                    <input
                    type="search"
                   onChange={(x)=>{
                       setSearch(x.target.value)

                   }

                   } 
                    
                    ></input>
                    
                    </div>
                    {
                       
                        !city?(
                            <p>NO DATA FOUND</p>
                        ):(
                            <div className="info">
                      <h2 className="location">
                          {search}
                      </h2>
                      <h1 className="temp">
                          {city.temp}°C
                          
                      </h1>
                      <h3 className="temp_min">Min:{city.temp_min}°C | Max:{city.temp_max}°C</h3>
                         
                        </div>
                        
                        )
                    }
                   
                        <div className="wave">
                        <div className="wave-one"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>

</div>

             </div>

             




        </>
    )
}
export default Temp;