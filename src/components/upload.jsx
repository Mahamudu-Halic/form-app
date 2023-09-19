import { useState } from "react"
import { ref, uploadBytesResumable } from "firebase/storage"
import { useContext } from "react"
import upload from '../images/upload1.svg'
import '../styles/upload.css'
import { storage } from "../utils/firebase.utils"
import { Context } from "./context.provider"
import { Helmet } from "react-helmet"

var fileName = ''
const Upload = () => {
    //useContext
    const {courseList} = useContext(Context)
    //useState
    const [file, setFile] = useState('')
    const [year, setYear] = useState('select year')
    const [course, setCourse] = useState('select course')
    const [college, setCollege] = useState('')
    const [success, setSuccess] = useState(false)
    const [uploading, setUploading] = useState(false)

    // handleChange
    const handleChange = e => {
        setSuccess(false)
        try{
            if(e.target.files){
                fileName = e.target.files[0].name
                setFile(e.target.files[0])

            }
        }
        catch(err){
            console.log(err)
        }
    }

    //handleUpload
    const handleUpload = async folder => {
        const storageRef = ref(storage, `courses/${course}/year/${year}/${folder}`)
        const fileRef = ref(storageRef, file.name)
        await uploadBytesResumable(fileRef, file)
        .then(() => {
            fileName = ''
            setUploading(false)
            setSuccess(true)
            setFile('')
            setCollege("")
        })
        .then(()=>{
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        })
        .catch(err => console.log('upload', err))
    }

    //handleSubmit
    const handleSubmit = async e => {
        e.preventDefault()
        try{
            if(course !== 'select course' && year !== 'select year' && file){
                setUploading(true)
                if(fileName.includes('.doc') || fileName.includes('.ppt') || fileName.includes('.pdf')){
                    return handleUpload('files')
                }
                
                return handleUpload('videos')
            }
        }catch(err){
            console.log('upload',err)
        }
    }
    //handleCourseSelect
    const handleSelect = e => {
        setCourse(e.target.value)
    }
    //handleCollegeSelect
    const handleCollegeSelect = e => {
        setCollege(e.target.value)
    }
    //handleYearSelect
    const handleYearSelect = e => {
        setYear(e.target.value)
    }

    return(
        <div className="upload">
            <Helmet>
                <title>Upload</title>
            </Helmet>
            <div className="upload-home">
                <div className="overlay"></div>
                <h2>Upload Material</h2>
            </div>
            {/* <div className="upload">
                <img src={upload} 
                    alt="" 
                    width="100%"
                />
            </div> */}

            <div className="form">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="file">{fileName}</label>
                        <input type="file" onChange={handleChange} id="file" required/>
                    </div>

                    <div className="select-course">
                        <select className="form-group" name="" id="" onChange={handleCollegeSelect} value={college}>
                            <option value="">Select college</option>
                            <option value='0'>College of Science</option>
                            <option value="1">College of Engineering</option>
                            <option value="2">College of Humanity and Social Science</option>
                            <option value="3">College of Art and Built Environment</option>
                            <option value="4">College of Health Science</option>
                            <option value="5">College of Agriculture and Natural Resources</option>
                        </select>

                        {
                            college === '' ?

                            <p className="requirement">**select college to see courses**</p>

                            :
                            <>
                            <select className="form-group" name="" id="" required onChange={handleSelect}>
                                <option value="select course">select courses</option>
                                {
                                    courseList[college].map((list) => {
                                        return(
                                            <option key={list}>{list}</option>
                                            )
                                        })
                                    }
                            </select>

                            <select className="form-group" name="" id="" onChange={handleYearSelect}>
                                <option value="select year">select year</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            </>
                        }
                    </div>

                    <button><i className='fa-solid fa-upload'></i> upload</button>
                    {/* {uploading && <p>uploading...</p>} */}
                    {/* {success && <p>upload successful</p>} */}
                    <button className={`feedback ${uploading && "active"}`}>uploading...</button>
                    <button className={`feedback ${success && "active"}`}>upload successful</button>
                </form>
            </div>
        </div>
    )
}

export default Upload