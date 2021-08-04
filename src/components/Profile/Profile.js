import { Typography } from "@material-ui/core";
import React from "react";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Adaji Mukhtar</Typography>
        <Typography className="name">Web Developer</Typography>
      </div>

      <figure className='profile_image'>
          <img src='' alt=''/>
      </figure>

      <div className='profile_information'>
          Insert Timeline
          <br/>
          <button>Button</button>
      </div>
    </div>
  );
};

export default Profile;
