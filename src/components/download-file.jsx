import { Link, useParams } from "react-router-dom";
import excel from "../images/excel-DJujneaYS-transformed.png"
import powerpoint from "../images/powerpoint.png"
import word from "../images/word.png"
import pdf from "../images/pdf.png"
import { Fragment, useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import "../styles/downloadfile.css"
import { useClerk } from "@clerk/clerk-react";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.utils";
import Empty from "./empty";
const DownloadFile = () => {

    const {route, param, year} = useParams()
    const [url, setUrl] = useState("")
    const [comments, setComments] = useState([])
    const docRef = doc(db, "comments", route)
    const date = new Date()
    const {user} = useClerk()
    //get topics
    const getTopics = async () => {
        const docSnap = await getDoc(docRef)
        try {
            if(docSnap.exists()){
                setComments(docSnap.data().comments)
            }
            else{ 
                await setDoc((docRef), {
                    comments: []
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    setTimeout(() => {
        getTopics()
    }, 3000);


    // send message
    const handleSend = async (e) => {
        e.preventDefault()
        try {
            // setComments(prev => [...prev, {
            //     msg: e.target[0].value,
            //     time: date.toDateString(),
            //     profile: user.profileImageUrl,
            //     name: user.fullName
            // }])
            await updateDoc(docRef, {
                comments: arrayUnion({
                    msg: e.target[0].value,
                    time: date.toDateString(),
                    profile: user.profileImageUrl,
                    name: user.fullName
                })
            })
            .then(() => {
                e.target[0].value = "";
                getTopics()
            })
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        return () => {getTopics()}
    }, [])

    useEffect(() => {
        const storage = getStorage()
        getDownloadURL(ref(storage, `courses/${param}/year/${year}/files/${route}`))
        .then(url => {
            setUrl(url)
        })

    }, [])
    return ( 
        <div className="download-file">
            <div className="image">
                <img src={`${route.includes('.doc') ? word : route.includes('.pdf') ? pdf : powerpoint}`} />
            </div>
            <h2>{route}</h2>
            <div className="links">
                <a href={url} className="download">download</a>
                <Link to={`/courses/${param}`}>back</Link>
            </div>

            <div className="comments">
                <form action="" onSubmit={handleSend}>
                    <input type="text" required placeholder="add comment..."/>
                    <button><i className="fa-solid fa-paper-plane"></i></button>
                </form>

                <h3>Reviews : <span>{comments.length}</span></h3>
                <div className="display-comments">
                        {
                        //if message is empty
                            comments.length === 0 &&
                            <Empty />
                        }
                    
                    {
                        comments.map(comment => (
                            <div className="comment-msg" key={comment.msg}>
                                <div className="comment-img">
                                    <img src={comment.profile} alt="" />
                                </div>
                                <div className="msg-container">
                                    <p className="name">{comment.name}</p>
                                    <p>{comment.msg}</p>
                                    <p className="time">{comment.time}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default DownloadFile;

// https://firebasestorage.googleapis.com/v0/b/learnhub-a3bd7.appspot.com/o/courses%2Fcomputer%20science%2Fyear%2F4%2Ffiles%2FCGLABLectureOne.pdf?alt=media&token=87216a04-efaa-4524-996d-09052ab97ec8
// https://firebasestorage.googleapis.com/v0/b/learnhub-a3bd7.appspot.com/o/courses%2Fcomputer%20science%2Fyear%2F4%2Ffiles%2FCGLABLectureOne.pdf?alt=media&token=87216a04-efaa-4524-996d-09052ab97ec8
// https://firebasestorage.googleapis.com/v0/b/learnhub-a3bd7.appspot.com/o/courses%2Fcomputer%20science%2Fyear%2F4%2Ffiles%2FCgraphics%20pasco.pdf?alt=media&token=1bc3cc2c-7415-4d85-b0f7-c5697c07e887
// https://firebasestorage.googleapis.com/v0/b/learnhub-a3bd7.appspot.com/o/overview%2Ffiles%2F${route}?alt=media&token=85e91ed4-0860-49c1-9242-982c8d6fe6e7