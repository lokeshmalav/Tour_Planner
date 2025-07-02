import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {

  const [tours,setTours] = useState(data);

   // remove tour functu=ion
   function removeTour(id){
      const newTours = tours.filter(tour=>tour.id !==id);
      setTours(newTours);
   }

   // if no city is left
    if(tours.length===0){
      return(
        <div className="refresh">
           <h2>No Tours Left</h2>
           <button className="btn-white" onClick={()=>setTours(data)}>
            Refresh
           </button>
        </div>
      );
    }

   // we have to pass remove tour function as props in Tours to get data back

  return (
    <div className="App">
    
    <Tours tours={tours} removeTour={removeTour}></Tours>
   
    </div>
  );
};

export default App;
