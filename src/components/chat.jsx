import { Helmet } from "react-helmet";
import "../styles/chat.css"
import { useContext } from "react";
import { Context } from "./context.provider";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import empty from "../images/empty.png"

const Chat = () => {
    const date = new Date()
    const [messages, setMessages] = useState([])
    const {isLight} = useContext(Context)

    const handleSend = ( e) => {
        e.preventDefault()

        setMessages(prev => [...prev, {
            message: e.target[0].value,
            time: date.toDateString()
        }])
        setTimeout(() => {
            e.target[0].value = "";
        }, 3000);
    }

    const scrollContainerRef = useRef(null);

    // Function to scroll to the bottom
    const scrollToBottom = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: 'smooth', // You can use 'auto' for instant scrolling
        });
      }
    };
  
    // Scroll to the bottom when the component mounts or updates
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
    return ( 
        <div className="chat">
            <Helmet>
                <title>Chat</title>
            </Helmet>
            
            <div className="chat-community" style={isLight ? {background: "#F2F4F6"} : {background: "#272821"}}>
                <div
                    ref={scrollContainerRef}
                    className="chat-messages">
                    {
                    //no files or videos
                        messages.length == 0 &&
                        <div className="empty">
                            <img src={empty} alt="empty" />
                        </div>
                    }
                    {
                        messages.map(message => (
                            <div className="border">
                                <div className="message">
                                    <p className="message-txt">{message.message}</p>
                                    <p className="time">{message.time}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <form className="entry-field" onSubmit={handleSend}>
                    <input type="text" placeholder="Message" required/>
                    <button><i className="fa-regular fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    );
}

export default Chat;