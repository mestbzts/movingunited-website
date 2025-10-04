import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

interface AddressInputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

declare global {
  interface Window {
    google: any;
    initGoogleMaps: () => void;
  }
}

const AddressInput: React.FC<AddressInputProps> = ({
  name,
  placeholder,
  required = false,
  value = "",
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.initGoogleMaps = initAutocomplete;
        initAutocomplete();
      };
      document.head.appendChild(script);
    } else {
      initAutocomplete();
    }

    return () => {
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);

  const initAutocomplete = () => {
    if (window.google && inputRef.current && !autocompleteRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ["address"],
        componentRestrictions: { country: "ca" }, // Restrict to Canada
      });

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
        if (place.formatted_address && onChange) {
          onChange(place.formatted_address);
        }
      });

      setIsLoaded(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleInputChange}
        className="w-full"
      />
      {!isLoaded && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
          Loading...
        </div>
      )}
    </div>
  );
};

export default AddressInput;
