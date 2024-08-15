import { useState } from "react"
import "./RegForm.css"



export const RegForm = (props) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [repeatedPass, setRepeatedPass] = useState("")
    const [isError, setIsError] = useState(false)
    const [isAdded, setIsAdded] = useState(false)


    const submitData = () => {
        if (login !== "" && password !== "" && (password === repeatedPass)) {
            props.onCreateAccount({login: login, pass: password, isAdmin: false})
            setIsAdded(true)
            setLogin("")
            setPassword("")
            setRepeatedPass("")
        }else {
            setIsError(true)
        }
    }

    const changeForm = () => {
        props.onLoginForm()
    }

    return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); submitData();}} onChange={()=>{setIsError(false); setIsAdded(false)}}>

                <div>
                    <input type="text" name="login" value={login}  placeholder="login" onChange={(e) => { setLogin(e.target.value) }} />
                </div>
                <div>
                    <input type="password" name="pass" value={password}  placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div>
                    <input type="password" name="repeatedPass" value={repeatedPass}  placeholder="repeat password" onChange={(e) => { setRepeatedPass(e.target.value) }} />
                </div>

                <div>
                    <button type="submit"> Create Account </button>
                    <button type="button" onClick={changeForm}> I have got account already</button>
                </div>
                {isError ? <h3>There was an error in form </h3> : ""}
                {isAdded ? <h3>Person added</h3> : ""}
            </form>
        </>
    )
}