import { useState } from "react";

function fromValidationExample(){
    const[email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    const[isEmailValid,setEmailValid]=useState(true);
    const[isPasswordValid,setlsPasswordValid]=useState(true);

    const handleEmailChange=(e)=>{
        const emailValue=e.target.value;setEmail(emailValue);
        setIsEmailValid(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailValue)); // Simple email regex validation
    };
    
    const handlePasswordChnge=(e)=>{
        const PasswordValue=e.target.value;
        setPassword(PasswordValue);

        setlsPasswordValid(PasswordValue.length>=8);
    }

 return(
    <div>
        <form>
            <div>
                <lable>Email:</lable>
            </div>
        </form>
    </div>
 )



    }

