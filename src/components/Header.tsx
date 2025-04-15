
import React from 'react';
import { BookOpen, Github, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-jee-primary to-jee-secondary p-4 text-white sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <div>
            <h1 className="text-xl font-bold">JEE Genius AI</h1>
            <div className="flex items-center text-xs space-x-2">
              <span className="bg-white/20 rounded-full px-2 py-0.5">Beta</span>
              <div className="flex items-center">
                <Cpu className="h-3 w-3 mr-1" />
                <span>PyTorch RAG</span>
              </div>
            </div>
          </div>
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20"
                onClick={() => window.open('https://github.com/yourusername/jee-genius-ai', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View on GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Header;
