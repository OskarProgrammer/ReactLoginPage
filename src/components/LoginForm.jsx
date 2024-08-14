import { useState } from "react"



export const LoginForm = (props) => {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [repeatedPass, setRepeatedPass] = useState("")
    const [isLoginForm, setIsLoginForm] = useState(true)
    const [isError, setIsError] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    return (
        <>
            <form onChange={() => {
                setIsError(false)
                setIsAdded(false)
            }} 
            onSubmit={(e) => {
                e.preventDefault()
                setIsAdded(false)

                if (isLoginForm) {
                    if (!props.onLogin([name, pass])) {
                        setIsError(true)
                        setName("")
                        setPass("")
                    }
                }else{
                    if (pass === repeatedPass && pass !== "" && name !== ""){
                        props.onRegister({
                            login: name,
                            pass: pass,
                            isAdmin: false,
                            key: crypto.randomUUID()
                        })
                        setName("")
                        setPass("")
                        setRepeatedPass("")
                        setIsLoginForm(true)
                        setIsAdded(true)
                    }else {
                        setName("")
                        setPass("")
                        setRepeatedPass("")
                        setIsLoginForm(true)
                        setIsError(true)
                    }
                }   

                }}>

                {isLoginForm ? "Login Form" : "Register Form"}

                <div>
                    Login: 
                    <input type="text" name="login" defaultValue="" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                </div>

                <div>
                    Password:
                    <input type="password" name="pass" defaultValue="" value={pass} onChange={(e) => {setPass(e.target.value)}}></input>
                </div>

                {isLoginForm ? "" :  
                <div>
                    Repeat Pass: 
                    <input type="password" name="repeatedPass" value={repeatedPass} onChange={(e) => {setRepeatedPass(e.target.value)}} defaultValue={repeatedPass}></input>
                </div>}

                {isError ? "There is an error in the form" : ""}
                {isAdded ? "User added" : ""}

                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={()=>{setIsLoginForm(!isLoginForm)}}>{isLoginForm ? "I havent got account" : "I have account"}</button>
                </div>

            </form>
        </>
    )
}