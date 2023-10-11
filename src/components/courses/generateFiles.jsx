import powerpoint from "../../assets/powerpoint.png"
import word from "../../assets/word.png"
import pdf from "../../assets/pdf.png"
import "../../styles/courses.css"
import { Link } from 'react-router-dom'
// import Comment from './comment'

const GenerateFiles = props => {
    const {content, year} = props
    return(
        <div className='doc' title={content.name}>
            {/* <a href={`https://firebasestorage.googleapis.com/v0/b/learnhub-a3bd7.appspot.com/o/overview%2Ffiles%2F${content.name}?alt=media&token=85e91ed4-0860-49c1-9242-982c8d6fe6e7`}> */}
            <Link to={`${year}/${content.name}`}>
                <div className='file'>
                    <div className="file-image">
                        <img src={`${content.name.includes('.doc') ? word : content.name.includes('.pdf') ? pdf : powerpoint}`} 
                            alt="" 
                            />
                    </div>
                    <p>{content.name}</p>
                </div>
                <div className="comment">
                    <i className="fa-regular fa-comments"></i>
                </div>
            </Link>
            {/* </a> */}

            {/* <Rating /> */}
        </div>
    )
}

export default GenerateFiles