import Contact from '../models/contact.js';
import {asyncHandler} from '../utils/asyncHandler.js'

import { createContactService , getContactService
    , updateContactService , deleteContactService
 } from '../services/contactService.js';


 
const createContact = asyncHandler(async(req,res)=>{

    const user = await createContactService(req.body)

    res.status(201)
        .json({
            success: true,
            result: user
        })
        
})


const getContact = asyncHandler(async(req,res)=>{
       
    const user = await getContactService(req.query)

    res.status(200).json({
        success:true,
        result:user
    })
   
   
           
        
})



const updateContact = asyncHandler(async(req,res)=>{

     const user = await updateContactService(req.params.id , req.body)

     res.status(200).json({
        success: true,
        result: user
     })
    
})


const deleteContact = asyncHandler(async(req,res)=>{
 
    await deleteContactService(req.params.id)

    
    res.status(204).json({
        success:true,
        message:"contact deleted"
    })
})


export {createContact, getContact , updateContact , deleteContact}