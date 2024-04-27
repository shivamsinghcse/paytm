export default function InputBox({label,placeholder,type,onchange}){
    return(
        <div className="my-2">
        <div className="font-bold px-4">{label}</div>
        <input type={type} onChange={onchange} placeholder={placeholder} className="w-full h-12 rounded-md px-4 border-2 border-gray-300"></input>
        </div>
    )
}