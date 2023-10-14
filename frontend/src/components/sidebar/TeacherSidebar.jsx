import React, { useContext } from 'react'
import './sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../context/AuthContext';

function TeacherSidebar() {
    const {logoutUser} = useContext(AuthContext);
    return (
        <div className="sidebar">
            <NavLink to="/" className="sidebar-links" >
                <svg className="home-svg" width="800px" height="800px" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        <g id="Navigation / House_01">
                            <path id="Vector"
                                d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
                                stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </g>

                </svg>
                Dashboard
            </NavLink>
            <NavLink to={'mycourse/'} className="sidebar-links">
                <svg className="course-svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M20 12V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V18.5"
                            stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 2V14L16.8182 11L20 14V5" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </g>

                </svg>
                My Courses
            </NavLink>
            <NavLink to={'addCourse/'} className="sidebar-links">
                <svg className="add-svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#000000" strokeWidth="1.5"
                            strokeLinecap="round" />
                        <path
                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                            stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
                    </g>

                </svg>
                Add New Course
            </NavLink>
            <NavLink to={'teacherstudentlist/'} className="sidebar-links">
                <svg className="student-svg" width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="3" stroke="#000000" fill="none">
                    <path
                        d="M43.31,37.52A11.83,11.83,0,0,1,31.25,49.35,12.1,12.1,0,0,1,19.63,37.12V20.64a.1.1,0,0,1,.08-.1,90.43,90.43,0,0,1,12.08-1,82.5,82.5,0,0,1,11.57,1,.09.09,0,0,1,.07.1Z" />
                    <path d="M19.63,26,9,20.47a.1.1,0,0,1,0-.18L31.49,8.86h.09L54,20.17a.1.1,0,0,1,0,.18L43.43,26" />
                    <path d="M19.63,32.19H17.7s-2.94,0-2.94,4.52c0,4.17,2.93,4.17,2.93,4.17l2.51-.05" />
                    <path d="M43.3,32.7h1.93s3,0,3,4.53c0,4.17-2.94,4.17-2.94,4.17H42.65" />
                    <line x1="52.72" y1="45.04" x2="52.72" y2="21.03" />
                    <circle cx="52.72" cy="47.36" r="2.31" />
                    <polyline points="37.76 47.53 37.76 55.15 25.89 55.15 25.89 47.95" />
                    <path d="M43.43,30.13a63,63,0,0,0-11.61-1,60.25,60.25,0,0,0-12.19,1" />
                </svg>
                Student List
            </NavLink>
            <NavLink to={'courselist/'} className="sidebar-links">
                <svg className="class-svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
                            stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>

                </svg>
                My Course List
            </NavLink>
            <Link to=".." className="sidebar-links">
                &larr; GO BACK
            </Link>
            
            <button className="sidebar-links" onClick={logoutUser}>LOGOUT</button>
        </div>
    )
}

export default TeacherSidebar