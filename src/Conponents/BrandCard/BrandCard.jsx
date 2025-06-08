import { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';

const BrandCard = ({ 
  logo, 
  name, 
  description, 
  origin, 
  onClick,
  website,
  specialty,
  isPopular,
  topFragrances,
  className = '',
  hoverEffect = true,
  disabled = false,
  loading = false
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Handle click and keyboard interactions
  const handleInteraction = (e) => {
    if (disabled || loading) return;
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  if (loading) {
    return (
      <div 
        className={`max-w-[365px] bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse ${className}`}
        aria-label="Loading brand card"
      >
        <div className="h-40 w-full bg-gray-200"></div>
        <div className="p-4 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      className={`max-w-[365px] relative bg-white rounded-2xl shadow-lg overflow-hidden
        ${hoverEffect ? 'hover:shadow-xl transition-all duration-300 ease-in-out' : ''}
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
        group focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-50
        ${className}
      `}
      onClick={handleInteraction}
      style={{
        backgroundColor: 'var(--color-card)',
        color: 'var(--color-textPrimary)',
        transition: 'all 0.3s ease',
      }}
      aria-label={`Brand: ${name}. ${description}. ${origin ? `Origin: ${origin}.` : ''}`}
      role={onClick ? "button" : "article"}
      tabIndex={!disabled && onClick ? 0 : -1}
      onKeyDown={handleInteraction}
    >
      {/* Image / Logo */}
      <div 
        className="h-40 w-full relative bg-gray-50 overflow-hidden"
        style={{ backgroundColor: 'var(--color-cardSecondary, #f3f4f6)' }}
      >
        {imageError ? (
          <div 
            className="text-4xl font-bold text-gray-400 flex items-center justify-center h-full w-full"
            aria-hidden="true"
          >
            {name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <img
            src={logo}
            alt={`${name} logo`}
            className={`h-full w-full object-contain transition-transform duration-300 ${
              hoverEffect ? 'group-hover:scale-105' : ''
            }`}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
          />
        )}
        {isPopular && (
          <span 
            className="absolute top-2 left-2 bg-gradient-to-r from-yellow-600 to-accent text-xs font-bold text-white px-2 py-1 rounded-full shadow"
            aria-label="Popular brand"
          >
            ★ Popular
          </span>
        )}
      </div>

      {/* Info Section */}
      <div className="p-2 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h3
            className="text-xl font-semibold truncate text-accent"
            title={name}
          >
            {name}
          </h3>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-xs text-textPrimary  "
              onClick={(e) => e.stopPropagation()}
              aria-label={`Visit ${name} website`}
            >
                <FaLink size={16} />
            </a>
          )}
        </div>

        <p
          className="text-[15px] text-secondary line-clamp-2"
          title={description}
        >
          {description}
        </p>

        {/* Origin + Specialty */}
        <div className="flex items-center justify-between text-[13px] mt-2 font-bold">
          {origin && (
            <span 
              className="flex items-center gap-1"
              style={{ color: 'var(--color-textTertiary)' }}
            >
          
              <FaLocationCrosshairs />
              {origin}
            </span>
          )}
          {specialty && (
            <span 
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: 'var(--color-badgeBg)',
                color: 'var(--color-badgeText)'
              }}
            >
              Speciality : {specialty}
              
            </span>
          )}
        </div>

        {/* Top Fragrances */}
        {topFragrances?.length > 0 && (
          <div className="mt-3">
            <p className="text-[15px] font-medium mb-1" style={{ color: 'var(--color-textTertiary)' }}>
              Top Fragrances:
            </p>
            <div className="flex flex-wrap gap-1">
              {topFragrances.slice(0, 3).map((frag, idx) => (
                <span 
                  key={idx}
                  className="text-[14px] px-2 py-0.5 rounded-full"
                  style={{ 
                    backgroundColor: 'var(--color-chipBg)',
                    color: 'var(--color-chipText)'
                  }}
                >
                  {frag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};



export default BrandCard;