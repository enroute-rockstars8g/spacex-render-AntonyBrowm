import React, {ChangeEvent, FC, useEffect, useState } from "react";
import { getLandpadByID } from "../../services/landpads/service";
import "../../styles/card.css";
export const Landpad: FC = () => {
    const [show, setShow]= useState<boolean>(false);

    const [actual, setActual]=useState<any>([]);

    useEffect(() => {
        const getList= async () =>{
            const list=await getLandpadByID();
            setActual(list);
        }
        getList();
    }, []);
  
console.log(actual);

    const changeShow = (event: ChangeEvent<HTMLInputElement>) => {
        setShow(event.target.checked);
      };
    return (
      <>
        {actual !== undefined ?
            <><div className={"wrapper"}>
                    <div >
                         <div>
                            {actual.map((rocket:any, index:any)=>(
                            <><div className={"card"}>
                                        <div className={"container"}>
                                        <p className={"card article"} key={index}> {rocket.full_name}- {rocket.location.name}-{rocket.location.region}</p>    
                                        <p> {rocket.id}</p>
                                        <p> {rocket.details}</p>
                                        <p>Attempted Landings {rocket.attempted_landings}</p>
                                        <p>Successful landings: {rocket.successful_landings}</p>
                                        <p>Landing Type: {rocket.landing_type}</p>
                                        <p>Status: {rocket.status}</p>
                                        <a href={rocket.wikipedia}>Visit the pad Wiki</a>
                                        </div>
                                </div></>
                            ))}
                        </div>
                    </div>
              </div>
                   
            </>
            : 




            <div><h2>NO LO HIZO</h2></div>
        } 
        
      </>
    );
};