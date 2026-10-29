'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoLockup } from '../brand/LogoLockup';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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

  // One-Page navigation with anchors
  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'VOKSIA', href: '#voksia' },
    { label: 'Réalisations', href: '#preuves' },
    { label: 'À propos', href: '#a-propos' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 lg:left-[72px] right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1017]/95 backdrop-blur-md border-b border-[#28323C] py-3.5 shadow-lg'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#FE640E]"
          aria-label="Accueil KTM Skills Academy"
        >
          <LogoLockup variant="knockout" height={isScrolled ? 46 : 54} />
        </a>

        {/* Desktop Nav - One-Page Anchors */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#EFEAE2]/85 hover:text-[#FE640E] transition-colors duration-150 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bouton permanent à droite : « Demander un diagnostic » */}
        <div className="hidden md:block">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] font-semibold text-xs tracking-wide px-5 py-2.5 rounded-[2px] shadow-sm hover:shadow transition-all"
          >
            <span>Demander un diagnostic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="md:hidden text-[#EFEAE2] p-2 rounded focus-visible:outline-2 focus-visible:outline-[#FE640E]"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#FE640E]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-[#0A1017] z-50 p-8 flex flex-col justify-between border-t border-[#28323C]">
          <nav className="flex flex-col gap-6 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-archivo-display font-semibold text-[#EFEAE2] hover:text-[#FE640E]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-8 border-t border-[#28323C] space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] font-semibold text-sm py-4 rounded-[2px]"
            >
              <span>Demander un diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-[#7C8894]">
              KTM Skills Academy · Dakar, Castor, Lot 11
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
