'use client';

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ApiClient } from "../../../../apiClient/apiClient";
import ApartmentForm from "@/app/components/ApartmentForm";

export default function ApartmentEdit() {
  const searchParams = useSearchParams();
  const apartmentId = searchParams.get("id");

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
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateErrors, setUpdateErrors] = useState({});

  useEffect(() => {
    if (!apartmentId || apartmentId === "undefined") {
      setFetchError("No valid apartment ID provided.");
      setLoading(false);
      return;
    }

    const fetchApartment = async () => {
      const api = new ApiClient();

      try {
        const res = await api.getApartment(apartmentId);
        const data = res.data || res;

        const location = data.location || {};
        setFormData({
          ...data,
          price: data.price?.toString() || "",
          bedrooms: data.bedrooms?.toString() || "",
          bathrooms: data.bathrooms?.toString() || "",
          area: data.area?.toString() || "",
          latitude: location.coordinates?.[1]?.toString() || "",
          longitude: location.coordinates?.[0]?.toString() || "",
          street: location.address?.street || "",
          city: location.address?.city || "",
          state: location.address?.state || "",
          zipCode: location.address?.zipCode || "",
          country: location.address?.country || "",
          amenities: Array.isArray(data.amenities)
            ? data.amenities.join(", ")
            : data.amenities || "",
          images: [], // We'll manage image files separately
        });
      } catch (error) {
        setFetchError("Failed to fetch apartment data.");
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [apartmentId]);

  
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files).slice(0, 8);
    setImages(selectedFiles);
  };

  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    
    if (updateErrors[name]) {
      setUpdateErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdateLoading(true);
    setUpdateErrors({});
    setUpdateSuccess(false);

    try {
      const apiClient = new ApiClient();

      if (!apiClient.isLoggedIn()) {
        window.location.href = "/auth/unauthorized";
        return;
      }

      const locationObject = {
        coordinates: [parseFloat(formData.longitude), parseFloat(formData.latitude)],
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country,
        },
      };

      const submissionData = new FormData();
      submissionData.append("title", formData.title);
      submissionData.append("description", formData.description);
      submissionData.append("price", formData.price);
      submissionData.append("bedrooms", formData.bedrooms);
      submissionData.append("bathrooms", formData.bathrooms);
      submissionData.append("area", formData.area);
      submissionData.append("amenities", formData.amenities);
      submissionData.append("status", formData.status);
      submissionData.append("isPublic", formData.isPublic ? "true" : "false");
      submissionData.append("location", JSON.stringify(locationObject));
      submissionData.append("neighborhoodRating", formData.neighborhoodRating);

      if (images.length > 0) {
        images.forEach((img) => submissionData.append("images", img));
      }

      await apiClient.updateApartment(apartmentId, submissionData);

      setUpdateSuccess(true);
    } catch (err) {
      setUpdateErrors({
        submit: err?.response?.data?.message || "Failed to update apartment.",
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) return <p>Loading apartment data...</p>;
  if (fetchError) return <p className="text-red-500">{fetchError}</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Edit Apartment</h1>

      {formData && (
        <ApartmentForm
          formData={formData}
          errors={updateErrors}
          onFormChange={handleFormChange}
          onImageChange={handleImageChange} 
          onSubmit={handleUpdate}
          mode="edit"
          images={images} 
        />
      )}

      {updateLoading && <p className="text-blue-500 mb-4">Updating apartment...</p>}
      {updateSuccess && <p className="text-green-500 mb-4">Apartment updated successfully!</p>}
      {updateErrors.submit && <p className="text-red-500 mb-4">{updateErrors.submit}</p>}
    </div>
  );
}
