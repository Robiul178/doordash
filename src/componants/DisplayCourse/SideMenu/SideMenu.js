import React from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';


const SideMenu = (props) => {
    const { title, id } = props.course;
    return (
        <div className='p-4  shadow-sm'>
            <Link to={`/readmore/${id}`}>{title}</Link>
        </div>
    );
};

export default SideMenu;