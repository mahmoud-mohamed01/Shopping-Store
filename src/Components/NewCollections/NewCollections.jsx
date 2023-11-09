import React from "react";
import newCollections_data   from "../Assets/new_collections.js"
import Items from "../Items/Items";
import "./NewCollections.css"

function NewCollections()
{

    return(
    <div className="new-collections">
        <h1>New Collections</h1>
        <hr />
        <div className="new-collections-items">
            {newCollections_data.map((item,idx)=>
            {
                return <Items 
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
                id={item.id}
                key={idx}
                
                 >
                    
                </Items>
            })}

        </div>


    </div>)

}

export default NewCollections;