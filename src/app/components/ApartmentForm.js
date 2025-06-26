import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function ApartmentForm({ formData,
  errors,
  images = [],
  onFormChange,
  onImageChange,
  success,
  autocompleteValue,
  onAutocompleteChange,
  onNeighborhoodRatingChange,
  onTogglePublic,
  onSuggestionClick,
  suggestions = [],
  onSubmit,
  loading,
  mode = "add" }) {
  

  return (
    <div >
            <form onSubmit={onSubmit} className="space-y-6">
                <div>
                    <Input
                    label="Title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={onFormChange}
                    placeholder="Enter a title"
                    required />
                    {errors.title && (
                        <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="Description"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={onFormChange}
                    placeholder="Enter a description"
                    required />
                    {errors.description && (
                        <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="Price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={onFormChange}
                    placeholder="Enter a price"
                    required />
                    {errors.price && (
                        <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="autocomplete" className="block mb-1 font-semibold">
                        Search Address
                    </label>
                    <input
                        id="autocomplete"
                        type="text"
                        value={autocompleteValue}
                        onChange={onAutocompleteChange}
                        placeholder="Start typing address..."
                        className="w-full p-2 border rounded"
                    />
                    {suggestions.length > 0 && (
                        <ul className="border mt-1 max-h-60 overflow-y-auto rounded shadow bg-white z-10 relative">
                        {suggestions.map((sugg, index) => (
                            <li
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => onSuggestionClick(sugg)}
                            >
                            {sugg.display_name}
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                
                <div>
                    <Input
                    label="Street"
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={onFormChange}
                    placeholder="Enter street"
                    required />
                    {errors.street && (
                        <p className="mt-1 text-sm text-red-500">{errors.street}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="City"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={onFormChange}
                    placeholder="Enter city"
                    required />
                    {errors.city && (
                        <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="State"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={onFormChange}
                    placeholder="Enter state"
                    required />
                    {errors.state && (
                        <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="Zip Code"
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={onFormChange}
                    placeholder="Enter zip code"
                    required />
                    {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="Country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={onFormChange}
                    placeholder="Enter country"
                    required />
                    {errors.country && (
                        <p className="mt-1 text-sm text-red-500">{errors.country}</p>
                    )}
                </div>
                
                <div>
                    <Input
                    label="Bedrooms"
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={onFormChange}
                    placeholder="Enter number of bedrooms"
                    required />
                    {errors.bedrooms && (
                        <p className="mt-1 text-sm text-red-500">{errors.bedrooms}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="Bathrooms"
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={onFormChange}
                    placeholder="Enter number of bathrooms"
                    required />
                    {errors.bathrooms && (
                        <p className="mt-1 text-sm text-red-500">{errors.bathrooms}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="Area"
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={onFormChange}
                    placeholder="Enter an area in square feet"
                    required />
                    {errors.area && (
                        <p className="mt-1 text-sm text-red-500">{errors.area}</p>
                    )}
                </div>
                <div>
                    <Input
                    label="Amenities (comma separated)"
                    type="text"
                    name="amenities"
                    value={Array.isArray(formData.amenities) ? formData.amenities.join(', ') : formData.amenities}
                    onChange={onFormChange}
                    placeholder="Enter the amenities"
                    required />
                    {errors.amenities && (
                        <p className="mt-1 text-sm text-red-500">{errors.amenities}</p>
                    )}
                </div>
                <div className="mb-4">
                  <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images (up to 8)</label>
                  <input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    accept="image/*"
                    onChange={onFormChange}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {errors.images && <p className="text-red-500 text-xs mt-1">{errors.images}</p>}
                </div>
                <div>
                    <label className="block font-semibold mb-1">Neighborhood Rating</label>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => {
                        const emoji = {
                            1: "😖",
                            2: "😕",
                            3: "😐",
                            4: "😊",
                            5: "😍",
                        }[rating];
    
                        const tooltip = {
                            1: "1 - Unsafe, noisy",
                            2: "2 - Needs improvement",
                            3: "3 - Average",
                            4: "4 - Nice and peaceful",
                            5: "5 - Excellent, dream location",
                        }[rating];
    
                        return (
                            <button
                            key={rating}
                            type="button"
                            title={tooltip}
                            onClick={() => onNeighborhoodRatingChange(rating)}
                            className="text-2xl focus:outline-none"
                            style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                            }}
                            >
                            <span
                                aria-label={tooltip}
                                role="img"
                                style={{
                                opacity: formData.neighborhoodRating === rating ? 1 : 0.5,
                                transition: "opacity 0.2s",
                                }}
                            >
                                {emoji}
                            </span>
                            </button>
                        );
                        })}
                    </div>
                    {errors.neighborhoodRating && (
                        <p className="mt-1 text-sm text-red-500">{errors.neighborhoodRating}</p>
                    )}
                    </div>
    
                <div>
                    <label htmlFor="status" className="block mb-1 font-semibold">
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={onFormChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select status</option>
                        <option value="available">Available</option>
                        <option value="rented">Rented</option>
                        <option value="pending">Pending</option>
                    </select>
                    {errors.status && (
                        <p className="mt-1 text-sm text-red-500">{errors.status}</p>
                    )}
                    </div>
                <div className="flex items-center space-x-3">
                    <label htmlFor="isPublic" className="font-semibold">
                        Public/Private Listing
                    </label>
                    <button
                        type="button"
                        onClick={onTogglePublic}
                        className={`w-14 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                        formData.isPublic ? "bg-green-500" : "bg-gray-400"
                        }`}
                    >
                        <div
                        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                            formData.isPublic ? "translate-x-6" : ""
                        }`}
                        ></div>
                    </button>
                    <span>{formData.isPublic ? "Public" : "Private"}</span>
                    </div>
                {success && (
                    <p style={{ color: "green", marginTop: "1rem" }}>Apartment listed successfully!</p>
                 )}
                {errors.submit && (
                    <p className="text-red-500 text-sm">{errors.submit}</p>
                    )}
                 <Button type="submit" disabled={loading}>
                       {mode === "edit" ? "Update Apartment" : "Add Apartment"}
                  </Button>
            </form>
        </div>
     )           
    }