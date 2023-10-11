import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const ChatBot = () => {
    const [active, setActive] = useState(false)
    const [botMessages, setBotMessages] = useState([
        {
            from: "bot",
            msg: "Hello there I am tobi. Welcome to ShareSync, how may I be of assistance to you"
        },
    ])

    // toggle bot-chat
    const toogleChatBot = () => {
        setActive(prev => !prev)
    }

    // handle bot response to user
    const handleBotResponse = (value) => {
        if(value.toLowerCase().includes("course")){
            setBotMessages(prev => [...prev, {from: "", msg: "To locate courses please click on the courses link from the dashboard. Then select a course of your choice"}])
        }
        if(value.toLowerCase().includes("upload")){
            setBotMessages(prev => [...prev, {from: "", msg: "To locate courses please click on the courses link from the dashboard. Then select a course of your choice"}])
        }
        if(value.toLowerCase().includes("download")){
            setBotMessages(prev => [...prev, {from: "", msg: "To locate courses please click on the courses link from the dashboard. Then select a course of your choice"}])
        }
        if(value.toLowerCase().includes("help")){
            setBotMessages(prev => [...prev, {from: "", msg: "To locate courses please click on the courses link from the dashboard. Then select a course of your choice"}])
        }
        if(value.toLowerCase().includes("review")){
            setBotMessages(prev => [...prev, {from: "", msg: "To locate courses please click on the courses link from the dashboard. Then select a course of your choice"}])
        }
        
    }

    // clear chat
    const clearChat = () => {
        setBotMessages([{from: "bot", msg: "Hello there I am tobi. Welcome to ShareSync, how may I be of assistance to you"}])
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
    }, [botMessages, active]);

    const updateBotMessages = (e, path) =>{
        e.preventDefault()
        setBotMessages(prev => [...prev, {from: path, msg: e.target[0].value}])
        handleBotResponse(e.target[0].value)
        setTimeout(() => {
            e.target[0].value = ""
            
        }, 1000);
    }

    return ( 
        <div className="chatbot">
            <div className={`bot-chat ${active && "show-bot-chat"}`}>
            <div className="chatbot-nav">
                <h4>Chatbot</h4>
                <button onClick={clearChat}>Clear Chat</button>
            </div>
                <div className="bot-messages" ref={scrollContainerRef}>
                    {
                        botMessages.map(messages => (
                            <p className={`${messages.from === "user" && "user"}`}>{messages.msg}</p>
                        ))
                    }
                </div>
                <form className="bot-user-input" onSubmit={e => updateBotMessages(e, "user")}>
                    <input type="text" placeholder="Type here" required/>
                    <button><i className="bi bi-send"></i></button>
                </form>
            </div>
            <div className="bot-icon" onClick={toogleChatBot}>
                <i className="bi bi-robot"></i>
            </div>
        </div>
     );
}
 
export default ChatBot;