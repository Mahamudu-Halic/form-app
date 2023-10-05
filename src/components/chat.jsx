import { Helmet } from "react-helmet";
import "../styles/chat.css"
import { useContext } from "react";
import { Context } from "./context.provider";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Empty from "./empty";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.utils";
import { useClerk } from "@clerk/clerk-react";
import { hover } from "@testing-library/user-event/dist/hover";

var chatRef
const Chat = () => {

    const docRef = doc(db, "chats", "topics")
    const date = new Date()
    const [currentChat, setCurrentChat] = useState()
    const [topicHeading, setTopicHeading] = useState("")
    const [messages, setMessages] = useState([])
    const [topic, setTopic] = useState([])
    const {isLight} = useContext(Context)
    const [create, setCreate] = useState(false)
    const [searchField, setSearchField] = useState('')
    const [filteredTopics, setFilteredTopics] = useState(topic)
    const [showDashboard, setShowDashboard] = useState(true)
    const {user} = useClerk()
    //show dashboard
    const handleShowDashboard = () => {
        setShowDashboard(!showDashboard)
    }
    //get topics
    const getTopics = async () => {
        const docRef = doc(db, "chats", "topics")
        const docSnap = await getDoc(docRef)
        try {
            if(docSnap.exists()){
                setTopic(docSnap.data().topic)
            }
            else{ 
                await setDoc((docRef), {
                    topic: []
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        return () => {getTopics()}
    }, [])

    setTimeout(() => {
        getTopics()
    }, 1000);

//get chat
    const getChat = async (chat) => {
        chatRef = doc(db, "chats", chat)
        setCurrentChat(chat)
        const docSnap = await getDoc(chatRef)
        setTopicHeading(chat)
        try {
            if(docSnap.exists()){
                setMessages(docSnap.data().chats)
            }
            else{ 
                await setDoc((chatRef), {
                    chats: []
                })
            }
            setShowDashboard(false)
        } catch (error) {
            console.log(error)
        }
    }

    //handle search change
    const handleChange = e => {
        setSearchField(e.target.value)
    }

    // filter topics
    useEffect(() => {
        const newtopics = topic.filter(topic => {
            return topic.toLowerCase().includes(searchField.toLowerCase())
        })

        setFilteredTopics(newtopics)
    }, [searchField, topic])

    // send message
    const handleSend = async (e) => {
        e.preventDefault()
        try {
            
            await updateDoc(chatRef, {
                chats: arrayUnion({
                    message: e.target[0].value,
                    time: date.toDateString(),
                    profile: user.profileImageUrl,
                    name: user.fullName
                })
            })
            .then(() => {
                e.target[0].value = "";
                getChat(currentChat)
            })
        } catch (error) {
            console.log(error)
        }

    }

    //create new topic popup
    const handleCreate = () => {
        setCreate(!create)
    }

    //create new topic
    const updateTopics = async e => {
        e.preventDefault()
        
        try {
            // setTopic(prev => [...prev, e.target[0].value])
            setCreate(!create)
            await updateDoc(docRef, {
                topic: arrayUnion(e.target[0].value)
            })
            .then(()=>{
                e.target[0].value = "";
                getTopics()
            })
        } catch (error) {
            console.log(error)
        }
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
                <title>Community</title>
            </Helmet>
            
            {/* chat community */}
            <div className="chat-community" >
                <div className={`${showDashboard && "overlay"}`} onClick={handleShowDashboard}></div>
                <div className="arrow">
                    <button onClick={handleShowDashboard}>
                        <i className={`fa-solid ${showDashboard ? "fa-chevron-left" : "fa-chevron-right"}`}></i>
                    </button>
                </div>
                {/* dashboard */}
                <div className={`chat-dashbord ${showDashboard && "show-dashboard"}`}  style={ isLight ?  { background: "#dad4d4", color: "#121212" } :  { background: "#1d1d1d", color: "#fff" } }>

                    {/* create topic */}
                    <div className={`create-topic ${create && "create"}`}>
                        <button onClick={handleCreate} style={{color: "#fff"}}><i className="fa-solid fa-close"></i></button>
                        <form action="" onSubmit={updateTopics}>
                            <input type="text" placeholder="topic name" required />
                            <button>create</button>
                        </form>
                    </div>

                    {/* chat navbar */}
                    <div className="chat-navbar">
                        <h3>Community</h3>
                        <button title="create new topic" onClick={handleCreate} style={isLight ? {} : {color: "#fff"}}><i className="fa-solid fa-edit"></i></button>
                    </div>
                    <div className="searchbar">
                        <input type="search" name="" id="" placeholder="search" onChange={handleChange}/>
                    </div>

                    {/* topics */}
                    <div className="topics">
                        {
                            //show topics
                            filteredTopics.map(topic => (
                                <button onClick={() => getChat(topic)} style={isLight ? {} : {color: "#fff"}}>{topic}</button>
                            ))
                        }
                        
                    </div>
                </div>

                {/* chatbox */}
                <div className="chatbox" style={isLight ?  {background: "#F2F4F6" } :  {background: "#191919",color: "#fff"}}>
                    {
                        topicHeading.length !== 0 &&
                        <div className="topic-heading">
                            <h2>{topicHeading}</h2>
                        </div>
                        // : <div className="overlay"></div>
                    }

                    {/* chat messages */}
                    <div
                        ref={scrollContainerRef}
                        className="chat-messages">
                        {
                        //if message is empty
                            messages.length === 0 &&
                            <Empty message={"No message found"}/>
                        }
                        {
                            //show messages
                            messages.map(message => (
                                <div className="user-chat">
                                    <div className="user-profile">
                                        <img src={message.profile} alt="" />
                                    </div>
                                    <div className="message" style={isLight ? {background: "#c0bdbd"} : {background: "#1d1d1d"}}>
                                        <p className="name">{message.name}</p>
                                        <p className="message-txt">{message.message}</p>
                                        <p className="time">{message.time}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <form className="entry-field" onSubmit={handleSend}>
                        <input type="text" placeholder="Type a message" required style={isLight ?  { background: "#c0bdbd", color: "#121212" } :  { background: "#1d1d1d" } }/>
                        <button><i className="fa-regular fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chat;