


function AddressComponent({contact}){
    return(
             <div className="text-[16px] flex  items-center gap-4 my-3 border-2  border-[#00277a21] rounded  px-4 py-3 text-sm">
                                
                       {/* Email */}
                        <div className="flex items-center gap-2 text-gray-700 flex-1 min-w-0">
                                    <span>
                                      📧
                                    </span>

                                   <p className="break-all">
                                                            {contact.email}
                                      </p>
                        </div>

                                                
                        {/* Phone */}
                        <div className="flex items-center gap-2 text-gray-700 shrink-0">
                                                        <span>📞</span>
                                                        <p>{contact.phoneNo}</p>
                            </div>
                                            
            </div>
    )
}


export default AddressComponent