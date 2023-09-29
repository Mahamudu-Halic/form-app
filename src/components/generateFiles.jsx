import word from '../images/word.png'
import pdf from '../images/pdf.png'
import powerpoint from '../images/powerpoint.png'
import "../styles/courses.css"
import Comment from './comment'
import Rating from './rating'
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
                <Comment />
            </Link>
            {/* </a> */}

            {/* <Rating /> */}
        </div>
    )
}

export default GenerateFiles