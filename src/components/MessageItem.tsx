
import React from 'react';
import { User, Bot, BookOpen } from 'lucide-react';
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
  // Enhanced function to format content with math, code highlighting, and markdown
  const formatContent = (content: string) => {
    if (!content) return null;
    
    // First split by paragraphs
    return content.split('\n').map((paragraph, idx) => {
      // Handle code blocks
      if (paragraph.trim().startsWith('```')) {
        const language = paragraph.replace(/```(\w+)?.*/, '$1').trim();
        const codeContent = paragraph.replace(/```(\w+)?\n?/, '').replace(/```$/, '');
        
        return (
          <pre key={idx} className="bg-gray-800 text-white p-3 rounded-md my-2 overflow-x-auto text-sm">
            {language && <div className="text-xs text-gray-400 mb-1">{language}</div>}
            <code>{codeContent}</code>
          </pre>
        );
      }
      
      // Handle math content (wrapped in $ signs)
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
              return formatMarkdown(part, partIdx);
            })}
          </p>
        );
      }

      // Handle markdown for bullet points
      if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('*')) {
        return (
          <ul key={idx} className="list-disc list-inside my-1 ml-2">
            <li>{formatMarkdown(paragraph.trim().substring(1).trim(), 0)}</li>
          </ul>
        );
      }
      
      // Handle markdown for numbered lists
      if (/^\d+\.\s/.test(paragraph.trim())) {
        return (
          <ol key={idx} className="list-decimal list-inside my-1 ml-2">
            <li>{formatMarkdown(paragraph.trim().replace(/^\d+\.\s/, ''), 0)}</li>
          </ol>
        );
      }
      
      // Handle section headers (starts with ** or __)
      if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith(':**')) {
        const headerText = paragraph.trim().replace(/^\*\*/, '').replace(/:\*\*$/, ':');
        return (
          <h3 key={idx} className="font-bold my-2">{headerText}</h3>
        );
      }
      
      // Regular paragraph with markdown formatting
      return <p key={idx} className="my-2">{formatMarkdown(paragraph, 0)}</p>;
    });
  };
  
  // Helper function to format markdown within a line
  const formatMarkdown = (text: string, key: number) => {
    // Handle bold text
    let formattedText = text.split(/(\*\*[^*]+\*\*)/g).map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`bold-${key}-${idx}`}>{part.substring(2, part.length - 2)}</strong>;
      }
      return part;
    });
    
    return formattedText;
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
        
        {/* Sources section - would appear if the content includes "Sources:" */}
        {message.type === 'assistant' && message.content.includes('**Sources:**') && (
          <div className="mt-3 pt-2 border-t border-gray-200">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <BookOpen className="w-3 h-3 mr-1" />
              <span>References</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
