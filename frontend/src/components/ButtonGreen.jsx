export default function ButtonGreen({children,onclick}){
    return(
        <button className="bg-green-600 rounded-md my-2 text-white font-bold w-full h-10" onClick={onclick}>{children}</button>
    )
}