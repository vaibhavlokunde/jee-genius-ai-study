
import React from 'react';
import { BookOpen, Database, Cpu, Zap, BookText, ScrollText, GitBranch, Search } from 'lucide-react';

const InfoPanel: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-jee-primary flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          About JEE Genius
        </h2>
        <p className="text-sm text-gray-600">
          JEE Genius AI is a specialized study assistant that uses Retrieval-Augmented Generation (RAG) 
          to provide accurate answers to JEE preparation questions.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <Database className="h-4 w-4 text-jee-secondary" />
          PyTorch RAG Architecture
        </h3>
        <div className="bg-jee-background rounded-md p-3 text-sm space-y-3">
          <div className="flex items-start gap-2">
            <div className="bg-jee-primary/10 p-1 rounded">
              <Search className="h-4 w-4 text-jee-primary" />
            </div>
            <div>
              <p className="font-medium">Query Understanding</p>
              <p className="text-xs text-gray-600">Converts student questions into dense vector embeddings using PyTorch</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="bg-jee-secondary/10 p-1 rounded">
              <ScrollText className="h-4 w-4 text-jee-secondary" />
            </div>
            <div>
              <p className="font-medium">Knowledge Retrieval</p>
              <p className="text-xs text-gray-600">Uses FAISS for efficient similarity search in indexed JEE materials</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="bg-jee-primary/10 p-1 rounded">
              <Cpu className="h-4 w-4 text-jee-primary" />
            </div>
            <div>
              <p className="font-medium">PyTorch Processing</p>
              <p className="text-xs text-gray-600">Transformer-based context processing for optimal relevance</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="bg-jee-accent/10 p-1 rounded">
              <Zap className="h-4 w-4 text-jee-accent" />
            </div>
            <div>
              <p className="font-medium">Response Generation</p>
              <p className="text-xs text-gray-600">Creates accurate, contextual answers based on retrieved information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <BookText className="h-4 w-4 text-jee-secondary" />
          Knowledge Base
        </h3>
        <ul className="text-sm space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-jee-primary"></div>
            NCERT Physics, Chemistry, Mathematics
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-jee-secondary"></div>
            Previous years' JEE question papers (2010-2023)
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-jee-accent"></div>
            Curated study materials from top coaching institutes
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-jee-light"></div>
            Problem-solving techniques and shortcuts
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-jee-secondary" />
          Technical Implementation
        </h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <span className="font-medium">Embeddings:</span> Sentence-transformers with PyTorch for converting text to vector representations
          </p>
          <p>
            <span className="font-medium">Vector Store:</span> FAISS for efficient similarity search in high dimensions
          </p>
          <p>
            <span className="font-medium">Chunking:</span> Recursive text splitter optimized for scientific content
          </p>
          <p>
            <span className="font-medium">LLM Integration:</span> Context-aware response generation with citation support
          </p>
        </div>
      </div>

      <div className="border-t pt-4 text-xs text-gray-500">
        <p>This prototype demonstrates the JEE Genius AI interface. When connected to the PyTorch backend with FAISS indexing, it will provide comprehensive and accurate answers to your JEE preparation questions with reliable citations.</p>
      </div>
    </div>
  );
};

export default InfoPanel;
