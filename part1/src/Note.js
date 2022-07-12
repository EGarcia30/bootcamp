export const Note = ({id, content, categories = []}) => {
    return(
        <li>
            <p>{id}</p>
            <p>{content}</p>
            {
                categories.map((category) =>{
                    return(
                       <p key={category}>{category}</p> 
                    )
                })
            }
        </li>
    ) 
}