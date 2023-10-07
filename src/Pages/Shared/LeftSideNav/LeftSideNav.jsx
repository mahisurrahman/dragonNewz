import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('../../../../public/data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));



    }, [])

    return (
        <div className="pb-4 pl-4 pr-4">
            <h2 className="text-2xl font-bold mb-5">All Categories</h2>
            <div>
                {
                    categories.map(category =>
                        <Link className="block"
                            key={category.id}
                            to={`/category/${category.id}`}
                            ><h2 className="text-lg my-5 hover:text-blue-600 ml-5">{category.name}</h2>
                        </Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;