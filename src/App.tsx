// GROWSIA — SWAPNAKAR WEBSITE // To edit content: look for // EDIT TEXT and // SWAP IMAGE comments throughout

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Import Page Views
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1C1C1C]">
      {/* Sticky Header component */}
      <Header />

      <main className="flex-grow">
        <Home />
      </main>

      {/* Footers */}
      <Footer />
    </div>
  );
}
