// import  React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useGetUserQuery } from "../features/user/userApi.js";
// import { avatarList } from "../assets/avatarData.js";
// // import ProfileEditor from "../components/ProfileEditor";
// import "../styles/account.css";

// const Account = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const authChecked = useSelector((state) => state.auth.token);
//   // const [updatedUserProfile] = ProfileEditor();
//   const {
//     data: user,
//     error,
//     isLoading,
//   } = useGetUserQuery(undefined, {
//     skip: !isAuthenticated,
//   });

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, navigate]);

//   if (!isAuthenticated) return null;
//   if (isLoading) return <div>Loading your profile...</div>;
//   if (error) return <div>Error loading your profile</div>;

//   // Destructure user data
//   const { username, email, avatarId } = user || {};

//   const matchedAvatar = avatarList.find((avatar) => avatar.id === avatarId);
//   // fallback if matchedAvatar fails
//   const avatarSource = matchedAvatar?.image || avatarList[0].image;

//   return (
//     <div className="account-page-container">
//       <div className="background-container">
//         <div className="main-info-container">
//           <div className="user-account-box-header">{username || "User"}</div>

//           <div className="avatar-container">
//             <img src={avatarSource} alt="User Avatar" className="user-avatar" />
//           </div>

//           {/* <ProfileEditor user={user} /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;
