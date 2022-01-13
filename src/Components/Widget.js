import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widgetInput">
        <SearchIcon className="widgetSearchIcon" />
        <input type="text" placeholder="Search Twitter"></input>
      </div>

      <div className="widgetsWidgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"692527862369357824"} />
        {/* 1454755778917662723 */}
        {/* 858551177860055040 */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MarudhuAngel"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100005230307846"}
          options={{ text: "#ReactJs is Awesome" }}
        />
      </div>
    </div>
  );
};

export default Widget;
