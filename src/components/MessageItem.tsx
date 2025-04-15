
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
          {message.content.split('\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
