import { useContext } from "react";
import { Context } from "./context.provider";
import { Link } from "react-router-dom";

const CourseList = ({listIndex}) => {
    const {courseList} = useContext(Context)
    return ( 
        <>
            {
                courseList[listIndex].map(list => {
                return(
                    <Link to={list} key={list}>{list}</Link>
                )
            })
            }
        </>
     );
}
 
export default CourseList;