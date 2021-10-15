import react,{useState} from "react";

//component
import MenuCollection from "../../Component/restaurant/MenuCollection";



const Menu = () => {

const [menus, setMenus] = useState([]);


    return <>
        <div className="flex flex-wrap gap-3">
            {menus.map((menu) =>( 
            <MenuCollection {...menu}/>
            
            )
         )}
        </div>
    </>
}

export default Menu;
