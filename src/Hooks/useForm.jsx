import React, { useEffect } from 'react'


const types = {
    email:{
        regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencher um email válido'
    }
}

const useForm = (type) =>{

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    useEffect(()=>{
      //  console.log('valor entrada: ', type)
    })

    function onChange({target}){
       if(error) validate(target.value)
        setValue(target.value)
    }

    function validadeEmail(email){
        if(!email){
            setError('Preencha um valor');
            return false;
        }else if(types[type] && !types.email.regex.test(value)){
                setError(types[type].message);
                return false;
        }else{
            setError(null);
            return true;
        }
    }

    function validate(value){
        if(!value){
                setError('Preencha um valor');
            return false;            
        }else if(types[type] && !types[type].regex.test(value)){

            setError(types[type].message);
            return false;
        }else 
        {
            setError(null);
            return true;
        }
    }
    
    return {
        value, 
        setValue,
        onChange,
        error,
        validate: ()=> validate(type),
        onBlur: ()=> validate(value)
    }
}  
export default useForm;
