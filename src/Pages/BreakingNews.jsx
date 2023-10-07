import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-200 px-4 py-4 rounded-lg mt-5">
            <button className="btn btn-error rounded-none ml-4 mr-1 px-6 py-2">Latest</button>
            <Marquee className="font-bold" pauseOnHover={true} speed={100}>
            <Link to="/">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;