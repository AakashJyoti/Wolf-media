import React, { useEffect, useState } from "react";
import "./FollowerCard.css";
import User from "../user/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequests";

const FollowerCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowerCard">
      <h3>People you may know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} id={id} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowerCard;
