
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, BookOpen, Sparkles } from 'lucide-react';

const InfoPanel: React.FC = () => {
  return (
    <div className="p-4">
      <Tabs defaultValue="about">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
        </TabsList>
        
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-jee-primary" />
                About JEE Genius AI
              </CardTitle>
              <CardDescription>
                Your AI-powered study assistant for JEE preparation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                JEE Genius AI uses advanced RAG (Retrieval-Augmented Generation) technology 
                to provide accurate, contextual answers to your JEE questions. Our system is trained 
                on comprehensive JEE materials including NCERT textbooks, previous year questions, 
                and coaching materials.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="examples">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-jee-primary" />
                Example Questions
              </CardTitle>
              <CardDescription>
                Try asking these questions to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="p-2 bg-jee-background rounded-md">
                  Explain the concept of resonance in organic chemistry
                </li>
                <li className="p-2 bg-jee-background rounded-md">
                  What is the application of Gauss's law in electrostatics?
                </li>
                <li className="p-2 bg-jee-background rounded-md">
                  Derive the equation for vertical circular motion
                </li>
                <li className="p-2 bg-jee-background rounded-md">
                  Explain the VSEPR theory and predict the shape of PCl₅
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="subjects">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-jee-primary" />
                Covered Subjects
              </CardTitle>
              <CardDescription>
                JEE Genius AI covers all main JEE subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-jee-background p-3 rounded-md">
                  <h3 className="font-medium">Physics</h3>
                  <p className="text-sm text-gray-600">Mechanics, Electromagnetics, Thermodynamics, Modern Physics</p>
                </div>
                <div className="bg-jee-background p-3 rounded-md">
                  <h3 className="font-medium">Chemistry</h3>
                  <p className="text-sm text-gray-600">Organic, Inorganic, Physical Chemistry</p>
                </div>
                <div className="bg-jee-background p-3 rounded-md">
                  <h3 className="font-medium">Mathematics</h3>
                  <p className="text-sm text-gray-600">Calculus, Algebra, Coordinate Geometry, Trigonometry</p>
                </div>
                <div className="bg-jee-background p-3 rounded-md">
                  <h3 className="font-medium">Exam Tips</h3>
                  <p className="text-sm text-gray-600">Strategy, Time Management, Important Topics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InfoPanel;
