import React, { useEffect, useState } from 'react';
import DisplayCourse from './DisplayCourse/DisplayCourse';
import SideMenu from './DisplayCourse/SideMenu/SideMenu';
import './CSS/Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className='home-container'>
            <div className='course-container mt-20 ml-14'>
                <div>

                </div>
                {
                    courses.map(course => <DisplayCourse
                        course={course}
                        key={course.id}
                    ></DisplayCourse>)
                }
            </div>
            <div className="side-menu ">
                <div className='mt-16'>
                    <h1 className='text-2xl border font-bold'>Food Category</h1>
                </div>
                {
                    courses.map(course => <SideMenu
                        course={course}
                        key={course.id}
                    ></SideMenu>)

                }
            </div>
        </div>
    );
};

export default Courses;