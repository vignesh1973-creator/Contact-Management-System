import NameComponent from "./NameComponent"
import AddressComponent from "./AddressComponent"
import ActionComponent from "./ActionComponent"

function ContactCard({contact, handleDelete , handleStatusChange}){

    return(

                                <div className="flex flex-col justify-between rounded bg-[#eff4ff] p-4 shadow-md hover:shadow-lg transition">
                                      
                                        <div>

                                            <NameComponent 
                                            contact={contact}/>

                                            <AddressComponent 
                                            contact={contact}/>

                                            <ActionComponent 
                                            contact={contact} 
                                            handleStatusChange={handleStatusChange}
                                             handleDelete={handleDelete}/>

                                        </div>

                                </div>

             
    )
}


export default ContactCard