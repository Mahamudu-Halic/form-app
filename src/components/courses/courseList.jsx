import { useContext } from "react";
import { Context } from "../context.provider";
import { Link } from "react-router-dom";

const CourseList = ({listIndex}) => {
    const {courseList} = useContext(Context)
    const array = [
        "computer Science", "biology", "chemistry"
        ]
    return (
        
        <>
            {
                courseList[listIndex].map(item => {
                return(
                    <Link to={item} key={item}>{item}</Link>
                )
            })
            }
        </>
     );
}
 
export default CourseList;


