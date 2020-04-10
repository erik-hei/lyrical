import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// pass a poem object with title and id, and author id
export default function Thumbnail(props) {
    const [author, setAuthor] = useState('');

    useEffect(() => {
        // use axios call to get author name 
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.authorId}`)
        .then(response => {
            if (response.data.result) {
                setAuthor(response.data.result.name)
            }
        }).catch(err => {
            console.log(err)
        })
        // TEST DATA
        // if (props.authorId == 1) {
        //     setAuthor('Erik')
        // } else {
        //     setAuthor('Sarah')
        // }
    }, []);

    return (
        <div>
            <h2>
                <Link to={`/poems/${props.id}`}>{props.title}</Link>
            </h2>
            <h3>artfully assembled by {author}</h3>
        </div>
    )
}