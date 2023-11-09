import "./Css/ShopCategory.css"
import dropdownicon from"../Components/Assets/dropdown_icon.png"
import Items from "../Components/Items/Items";
import allProducts from "../Components/Assets/all_product.js";



function ShopCategory(props)
{
    return(
        <div className="shop-category">

            <div className="banner">
                <img src={props.banner} alt="" />
            </div>

            <div className="items-count">
                <div>
                <p> showing 1-12 out of 54 products</p>
                </div>
                <div className="sort-btn">
                    sort by
                    <img src={dropdownicon} alt="" />
                </div>
                </div>

                <div className="shop-products">
                    {allProducts.map((item,idx)=>
                    {
                        
                        if(item.category===props.category)
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
                        }
                        else
                        {
                            return null;
                        }
                        


                    })}

                </div>




        </div>
    )


}


export default ShopCategory;