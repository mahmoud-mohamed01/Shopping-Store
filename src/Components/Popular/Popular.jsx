import React from "react";
import "./Popular.css";
import data from"../Assets/data";
import Items from "../Items/Items";

function Popular()
{

    return (
    
    <div className="Popular">
        <h1>Popular In Men</h1>
        <hr/>
        <div className="popluar-item">
            {data.map((item,idx)=>
            {
                return <Items
                 key={idx}
                 id={item.id}
                 image={item.image} 
                 name={item.name} 
                 oldPrice={item.old_price}
                 newPrice={item.new_price}
                ></Items>
            })}

            
        </div>

    </div>
    
    )    
        
   
}

export default Popular;