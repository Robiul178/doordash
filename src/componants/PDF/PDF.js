import React from "react";
import { useLoaderData } from "react-router-dom";
import './Pdf.css'




export default function PDF() {
    const course = useLoaderData();
    console.log(course)
    const { description, title, price } = course;


    return (
        <div>
            <h2>Image:{title}</h2>
        </div>
    );
}
