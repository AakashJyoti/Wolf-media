import React from "react";
import PostSide from "../../components/postSide/PostSide";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import RightSide from "../../components/rightSide/RightSide";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      {/* Left Section */}
      <ProfileLeft />

      {/* Center Section */}
      <div className="ProfileCenter">
        <ProfileCard location = "profilePage" />
        <PostSide />
      </div>

      {/* Right Section */}
      <RightSide />
    </div>
  );
};

export default Profile;
