
import React from 'react';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-jee-primary to-jee-secondary p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <h1 className="text-xl font-bold">JEE Genius AI</h1>
        </div>
        <div className="text-sm">
          <span className="bg-white/20 rounded-full px-3 py-1">Beta</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
