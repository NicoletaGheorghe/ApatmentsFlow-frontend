"use client";
import Link from "next/link";

const ProfileCard = ({ user }) => {
  console.log("User profileImage:", user.profileImage);
  return (
  <div>
    <img src={user.profileImage || '/default-avatar.png'} alt="Avatar" className="w-32 h-32 rounded-full object-cover"/>
    <p className="font-bold m-2">Name: {user.name}</p>
    <p className="font-bold m-2 ">Email: {user.email}</p>
    <Link href="/profile/edit" className="inline-block px-4 py-2 text-white bg-[var(--color-secondary)] rounded hover:bg-[var(--color-primary)] transition-colors duration-20">Edit Profile</Link>
  </div>
);
}
export default ProfileCard;