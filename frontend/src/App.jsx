import { useState } from "react"
import ContactFrom from "./components/ContactForm"
import ContactList from "./components/ContactList"

function App() {
  const[contacts, setContacts] = useState([]);

  return (
    <div className="p-8 max-w-[1440px] grid grid-cols-3 mx-auto gap-20">

      <div className="col-span-1 space-y-6">
          <h1 className="text-[#00277a] font-bold text-[30px] mb-10">Contact Management</h1>
          <ContactFrom contacts={contacts} setContacts={setContacts}/>
      </div>
      
      <div className="col-span-2">
        <ContactList contacts={contacts} setContacts={setContacts}/>
      </div>

    </div>
  )
}

export default App
