import { useState } from "react"
import axios from 'axios';

import InputField from "./InputField";

function ContactFrom({ contacts, setContacts }) {
    const [userName, setUserName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [status, setStatus] = useState('Interested');


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!userName || !email) return alert("fill the fields required")

        try {
            const res = await axios.post('http://localhost:5000/contacts', {
            userName, companyName, email, phoneNo, status
        })
        setContacts([res.data.result, ...contacts]);
        setUserName('');
        setCompanyName('');
        setEmail('');
        setPhoneNo('')
        setStatus('Interested')
        
        } catch (err) {
            console.log(err);
            
        }
    }


    return (
        <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>

            <InputField 
             placeholder="Name"
              value={userName}
             onChange={(e) => setUserName(e.target.value)}
             />
                

            <InputField 
             placeholder="Company"
              value={companyName}
             onChange={(e) => setCompanyName(e.target.value)}
             />


            <InputField 
            type="email"
             placeholder="Email"
              value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
            

            <InputField 
             placeholder="Phone.No"
              value={phoneNo}
             onChange={(e) => setPhoneNo(e.target.value)}
             />
            

            <select 
            value={status} 
            className="p-3 w-full rounded outline-0 bg-[#eff4ff] cursor-pointer text-[#0c002b]"
             onChange={(e) => setStatus(e.target.value)}
             >
                <option value="Interested">Interested</option>
                <option value="Follow-Up">Follow-Up</option>
                <option value="Closed">Closed</option>
            </select>
            
            <button 
            className="cursor-pointer mt-4 w-full bg-[#00277a]
             hover:bg-[#002266] rounded 
             text-white px-4 py-3 text-lg 
             text-center font-semibold
            ">Submit</button>
        </form>
    )
}

export default ContactFrom