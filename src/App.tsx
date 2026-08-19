import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { NotificationToast } from './components/NotificationToast';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { StaffDirectoryPage } from './pages/StaffDirectoryPage';
import { StaffDetailPage } from './pages/StaffDetailPage';
import { StaffRegistrationPage } from './pages/StaffRegistrationPage';
import { ClientBookingPage } from './pages/ClientBookingPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { HostingerDeployGuidePage } from './pages/HostingerDeployGuidePage';

const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'staff':
        return <StaffDirectoryPage />;
      case 'staff-detail':
        return <StaffDetailPage />;
      case 'register-staff':
        return <StaffRegistrationPage />;
      case 'book':
        return <ClientBookingPage />;
      case 'admin':
        return <AdminDashboardPage />;
      case 'deploy-guide':
        return <HostingerDeployGuidePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
      <BookingModal />
      <ServiceDetailModal />
      <NotificationToast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

