
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MessageItem, { Message } from './MessageItem';
import QueryInput from './QueryInput';
import { useToast } from "@/components/ui/use-toast";

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m JEE Genius AI, your study companion for JEE preparation. Ask me any conceptual questions about Physics, Chemistry, or Mathematics. I\'m here to help you understand complex topics clearly!'
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Simulated response generation function
  const generateResponse = async (query: string): Promise<string> => {
    // This would be replaced with actual API call to your RAG backend
    // For now, simulating with a delay and predefined responses
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simple response lookup based on keywords for demo purposes
    if (query.toLowerCase().includes('hybridization') && query.toLowerCase().includes('benzene')) {
      return "In benzene (C₆H₆), each carbon atom undergoes sp² hybridization.\n\nEach carbon atom forms three sigma (σ) bonds:\n- Two σ bonds with adjacent carbon atoms\n- One σ bond with a hydrogen atom\n\nThe remaining unhybridized p orbital on each carbon atom forms a delocalized π system above and below the plane of the ring, contributing to benzene's stability and aromaticity.\n\nThis sp² hybridization gives benzene its planar hexagonal structure with 120° bond angles.";
    }
    
    if (query.toLowerCase().includes('newton') && query.toLowerCase().includes('law')) {
      return "Newton's Laws of Motion are three fundamental physical laws that form the foundation of classical mechanics:\n\n1. **First Law (Law of Inertia)**: An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an external force.\n   - Mathematically: If ΣF = 0, then a = 0\n\n2. **Second Law**: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.\n   - Mathematically: F = ma or ΣF = m·a\n\n3. **Third Law**: For every action, there is an equal and opposite reaction.\n   - Mathematically: F₁₂ = -F₂₁\n\nThese laws are extensively tested in JEE through problems on dynamics, collisions, and circular motion.";
    }
    
    return "Thank you for your question! In a complete RAG implementation, I would retrieve relevant information from my knowledge base and provide an accurate, detailed answer about " + query + ".\n\nThis prototype demonstrates the user interface. When connected to the backend, the system will use PyTorch for embedding generation, vector storage for efficient retrieval, and an LLM for generating clear, contextual responses based on JEE study materials.";
  };

  const handleSubmit = async (query: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      type: 'user',
      content: query
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);
    
    try {
      // Create a placeholder for the assistant message
      const placeholderId = uuidv4();
      setMessages(prev => [...prev, {
        id: placeholderId,
        type: 'assistant',
        content: 'Thinking...'
      }]);
      
      // Generate response
      const response = await generateResponse(query);
      
      // Replace placeholder with actual response
      setMessages(prev => prev.map(msg => 
        msg.id === placeholderId 
          ? { ...msg, content: response }
          : msg
      ));
    } catch (error) {
      console.error('Error generating response:', error);
      toast({
        title: "Error",
        description: "Failed to generate a response. Please try again.",
        variant: "destructive"
      });
      
      // Remove the placeholder message
      setMessages(prev => prev.filter(msg => msg.type !== 'assistant' || msg.content !== 'Thinking...'));
    } finally {
      setIsProcessing(false);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        <div className="divide-y">
          {messages.map((message) => (
            <MessageItem 
              key={message.id} 
              message={message} 
              isLoading={isProcessing && message === messages[messages.length - 1] && message.type === 'assistant'} 
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <QueryInput onSubmit={handleSubmit} isProcessing={isProcessing} />
    </div>
  );
};

export default ChatInterface;
