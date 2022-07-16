import React from "react";
import FollowerCard from "../followerCard/FollowerCard";
import InfoCard from "../infoCard/InfoCard";
import LogoSearch from "../logoSearch/LogoSearch";
import "./ProfileLeft.css";

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileLeft;
