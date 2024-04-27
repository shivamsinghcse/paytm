import { Link } from "react-router-dom"
export default function BottomWarning({text, url, urlName}){
    return(
        <div className="flex flex-wrap justify-center  w-full text-black font-semibold">
            <div className="">{text}</div>
            
            <Link to={url} className="underline mx-2">{urlName}</Link>
        </div>
    )
}