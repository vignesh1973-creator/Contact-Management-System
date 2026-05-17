import { useState , useEffect } from "react"
import axios from "axios"
import ContactCard from "./ContactCard";


function ContactList ({contacts, setContacts}){

    const[filter, setFilter] = useState('');
    const[search, setSearch]= useState('');
    const[loading, setLoading]= useState(true);


    useEffect(()=>{
       
        const fetchContacts =  async ()=>{

            setLoading(true)

             const query =  `?status=${filter}&search=${search}`;

            const fetchPromise = await  axios.get(`http://localhost:5000/contacts${query}`)
            .then((res)=>{
                setContacts(res.data.result.data)
            })
            .catch((err)=>console.log(err));
            
            const delay = new Promise((resolve)=>setTimeout(resolve,1000))

            await Promise.all([fetchPromise , delay])
            setLoading(false)
        }

        fetchContacts()

    },[filter,search, setContacts])



    const handleStatusChange = async(status,id)=>{
            try {
                await axios.put(`http://localhost:5000/contacts/${id}`,{
                    status
                })
                setContacts((prev)=> prev.map((contact)=> contact._id === id ? {...contact, status}: contact))
            } catch (err) {
                console.log(err);
                
            }
    }

    const handleDelete = async(id)=>{

       if(confirm('if you confirm want to delete')){
        try {
           await  axios.delete(`http://localhost:5000/contacts/${id}`)
         setContacts((prev)=> prev.filter((contact)=> contact._id !== id))
        } catch (err) {
            console.log(err);
            
        }
       }
    }

    return(
       <>
            <div className="flex gap-10">

                 <select 
                 className="bg-[#00277a] text-white p-2 rounded cursor-pointer outline-0"
                  value={filter}
                 onChange={(e)=> setFilter(e.target.value)}>

                      <option value="">All Status</option>
                      <option value="Interested">Interested</option>
                        <option value="Follow-Up">Follow-Up</option>
                        <option value="Closed">Closed</option>
                 </select>

                 <input 
                    type="text" 
                    className="w-full bg-[#eff4ff] text-[#0c002b] p-3 rounded outline-0" placeholder="Search"
                    value={search} 
                    onChange={(e)=> setSearch(e.target.value)}
                 />

            </div>

            {loading ?
            (
                    <div 
                       className="w-full h-[415px] rounded p-[20px]  mt-10 gap-4 flex flex-col items-center justify-center" 
                    >
                        <img 
                            src="/loading.svg" 
                            height={80} 
                            width={80} 
                        />
                        <p 
                        className="text-[#00277a] text-2xl font-semibold"
                        >Loading...</p>

                    </div>
            ) :
            (
                <>

                    <div className="mt-10">
                                
                            {contacts.length === 0 && (
                                <div 
                                className="w-full h-[415px] rounded  
                                p-[20px]  mt-10 gap-4 flex flex-col items-center justify-center bg-[#eff4ff]
                                 ">
                                <img 
                                src="/no-data.avif" 
                                height={350} 
                                width={350} 
                                className="rounded-lg"/>
                                <p 
                                className="text-[#00277a] text-2xl font-semibold capitalize"
                                >no contact found</p>
                            </div>
                            )}
                    </div>

                    <div className="grid grid-cols-2 gap-10">

                        {contacts.map((contact)=>(

                            <ContactCard 
                            key={contact._id} 
                            contact={contact} 
                            handleDelete={handleDelete} 
                            handleStatusChange={handleStatusChange}/>


                        ))}
                    </div>
                
                </>
            )}
       </>
    )
}


export default ContactList