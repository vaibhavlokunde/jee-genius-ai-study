
import React from 'react';
import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';
import InfoPanel from '@/components/InfoPanel';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <Tabs defaultValue="chat" className="flex-grow flex flex-col">
          <TabsList className="grid grid-cols-2 mx-4 my-2">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="flex-grow flex flex-col">
            <ChatInterface />
          </TabsContent>
          <TabsContent value="info" className="flex-grow overflow-y-auto">
            <InfoPanel />
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex overflow-hidden">
        <div className="flex-grow flex flex-col">
          <ChatInterface />
        </div>
        <div className="w-80 border-l overflow-y-auto hidden md:block">
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
