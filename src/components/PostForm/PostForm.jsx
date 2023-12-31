import React, { useState } from "react";
import "../PostForm/PostForm.css";
import { useNavigate } from "react-router-dom";
import Picker from "emoji-picker-react";
import { toast } from "react-toastify";
import { uploadMedia } from "../../utils/uploadMedia";
import { createPostHandler } from "../../utils/createPostHandler";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";

const PostForm = () => {
  const { authState } = useAuth();
  const { dataState, dataDispatch, darkMode } = useData();

  const navigate = useNavigate();

  const [postContent, setPostContent] = useState("");
  const [media, setMedia] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const domNode = useOutsideClick(() => setShowEmojiPicker(false));

  const imageSelectHandler = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      Math.round(file.size / 1024000) > 1
        ? toast.error("File size should not be more than 1Mb")
        : setMedia(file);
    };
    input.click();
  };

  const videoSelectHandler = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      Math.round(file.size / 7168000) > 1
        ? toast.error("File size should not be more than 7Mb")
        : setMedia(file);
    };
    input.click();
  };

  const emojiClickHandler = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = postContent + emoji;
    setPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  const isPostDisabled = postContent.trim() === "" && !media;

  const postClickHandler = async () => {
    try {
      const response = media && (await uploadMedia(media));
      createPostHandler(
        {
          content: postContent,
          mediaURL: response ? response?.url : "",
          comments: [],
        },
        authState?.token,
        dataDispatch
      );
    } catch (e) {
      console.error(e);
    } finally {
      setPostContent("");
      setMedia(null);
    }
  };

  return (
    <div className={`post-form ${darkMode && "bgSecondaryDarkMode"}`}>
      <div className="post-form-container">
        <img
          className="create-post-avatar"
          onClick={() => {
            navigate(`/profile/${authState?.user?.username}`);
          }}
          src={
            dataState?.users?.find((user) => user._id === authState?.user?._id)
              ?.profileAvatar ||
            `https://res.cloudinary.com/dfp7zvyfo/image/upload/v1687605250/K_Hemanth_Raju_1_xghrc5.jpg`
          }
          alt="profile-pic"
        />
        <textarea
          className={`${darkMode && "bgSecondaryDarkMode"}`}
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
      </div>
      {media && (
        <div className="selected-image-container">
          {media.type.slice(0, 5) === "image" ? (
            <img src={URL.createObjectURL(media)} alt="Post-pic" />
          ) : media.type.slice(0, 5) === "video" ? (
            <video alt="Post-video">
              <source src={URL.createObjectURL(media)} />
            </video>
          ) : null}
          <button onClick={() => setMedia(null)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
      <div className="post-form-button-container">
        <div className="post-form-icons">
          <div>
            <i className="fa-regular fa-image" onClick={imageSelectHandler}></i>
          </div>
          <div>
            <i
              className="fa-regular fa-file-video"
              onClick={videoSelectHandler}
            ></i>
          </div>
          <div ref={domNode}>
            <i
              className="fa-regular fa-face-smile"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            ></i>
            {showEmojiPicker && (
              <div
                className="show-emoji-picker"
                onClick={(e) => e.stopPropagation()}
              >
                <Picker
                  onEmojiClick={emojiClickHandler}
                  width={300}
                  height={450}
                  theme={darkMode ? "dark" : "light"}
                />
              </div>
            )}
          </div>
        </div>
        <button
          onClick={() => {
            toast.promise(postClickHandler, {
              pending: "Creating your post...",
              success: "Added new post successfully!",
              error: "Something went wrong, try again!",
            });
          }}
          disabled={isPostDisabled}
          className={isPostDisabled ? "post-button disabled" : "post-button"}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostForm;
