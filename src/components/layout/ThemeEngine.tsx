"use client";

import { useEffect, useState } from 'react';

interface BrandConfig {
  primary: string;
  secondary: string;
  logo: string;
  name: string;
}

export default function ThemeEngine({ children }: { children: React.ReactNode }) {
  const [brand, setBrand] = useState<BrandConfig | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from /api/branding/lookup?domain=...
    // For now, we simulate domain detection
    const hostname = window.location.hostname;
    
    let simulatedBrand: BrandConfig = {
      primary: "#A67653", // HourlyPlace Brown
      secondary: "#e2e8f0",
      logo: "/logo.png",
      name: "ModernHospitality"
    };

    if (hostname.includes("ghantaghar")) {
      simulatedBrand = {
        primary: "#10b981", // Ghantaghar Green (Simulated)
        secondary: "#f1f5f9",
        logo: "/ghantaghar-logo.png",
        name: "Ghantaghar"
      };
    }

    setBrand(simulatedBrand);

    // Apply CSS variables
    document.documentElement.style.setProperty('--primary', simulatedBrand.primary);
    // Add more variables as needed
  }, []);

  return <>{children}</>;
}
