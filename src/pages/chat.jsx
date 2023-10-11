import { Helmet } from "react-helmet";
import "../styles/chat.css"
import { Context } from "../components/context.provider";
import { useRef, useContext, useState, useEffect } from "react";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.utils";
import { useClerk } from "@clerk/clerk-react";
import {ShowDashboardArrow, ChatDashboard, CommunityChatBox} from '../components/'

var chatRef
const Chat = () => {
    const docRef = doc(db, "chats", "topics")
    const date = new Date()
    const [topicHeading, setTopicHeading] = useState("")
    const [chatMessages, setChatMessages] = useState([])
    const [topic, setTopic] = useState([])
    const {isLight} = useContext(Context)
    const [create, setCreate] = useState(false)
    const [searchField, setSearchField] = useState('')
    const [filteredTopics, setFilteredTopics] = useState(topic)
    const [showDashboard, setShowDashboard] = useState(true)
    const {user} = useClerk()
    const scrollContainerRef = useRef(null);
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

    // get topics on load
    useEffect(() => {
        return () => {getTopics()}
    }, [])

    // ?? 
    setTimeout(() => {
        getTopics()
    }, 1000);

    //get chat
    const getChat = async (topic) => {
        chatRef = doc(db, "chats", topic)
        const docSnap = await getDoc(chatRef)
        setTopicHeading(topic)
        try {
            if(docSnap.exists()){
                setChatMessages(docSnap.data().chats)
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
                e.target[0].value = ""
                getChat(topicHeading)
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
                // getTopics()
            })
        } catch (error) {
            console.log(error)
        }
    }

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
    }, [chatMessages]);
    return ( 
        <div className="chat">
            <Helmet>
                <title>Community</title>
            </Helmet>
            
            {/* chat community */}
            <div className="chat-community" >
                <div className={`${showDashboard && "overlay"}`} onClick={handleShowDashboard}></div>

                {/* display dashboard */}
                <ShowDashboardArrow   handleShowDashboard={handleShowDashboard} showDashboard={showDashboard}  />

                {/* chat dashboard */}
                <ChatDashboard   showDashboard={showDashboard} isLight={isLight} create={create} handleCreate={handleCreate} updateTopics={updateTopics} handleChange={handleChange} topic={topic} getChat={getChat}  filteredTopics={filteredTopics}/>

                {/* community chatbox */}
                <CommunityChatBox   isLight={isLight} topicHeading={topicHeading} scrollContainerRef={scrollContainerRef} chatMessages={chatMessages} handleSend={handleSend}  />
            </div>
        </div>
    );
}
      export default Chat;