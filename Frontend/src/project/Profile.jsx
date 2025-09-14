import React, { useState } from 'react';
import "./Profile.css"

const Profile = () => {
  const [name, setName]=useState("Akash maity");
  const [Email , setEmail]= useState("am6030920@gmail.com");
  const [phone, setPhone] =useState("+91 983103680");

  const [isEditing, setIsEditing] = useState(false);
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
     <div className="profile-container">
      <div className="profile-content">
        <div className="profile-card-wrapper">
          <div className="profile-card">
            <img
              src="https://i0.wp.com/florrycreativecare.com/wp-content/uploads/2020/08/blank-profile-picture-mystery-man-avatar-973460.jpg?ssl=1"
              alt="Profile"
              className="profile-image"
            />
             {isEditing ? (
              <>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="edit-input"
                />
                <input 
                  type="Email" 
                  value={Email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="edit-input"
                />
                <input 
                  type="text" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  className="edit-input"
                />
                <button onClick={handleSave} className="edit-btn">Save</button>
              </>
            ) : (
              <>
                <h2 className="profile-name">Name: {name}</h2>
                <p className="profile-info">Email: {Email}</p>
                <p className="profile-info">Phone No: {phone}</p>
                <button onClick={() => setIsEditing(true)} className="edit-btn">
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
