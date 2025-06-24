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
  const apiClient = new ApiClient();
  
   useEffect(() => {
    const fetchFlats = async () => {
      try {
        if (!apiClient.isLoggedIn()) {
          window.location.href = "auth/unauthorized";
          return;
        }
        const flatsResponse = await apiClient.getApartments(page, limit); // assume it accepts page + limit
        const userData = await apiClient.getUser();
        setFlats(flatsResponse.apartments || []);
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
  
  const filteredFlats = (flats || []).filter((flat) =>
    flat.title.toLowerCase().includes(search.toLowerCase())
  );

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
            />
          );
      })}

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

