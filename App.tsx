import React, { useState } from 'react';
import { PageType, Product } from './types';
import { INITIAL_USER_PRODUCTS } from './data/constants';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { AdminModal } from './components/AdminModal';

import { HomePage } from './pages/HomePage';
import { AutoPartsPage } from './pages/AutoPartsPage';
import { SchoolTransportPage } from './pages/SchoolTransportPage';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Dynamic Product State initialized with user-provided uploaded items
  const [products, setProducts] = useState<Product[]>(INITIAL_USER_PRODUCTS);

  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [targetContactProduct, setTargetContactProduct] = useState<Product | null>(null);
  const [contactSubject, setContactSubject] = useState<'general' | 'part' | 'transport'>('general');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductContact = (product: Product) => {
    setTargetContactProduct(product);
    setContactSubject('part');
    setIsContactOpen(true);
  };

  const handleOpenGeneralContact = () => {
    setTargetContactProduct(null);
    setContactSubject('general');
    setIsContactOpen(true);
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#08080a] selection:bg-red-600 selection:text-white">
      
      {/* Loading Screen sequence */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {/* Persistent Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={handleOpenGeneralContact}
      />

      {/* Main Page Router View */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenContact={handleOpenGeneralContact}
          />
        )}

        {currentPage === 'parts' && (
          <AutoPartsPage
            products={products}
            onOpenProductContact={handleOpenProductContact}
            onOpenGeneralContact={handleOpenGeneralContact}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />
        )}

        {currentPage === 'transport' && (
          <SchoolTransportPage
            onOpenContact={handleOpenGeneralContact}
          />
        )}
      </main>

      {/* Persistent Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={handleOpenGeneralContact}
      />

      {/* Contact Inquiry Drawer/Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        targetProduct={targetContactProduct}
        subjectType={contactSubject}
      />

      {/* Owner Admin Management Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        products={products}
        onAddProduct={handleAddProduct}
        onDeleteProduct={handleDeleteProduct}
      />

    </div>
  );
};

export default App;
