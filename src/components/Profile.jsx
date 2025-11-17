import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import AuthContext from "../context/AuthContext";
import userIcon from "../assets/user.png";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    if (!name || !photo) return toast.error("Please fill all fields");

    updateProfile(user, { displayName: name, photoURL: photo })
      .then(() => toast.success("Profile updated"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-base-200 to-green-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl grid md:grid-cols-2 overflow-hidden">
        <div className="bg-gradient-to-br from-green-600 to-green-400 text-white flex flex-col items-center justify-center p-8 gap-4">
          <img
            src={photo || userIcon}
            alt="Avatar"
            className="w-32 h-32 rounded-full object-cover shadow-xl border-2 border-white"
          />
          <h3 className="text-xl font-semibold">{name || "Your Name"}</h3>
          <p className="opacity-90">{user?.email}</p>
        </div>

        <div className="p-8 space-y-5">
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            Edit Profile
          </h2>

          <div className="form-control">
            <label className="label font-medium">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Email</label>
            <input
              type="text"
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              defaultValue={user?.email}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

          <button
            onClick={handleUpdate}
            className="btn btn-success w-full mt-4"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
