

export const PersonInfo = (props) => {
    return (
        <>
            <div>
                <div> Name: {props.name}</div>
                <div> Password: {props.pass}</div>
                <div> IsAdmin: {props.isAdmin}</div>
            </div>
        </>
    )
}