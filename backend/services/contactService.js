import Contact from "../models/contact.js";

const createContactService = async(data)=>{
    
    const {userName , companyName , email ,phoneNo, status} = data;
    
        const existing = await Contact.findOne({email})
    
        if(existing){
            const err = new Error("User already exists");
            err.status = 400;
            throw err
        }
    
         const user =  await Contact.create({
            userName,
            companyName,
            email,
            phoneNo,
            status
        })


        return user;

}




const getContactService = async(query)=>{
    
    const {status , search ,page=1 , limit = 10} = query

    let filters = {}

    if(status){
        filters.status = status
    }

    if(search){
        const regex = RegExp(search , "i")

        filters.$or = [
            {userName:regex},
            {companyName : regex}

        ]
    }

    const pagenum = parseInt(page)
    const limitnum = parseInt(limit)
    const skip = (pagenum -1 )*limitnum
   

    const totalItems = await Contact.countDocuments(filters)

     const totalPages = Math.ceil(totalItems/limitnum)

    const users = await Contact.find(filters)
                                .sort({createdAt: -1})
                                .skip(skip)
                                .limit(limitnum)

    
    
    return {
        data: users,
        totalItems,
        page: pagenum,
        limit: limitnum,
        totalPages
    }

}


const updateContactService = async(id, data)=>{
    const updateUser = await Contact.findByIdAndUpdate(
        id,
        data,
        {new: true}
    )

    if(!updateUser){
        const err = new Error("User not found");
            err.status = 400;
            throw err
    }

    return updateUser
}


const deleteContactService = async(id)=>{

    const deleteUser = await Contact.findByIdAndDelete(id);

    if(!deleteUser){
         const err = new Error("User not found");
            err.status = 400;
            throw err
    }
}




export {createContactService , getContactService ,updateContactService, deleteContactService}