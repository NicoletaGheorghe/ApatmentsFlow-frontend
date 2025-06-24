(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/Input.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Input({ label, type = "text", name, value, onChange, placeholder }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block mb-1 font-semibold text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/Input.js",
                lineNumber: 4,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: name,
                name: name,
                type: type,
                value: value,
                onChange: onChange,
                placeholder: placeholder,
                className: "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Input.js",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Input.js",
        lineNumber: 3,
        columnNumber: 7
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Button.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ children, onClick, type = "button" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: "bg-[var(--color-secondary)] text-white px-4 py-2 rounded hover:bg-[var(--color-accent)] transition",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/Button.js",
        lineNumber: 3,
        columnNumber: 7
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/apartmentAdd/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ApartmentAdd)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apiClient$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apiClient/apiClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Button.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ApartmentAdd() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
        neighborhoodRating: 0
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [autocompleteValue, setAutocompleteValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApartmentAdd.useEffect": ()=>{
            const apiClient = new __TURBOPACK__imported__module__$5b$project$5d2f$apiClient$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiClient"]();
            if (!apiClient.isLoggedIn()) {
                window.location.href = "/auth/unauthorized";
            }
        }
    }["ApartmentAdd.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApartmentAdd.useEffect": ()=>{
            const delayDebounce = setTimeout({
                "ApartmentAdd.useEffect.delayDebounce": async ()=>{
                    if (autocompleteValue.length >= 3) {
                        try {
                            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(autocompleteValue)}&addressdetails=1`);
                            const data = await res.json();
                            setSuggestions(data);
                        } catch (err) {
                            console.error("Failed to fetch suggestions", err);
                        }
                    } else {
                        setSuggestions([]);
                    }
                }
            }["ApartmentAdd.useEffect.delayDebounce"], 500); // 500ms debounce
            return ({
                "ApartmentAdd.useEffect": ()=>clearTimeout(delayDebounce)
            })["ApartmentAdd.useEffect"];
        }
    }["ApartmentAdd.useEffect"], [
        autocompleteValue
    ]);
    const handleSuggestionClick = (place)=>{
        setAutocompleteValue(place.display_name);
        setSuggestions([]);
        const lat = place.lat;
        const lon = place.lon;
        const address = place.address;
        setFormData((prev)=>({
                ...prev,
                latitude: lat,
                longitude: lon,
                street: [
                    address.road,
                    address.house_number
                ].filter(Boolean).join(" "),
                city: address.city || address.town || address.village || "",
                state: address.state || address.state_district || address.region || address.province || "",
                zipCode: address.postcode || "",
                country: address.country || ""
            }));
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required.";
        if (!formData.description.trim()) newErrors.description = "Description is required.";
        if (!formData.price.trim()) newErrors.price = "Price is required.";
        if (!formData.bedrooms.trim()) newErrors.bedrooms = "Bedrooms are required.";
        if (!formData.bathrooms.trim()) newErrors.bathrooms = "Bathrooms are required.";
        if (!formData.area.trim()) newErrors.area = "Area is required.";
        if (!formData.amenities.trim() || formData.amenities.trim().split(',').filter((item)=>item.trim()).length === 0) {
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
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("Form submission triggered");
        setSuccess(false);
        if (validateForm()) {
            setLoading(true);
            try {
                const apiClient = new __TURBOPACK__imported__module__$5b$project$5d2f$apiClient$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiClient"]();
                // Check if user is logged in
                if (!apiClient.isLoggedIn()) {
                    window.location.href = "/auth/unauthorized";
                    return;
                }
                // Construct the location object as expected by the backend
                const locationObject = {
                    coordinates: [
                        parseFloat(formData.longitude),
                        parseFloat(formData.latitude)
                    ],
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
                submissionData.append("amenities", formData.amenities.split(',').map((a)=>a.trim()).join(','));
                submissionData.append("status", formData.status);
                submissionData.append("isPublic", formData.isPublic ? "true" : "false");
                submissionData.append("location", JSON.stringify(locationObject));
                submissionData.append("neighborhoodRating", formData.neighborhoodRating);
                if (formData.images && formData.images.length > 0) {
                    formData.images.forEach((img)=>submissionData.append("images", img));
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
                    neighborhoodRating: formData.neighborhoodRating
                });
                // Debug: Log the actual FormData entries
                console.log("FormData entries:");
                for (let [key, value] of submissionData.entries()){
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
                    neighborhoodRating: null
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
                    submit: error.response?.data?.details && Array.isArray(error.response.data.details) && error.response.data.details.join(', ') || error.response?.data?.errors && Array.isArray(error.response.data.errors) && error.response.data.errors.join(', ') || error.response?.data?.message || error.response?.data?.error || "Failed to list an apartment. Please try again."
                });
            }
            setLoading(false);
        }
    };
    const handleChange = (e)=>{
        const { name, value, files } = e.target;
        if (name === "images") {
            // Accept up to 8 images
            const selectedFiles = Array.from(files).slice(0, 8);
            setFormData((prev)=>({
                    ...prev,
                    images: selectedFiles
                }));
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: ""
                }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-[var(--color-primary)] mb-8",
                children: "List An Apartment"
            }, void 0, false, {
                fileName: "[project]/src/app/apartmentAdd/page.js",
                lineNumber: 266,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Title",
                                type: "text",
                                name: "title",
                                value: formData.title,
                                onChange: handleChange,
                                placeholder: "Enter a title",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 269,
                                columnNumber: 17
                            }, this),
                            errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 278,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 268,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Description",
                                type: "text",
                                name: "description",
                                value: formData.description,
                                onChange: handleChange,
                                placeholder: "Enter a description",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 282,
                                columnNumber: 17
                            }, this),
                            errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 291,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 281,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Price",
                                type: "number",
                                name: "price",
                                value: formData.price,
                                onChange: handleChange,
                                placeholder: "Enter a price",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 295,
                                columnNumber: 17
                            }, this),
                            errors.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.price
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 304,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 294,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "autocomplete",
                                className: "block mb-1 font-semibold",
                                children: "Search Address"
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 308,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "autocomplete",
                                type: "text",
                                value: autocompleteValue,
                                onChange: (e)=>setAutocompleteValue(e.target.value),
                                placeholder: "Start typing address...",
                                className: "w-full p-2 border rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 311,
                                columnNumber: 17
                            }, this),
                            suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "border mt-1 max-h-60 overflow-y-auto rounded shadow bg-white z-10 relative",
                                children: suggestions.map((sugg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "p-2 hover:bg-gray-100 cursor-pointer",
                                        onClick: ()=>handleSuggestionClick(sugg),
                                        children: sugg.display_name
                                    }, index, false, {
                                        fileName: "[project]/src/app/apartmentAdd/page.js",
                                        lineNumber: 322,
                                        columnNumber: 25
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 320,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 307,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Street",
                                type: "text",
                                name: "street",
                                value: formData.street,
                                onChange: handleChange,
                                placeholder: "Enter street",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 335,
                                columnNumber: 17
                            }, this),
                            errors.street && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.street
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 344,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 334,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "City",
                                type: "text",
                                name: "city",
                                value: formData.city,
                                onChange: handleChange,
                                placeholder: "Enter city",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 348,
                                columnNumber: 17
                            }, this),
                            errors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.city
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 357,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 347,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "State",
                                type: "text",
                                name: "state",
                                value: formData.state,
                                onChange: handleChange,
                                placeholder: "Enter state",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 361,
                                columnNumber: 17
                            }, this),
                            errors.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.state
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 370,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 360,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Zip Code",
                                type: "text",
                                name: "zipCode",
                                value: formData.zipCode,
                                onChange: handleChange,
                                placeholder: "Enter zip code",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 374,
                                columnNumber: 17
                            }, this),
                            errors.zipCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.zipCode
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 383,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 373,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Country",
                                type: "text",
                                name: "country",
                                value: formData.country,
                                onChange: handleChange,
                                placeholder: "Enter country",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 387,
                                columnNumber: 17
                            }, this),
                            errors.country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.country
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 396,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 386,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Bedrooms",
                                type: "number",
                                name: "bedrooms",
                                value: formData.bedrooms,
                                onChange: handleChange,
                                placeholder: "Enter number of bedrooms",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 401,
                                columnNumber: 17
                            }, this),
                            errors.bedrooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.bedrooms
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 410,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 400,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Bathrooms",
                                type: "number",
                                name: "bathrooms",
                                value: formData.bathrooms,
                                onChange: handleChange,
                                placeholder: "Enter number of bathrooms",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 414,
                                columnNumber: 17
                            }, this),
                            errors.bathrooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.bathrooms
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 423,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 413,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Area",
                                type: "number",
                                name: "area",
                                value: formData.area,
                                onChange: handleChange,
                                placeholder: "Enter an area",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 427,
                                columnNumber: 17
                            }, this),
                            errors.area && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.area
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 436,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 426,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Amenities (comma separated)",
                                type: "text",
                                name: "amenities",
                                value: formData.amenities,
                                onChange: handleChange,
                                placeholder: "Enter the amenities",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 440,
                                columnNumber: 17
                            }, this),
                            errors.amenities && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.amenities
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 449,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 439,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "images",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Images (up to 8)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 453,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                id: "images",
                                name: "images",
                                multiple: true,
                                accept: "image/*",
                                onChange: handleChange,
                                className: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 454,
                                columnNumber: 15
                            }, this),
                            errors.images && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: errors.images
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 463,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 452,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-semibold mb-1",
                                children: "Neighborhood Quality"
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 466,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-2",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((rating)=>{
                                    const emoji = {
                                        1: "😖",
                                        2: "😕",
                                        3: "😐",
                                        4: "😊",
                                        5: "😍"
                                    }[rating];
                                    const tooltip = {
                                        1: "1 - Unsafe, noisy",
                                        2: "2 - Needs improvement",
                                        3: "3 - Average",
                                        4: "4 - Nice and peaceful",
                                        5: "5 - Excellent, dream location"
                                    }[rating];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        title: tooltip,
                                        onClick: ()=>setFormData((prev)=>({
                                                    ...prev,
                                                    neighborhoodRating: rating
                                                })),
                                        className: "text-2xl focus:outline-none",
                                        style: {
                                            background: "none",
                                            border: "none",
                                            padding: 0,
                                            cursor: "pointer"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-label": tooltip,
                                            role: "img",
                                            style: {
                                                opacity: formData.neighborhoodRating === rating ? 1 : 0.5,
                                                transition: "opacity 0.2s"
                                            },
                                            children: emoji
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/apartmentAdd/page.js",
                                            lineNumber: 501,
                                            columnNumber: 25
                                        }, this)
                                    }, rating, false, {
                                        fileName: "[project]/src/app/apartmentAdd/page.js",
                                        lineNumber: 486,
                                        columnNumber: 25
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 467,
                                columnNumber: 17
                            }, this),
                            errors.neighborhoodRating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.neighborhoodRating
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 516,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 465,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "status",
                                className: "block mb-1 font-semibold",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 521,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "status",
                                name: "status",
                                value: formData.status,
                                onChange: handleChange,
                                className: "w-full p-2 border rounded",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/apartmentAdd/page.js",
                                        lineNumber: 532,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "available",
                                        children: "Available"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/apartmentAdd/page.js",
                                        lineNumber: 533,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "rented",
                                        children: "Rented"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/apartmentAdd/page.js",
                                        lineNumber: 534,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pending",
                                        children: "Pending"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/apartmentAdd/page.js",
                                        lineNumber: 535,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 524,
                                columnNumber: 17
                            }, this),
                            errors.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-red-500",
                                children: errors.status
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 538,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 520,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "isPublic",
                                className: "font-semibold",
                                children: "Public/Private Listing"
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 542,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setFormData((prev)=>({
                                            ...prev,
                                            isPublic: !prev.isPublic
                                        })),
                                className: `w-14 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${formData.isPublic ? "bg-green-500" : "bg-gray-400"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${formData.isPublic ? "translate-x-6" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/apartmentAdd/page.js",
                                    lineNumber: 554,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 545,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formData.isPublic ? "Public" : "Private"
                            }, void 0, false, {
                                fileName: "[project]/src/app/apartmentAdd/page.js",
                                lineNumber: 560,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 541,
                        columnNumber: 13
                    }, this),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "green",
                            marginTop: "1rem"
                        },
                        children: "Apartment listed successfully!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 563,
                        columnNumber: 17
                    }, this),
                    errors.submit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-sm",
                        children: errors.submit
                    }, void 0, false, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 566,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "submit",
                        disabled: loading,
                        children: loading ? 'Listing apartment...' : 'List an apartment'
                    }, void 0, false, {
                        fileName: "[project]/src/app/apartmentAdd/page.js",
                        lineNumber: 568,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/apartmentAdd/page.js",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/apartmentAdd/page.js",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_s(ApartmentAdd, "Ipz3I3jdLiYAcnFCJX15/GZ0PSk=");
_c = ApartmentAdd;
var _c;
__turbopack_context__.k.register(_c, "ApartmentAdd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_4f80bada._.js.map