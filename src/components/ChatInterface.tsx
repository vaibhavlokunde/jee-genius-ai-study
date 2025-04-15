
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MessageItem, { Message } from './MessageItem';
import QueryInput from './QueryInput';
import { useToast } from "@/components/ui/use-toast";

interface RAGResponse {
  answer: string;
  sources?: {
    title: string;
    content: string;
    relevance: number;
  }[];
}

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

  // This function would be replaced with an actual API call to your PyTorch RAG backend
  const generateResponse = async (query: string): Promise<RAGResponse> => {
    // For now, we're simulating the response
    // In a real implementation, this would make a fetch call to your backend API
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Sample responses based on keywords for demonstration
    if (query.toLowerCase().includes('hybridization') && query.toLowerCase().includes('benzene')) {
      return {
        answer: "In benzene (C₆H₆), each carbon atom undergoes sp² hybridization.\n\nEach carbon atom forms three sigma (σ) bonds:\n- Two σ bonds with adjacent carbon atoms\n- One σ bond with a hydrogen atom\n\nThe remaining unhybridized p orbital on each carbon atom forms a delocalized π system above and below the plane of the ring, contributing to benzene's stability and aromaticity.\n\nThis sp² hybridization gives benzene its planar hexagonal structure with 120° bond angles.",
        sources: [
          {
            title: "NCERT Chemistry Part II, Chapter: Chemical Bonding",
            content: "Benzene exhibits sp² hybridization with delocalized π electrons...",
            relevance: 0.92
          }
        ]
      };
    }
    
    if (query.toLowerCase().includes('newton') && query.toLowerCase().includes('law')) {
      return {
        answer: "Newton's Laws of Motion are three fundamental physical laws that form the foundation of classical mechanics:\n\n1. **First Law (Law of Inertia)**: An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an external force.\n   - Mathematically: If ΣF = 0, then a = 0\n\n2. **Second Law**: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.\n   - Mathematically: F = ma or ΣF = m·a\n\n3. **Third Law**: For every action, there is an equal and opposite reaction.\n   - Mathematically: F₁₂ = -F₂₁\n\nThese laws are extensively tested in JEE through problems on dynamics, collisions, and circular motion.",
        sources: [
          {
            title: "NCERT Physics Part I, Chapter: Laws of Motion",
            content: "Newton's three laws form the foundation of classical mechanics...",
            relevance: 0.95
          },
          {
            title: "Previous Year JEE Questions (2022)",
            content: "Problem on momentum conservation using Newton's Third Law...",
            relevance: 0.87
          }
        ]
      };
    }
    
    if (query.toLowerCase().includes('integration') && query.toLowerCase().includes('parts')) {
      return {
        answer: "Integration by parts is a technique used to find the integral of a product of functions. It's based on the product rule of differentiation.\n\n**Formula**:\n$∫u(x)v'(x)dx = u(x)v(x) - ∫v(x)u'(x)dx$\n\n**When to use**:\n- When integrating a product of functions\n- When the integral contains functions like $x^n \\cdot e^x$, $x^n \\cdot \\ln(x)$, or $x^n \\cdot \\sin(x)$\n\n**Steps**:\n1. Identify $u$ and $dv$ from your integral $∫u \\cdot dv$\n2. Find $du$ (derivative of $u$) and $v$ (integral of $dv$)\n3. Apply the formula: $∫u \\cdot dv = u \\cdot v - ∫v \\cdot du$\n\n**Example**:\nTo evaluate $∫x \\cdot \\cos(x)dx$, let:\n- $u = x$ and $dv = \\cos(x)dx$\n- Then $du = dx$ and $v = \\sin(x)$\n- $∫x \\cdot \\cos(x)dx = x \\cdot \\sin(x) - ∫\\sin(x) \\cdot dx$\n- $= x \\cdot \\sin(x) + \\cos(x) + C$",
        sources: [
          {
            title: "NCERT Mathematics Part II, Chapter: Integrals",
            content: "Integration by parts is a technique derived from the product rule...",
            relevance: 0.94
          }
        ]
      };
    }
    
    if (query.toLowerCase().includes('aldol') && query.toLowerCase().includes('condensation')) {
      return {
        answer: "The Aldol condensation is an important C-C bond forming reaction in organic chemistry.\n\n**Mechanism**:\n1. **Base-catalyzed enolate formation**: The α-hydrogen of an aldehyde/ketone is deprotonated.\n2. **Nucleophilic attack**: The enolate attacks the carbonyl carbon of another aldehyde/ketone molecule.\n3. **Protonation**: The resulting alkoxide ion is protonated to form β-hydroxy aldehyde/ketone (aldol).\n4. **Dehydration**: Under certain conditions, the aldol loses water to form an α,β-unsaturated carbonyl compound.\n\n**Example**:\nAcetaldehyde (CH₃CHO) undergoes aldol condensation to form 3-hydroxybutanal:\n\nCH₃CHO + CH₃CHO → CH₃CH(OH)CH₂CHO\n\nThis can further undergo dehydration to form crotonaldehyde (2-butenal):\n\nCH₃CH(OH)CH₂CHO → CH₃CH=CHCHO + H₂O\n\n**Importance in JEE**:\n- Tests understanding of carbonyl chemistry\n- Evaluates knowledge of reaction mechanisms\n- Often appears in questions about retrosynthetic analysis",
        sources: [
          {
            title: "NCERT Chemistry Part II, Chapter: Aldehydes, Ketones and Carboxylic Acids",
            content: "Aldol condensation involves the nucleophilic addition of an enolate ion...",
            relevance: 0.91
          }
        ]
      };
    }
    
    // Generic response for other queries
    return {
      answer: "Thank you for your question about " + query + ".\n\nIn a complete implementation, I would retrieve relevant information from my knowledge base using PyTorch-based embeddings and vector search, then generate a detailed answer using retrieved contexts.\n\nThe complete system would:\n1. Convert your query into embeddings\n2. Search for similar content in the JEE knowledge base\n3. Retrieve relevant passages from NCERT books, previous year papers, and study materials\n4. Generate a contextual response that answers your specific question",
      sources: [
        {
          title: "JEE Study Materials",
          content: "Related content would be retrieved from indexed materials...",
          relevance: 0.75
        }
      ]
    };
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
      
      // Format response with sources if available
      let formattedResponse = response.answer;
      
      if (response.sources && response.sources.length > 0) {
        formattedResponse += "\n\n**Sources:**";
        response.sources.forEach(source => {
          formattedResponse += `\n- ${source.title}`;
        });
      }
      
      // Replace placeholder with actual response
      setMessages(prev => prev.map(msg => 
        msg.id === placeholderId 
          ? { ...msg, content: formattedResponse }
          : msg
      ));
      
      // Log for debugging
      console.log("Generated response:", response);
      
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
