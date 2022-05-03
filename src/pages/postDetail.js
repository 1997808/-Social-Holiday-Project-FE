import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostContent } from "../components/Card/postContent";
import { CommentForm } from "../components/Form/commentForm";
import { FriendActiveList } from "../components/List/friendActiveList";
import { PostCommentList } from "../components/List/postCommentList";
import { MyAxios } from "../utils/api";

export const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [friends, setFriends] = useState([]);
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      await MyAxios.get(`posts/${id}`)
        .then((res) => {
          if (res.data) {
            setPost(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPost();
  }, [id]);

  useEffect(() => {
    const getFriend = async () => {
      await MyAxios.get("friendships/friend")
        .then((res) => {
          if (res.data) {
            setFriends(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFriend();
  }, []);

  useEffect(() => {
    const getComments = async () => {
      await MyAxios.post(`comments/post`, { postId: id })
        .then((res) => {
          if (res.data) {
            setComments(res.data.data)
            setCount(res.data.count)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getComments();
  }, [id]);

  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="w-full">
          {post ?
            <>
              <CommentForm postid={post.id} />
              <PostContent
                key={post.id}
                id={post.id}
                authorId={post.author.id}
                name={post.author.name}
                username={post.author.username}
                date={post.createdAt}
                content={post.content}
                profileImageId={post.author.cloudinaryId}
                comments={post.comments}
              />
              {comments ? <PostCommentList data={comments} /> : <></>}
            </>
            : <></>
          }
        </div>
      </div>
      <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-screen">
        <FriendActiveList data={friends} />
      </div>
    </>
  );
};
