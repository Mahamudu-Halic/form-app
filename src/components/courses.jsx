import { useContext } from 'react'
import { Context } from './context.provider'
import "../styles/courses.css"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import CourseList from './courseList'

const Courses = () => {
    //usecontext
    const {courseList} = useContext(Context)

    const createCourseList = index => {
        courseList[index].map(list => {
            return(
                <Link to={list.course} key={list.course}>{list.course}</Link>
            )
        })
    }
    return(
        <div className="courses">
            <Helmet>
                <title>Courses</title>
            </Helmet>
            
            <div className="course-bg">
                <div className="overlay"></div>
                <h2>Courses</h2>
            </div>

            <div className="courseList">
                <h3>College of Science</h3>
                {/* <UserProfile /> */}
                <div className="course-links">
                    <CourseList listIndex='0' />
                </div>

                <h3>College of Engineering</h3>
                <div className="course-links">
                    <CourseList listIndex='1' />
                </div>

                <h3>collage of humanity and social sciences</h3>
                <div className="course-links">
                    <CourseList listIndex='2' />
                </div>

                <h3>collage of art and built env</h3>
                <div className="course-links">
                        <CourseList listIndex='3' />
                </div>
                <h3>collage of health science</h3>
                <div className="course-links">
                    <CourseList listIndex='4' />
                </div>
                <h3>collage of agriculture and natural resources</h3>
                <div className="course-links">
                    <CourseList listIndex='5' />
                </div>
            </div>
        </div>
    )
}

export default Courses