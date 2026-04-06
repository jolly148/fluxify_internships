import React from "react";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Badge from "./Badge";

function ProfileCard({ name, role, bio, avatar, available }) {
  return (
    <div className="border p-4 rounded shadow-md w-64">
      <Avatar src={avatar} />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <Bio text={bio} />
      {available && <Badge text="Available for hire" />}
    </div>
  );
}

export default ProfileCard;
