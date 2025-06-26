"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";

const ListingCard = ({ apartment, isFavorited, onToggleFavorite, onDeleteRequest, showActions = true }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    title = "Untitled",
    description = "",
    price = 0,
    location = {},
    bedrooms = 0,
    bathrooms = 0,
    area = 0,
    amenities = [],
    images = [],
    status = "available",
    neighborhoodRating = 0,
  } = apartment || {};

  const { address = {} } = location;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

  let imageUrl = '/default-image.png'; // Default fallback
  let allImageUrls = [];
  if (images && images.length > 0) {
    const mainImage = images.find(img => img && img.isMain) || images[0];
    if (mainImage && mainImage.url && mainImage.url.trim() !== '') {
      const cleanUrl = mainImage.url.replace(/\\/g, '/').replace(/^\//, '');
      imageUrl = `${backendUrl}/${cleanUrl}`;
    }
    allImageUrls = images.map(img => img.url && img.url.trim() !== '' ? `${backendUrl}/${img.url.replace(/\\/g, '/').replace(/^\//, '')}` : '/default-image.png');
  }

  // Modal navigation
  const goPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? allImageUrls.length - 1 : prev - 1));
  };
  const goNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === allImageUrls.length - 1 ? 0 : prev + 1));
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen]);
 
    const emojiMap = {
      1: "😖",
      2: "😕",
      3: "😐",
      4: "😊",
      5: "😍",
    };

    const tooltipMap = {
      1: "1 - Unsafe, noisy",
      2: "2 - Needs improvement",
      3: "3 - Average",
      4: "4 - Nice and peaceful",
      5: "5 - Excellent, dream location",
    };


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 cursor-pointer" onClick={() => { if (allImageUrls.length > 0) { setModalOpen(true); setCurrentIndex(0); } }}>
        <Image
          src={imageUrl}
          alt={`Image of ${title}`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        {allImageUrls.length > 1 && (
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">{allImageUrls.length} photos</span>
        )}
        <div className="absolute top-2 right-2 z-10">
          
        </div>
      </div>
      {/* Modal Gallery */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeModal}>
          <div className="relative max-w-2xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl font-bold">&times;</button>
            <Image
              src={allImageUrls[currentIndex]}
              alt={`Gallery image ${currentIndex + 1} of ${title}`}
              width={800}
              height={700}
              className="rounded shadow max-h-[80vh] object-contain"
            />
            {allImageUrls.length > 1 && (
              <>
                <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl px-3 py-1 rounded-full">&#8592;</button>
                <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl px-3 py-1 rounded-full">&#8594;</button>
                <div className="mt-2 text-white text-sm">{currentIndex + 1} / {allImageUrls.length}</div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="p-4">
        <div className="grid grid-cols-5 gap-2 justify-between">
          <h3 className="col-span-4 text-xl font-semibold text-gray-800">{title}</h3>
          <FavoriteButton
            apartmentId={apartment._id}
            isInitiallyFavorited={isFavorited}
            onClick={onToggleFavorite}
          />
        </div>
        
        <p className="text-gray-600 mt-1">
         &#128205; {address.street}, {address.city}, {address.country}
        </p>
        <p className="text-lg font-bold text-blue-600 mt-2">£{price.toLocaleString()}</p>
        <p>{description}</p>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>&#128716; {bedrooms} Beds</span>
          <span>&#128705; {bathrooms} Baths</span>
          <span>{area} sqft</span>
        </div>
        <p>
          <span className="text-xs">Amenities:</span>{" "}
          {Array.isArray(amenities) ? amenities.join(", ") : amenities}
        </p>
        <p><span className="text-xs">Status:</span> {status}</p>
        <p>
          <span className="text-xs">Neighborhood Rating: </span>
          <span
            role="img"
            aria-label={`Rating ${neighborhoodRating}`}
            title={tooltipMap[neighborhoodRating] || "No rating"}
            style={{ cursor: "default" }}
          >
            {emojiMap[neighborhoodRating] || "N/A"}
          </span>
        </p>
        {showActions && (
          <div className="grid grid-cols-2 gap-10  justify-items-center mt-4">
            <button
                onClick={() => {
                  if (apartment?._id) {
                    router.push(`/apartment/apartmentEdit?id=${apartment._id}`);
                  } else {
                    alert("Apartment ID is missing.");
                  }
                }}
              >
                Edit
            </button>
            {onDeleteRequest && (
              <button
              onClick={onDeleteRequest}
              >
                Delete
              </button>
            )}
            </div>
          )}
      </div>
    </div>
  );
};

export default ListingCard;
