import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox '
import Post from './Post'
import db from "./firebase";
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed_header'>
                <h2>Home</h2>
            </div>

            {/* Tweet Box */}
            <TweetBox />

            {/* Posts */}

            {/* Before database i use to send data manually as a props to Post */}
            {/*             
            <Post displayName='Sahil Garat'
            username='sahil_garat'
            verified={true}
            text='YOO its working'
            avatar='https://digital-resume-d31dc.web.app/images/profilepic.jpg'
            image='https://c.tenor.com/Zg33l5DxlS4AAAAj/sarnezant-quantum-clear-sarnezant.gif'/>
             */}

            {/* {posts.map(post => (
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image} />
            ))} */}
            
            {/*Wrapping with Flip Move  */}
            <FlipMove>
            {posts.map(post => (
                <Post
                key={post.text}    
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image} />
            ))}
            </FlipMove>

        </div>
    )
}

export default Feed
