import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300',
          isScrolled ? 'py-2 px-6 md:px-14' : 'py-2.5 px-6 md:px-14'
        )}
        style={{
          background: 'rgba(26, 86, 219, 0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-syne font-extrabold text-xl sm:text-2xl tracking-widest uppercase inline-block select-none"
          style={{ color: '#D5E100' }}
        >
          HALOALIGNER<sup className="text-[10px] sm:text-xs ml-0.5 font-bold uppercase">TM</sup>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const linkClass =
              'relative text-white text-[0.88rem] font-semibold uppercase tracking-wide transition-colors hover:text-[#D5E100] group';
            return (
              <li key={link.name}>
                {link.href.includes('#') ? (
                  <HashLink smooth to={link.href} className={linkClass}>
                    {link.name}
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300"
                      style={{
                        background: '#D5E100',
                        transform: active ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </HashLink>
                ) : (
                  <Link to={link.href} className={linkClass}>
                    {link.name}
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 group-hover:scale-x-100"
                      style={{
                        background: '#D5E100',
                        transform: active ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </Link>
                )}
              </li>
            );
          })}

          {/* CTA Button — yellow outline matching wireframe */}
          <li>
            <a
              href="https://haloaligner.uvsoftware8.workers.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold uppercase tracking-wide rounded-full transition-all hover:-translate-y-0.5"
              style={{
                padding: '0.52rem 1.25rem',
                fontSize: '0.84rem',
                color: '#D5E100',
                border: '2px solid #D5E100',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#D5E100';
                (e.currentTarget as HTMLAnchorElement).style.color = '#0F1732';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = '#D5E100';
              }}
            >
              Login/Signup
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-1"
          style={{ color: '#D5E100' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] pt-20 px-6 pb-10 flex flex-col lg:hidden"
            style={{ background: 'rgba(26, 86, 219, 0.99)', backdropFilter: 'blur(16px)' }}
          >
            {navLinks.map((link) =>
              link.href.includes('#') ? (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 font-bold text-lg hover:text-[#D5E100] transition-colors"
                  style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 font-bold text-lg hover:text-[#D5E100] transition-colors"
                  style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href="https://haloaligner.uvsoftware8.workers.dev/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 text-center rounded-full py-4 font-bold text-lg uppercase tracking-wide"
              style={{ color: '#D5E100', border: '2px solid #D5E100', background: 'transparent' }}
            >
              Login/Signup
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
