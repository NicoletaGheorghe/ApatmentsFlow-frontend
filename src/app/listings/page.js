"use client";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ListingCard from "../components/ListingCard";
import { ApiClient } from "../../../apiClient/apiClient";

export default function ListingsPage() {
  const [search, setSearch] = useState("");
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [limit] = useState(6);
  const [favoriteIds, setFavoriteIds] = useState(new Set());
  const [toggleLoading, setToggleLoading] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [showPublic, setShowPublic] = useState(null); 
  const apiClient = new ApiClient();
  
   useEffect(() => {
    const fetchFlats = async () => {
      try {
        if (!apiClient.isLoggedIn()) {
          window.location.href = "auth/unauthorized";
          return;
        }
        const flatsResponse = await apiClient.getApartments(page, limit); 
        const userData = await apiClient.getUser();
        setFlats(flatsResponse.apartments || []);
        console.log("Apartments fetched from API:", flatsResponse.apartments);
        setPages(flatsResponse.pages || 1);
         setFavoriteIds(new Set(userData.favorites || []));
        } catch (err) {
          console.error("Error fetching apartments or favorites:", err);
          setError(
            err.response?.data?.message ||
            err.message ||
            "Failed to fetch apartments or favorites. Please try again later."
          );
        } finally {
          setLoading(false);
        }
      };
     fetchFlats();
  }, [page, limit]);
  const toggleFavorite = async (apartmentId) => {
    setToggleLoading(true);
    try {
      if (favoriteIds.has(apartmentId)) {
        await apiClient.removeFavorite(apartmentId);
        setFavoriteIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(apartmentId);
          return newSet;
        });
      } else {
        await apiClient.addFavorite(apartmentId);
        setFavoriteIds(prev => new Set(prev).add(apartmentId));
      }
    } catch (err) {
      console.error("Failed to toggle favorite", err);
    } finally {
      setToggleLoading(false);
    }
  };
  
  const filteredFlats = (flats || [])
  .filter((flat) =>
    flat.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((flat) => {
    if (showPublic === null) return true; 
    return flat.isPublic === showPublic;
  });

  const handleDelete = async (id) => {
      try {
        await apiClient.deleteApartment(id);
        setFlats((prev) => prev.filter((apt) => apt._id !== id));
        setConfirmDeleteId(null);
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Failed to delete.");
      }
    };
console.log("Filtered apartments for showPublic =", showPublic);
filteredFlats.forEach(flat => {
  console.log(flat.title, flat.isPublic);
});

 
if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p className="text-xl font-semibold mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" p-6 ">
      <div className="ml-5 md:ml-25">
        <h1 className="text-3xl font-bold mb-2 ">Apartment Listings</h1>
        <p className="mb-6">Here you can browse all available apartments.</p>
         <div className="flex items-center gap-4 mt-4 ml-5 md:ml-25">
          <label>
            <input
              type="radio"
              name="privacyFilter"
              checked={showPublic === null}
              onChange={() => setShowPublic(null)}
            />{" "}
            All
          </label>
          <label>
            <input
              type="radio"
              name="privacyFilter"
              checked={showPublic === true}
              onChange={() => setShowPublic(true)}
            />{" "}
            Public
          </label>
          <label>
            <input
              type="radio"
              name="privacyFilter"
              checked={showPublic === false}
              onChange={() => setShowPublic(false)}
            />{" "}
            Private
          </label>
        </div>

        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)}  />
        </div>
      <>
      {flats.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No apartments found.
          </p>
        </div>
        ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-5xl mx-auto px-2">
        {filteredFlats.map((flat, index) => {
          console.log(`Data passed to ListingCard for "${flat.title}":`, { images: flat.images });

          return (
            <ListingCard
              key={index}
              apartment={flat}
              isFavorited={favoriteIds.has(flat._id)}
              onToggleFavorite={() => toggleFavorite(flat._id)}
              onDeleteRequest={() => setConfirmDeleteId(flat._id)}
            />
          );
      })}
      {confirmDeleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-6 text-sm text-gray-700">
              Are you sure you want to delete this apartment? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      </div>
)}
     </>
     <div className="pagination-controls flex justify-between mt-5 mx-25">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          « Prev
        </button>

        <span className="mt-2">Page {page} of {pages}</span>

        <button
          disabled={page === pages}
          onClick={() => setPage((p) => Math.min(pages, p + 1))}
        >
          Next »
        </button>
      </div>
    </div>
    );
  }

