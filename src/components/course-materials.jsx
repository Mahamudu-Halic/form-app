import { Link, useParams } from "react-router-dom";
import { storage } from '../utils/firebase.utils'
import {ref, listAll} from 'firebase/storage'
import {useEffect, useState } from 'react'
import GenerateFiles from './generateFiles'
import GenerateVideos from './generateVideos'
import empty from "../images/empty.png"
import "../styles/courses.css"


const CourseMaterials = () => {
    const [getFiles, setGetFiles] = useState([])
    const [getVideos, setGetVideos] = useState([])
    const {param} = useParams()
    // window.location.reload()
    console.log(window.location)
    useEffect(() => {
        try {
            //fetch files from firebase
            const files = ref(storage, `courses/${param}/files`)
            listAll(files)
            .then(res => {
                setGetFiles(res.items)
            })
            
            //fetch videos from firebase
            const videos = ref(storage, `courses/${param}/videos`)
            listAll(videos)
            .then(res => {
                setGetVideos(res.items)
            })
        } catch (error) {
            console.log('courses', error)
        }
    }, [])

    
    return ( 
        <div className="courses">
            <h2>{param}</h2>
            {
                //no files or videos
                !getFiles.length && 
                !getVideos.length &&
                <div className="empty">
                    <img src={empty} alt="" />
                </div>
            }

            <div className="files">
            {
                //getFiles
                getFiles.map((content, i) =>{
                    return(
                        <GenerateFiles 
                        key={i}
                        content={content}
                        />
                    )
                })
            }
            </div>

            <div className="videos">
            {
                //getVideos
                getVideos.map((content, i) =>{
                    return(
                        <GenerateVideos 
                        key={i}
                        content={content}
                        />
                        )
                    })
                }
            </div>

            <Link to="/courses" className="back-link"><i className="fa-solid fa-arrow-left-long"></i></Link>

        </div>
    );
}
 
export default CourseMaterials;