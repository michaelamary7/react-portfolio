import React from 'react';
import { GitHub, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto flex justify-center items-center">
        <a href="https://github.com/michaelamary7" className="mx-3" aria-label="GitHub">
          <GitHub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" className="mx-3" aria-label="LinkedIn">
          <Linkedin size={24} />
        </a>
        <a href="https://twitter.com/yourusername" className="mx-3" aria-label="Twitter">
          <Twitter size={24} />
        </a>
      </div>
    </footer>
  );
};