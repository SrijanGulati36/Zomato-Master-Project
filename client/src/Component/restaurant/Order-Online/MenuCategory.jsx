import react from "react";
import classnames from "classnames";


//componentsMenu


const MenuCategory = (props) => {
    return <>
    
    <div className={classnames({"text-zomato-400 bg-zomato-50 rounded-lg py-2 px-1 border-r-4 border-zomato-400": props.isActive})}>
        <h3 id={props.name} onClick={props.onClickHandler}>
        {props.name}( {props.items.length})</h3>
    </div>

    
    </>
}

export default MenuCategory;