'use client'; 
import { useState, useEffect } from "react";
import { ApiClient } from "../../../../apiClient/apiClient";
import ApartmentForm from "@/app/components/ApartmentForm";

export default function ApartmentAdd() {
   const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        latitude: "",
        longitude: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        amenities: "",
        images: [],
        status: "",
        isPublic: true,
        neighborhoodRating: 0,
        });
        const [errors, setErrors] = useState({});
        const [success, setSuccess] = useState(false);
        const [loading, setLoading] = useState(false);
        const [suggestions, setSuggestions] = useState([]);
        const [autocompleteValue, setAutocompleteValue] = useState("");
        
        
        useEffect(() => {
            const apiClient = new ApiClient();
            if (!apiClient.isLoggedIn()) {
                window.location.href = "/auth/unauthorized";
            }
        }, []);

            useEffect(() => {
                    const delayDebounce = setTimeout(async () => {
                        if (autocompleteValue.length >= 3) {
                        try {
                            const res = await fetch(
                            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(autocompleteValue)}&addressdetails=1`
                            );
                            const data = await res.json();
                            setSuggestions(data);
                        } catch (err) {
                            console.error("Failed to fetch suggestions", err);
                        }
                        } else {
                        setSuggestions([]);
                        }
                    }, 500); // 500ms debounce

                    return () => clearTimeout(delayDebounce);
                    }, [autocompleteValue]);

            const handleSuggestionClick = (place) => {
                setAutocompleteValue(place.display_name);
                setSuggestions([]);

                const lat = place.lat;
                const lon = place.lon;
                const address = place.address;

                setFormData((prev) => ({
                ...prev,
                latitude: lat,
                longitude: lon,
                street: [address.road, address.house_number].filter(Boolean).join(" "),
                city: address.city || address.town || address.village || "",
                state: address.state || address.state_district || address.region || address.province || "",
                zipCode: address.postcode || "",
                country: address.country || "",
                }));
            };  

       
        const validateForm = () => {
            const newErrors = {};
            if (!formData.title.trim()) newErrors.title = "Title is required.";
            if (!formData.description.trim()) newErrors.description = "Description is required.";
            if (!formData.price.trim()) newErrors.price = "Price is required.";
            if (!formData.bedrooms.trim()) newErrors.bedrooms = "Bedrooms are required.";
            if (!formData.bathrooms.trim()) newErrors.bathrooms = "Bathrooms are required.";
            if (!formData.area.trim()) newErrors.area = "Area is required.";
            if (!Array.isArray(formData.amenities) || formData.amenities.length === 0) {
                newErrors.amenities = "Amenities are required (enter at least one amenity).";
              }

            if (!formData.status.trim()) newErrors.status = "Status is required.";
            if (formData.isPublic === undefined) newErrors.isPublic = "Please specify if the listing is public.";

            if (formData.price && (isNaN(Number(formData.price)) || Number(formData.price) < 0)) {
                newErrors.price = "Please enter a valid price.";
            }
            if (formData.bedrooms && (isNaN(Number(formData.bedrooms)) || Number(formData.bedrooms) < 0)) {
                newErrors.bedrooms = "Please enter a valid number of bedrooms.";
            }
            if (formData.bathrooms && (isNaN(Number(formData.bathrooms)) || Number(formData.bathrooms) < 0)) {
                newErrors.bathrooms = "Please enter a valid number of bathrooms.";
            }
            if (formData.area && (isNaN(Number(formData.area)) || Number(formData.area) < 0)) {
                newErrors.area = "Please enter a valid area.";
            }
            if (!formData.neighborhoodRating || formData.neighborhoodRating < 1 || formData.neighborhoodRating > 5) {
                newErrors.neighborhoodRating = "Please select a neighborhood rating between 1 and 5.";
                }
             if (!formData.street.trim()) newErrors.street = "Street is required.";
            if (!formData.city.trim()) newErrors.city = "City is required.";
            if (!formData.state.trim()) newErrors.state = "State is required.";
            if (!formData.zipCode.trim()) newErrors.zipCode = "Zip Code is required.";
            if (!formData.country.trim()) newErrors.country = "Country is required.";
            if (!formData.latitude.trim()) newErrors.latitude = "Latitude is required.";
            else if (isNaN(Number(formData.latitude))) newErrors.latitude = "Latitude must be a number.";
            if (!formData.longitude.trim()) newErrors.longitude = "Longitude is required.";
            else if (isNaN(Number(formData.longitude))) newErrors.longitude = "Longitude must be a number.";
                    setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
           
          };
        const handleSubmit = async (e) => {
          e.preventDefault();
          console.log("Form submission triggered");
          setSuccess(false);
          if (validateForm()) {
            setLoading(true);
            try{
                const apiClient = new ApiClient();

                // Check if user is logged in
                if (!apiClient.isLoggedIn()) {
                    window.location.href = "/auth/unauthorized";
                    return;
                }

                // Construct the location object as expected by the backend
                const locationObject = {
                    coordinates: [parseFloat(formData.longitude), parseFloat(formData.latitude)],
                    address: {
                        street: formData.street,
                        city: formData.city,
                        state: formData.state,
                        zipCode: formData.zipCode,
                        country: formData.country
                    }
                };

                // Create FormData for file upload
                const submissionData = new FormData();
                submissionData.append("title", formData.title);
                submissionData.append("description", formData.description);
                submissionData.append("price", formData.price);
                submissionData.append("bedrooms", formData.bedrooms);
                submissionData.append("bathrooms", formData.bathrooms);
                submissionData.append("area", formData.area);
                submissionData.append("amenities", formData.amenities.map(a => a.trim()).join(','));
                submissionData.append("status", formData.status);
                submissionData.append("isPublic", formData.isPublic ? "true" : "false");
                submissionData.append("location", JSON.stringify(locationObject));
                submissionData.append("neighborhoodRating", formData.neighborhoodRating);



                if (formData.images && formData.images.length > 0) {
                    formData.images.forEach((img) => submissionData.append("images", img));
                }

                // Debug: Log what's being sent
                console.log("Form data being sent:", {
                    title: formData.title,
                    description: formData.description,
                    price: formData.price,
                    bedrooms: formData.bedrooms,
                    bathrooms: formData.bathrooms,
                    area: formData.area,
                    amenities: formData.amenities,
                    status: formData.status,
                    street: formData.street,
                    city: formData.city,
                    state: formData.state,
                    zipCode: formData.zipCode,
                    country: formData.country,
                    latitude: formData.latitude,
                    longitude: formData.longitude,
                    isPublic: formData.isPublic,
                    neighborhoodRating: formData.neighborhoodRating,
                });

                // Debug: Log the actual FormData entries
                console.log("FormData entries:");
                for (let [key, value] of submissionData.entries()) {
                    console.log(`${key}:`, value);
                }

                await apiClient.createApartment(submissionData);

                 setSuccess(true);
                 setFormData({
                    title: "",
                    description: "",
                    price: "",
                    latitude: "",
                    longitude: "",
                    street: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    country: "",
                    bedrooms: "",
                    bathrooms: "",
                    area: "",
                    amenities: "",
                    images: [],
                    status: "",
                    isPublic: true,
                    neighborhoodRating: null,
                 });
                 setAutocompleteValue("");
                 setSuggestions([]);
            } catch (error) {
                console.error("Error listing an apartment.", error.response || error);
                console.log("Full error object:", error);
                console.log("Error response data:", error.response?.data);
                console.log("Error response status:", error.response?.status);
                
                // Log the specific validation errors
                if (error.response?.data?.details) {
                    console.log("Validation errors:", error.response.data.details);
                }
                if (error.response?.data?.errors) {
                    console.log("Validation errors:", error.response.data.errors);
                }
                
                setErrors({
                    submit:
                        (error.response?.data?.details && Array.isArray(error.response.data.details) && error.response.data.details.join(', ')) ||
                        (error.response?.data?.errors && Array.isArray(error.response.data.errors) && error.response.data.errors.join(', ')) ||
                        error.response?.data?.message ||
                        error.response?.data?.error ||
                        "Failed to list an apartment. Please try again.",
                });
             }
             setLoading(false);
          }
        };
            const handleChange = (e) => {
  const { name, value, files } = e.target;

        if (name === "images") {
          const selectedFiles = Array.from(files).slice(0, 8);
          setFormData((prev) => ({ ...prev, images: selectedFiles }));
          return;
        }

        if (name === "amenities") {
          const amenitiesArray = value
            .split(',')
            .map(item => item.trim())
            .filter(Boolean);
          setFormData((prev) => ({ ...prev, amenities: amenitiesArray }));
        } else {
          setFormData((prev) => ({ ...prev, [name]: value }));
        }

        // Clear error for this field if any
        if (errors[name]) {
          setErrors((prev) => ({ ...prev, [name]: "" }));
        }
      };


  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">List An Apartment</h1>
      <ApartmentForm
          formData={formData}
          errors={errors}
          success={success}
          onFormChange={handleChange}
          onAutocompleteChange={(e) => setAutocompleteValue(e.target.value)}
          onSuggestionClick={handleSuggestionClick}
          onNeighborhoodRatingChange={(rating) =>
            setFormData((prev) => ({ ...prev, neighborhoodRating: rating }))
          }
          onTogglePublic={() =>
            setFormData((prev) => ({ ...prev, isPublic: !prev.isPublic }))
          }
          onSubmit={handleSubmit}
          suggestions={suggestions}
          autocompleteValue={autocompleteValue}
           loading={loading}
        />
     </div>
  );
}
