import React from "react";
import { Card,Hr } from "./App.styled";

const Credit =()=>{

    return(
        <>
        <div style={{display:"flex" , width:"90%"} }>
       <div>
       <Card>
        </Card>
           </div> 
         <div style={{width:"200px"}}>
             <h3>payment details</h3>
             <form>
                 <label>CARDHOLDER NAME</label>
                 <br></br>
                 <input style={{ border:"white"}} type="tel"/>
                 <Hr></Hr>
                 <div>
                 <label>CARD NUMBER</label>
                 <br></br>
                 <input style={{ border:"white"}} type="tel"/>
                 <Hr></Hr>
                 </div>
            
                 <div style={{display:"flex" , justifyContent:"space-around"}}>
                     <div>
                         <h4>EXPIRT MOUNTH</h4>
                         <input style={{ border:"white"}} type="number" />
                         <Hr></Hr>
                     </div>
                     <div>
                     <h4>EXPIRT YEAR</h4>
                         <input   style={{ border:"white"}}type="number" />
                         <Hr></Hr>
                        
                     </div>
                     <div>
                     <h4>EXPIRT CVC</h4>
                         <input style={{ border:"white"}} type="number" />
                         <Hr></Hr>
                     </div>
                 </div>
                 <button style={{color:"white",background:"red"}}>PAY</button>

             </form>

         </div>
        </div>
        </>
    )
}

export default Credit