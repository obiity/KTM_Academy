'use client';

import React, { useState, useEffect } from 'react';
import { LogoLockup } from '../brand/LogoLockup';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Modèle', href: '#modele' },
    { label: 'Immersif', href: '#immersif' },
    { label: 'Hub-Tech', href: '#hub-tech' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Équipe', href: '#equipe' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 lg:left-[72px] right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#151A20]/90 backdrop-blur-md border-b border-[#28323C] py-3'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#hero" className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#5C7C93]">
          <LogoLockup variant="knockout" height={isScrolled ? 50 : 64} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#EFEAE2]/80 hover:text-[#FE640E] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="py-2.5 px-5 text-sm">
            Démarrer un pilote
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Ouvrir le menu"
          className="md:hidden text-[#EFEAE2] p-2 rounded focus-visible:outline-2 focus-visible:outline-[#5C7C93]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileMenuOpen ? (
              <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#151A20] z-50 p-8 flex flex-col justify-between border-t border-[#28323C]">
          <nav className="flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-archivo-display font-semibold text-[#EFEAE2] hover:text-[#FE640E]"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-8 border-t border-[#28323C]">
            <Button href="#contact" variant="primary" className="w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              Démarrer un pilote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
