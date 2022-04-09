import React, {ChangeEvent, FC, useEffect, useState } from "react";
import { getLandpadByID } from "./services/landpads/service";
import { Landpad } from "./components/hideShow/landpads";
export const App: FC = () => {
    const [show, setShow]= useState<boolean>(false);

    const [actual, setActual]=useState<any>([]);

    useEffect(() => {
          getLandpadByID();
    }, []);
  
console.log(actual);

    const changeShow = (event: ChangeEvent<HTMLInputElement>) => {
        setShow(event.target.checked);
      };
    return (
      <>
        <h1>SPACE X Land Pads</h1>
        <div><Landpad /></div>
      </>
    );
};