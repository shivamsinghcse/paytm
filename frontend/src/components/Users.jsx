import { useNavigate } from "react-router-dom"


export default function Users({userlist,onchange}){
    const navigate = useNavigate()
    // const userlist = ['shviam','shubham','manoj', 'kavita']
    return(
        <div className="w-full px-5">
            <div className="font-bold">Users</div>
            <input type='text' onChange={onchange} className="w-full my-5 rounded-md h-9 px-3 border-gray-300 border-2"placeholder="Search users.."></input>
            {userlist.map((items,index)=>{
                return(

                    <div className="w-full flex justify-between" key={index}>
                    <div className=" flex flex items-center gap-4">
                        <div className="bg-gray-300 h-12 w-12 flex justify-center items-center rounded-full my-2">{items.firstName.slice(0,1)}</div>
                        <div className="">{items.firstName}</div>
                    </div>
                    <div><button className="bg-black px-4 py-2 text-white rounded-md font-bold" onClick={(e)=>{
                        navigate(`/send?id=${items._id}+&name=${items.firstName}`)
                    }}>Send Money</button></div>
                </div>
                )
            })}
        </div>
    )
}