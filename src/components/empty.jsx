import empty from "../assets/empty.png"
const Empty = ({message}) => {
    return ( 
        <div className="empty">
            <img src={empty} alt="empty" />
            <p>{message}</p>
        </div>
     );
}
 
export default Empty;