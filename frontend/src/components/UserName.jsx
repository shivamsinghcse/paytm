export default function UserName({username}){
    return(
        <div className="flex gap-3">
            <div className="text-4xl bg-green-600 text-white rounded-full h-16 w-16 flex justify-center items-center">{username.slice(0,1)}</div>
            <div className="flex items-center text-3xl font-bold">{username}</div>

        </div>
    )

}