import { useState } from "react"
import "./LoginForm.css"


export const LoginForm = (props) => {
    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")
    const [isError, setIsError] = useState(false)
    

    const changeForm = () => {
        props.onRegForm()
    }

    const sendData = () => {
        if (!props.onLogin([login,pass])) {
            setIsError(true)
        }
    }

    return (
        <div>
            <form onChange={() => {setIsError(false)}} onSubmit={(e)=>{e.preventDefault(); sendData()}}>
                <div>
                    <input type="text" name="login" value={login} placeholder="login" onChange={(e) => {setLogin(e.target.value)}}/>
                </div>

                <div>
                    <input type="password" name="pass" value={pass} placeholder="password" onChange={(e) => {setPass(e.target.value)}}/>
                </div>

                <div>
                    <button type="submit">Login</button>
                    <button type="button" onClick={changeForm}> I havent got account yet </button>
                </div>
                {isError ? <h3>There was an error in form </h3> : ""}
            </form>
        </div>
    )
}