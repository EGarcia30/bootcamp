export const Note = ({id, title, body}) => {
    return(
        <li>
            <p>{id}</p>
            <h1>{title}</h1>
            <p>{body}</p>
        </li>
    ) 
}