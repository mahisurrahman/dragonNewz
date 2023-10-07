import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id} = news;
    return (
        <div className="card w-full bg-base-100 mb-14">
            <figure className="w-full"><img src={image_url} alt="Shoes" /></figure>
            <div className="">
                <h2 className="card-title text-2xl mt-5">{title}</h2>
                <p className="my-5">
                    {
                    details.length >200 ? <p>{details.slice(0,199)} <Link to={`/news/${_id}`} className="text-sm text-blue-400 underline"> Read More</Link></p>
                    : <p>{details}</p>
                    }
                    </p>
                {/* <div className="card-actions justify-center">
                    <button className="btn btn-primary">Share Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default NewsCard;