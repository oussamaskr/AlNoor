import React, { useState, useMemo } from 'react';
import BrandCard from '../Conponents/BrandCard/BrandCard';
import { motion } from 'framer-motion';

function Brands() {
const brands = useMemo(() => [
  {
    name: "Lattafa",
    logo: "https://images.seeklogo.com/logo-png/51/1/lattafa-logo-png_seeklogo-511416.png",
    description: "Traditional blends for the modern soul.",
    origin: "UAE",
    founded: 1998,
    specialty: "Attars",
    website: "https://www.Lattafa.com",
    topFragrances: ["Khamrah", "Eternzl Oud", "Fakhar Black"],
    isPopular: false,
    available: true
  },
  {
    name: "Afnan",
    logo: "https://perfumesyperfumes.com/cdn/shop/collections/LOGO_AFNAN.png?v=1717098276",
    description: "Deep, musky layers of royalty.",
    origin: "Saudi Arabia",
    founded: 2005,
    specialty: "Musk",
    website: "https://www.afnan.com",
    topFragrances: ["9 PM", "Turzthi blue"],
    isPopular: true,
    available: true
  },
  {
    name: "Armaf",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSom12W7ZK1rkIkknt1Y5QWUZI9K1qa8uesjAJFNME58H4eeCMHyP-58jpDFKFitoj6E&usqp=CAU",
    description: "Paris meets Arabia in luxurious harmony.",
    origin: "France",
    founded: 2012,
    specialty: "Oud & French fusion",
    website: "https://www.armaf.uae",
    topFragrances: ["Monarque", "Club de nuit intense man"],
    isPopular: true,
    available: true
  },
  {
    name: "Arabian Oud",
    logo: "https://images.seeklogo.com/logo-png/18/1/arabian-oud-logo-png_seeklogo-188074.png",
    description: "Luxury fragrances from the heart of Arabia.",
    origin: "Saudi Arabia",
    founded: 1982,
    specialty: "Luxury Oud",
    website: "https://www.arabianoud.com",
    topFragrances: ["Kalemat", "Arabian Knight", "Resala"],
    isPopular: true,
    available: true
  },
  {
    name: "Amouage",
    logo: "https://cdn.salla.sa/YovEO/aLDQMeHxHt1NKmhmEyJpez3Hn4KTZaOshdmAFMa6.jpg",
    description: "Omani luxury perfumery with global acclaim.",
    origin: "Oman",
    founded: 1983,
    specialty: "High-end niche",
    website: "https://www.amouage.com",
    topFragrances: ["Interlude Man", "Memoir Woman", "Jubilation XXV"],
    isPopular: true,
    available: false
  },
  {
    name: "Fragrance World",
    logo: "https://media.parfoom.com/brands/fragrance-world-primary.webp",
    description: "Crafting fragrances since 1951.",
    origin: "UAE",
    founded: 1951,
    specialty: "Heritage & Modern",
    website: "https://www.ajmalperfume.com",
    topFragrances: ["Liquid Brun", "Spectre Ghost", "Jack Of Clubs"],
    isPopular: true,
    available: true
  }
], []);


  // Memoize unique origins to prevent recalculating on every render
  const allOrigins = useMemo(() => ['All', ...new Set(brands.map(brand => brand.origin))], [brands]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('All');
  const [sortOption, setSortOption] = useState('default');

  // Filter and sort brands
  const filteredBrands = useMemo(() => {
    let result = brands.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          brand.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesOrigin = selectedOrigin === 'All' || brand.origin === selectedOrigin;
      return matchesSearch && matchesOrigin;
    });

    // Sorting logic
    switch(sortOption) {
      case 'name-asc':
        return [...result].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...result].sort((a, b) => b.name.localeCompare(a.name));
      case 'popular':
        return [...result].sort((a, b) => (b.isPopular === a.isPopular) ? 0 : b.isPopular ? 1 : -1);
      case 'oldest':
        return [...result].sort((a, b) => a.founded - b.founded);
      case 'newest':
        return [...result].sort((a, b) => b.founded - a.founded);
      default:
        return result;
    }
  }, [brands, searchTerm, selectedOrigin, sortOption]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedOrigin('All');
    setSortOption('default');
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-cover bg-center mb-6 max-sm:h-[90vh]"
        style={{ 
          backgroundImage: 'url("https://bfuturist.com/wp-content/uploads/2024/11/DSC01899.jpg")'
        }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: 'var(--color-textSecondary)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: "easeInOut" }}
          >
            Discover Our <span style={{ color: 'var(--color-callAction)' }}>Signature Brands</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--color-textSecondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            A curated collection of the most prestigious names in oriental perfumery — 
            each with a story, a soul, and a scent.
          </motion.p>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Search Input */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-textPrimary)' }}>
                Search Brands
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Type brand name or description..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-callAction)] focus:border-transparent outline-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Origin Filter */}
            <div>
              <label htmlFor="origin" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-textPrimary)' }}>
                Filter by Origin
              </label>
              <select
                id="origin"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-callAction)] focus:border-transparent outline-0"
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
              >
                {allOrigins.map((origin, index) => (
                  <option key={index} value={origin}>{origin}</option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-textPrimary)' }}>
                Sort By
              </label>
              <select
                id="sort"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-callAction)] focus:border-transparent outline-0"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </motion.div>
          
          {/* Results Info */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm" style={{ color: 'var(--color-textPrimary)' }}>
              Showing <span className="font-semibold">{filteredBrands.length}</span> {filteredBrands.length === 1 ? 'brand' : 'brands'}
              {(searchTerm || selectedOrigin !== 'All') && (
                <span>
                  {' '}matching your criteria
                </span>
              )}
            </p>
            
            {(searchTerm || selectedOrigin !== 'All' || sortOption !== 'default') && (
              <button 
                className="text-sm px-4 py-2 rounded-lg border border-[var(--color-callAction)] text-[var(--color-callAction)] hover:bg-[var(--color-callAction)] hover:text-white transition-colors"
                onClick={resetFilters}
              >
                Reset All Filters
              </button>
            )}
          </motion.div>
          
          {/* Brand Cards Grid */}
          {filteredBrands.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <BrandCard 
                    {...brand} 
                    disabled={!brand.available}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <svg 
                className="mx-auto h-12 w-12 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium" style={{ color: 'var(--color-textPrimary)' }}>
                No brands found
              </h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--color-textSecondary)' }}>
                Try adjusting your search or filter criteria
              </p>
              <div className="mt-6">
                <button 
                  className="px-4 py-2 bg-[var(--color-callAction)] text-white rounded-lg hover:opacity-90 transition-opacity"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

export default Brands;