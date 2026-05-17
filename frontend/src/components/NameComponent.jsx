



function NameComponent({contact}){

    return(
             <div className="flex justify-between items-center mb-5 mt-0 gap-2 text-sm text-gray-500">

                    <h3 className="text-2xl font-bold text-[#00277a]">
                        {contact.userName}
                        </h3>
                   <p className="px-4 p-2 rounded text-[#00277a] bg-[#d3e6ff]">
                    {contact.companyName}
                    </p>
            </div>
    )
}



export default NameComponent