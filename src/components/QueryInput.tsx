
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SendIcon, Wand2 } from 'lucide-react';

interface QueryInputProps {
  onSubmit: (query: string) => void;
  isProcessing: boolean;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit, isProcessing }) => {
  const [query, setQuery] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  // Auto-resize the textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + 'px';
    }
  }, [query]);

  const sampleQuestions = [
    "What is the hybridization in benzene?",
    "Explain Newton's laws of motion.",
    "How do I solve integration by parts?",
    "Explain the reaction mechanism of Aldol condensation."
  ];

  const handleSampleQuestion = (question: string) => {
    setQuery(question);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t bg-white p-4">
      <div className="flex flex-col space-y-2">
        {query.trim() === '' && !isProcessing && (
          <div className="flex flex-wrap gap-2 mb-2 text-xs">
            {sampleQuestions.map((question, index) => (
              <button
                key={index}
                type="button"
                className="bg-jee-background border border-jee-light rounded-full px-3 py-1 text-jee-primary hover:bg-jee-light/50 transition-colors flex items-center gap-1"
                onClick={() => handleSampleQuestion(question)}
              >
                <Wand2 className="w-3 h-3" />
                {question}
              </button>
            ))}
          </div>
        )}
        
        <Textarea
          ref={textareaRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask any JEE question (e.g., 'What is the hybridization in benzene?')"
          className="min-h-24 resize-none border-jee-light focus:border-jee-primary focus:ring-jee-primary"
          disabled={isProcessing}
          rows={1}
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
