import { useEffect, useState, useRef } from "react";
import axiosClient from "../../api/axios";
import "./NavCategories.css"; // Import the CSS file

const NavCategories = () => {
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        await axiosClient.get('categories')
            .then((res) => {
                console.log(res.data);
                setCategories(res.data);
            })
            .catch((err) => { console.log(err) })
    }
    // Fetch categories and subcategories
    useEffect(() => {
        getCategories();
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
        
        console.log(rect.right)
        setActiveCategoryId(categoryId); // Set the currently hovered category
    };

    // Handle mouse leave to hide dropdown
    const handleMouseLeave = () => {
        setActiveCategoryId(null); // Reset active category
    };
    return (
        <>

            <div className="navbarC">
                {/* <div className="containeLink"> */}
                    <div className="goLeft"> &lt;</div>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="navLinkC"
                            
                        >
                            <div onMouseEnter={(e) => handleHover(e, category.id)}  >{category.name}</div>
                            {activeCategoryId === category.id && (
                                <div className="dropdownMenu" style={dropdownStyle} >
                                    {category.subcategories.map((subcategory) => (
                                        <div key={subcategory.id} className="categoryColumn">
                                            <div className="subcategoryTitle">{subcategory.name}</div>
                                            <ul className="semiCategoryList">
                                                {subcategory.semicategories.map((semi) => (
                                                    <li key={semi.id} className="semiCategoryItem">
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

