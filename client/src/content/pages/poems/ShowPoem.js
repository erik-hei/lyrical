import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Grow from '@material-ui/core/Grow';
import Lyric from './Lyric';


export default function ShowPoem(props) {
    const { id } = useParams();
    const [lyrics, setLyrics] = useState([]);
    const [poem, setPoem] = useState(null);
    const [author, setAuthor] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // axios call to get lyrics 
        axios.get(`${process.env.REACT_APP_SERVER_URL}/poems/${id}`)
        .then(response => {
            if (response.data.error) {
                setMessage(response.data.error);
            }
            if (response.data.result) {
                // console.log("DAT DATA", response.data)
                setPoem(response.data.result.poem);
                setLyrics(response.data.result.lyrics);
                // axios call to get author
                axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${response.data.result.poem.user_id}`)
                .then(res2 => {
                    if (res2.data.result) {
                        setAuthor(res2.data.result)
                    }
                }).catch(err => {
                    console.log(err)
                });
            }
        }).catch(err => {
            console.log(err)
        })
        
        // setLyrics([{
        //     artist: 'One Direction',
        //     song: "What make you beautiful",
        //     thumbnail: "http://www.placekitten.com/100/100",
        //     content: "You don't know, oh, oh...",
        //     annotation: "this is my favorite song",
        //     path: "One-direction-what-makes-you-beautiful-lyrics"
        // }, {
        //     artist: 'Beyonce',
        //     song: "Irreplaceable",
        //     thumbnail: "http://www.placekitten.com/100/100",
        //     content: "Everything you own in a box to the left",
        //     annotation: "this is my 2nd favorite song",
        //     path: "Kendrick-lamar-humble-lyrics"
        // }])
        // setAuthor('Erik');
        // setPoem({title:'Red Thread});
    }, [])

    let editButton = "";
    if (props.user && author && props.user.id == author.id) {
        editButton = (
            <Link className="basic-link" to={`/poems/${id}/edit/`}>Edit Poem Details</Link>
        )
    }

    let lyricsList = lyrics.length==0 ?
        <p>
            No lyrics added to this poem yet.
        </p>
        : lyrics.map(lyric => {
            return (
                <Lyric lyric={lyric} user={props.user} 
                    setSongInfo={props.setSongInfo} token={props.token} 
                    authorId={author? author.id:0} poemId={poem? poem.id:0}
                />
            )
        });
    
    let hiddenMessage = poem && poem.public ? "": (<p>(This poem is not public)</p>)
    
    return (
        <div className="simple">
            {message}
            <div className="poem-header">
                <div className="music-note">
                    {/* <img className="music-note" src='../music-note.png' alt="music note" /> */}
                </div>
                <div className="poem-header-text">
                    <h1>{poem? poem.title : "Loading..."}</h1>
                    <h2 className="fancy">by {author? author.name : "unknown"}</h2>
                    {editButton}
                    {hiddenMessage}
                </div>
            </div>
            <Grow in="true"
          style={{ transformOrigin: '0 0 0' }}
          {...{ timeout: 1000 }}>
              <div>
                {lyricsList}
              </div>
          </Grow>
        </div>
    )
}