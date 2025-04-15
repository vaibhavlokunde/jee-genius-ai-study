
import React from 'react';
import { BookOpen, Database, Cpu, Zap, BookText, ScrollText } from 'lucide-react';

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
          RAG Architecture
        </h3>
        <div className="bg-jee-background rounded-md p-3 text-sm space-y-3">
          <div className="flex items-start gap-2">
            <div className="bg-jee-primary/10 p-1 rounded">
              <ScrollText className="h-4 w-4 text-jee-primary" />
            </div>
            <div>
              <p className="font-medium">Knowledge Retrieval</p>
              <p className="text-xs text-gray-600">Indexes and searches through curated JEE study materials</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="bg-jee-secondary/10 p-1 rounded">
              <Cpu className="h-4 w-4 text-jee-secondary" />
            </div>
            <div>
              <p className="font-medium">PyTorch Model</p>
              <p className="text-xs text-gray-600">Processes queries through transformers architecture</p>
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
          Data Sources
        </h3>
        <ul className="text-sm space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-jee-primary"></div>
            NCERT Physics, Chemistry, Mathematics
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-jee-secondary"></div>
            Previous years' JEE question papers
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

      <div className="border-t pt-4 text-xs text-gray-500">
        <p>This prototype demonstrates the user interface. When connected to the PyTorch backend, it will provide comprehensive and accurate answers to your JEE preparation questions.</p>
      </div>
    </div>
  );
};

export default InfoPanel;
