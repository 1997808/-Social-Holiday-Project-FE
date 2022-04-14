import React, { useEffect, useState } from "react";
import logo from "../../assets/default-icon.png";
import { PostStat } from "./postStat";
import { dateFormater } from "../../utils/formatData";
import {
  Image
} from 'cloudinary-react';
// import { socket } from '../../app/services/socket'

export const PostContent = ({ id, image, name, username, date, content, profileImageId }) => {
  // const [upvotes, setUpvotes] = useState([])
  // const [downvotes, setDownvotes] = useState([])

  // useEffect(() => {
  //   const up = []
  //   const down = []
  //   votes.forEach((item) => {
  //     if (item.vote === 1) {
  //       up.push(item)
  //     } else if (item.vote === -1) {
  //       down.push(item)
  //     }
  //   })
  //   setUpvotes(up)
  //   setDownvotes(down)
  // }, [])

  return (
    <>
      <div className="w-full h-auto flex bg-white rounded-t border-b border-solid border-gray-200 px-5 pt-5">
        {profileImageId ?
          <Image
            className="h-10 w-10 rounded object-cover mr-5"
            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
            publicId={profileImageId}
            crop="scale"
          />
          :
          <img src={logo} className="h-10 w-10 rounded object-cover mr-5" alt="img" />
        }
        <div className="w-full flex flex-col">
          <p className="text-sm font-bold">
            {name ? name : "Player1"}{" "}
            <span className="text-xs font-light">
              @{username ? username : "user1"}
            </span>
          </p>
          <p className="text-xs font-light pt-1">
            {date ? dateFormater(date) : "January 28 at 1:47 PM"}
          </p>
          <p className="text-sm pt-2">
            {content
              ? content
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, dolor ut mollis rutrum, mauris arcu mollis lacus, eget imperdiet neque neque eget nisl."}
          </p>
          <div className="pr-10 mr-5">
            <PostStat postid={id} />
          </div>
        </div>
      </div>
    </>
  );
};
