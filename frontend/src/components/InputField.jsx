



function InputField({
    type='text',
    placeholder,
    value,
    onChange
}){

    return(

        <input 
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         className="p-3 w-full rounded outline-0  bg-[#eff4ff] text-[#0c002b] "  />
    )
}



export default InputField