import { motion } from 'motion/react';
import React, {useState} from 'react'
import { FaShoppingBag,FaFilter, FaStar, FaUndo } from 'react-icons/fa';

function PerfumeCard() {

   const perfumes = [
    {
      id: 1,
      Brand: "Lattafa",
      name: "Atlas",
      season: "Summer",
      rating: 4,
      image: "https://www.giftexpress.com/media/catalog/product/cache/8707a82ff53728be6dbcd7cea0f577d3/g/x/gxp-14506.jpg",
      gender: "Male",
      price: 29.99
    },
    {
      id: 2,
      Brand: "Lattafa",
      name: "Eternal Oud",
      season: "Winter",
      rating: 4.5,
      image: "https://splashfragrance.in/wp-content/uploads/2022/08/Lattafa-Eternal-Oud.webp",
      gender: "Male",
      price: 45.99
    },
    {
      id: 3,
      Brand: "Rasasi",
      name: "Hawas",
      season: "Summer",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsSJkOaZ6l3mW9RS6vKO1yeE1uxDjE7RQqA&s",
      gender: "Male",
      price: 59.99
    },
    {
      id: 4,
      Brand: "Rasasi",
      name: "La Yuqawam",
      season: "Winter",
      rating: 4.8,
      image: "https://splashfragrance.in/wp-content/uploads/2018/09/la-yuqawam.jpg",
      gender: "Male",
      price: 65.50
    },
    {
      id: 5,
      Brand: "Al Haramain",
      name: "Amber Oud Rouge",
      season: "Winter",
      rating: 4.6,
      image: "https://cdn.wholesale55.com/wp-content/uploads/2024/07/Amber-Oud-Rouge-100ml-Unisex-by-Haramain.jpeg",
      gender: "Women",
      price: 89.99
    },
    {
      id: 6,
      Brand: "Al Haramain",
      name: "L'Aventure",
      season: "All Season",
      rating: 4.4,
      image: "https://shop.alharamainperfumes.com/media/catalog/product/cache/490c4e3bbae272be3ce2b30a9945698e/a/h/ahp1059-laventure-intense2.jpg",
      gender: "Male",
      price: 39.99
    },
    {
      id: 7,
      Brand: "Swiss Arabian",
      name: "Shaghaf Oud",
      season: "Winter",
      rating: 4.3,
      image: "https://cdn.youcan.shop/stores/adf19cc831e09707a13b332af00d3add/products/ff4X47L2FLZ4jfVd8fOglhqatJVMKi0L2bRK7uI7.png",
      gender: "Male",
      price: 75.00
    },
    {
      id: 8,
      Brand: "Swiss Arabian",
      name: "Shaghaf Oud Azraq",
      season: "Evening",
      rating: 4.5,
      image: "https://marah.fashion/cdn/shop/files/s-l1600-900x.jpg?v=1730064927",
      gender: "Male",
      price: 82.50
    },
    {
      id: 9,
      Brand: "Arabian Oud",
      name: "Al Fareed",
      season: "Winter",
      rating: 4.2,
      image: "https://odorem-dz.com/wp-content/uploads/2025/01/1000296954-scaled.jpg",
      gender: "Male",
      price: 120.00
    },
    {
      id: 10,
      Brand: "Arabian Oud",
      name: "Madawi",
      season: "Evening",
      rating: 4.7,
      image: "https://media.al-jasser.com/api/public/content/xkfljytsqkyskc6vbfuog-web?v=4349ec5c&t=w800",
      gender: "Women",
      price: 110.00
    },
    {
      id: 11,
      Brand: "Armaf",
      name: "Club de Nuit Intense",
      season: "All Season",
      rating: 4.8,
      image: "https://dz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/2355/1.jpg?3903",
      gender: "Male",
      price: 49.99
    },
    {
      id: 12,
      Brand: "Armaf",
      name: "Monarque",
      season: "Summer",
      rating: 4.1,
      image: "https://samawa.ae/cdn/shop/files/Armaf_CDN_the_Lion_Club_Manarque_Edp_100ml_Spy1.jpg?v=1736922327",
      gender: "Male",
      price: 55.00
    },
    {
      id: 13,
      Brand: "French Avenue",
      name: "Vulkan Feu",
      season: "All Season",
      rating: 4.0,
      image: "https://ribaworld.de/cdn/shop/files/vulcan-feu_1024x.jpg?v=1742761533",
      gender: "Male",
      price: 42.99
    },
    {
      id: 14,
      Brand: "French Avenue",
      name: "Aether",
      season: "Summer",
      rating: 4.3,
      image: "https://media.douglas.ch/medias/0zZnYj1220919-1-global.jpg?context=bWFzdGVyfGltYWdlc3wxMTkyNzl8aW1hZ2UvanBlZ3xhREpsTDJoaFpDODJNemd3TXpNeE5qQTNOalUzTkM4d2VscHVXV294TWpJd09URTVYekZmWjJ4dlltRnNMbXB3Wnd8YTBlNmQ1MDkzYjljYmMxM2Q1YTFiNWE0ZDQ0M2FmNTZmNTBlN2NlZTA4MmYwMjk5OWM0OTI4YzgxYjFkY2I0Zg&grid=true",
      gender: "Male",
      price: 47.50
    },
    {
      id: 15,
      Brand: "Arabiat Prestige",
      name: "Aariz",
      season: "Winter",
      rating: 4.6,
      image: "https://la-barfumerie.com/cdn/shop/files/refle_miroire_Aariz_Eau_de_Parfum_100-ml_Arabiyat_Prestige_Aariz.jpg?v=1746927223&width=320",
      gender: "Unisex",
      price: 68.00
    },
    {
      id: 16,
      Brand: "Afnan",
      name: "Supremacy Purple",
      season: "Winter",
      rating: 4.6,
      image: "https://dscentsation.ng/cdn/shop/files/IMG-7832.jpg?v=1720603284",
      gender: "Women",
      price: 79.99
    },
    {
      id: 17,
      Brand: "Afnan",
      name: "Supremacy Tapis Rouge",
      season: "Winter",
      rating: 4.6,
      image: "https://ajeeb.net/cdn/shop/files/Supremacy-Tapis-Rouge-Perfume-Extrait-De-Parfum-90ml-by-Afnan_300x300.webp?v=1713861541",
      gender: "Women",
      price: 85.00
    },
  ];
  const [filteredPerfumes, setFilteredPerfumes] = useState(perfumes);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilter = (filters) => {
    const results = perfumes.filter(perfume => {
      return (
        (!filters.searchTerm || perfume.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
        (!filters.brand || perfume.Brand === filters.brand) &&
        (!filters.gender || perfume.gender === filters.gender) &&
        (!filters.season || perfume.season === filters.season) &&
        (!filters.minPrice || perfume.price >= filters.minPrice) &&
        (!filters.maxPrice || perfume.price <= filters.maxPrice) &&
        perfume.rating >= filters.minRating
      );
    });
    setFilteredPerfumes(results);
  };

  const brands = [...new Set(perfumes.map(p => p.Brand))];
  const genders = [...new Set(perfumes.map(p => p.gender))];
  const seasons = [...new Set(perfumes.map(p => p.season))];
  
  const [filters, setFilters] = useState({
    searchTerm :"",
    brand: '',
    gender: '',
    season: '',
    minPrice: '',
    maxPrice: '',
    minRating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter(filters);
    setShowFilters(false);
  };

  const handleReset = () => {
    setFilters({
      searchTerm :"",
      brand: '',
      gender: '',
      season: '',
      minPrice: '',
      maxPrice: '',
      minRating: 0
    });
    setFilteredPerfumes(perfumes);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className=" container mx-auto px-4 py-8 max-sm:px-2">
      <div className="flex justify-between items-center mb-8 max-sm:flex-col gap-6 ">
        <h1 className="text-3xl font-bold text-amber-800 max-sm:text-[26px]">Arabian Perfumes Collection</h1>
        <button
          onClick={toggleFilters}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors duration-300 max-sm:text-[16px]"
        >
          <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

<div className={`filter-section bg-white p-6 rounded-lg shadow-md mb-8 ${showFilters ? "show" : ""}`}>

      <h2 className="text-xl font-bold text-amber-800 mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
        Filter Perfumes
      </h2>
      
      <form onSubmit={handleSubmit}>
      <div className="space-y-4 mb-2">
        <label 
          htmlFor="perfumeSearch" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Perfume
        </label>
        <input
          type="text"
          id="perfumeSearch"
          name="searchTerm"  // This should match your filters object key
          placeholder="Search for perfume..."
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md  outline-0
                    focus:ring-amber-500 focus:border-amber-500
                    placeholder-gray-400"
        />
      </div>
        <div className="space-y-4">
          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <select
              name="brand"
              value={filters.brand}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-0"
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          
          {/* Gender Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <div className="grid grid-cols-2 gap-2">
              {genders.map(gender => (
                <label key={gender} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={filters.gender === gender}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{gender}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Season Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Season</label>
            <div className="flex flex-wrap gap-2">
              {seasons.map(season => (
                <button
                  key={season}
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, season: prev.season === season ? '' : season }))}
                  className={`px-3 py-1 text-sm rounded-full ${
                    filters.season === season 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>
          </div>
          
          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, minRating: star }))}
                  className={`text-lg ${star <= filters.minRating ? 'text-amber-400' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
              <span className="text-sm text-gray-500 ml-2">
                ({filters.minRating}+ stars)
              </span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-6 flex space-x-3">
          <button
            type="submit"
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
      

      {filteredPerfumes.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700">No perfumes found matching your filters</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
          <button
            onClick={handleReset}
            className="mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors duration-300"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume) => (
            <motion.div
            initial={{opacity : 0.1, y:15}}
            whileInView={{opacity:1 , y:0}}
            viewport={{once:true}}
            transition={{duration:1.25,ease:"easeIn", type:"tween", stiffness:100}} 
              key={perfume.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden rounded-t-lg">
                <img 
                  src={perfume.image} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  alt={`${perfume.Brand} ${perfume.name}`}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/300x300?text=Perfume+Image";
                  }}
                />
                <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                  {perfume.season}
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{perfume.name}</h3>
                    <p className="text-sm text-gray-600">{perfume.Brand}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    perfume.gender === "Male" ? "bg-blue-100 text-blue-800" :
                    perfume.gender === "Women" ? "bg-pink-100 text-pink-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {perfume.gender}
                  </span>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-lg font-bold text-amber-700">
                      ${perfume.price.toFixed(2)}
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(perfume.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({perfume.rating})</span>
                    </div>
                  </div>

                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2">
                    <FaShoppingBag />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PerfumeCard;
