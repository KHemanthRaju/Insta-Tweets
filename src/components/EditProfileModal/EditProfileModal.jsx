import React, { useState } from "react";
import "../EditProfileModal/EditProfileModal.css";
import { editUserProfileHandler } from "../../utils/editUserProfileHandler";
import { toast } from "react-toastify";
import EditImageModal from "../EditImageModal/EditImageModal";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";

const EditProfileModal = ({ profileData, setEditProfileModal }) => {
  const [updatedProfileData, setUpdatedProfileData] = useState({
    firstName: profileData?.firstName,
    lastName: profileData?.lastName,
    bio: profileData?.bio,
    website: profileData?.website,
    profileAvatar: profileData?.profileAvatar,
  });

  const [editImageModal, setEditImageModal] = useState(false);

  const { authState } = useAuth();
  const { dataDispatch, darkMode } = useData();

  const updateProfileDetails = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const updateProfileHandler = () => {
    editUserProfileHandler(updatedProfileData, authState?.token, dataDispatch);
    setEditProfileModal((editProfileModal) => !editProfileModal);
    toast.success("Profile updated successfully!");
  };

  const editProfileModalNode = useOutsideClick(() =>
    setEditProfileModal(false)
  );

  return (
    <div className="edit-profile-modal-container">
      <div
        className={`edit-profile-modal ${darkMode && "bgDarkmode"}`}
        ref={editProfileModalNode}
      >
        {editImageModal && (
          <EditImageModal
            setUpdatedProfileData={setUpdatedProfileData}
            setEditImageModal={setEditImageModal}
          />
        )}
        <div className="edit-profile-header">
          <h2>Edit Profile</h2>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setEditProfileModal(false)}
          ></i>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="profile-image-edit">
            <img
              className="avatar"
              src={
                updatedProfileData?.profileAvatar ||
                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
              }
              alt="avatar"
            />
            <i
              className={`fa-solid fa-camera ${darkMode && "bgDarkmode"}`}
              onClick={() => setEditImageModal(true)}
            ></i>
          </div>
        </div>
        <div className="edit-profile-details">
          <div className="edit-name">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                className={`${darkMode && "bgDarkmode"}`}
                id="firstName"
                type="text"
                name="firstName"
                value={updatedProfileData?.firstName}
                onChange={updateProfileDetails}
              />
            </div>
            <div>
              <label htmlFor="lastName">last Name</label>
              <input
                className={`${darkMode && "bgDarkmode"}`}
                id="lastName"
                type="text"
                name="lastName"
                value={updatedProfileData?.lastName}
                onChange={updateProfileDetails}
              />
            </div>
          </div>
          <div className="edit-website">
            <label htmlFor="website">Website</label>
            <input
              className={`${darkMode && "bgDarkmode"}`}
              id="website"
              type="text"
              name="website"
              value={updatedProfileData?.website}
              onChange={updateProfileDetails}
            />
          </div>
          <div className="edit-bio">
            <label htmlFor="bio">Bio</label>
            <textarea
              className={`${darkMode && "bgDarkmode"}`}
              id="bio"
              placeholder="bio"
              name="bio"
              value={updatedProfileData?.bio}
              onChange={updateProfileDetails}
            />
          </div>
        </div>
        <button onClick={updateProfileHandler}>Update</button>
      </div>
    </div>
  );
};

export default EditProfileModal;
