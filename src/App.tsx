// GROWSIA — SWAPNAKAR WEBSITE // To edit content: look for // EDIT TEXT and // SWAP IMAGE comments throughout

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from "react";

// Import Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SplashScreen } from "./components/SplashScreen";

// Import Page Views
import Home from "./pages/Home";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinished = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinished={handleSplashFinished} />}

      <div
        className={`flex flex-col min-h-screen bg-white text-[#1C1C1C] transition-opacity duration-700 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Sticky Header component */}
        <Header />

        <main className="flex-grow">
          <Home />
        </main>

        {/* Footers */}
        <Footer />
      </div>
    </>
  );
}
