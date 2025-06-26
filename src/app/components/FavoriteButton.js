"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function FavoriteButton({ apartmentId, isInitiallyFavorited, onClick }) {
  const pathname = usePathname(); 
  const [isFavorited, setIsFavorited] = useState(isInitiallyFavorited);

  useEffect(() => {
    setIsFavorited(isInitiallyFavorited);
  }, [isInitiallyFavorited]);

  const handleClick = async () => {
    setIsFavorited(!isFavorited);
    if (onClick) await onClick(apartmentId);
  };

  const allowedPaths = ["/listings", "/favorites"];

  if (!allowedPaths.includes(pathname)) return null;

  return (
    <button onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontSize: "1.5rem",
      }}>
      {isFavorited ? "💖" : "🤍"}
    </button>
  );
}
