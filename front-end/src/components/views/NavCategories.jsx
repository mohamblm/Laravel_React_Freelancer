import { useEffect, useState, useRef } from "react";
import axiosClient from "../../api/axios";
import "./NavCategories.css"; // Import the CSS file
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavCategories = () => {
    // const [categories, setCategories] = useState([]);
    const {categories}=useSelector(state=>state.categories)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    async function getCategories() {
        await axiosClient.get('categories')
            .then((res) => {
                // console.log(res.data);
                // setCategories(res.data);
                dispatch({type:'FETCH_CATEGORIES_SUCCESS',payload:res.data})
                
            })
            .catch((err) => { console.log(err) })
          

    }
    // Fetch categories and subcategories
    useEffect(() => {
        if(categories.length===0){
            getCategories();
        // console.log(categories);
        } 
    }, []);
    // const buttonRef = useRef(null);
    const [dropdownStyle, setDropdownStyle] = useState({});
    const [activeCategoryId, setActiveCategoryId] = useState(null); // Tracks which category is active

    // Handle hover to show dropdown
    const handleHover = (event, categoryId) => {
        const rect = event.target.getBoundingClientRect();
        if(categoryId<6){
            setDropdownStyle({
                position: "absolute",
                top: 'auto', // Add scrollY to account for scrolling
                // left: rect.right, // Add scrollX to account for horizontal scrolling
            });
        }else{
            setDropdownStyle({
                position: "absolute",
                top: 'auto', // Add scrollY to account for scrolling
                left:  -620, // Add scrollX to account for horizontal scrolling
            });
        }
        setActiveCategoryId(categoryId); // Set the currently hovered category
    };

    // Handle mouse leave to hide dropdown
    const handleMouseLeave = () => {
        setActiveCategoryId(null); // Reset active category
    };
    const handleSemicategoryClick=(id)=>{
        navigate(`/services?semicategoryId=${id}`);
    }
    const handleSubcategoryClick=(id)=>{
        navigate(`/services?subcategoryId=${id}`);
    }
    const handleCategoryClick=(id)=>{
        navigate(`/services?categoryId=${id}`);
    }

    return (
        <>
            {/* <button onClick={()=>{console.log(categories)}} >ok</button> */}
            <div className="navbarC" >
                {/* <div className="containeLink"> */}
                    <div className="goLeft"> &lt;</div>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="navLinkC"
                            
                        >
                            <button onMouseEnter={(e) => handleHover(e, category.id)}  className="categoryItem" onClick={()=>handleCategoryClick(category.id)}>{category.name}</button>
                            {activeCategoryId === category.id && (
                                <div className="dropdownMenu" style={dropdownStyle} >
                                    {category.subcategories.map((subcategory) => (
                                        <div key={subcategory.id} className="categoryColumn">
                                            <button className="subcategoryTitle"  onClick={()=>handleSubcategoryClick(subcategory.id)}>{subcategory.name}</button>
                                            <ul className="semiCategoryList">
                                                {subcategory.semicategories.map((semi) => (
                                                    <li key={semi.id} className="semiCategoryItem" onClick={()=>handleSemicategoryClick(semi.id)}>
                                                        {semi.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="goRight"> &gt;</div>
                {/* </div> */}
            </div>
        </>
    );
};

export default NavCategories;

