import gsap from 'gsap';
import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX, FiUser, FiShoppingCart } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import logo from "../../assets/logo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      Brand: "Lattafa",
      name: "Atlas",
      season: "Summer",
      rating: 4,
      image: "https://www.giftexpress.com/media/catalog/product/cache/8707a82ff53728be6dbcd7cea0f577d3/g/x/gxp-14506.jpg",
      gender: "Male",
      price: 29.99,
      quantity: 1
    },
    {
      id: 2,
      Brand: "Lattafa",
      name: "Eternal Oud",
      season: "Winter",
      rating: 4.5,
      image: "https://splashfragrance.in/wp-content/uploads/2022/08/Lattafa-Eternal-Oud.webp",
      gender: "Male",
      price: 45.99,
      quantity: 2
    }
  ]);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, scale: 0.95, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Perfumes', path: '/perfumes' },
    { name: 'Brands', path: '/brands' },
    { name: 'About', path: '/about' },
  ];

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="absolute top-6 w-full z-50 max-md:top-0 max-md:bg-secondary"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <img src={logo} alt='logo' width="96px"  className='max-md:h-[75px]' />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 text-lg items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `py-2 px-4 rounded-md transition-all duration-300 ${
                      isActive
                        ? 'bg-accent text-background'
                        : 'text-primary hover:bg-accent/20 hover:text-highlight'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-6">
            <Link
            to="login"
              className="text-primary hover:text-highlight transition"
              aria-label="User Account"
         
            >
              <FiUser size={24} />
            </Link>
            <button
              className="relative text-primary hover:text-highlight transition"
              aria-label="Shopping Cart"
              onClick={() => setIsCartOpen(true)}
            >
              <FiShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2.5 -right-2.5  bg-highlight text-white text-[14px] rounded-full h-5 w-5 flex items-center justify-center">
          {getTotalItems()}
        </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary p-2 z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-secondary shadow-xl border-t border-divider">
            <ul className="flex flex-col p-4 gap-2 text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-md transition-all duration-300 ${
                        isActive
                          ? 'bg-accent text-background font-medium'
                          : 'text-primary hover:bg-accent/20 hover:text-highlight'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="flex items-center justify-around mt-3">
                <Link
                to="/login"
                  className="text-primary hover:text-highlight"
                  aria-label="User Account"
                >
                  <FiUser size={22} />
                </Link>
                <button
                  className="relative text-primary hover:text-highlight"
                  aria-label="Shopping Cart"
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <FiShoppingCart size={22} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-accent text-background text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <Cart 
        isCartOpen={isCartOpen} 
        onCloseCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </>
  );
};

export default Navbar;