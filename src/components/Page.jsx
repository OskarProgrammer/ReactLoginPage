import { PersonInfo } from "./PersonInfo"
import "./Page.css"

export const Page = (props) => {

    return (
        <>
            <div>You are logged as {props.data.login}</div>
            <div>
                Your permissions: {props.data.isAdmin ? "admin" : "" }
            </div>

            {props.data.isAdmin ?  <h1> List of users: </h1> : ""}
            {props.data.isAdmin ? props.people.map((item)=> {
                return (<>
                    {item.key === props.data.key ? "" : <h4>
                    <PersonInfo name={item.login} pass={item.pass} isAdmin={item.isAdmin} />
                    <button onClick={()=>{
                        props.onDelete(item.key)
                    }}> Delete </button> 
                </h4>}
                </>)
            }): ""}

            <button onClick={() => {
               props.onLogOut()
            }}> Log out </button>
        </>
    )
}