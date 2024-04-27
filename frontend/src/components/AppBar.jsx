export default function AppBar({userName}){
    return(
        <div className="flex justify-between items-center p-5   shadow-sm ">
            <div className="text-blue-400 font-extrabold text-4xl">Paytm</div>
            <div className=" flex items-center gap-3">
                <div>{userName}</div>
                <div className="rounded-full bg-slate-300 w-10 h-10 relative flex justify-center items-center">{userName.slice(0,1)}</div>
            </div>
        </div>
    )
}