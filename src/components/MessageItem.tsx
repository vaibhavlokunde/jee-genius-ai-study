
import React from 'react';
import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
}

interface MessageItemProps {
  message: Message;
  isLoading?: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, isLoading = false }) => {
  // Function to format content with math and code highlighting
  const formatContent = (content: string) => {
    // First split by paragraphs
    return content.split('\n').map((paragraph, idx) => {
      // Check if this is a code block
      if (paragraph.trim().startsWith('```')) {
        const codeContent = paragraph.replace(/```(.*)\n/, '').replace(/```$/, '');
        return (
          <pre key={idx} className="bg-gray-800 text-white p-3 rounded-md my-2 overflow-x-auto text-sm">
            <code>{codeContent}</code>
          </pre>
        );
      }
      
      // Check if this is math content (wrapped in $ signs)
      if (paragraph.includes('$') && paragraph.split('$').length > 2) {
        let parts = paragraph.split(/(\$[^$]+\$)/g);
        return (
          <p key={idx} className="my-2">
            {parts.map((part, partIdx) => {
              if (part.startsWith('$') && part.endsWith('$')) {
                return (
                  <span key={partIdx} className="math-content font-medium bg-jee-background px-1 py-0.5 rounded">
                    {part.substring(1, part.length - 1)}
                  </span>
                );
              }
              return <span key={partIdx}>{part}</span>;
            })}
          </p>
        );
      }
      
      return <p key={idx} className="my-2">{paragraph}</p>;
    });
  };

  return (
    <div
      className={cn(
        "py-4 flex items-start gap-4",
        message.type === 'user' ? "bg-white" : "bg-jee-background"
      )}
    >
      <div className="flex-shrink-0">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          message.type === 'user' 
            ? "bg-jee-primary text-white" 
            : "bg-white border border-jee-primary"
        )}>
          {message.type === 'user' ? (
            <User className="w-5 h-5" />
          ) : (
            <Bot className="w-5 h-5 text-jee-primary" />
          )}
        </div>
      </div>
      <div className="flex-grow max-w-[calc(100%-4rem)]">
        <div className="font-medium mb-1">
          {message.type === 'user' ? 'You' : 'JEE Genius AI'}
        </div>
        <div className={cn(
          "message-content prose prose-sm max-w-none",
          isLoading && "animate-pulse-slow"
        )}>
          {formatContent(message.content)}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
