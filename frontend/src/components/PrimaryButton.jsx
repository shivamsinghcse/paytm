export default function PrimaryButton({children,onclick}){
    return(
        <button className="w-full h-12 rounded-md text-white font-bold my-2 bg-black" onClick={onclick}>{children}</button>
    )
}