import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChatWidget } from '@/components/ai/ChatWidget';
import { PageTransition } from '@/components/layout/PageTransition';
import React from 'react';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <PageTransition>
          {children}
        </PageTransition>
      </div>
      <Footer />
      <ChatWidget />
    </>
  );
}
