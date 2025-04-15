
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SendIcon } from 'lucide-react';

interface QueryInputProps {
  onSubmit: (query: string) => void;
  isProcessing: boolean;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit, isProcessing }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isProcessing) {
      onSubmit(query.trim());
      setQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t bg-white p-4">
      <div className="flex flex-col space-y-2">
        <Textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask any JEE question (e.g., 'What is the hybridization in benzene?')"
          className="min-h-24 resize-none border-jee-light focus:border-jee-primary focus:ring-jee-primary"
          disabled={isProcessing}
        />
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">
            Press Shift + Enter for a new line
          </p>
          <Button
            type="submit"
            className="bg-gradient-to-r from-jee-primary to-jee-secondary hover:opacity-90 transition-opacity"
            disabled={!query.trim() || isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Send'}
            {!isProcessing && <SendIcon className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default QueryInput;
