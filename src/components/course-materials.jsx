import { Link, useParams } from "react-router-dom";
import { storage } from '../utils/firebase.utils'
import {ref, listAll} from 'firebase/storage'
import {useEffect, useState } from 'react'
import GenerateFiles from './generateFiles'
import GenerateVideos from './generateVideos'
import "../styles/courses.css"
import Empty from "./empty";


const CourseMaterials = () => {
    const [getFiles, setGetFiles] = useState([])
    const [getVideos, setGetVideos] = useState([])
    const [isActive, setIsActive] = useState("1")
    const {param} = useParams()
    useEffect(() => {
        try {
            //fetch files from firebase
            const files = ref(storage, `courses/${param}/year/${isActive}/files`)
            listAll(files)
            .then(res => {
                setGetFiles(res.items)
            })
            
            //fetch videos from firebase
            const videos = ref(storage, `courses/${param}/year/${isActive}/videos`)
            listAll(videos)
            .then(res => {
                setGetVideos(res.items)
            })
        } catch (error) {
            console.log('courses', error)
        }
    }, [isActive])

    const yearList = [1, 2, 3, 4, 5, 6]

    // handleActiveClass
    const handleActiveClass = year => {
        setIsActive(year)
    }
    return ( 
        <div className="courses course-material">
            <h2>{param}</h2>
            <div className="year">
                {
                    yearList.map(year => (
                        <button onClick={() => handleActiveClass(year)} className={`${isActive == year ? "active" : ""}`}>year {year}</button>
                    ))
                }
            </div>
            {
                //no files or videos
                !getFiles.length && 
                !getVideos.length &&
                <Empty />
            }

            {/* course contents */}
            <div className="course-content">
                <div className="files">
                {
                    //getFiles
                    getFiles.map((content, i) =>{
                        return(
                            <GenerateFiles 
                            year={isActive}
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
            </div>

            <Link to="/courses" className="back-link" title="back"><i className="fa-solid fa-arrow-left-long"></i></Link>

        </div>
    );
}
 
export default CourseMaterials;