

function ActionComponent({contact,handleStatusChange , handleDelete}){
    return(
        <div className="flex justify-between items-center gap-2 mt-3">
                   <select value={contact.status} className="p-1 rounded shadow-md cursor-pointer outline-0"
                    onChange={(e)=> handleStatusChange(e.target.value,contact._id)}>
                               <option value="Interested">Interested</option>
                              <option value="Follow-Up">Follow-Up</option>
                              <option value="Closed">Closed</option>
                    </select>

                     <button className="rounded text-white bg-red-500 hover:bg-red-600 cursor-pointer px-3 py-1 "
                          onClick={()=> handleDelete(contact._id)}>Delete</button>
        </div>


    )
}


export default ActionComponent