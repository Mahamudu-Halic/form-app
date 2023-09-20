import { Helmet } from "react-helmet";
import "../styles/chat.css"
import { useContext } from "react";
import { Context } from "./context.provider";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Empty from "./empty";
import { arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.utils";

var chatRef
const Chat = () => {
    const date = new Date()
    const [messages, setMessages] = useState([])
    const [topic, setTopic] = useState([])
    const {isLight} = useContext(Context)
    const [create, setCreate] = useState(false)
    const [searchField, setSearchField] = useState('')
    const [filteredTopics, setFilteredTopics] = useState(topic)
    const [showDashboard, setShowDashboard] = useState(true)

    //show dashboard
    const handleShowDashboard = () => {
        setShowDashboard(!showDashboard)
    }
    const docRef = doc(db, "chats", "topics")
    //get topics
    useEffect(() => {
        const getTopics = async () => {
            const docSnap = await getDoc(docRef)

            try {
                if(docSnap.exists()){
                    setTopic(docSnap.data().topic)
                }
                else{ 
                    await setDoc((docRef), {
                        topic: ["what is html?"]
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }

        return () => {getTopics()}

    }, [])

//get chat
    const getChat = async (chat) => {
        chatRef = doc(db, "chats", chat)
        const docSnap = await getDoc(chatRef)

        try {
            if(docSnap.exists()){
                setMessages(docSnap.data().chats)
            }
            else{ 
                await setDoc((chatRef), {
                    chats: []
                })
            }
            handleShowDashboard()
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
            return topic.toLowerCase().includes(searchField)
        })

        setFilteredTopics(newtopics)
    }, [searchField, topic])

    // send message
    const handleSend = async (e) => {
        e.preventDefault()
        try {
            
            setMessages(prev => [...prev, {
                message: e.target[0].value,
                time: date.toDateString()
            }])
            await updateDoc(chatRef, {
                chats: arrayUnion({
                    message: e.target[0].value,
                    time: date.toDateString()
                })
            })
        } catch (error) {
            console.log(error)
        }
        setTimeout(() => {
            e.target[0].value = "";
        }, 1000);
    }

    //create new topic popup
    const handleCreate = () => {
        setCreate(!create)
    }

    //create new topic
    const updateTopics = async e => {
        e.preventDefault()
        
        try {
            setTopic(prev => [...prev, e.target[0].value])
            setCreate(!create)
            await updateDoc(docRef, {
                topic: arrayUnion(e.target[0].value)
            })
        } catch (error) {
            console.log(error)
        }
        setTimeout(() => {
            e.target[0].value = "";
        }, 1000);
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
                <div className={`${showDashboard && "overlay"}`}></div>
                    <div className="arrow">
                        <button onClick={handleShowDashboard}>
                        <i className={`fa-solid ${showDashboard ? "fa-chevron-left" : "fa-chevron-right"}`}></i>

                        </button>
                    </div>
                <div className={`chat-dashbord ${showDashboard && "show-dashboard"}`}>
                    <div className={`topic-name ${create && "add"}`}>
                        <button onClick={handleCreate}><i className="fa-solid fa-close"></i></button>
                        <form action="" onSubmit={updateTopics}>
                            <input type="text" placeholder="topic name" />
                            <button>create</button>
                        </form>
                    </div>
                    <div className="chat-navbar">
                        <h2>Chat</h2>
                        <button title="create new topic" onClick={handleCreate}><i className="fa-solid fa-edit"></i></button>
                    </div>
                    <div className="searchbar">
                        <input type="text" name="" id="" placeholder="search" onChange={handleChange}/>
                    </div>

                    <div className="topics">
                        {
                            filteredTopics.map(topic => (
                                <button onClick={() => getChat(topic)}>{topic}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="chatbox">
                    <div
                        ref={scrollContainerRef}
                        className="chat-messages">
                        {
                        //no files or videos
                            messages.length == 0 &&
                            <Empty />
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
        </div>
    );
}

export default Chat;