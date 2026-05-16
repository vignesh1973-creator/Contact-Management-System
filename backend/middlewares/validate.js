
export const Validate = (schema)=>{
    return (req,res,next)=>{
        
        const{error , value} = schema.validate(req.body,{
            abortEarly:false,
            stripUnknown:true
        })


        if(error){
            const err = new Error(error.details[0].message)
            err.status = 400;
            
            return next(err)
        }

        req.body = value;

        next()
    }
}


