import Card from "./Card";

function Tours({tours,removeTour}){
     return(
        <div className=" container">
            <div>
                <h2 className="title">Plan With Lokesh</h2>
            </div>

            
            {/* crating all the cards using map  */}
            {/* for every tour in tours we creating a card
             we will be getting 7 tours as a prop(tours) from App.js
             now map every tour with a card component seprately */}
       
       
           <div className="cards">
            {
                tours.map((tour)=>{
                    return <Card {...tour} removeTour={removeTour}></Card>
                })
            }
           </div>
          

        </div>
     );
}

export default Tours;