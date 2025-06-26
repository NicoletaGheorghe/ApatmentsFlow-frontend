'use client';
import { useEffect, useState } from 'react';
import { ApiClient } from '../../../apiClient/apiClient';
import ListingCard from '../components/ListingCard';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState(new Set());
  const apiClient = new ApiClient();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await apiClient.getFavorites();
         const favoriteApts = response.data.favorites;

          setFavorites(favoriteApts);
          setFavoriteIds(new Set(favoriteApts.map(apt => apt._id)));
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);
    
    const toggleFavorite = async (apartmentId) => {
    try {
      if (favoriteIds.has(apartmentId)) {
        await apiClient.removeFavorite(apartmentId);
        setFavoriteIds((prev) => {
          const newSet = new Set(prev);
          newSet.delete(apartmentId);
          return newSet;
        });
        setFavorites((prev) => prev.filter(fav => fav._id !== apartmentId));
      } else {
        await apiClient.addFavorite(apartmentId);
        setFavoriteIds((prev) => new Set(prev).add(apartmentId));
      }
    } catch (error) {
      console.error("Failed to toggle favorite", error);
    }
  };

  if (loading) return <p>Loading your favorites...</p>;
  if (favorites.length === 0) return <p>No favorite apartments yet.</p>;

  return (
          <div className="mt-6 max-w-2/3 md:max-w-4xl mx-auto px-2">
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favorites.map((apartment) => (
                  <ListingCard
                   key={apartment._id}
                   apartment={apartment}
                    isFavorited={favoriteIds.has(apartment._id)}
                    onToggleFavorite={() => toggleFavorite(apartment._id)}
                    showActions={false}/>
                ))}
              </div>
      </div>
        
  );
}
