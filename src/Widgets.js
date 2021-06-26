import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <SearchIcon className='widgets_searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>

            <div className='widgets_widgetContainer'>
                <h1>What's happening</h1>
                <TwitterTweetEmbed tweetId={"1408802676704415750"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="sahil_garat"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://github.com/SahilGarat23"}
                    options={{ text: "#reactjs is awesome", via: "sahil_garat" }}
                />

            </div>


        </div>
    )
}

export default Widgets
