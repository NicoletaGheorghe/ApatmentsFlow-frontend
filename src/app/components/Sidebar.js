"use client";

export default function Sidebar({ filters = {}, onFilterChange }) {
  const {
    minPrice = 0,
    maxPrice = 3000,
    bedrooms = 0,
    radius = 10,
    city = "",
    status = "",
  } = filters;
  const numericFields = ["minPrice", "maxPrice", "bedrooms", "radius"];

  const handleChange = (field, value) => {
  onFilterChange(prevFilters => ({
    ...prevFilters,
    [field]: numericFields.includes(field) ? parseInt(value) : value,
  }));
};


  const resetFilters = () => {
     onFilterChange({
        minPrice: 0,
        maxPrice: 3000,
        bedrooms: 0,
        radius: 10,
        city: "",
        status: "",
    });
  };

  return (
    <aside className="w-64 h-screen p-6 bg-white border-r hidden md:block overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* Min Price */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Min Price (£): {minPrice}</label>
        <input
          type="range"
          min="0"
          max="3000"
          step="50"
          value={minPrice}
          onChange={(e) => handleChange("minPrice", e.target.value)}
          className="w-full"
        />
      </div>

      {/* Max Price */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Max Price (£): {maxPrice}</label>
        <input
          type="range"
          min="0"
          max="5000"
          step="50"
          value={maxPrice}
          onChange={(e) => handleChange("maxPrice", e.target.value)}
          className="w-full"
        />
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Bedrooms: {bedrooms}+</label>
        <input
          type="range"
          min="0"
          max="5"
          step="1"
          value={bedrooms}
          onChange={(e) => handleChange("bedrooms", e.target.value)}
          className="w-full"
        />
      </div>

      {/* Radius */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Radius: {radius} km</label>
        <input
          type="range"
          min="1"
          max="50"
          step="1"
          value={radius}
          onChange={(e) => handleChange("radius", e.target.value)}
          className="w-full"
        />
      </div>

      {/* City (text input) */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => handleChange("city", e.target.value)}
          placeholder="Enter city"
          className="w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      {/* Status (dropdown select) */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Status:</label>
        <select
          value={status}
          onChange={(e) => handleChange("status", e.target.value)}
          className="w-full border border-gray-300 rounded px-2 py-1"
        >
          <option value="">All</option>
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
      </div>

      {/* Reset Filters */}
      <button
        onClick={resetFilters}
        className="w-full bg-gray-100 text-sm text-gray-700 py-2 rounded hover:bg-gray-200 transition"
      >
        Reset Filters
      </button>
    </aside>
  );
}