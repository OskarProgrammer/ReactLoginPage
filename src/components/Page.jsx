import { PersonInfo } from "./PersonInfo"
import "./Page.css"

export const Page = (props) => {

    return (
        <>
            <div>You are logged as {props.login}</div>
            <div>
                Your permissions: {props.isAdmin ? "admin" : "" }
            </div>

            {props.isAdmin ?  <h1> List of users: </h1> : ""}
            {props.isAdmin ? props.people.map((item)=> {
                return (<>
                    {item.key === props.keyItem ? "" : <h4>
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