import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StaffMember, BookingSubmission, TradeCategory, ServiceItem, StaffRegistrationForm } from '../types';
import { INITIAL_STAFF_MEMBERS, INITIAL_BOOKINGS } from '../data/mockStaffData';
import { SERVICES_DATA } from '../data/servicesData';

export type AppRoute = 
  | 'home'
  | 'services'
  | 'staff'
  | 'staff-detail'
  | 'register-staff'
  | 'book'
  | 'admin'
  | 'deploy-guide';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error' | 'warning';
  title: string;
  message: string;
}

interface AppContextType {
  currentRoute: AppRoute;
  selectedStaffId: string | null;
  selectedServiceId: TradeCategory | null;
  staffList: StaffMember[];
  bookings: BookingSubmission[];
  toasts: ToastMessage[];
  bookingModalStaff: StaffMember | null;
  serviceModalItem: ServiceItem | null;
  
  // Actions
  navigateTo: (route: AppRoute, params?: { staffId?: string; serviceId?: TradeCategory }) => void;
  openBookingModal: (staff?: StaffMember | null) => void;
  closeBookingModal: () => void;
  openServiceModal: (service: ServiceItem) => void;
  closeServiceModal: () => void;
  addStaffRegistration: (form: StaffRegistrationForm) => { success: boolean; refId: string };
  addClientBooking: (booking: Omit<BookingSubmission, 'id' | 'createdAt' | 'status'>) => { success: boolean; id: string };
  approveStaff: (staffId: string) => void;
  rejectStaff: (staffId: string) => void;
  toggleStaffVerification: (staffId: string) => void;
  updateBookingStatus: (bookingId: string, status: BookingSubmission['status'], assignedStaffIds?: string[]) => void;
  deleteBooking: (bookingId: string) => void;
  resetToDefaults: () => void;
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'error' | 'warning') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Navigation State with URL Hash Sync
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('home');
  const [selectedStaffId, setSelectedStaffId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<TradeCategory | null>(null);

  // Modals
  const [bookingModalStaff, setBookingModalStaff] = useState<StaffMember | null>(null);
  const [serviceModalItem, setServiceModalItem] = useState<ServiceItem | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persistent Staff List
  const [staffList, setStaffList] = useState<StaffMember[]>(() => {
    try {
      const saved = localStorage.getItem('nspyr_staff_v2');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_STAFF_MEMBERS;
  });

  // Persistent Bookings List
  const [bookings, setBookings] = useState<BookingSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('nspyr_bookings_v2');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_BOOKINGS;
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('nspyr_staff_v2', JSON.stringify(staffList));
    } catch (e) {
      console.error('Failed to save staff:', e);
    }
  }, [staffList]);

  useEffect(() => {
    try {
      localStorage.setItem('nspyr_bookings_v2', JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to save bookings:', e);
    }
  }, [bookings]);

  // Parse URL hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === '') {
        setCurrentRoute('home');
        setSelectedStaffId(null);
      } else if (hash.startsWith('staff/')) {
        const id = hash.replace('staff/', '');
        setCurrentRoute('staff-detail');
        setSelectedStaffId(id);
      } else if (hash === 'staff') {
        setCurrentRoute('staff');
        setSelectedStaffId(null);
      } else if (hash === 'services') {
        setCurrentRoute('services');
      } else if (hash === 'register/staff' || hash === 'register-staff') {
        setCurrentRoute('register-staff');
      } else if (hash === 'book') {
        setCurrentRoute('book');
      } else if (hash === 'admin') {
        setCurrentRoute('admin');
      } else if (hash === 'deploy-guide') {
        setCurrentRoute('deploy-guide');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: AppRoute, params?: { staffId?: string; serviceId?: TradeCategory }) => {
    setCurrentRoute(route);
    if (params?.staffId) setSelectedStaffId(params.staffId);
    if (params?.serviceId) setSelectedServiceId(params.serviceId);

    // Update URL hash for clean navigation
    let newHash = '';
    switch (route) {
      case 'home':
        newHash = '';
        break;
      case 'services':
        newHash = '#/services';
        break;
      case 'staff':
        newHash = '#/staff';
        break;
      case 'staff-detail':
        newHash = `#/staff/${params?.staffId || selectedStaffId || ''}`;
        break;
      case 'register-staff':
        newHash = '#/register/staff';
        break;
      case 'book':
        newHash = '#/book';
        break;
      case 'admin':
        newHash = '#/admin';
        break;
      case 'deploy-guide':
        newHash = '#/deploy-guide';
        break;
    }
    
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'error' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const openBookingModal = (staff?: StaffMember | null) => {
    setBookingModalStaff(staff || null);
  };

  const closeBookingModal = () => {
    setBookingModalStaff(null);
  };

  const openServiceModal = (service: ServiceItem) => {
    setServiceModalItem(service);
  };

  const closeServiceModal = () => {
    setServiceModalItem(null);
  };

  const addStaffRegistration = (form: StaffRegistrationForm): { success: boolean; refId: string } => {
    const newId = `tech-req-${Date.now().toString().slice(-4)}`;
    
    // Convert form skills string to array
    const skillsArray = form.skillsText
      ? form.skillsText.split(',').map((s) => s.trim()).filter(Boolean)
      : ['Trade Qualified', 'Site Safety Certified'];

    // Map service to title
    const serviceObj = SERVICES_DATA.find((s) => s.id === form.primaryTrade);
    const title = `${serviceObj?.shortTitle || 'Technical'} Specialist`;

    const newStaff: StaffMember = {
      id: newId,
      fullName: form.fullName,
      title,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      primaryTrade: form.primaryTrade,
      secondaryTrades: form.secondaryTrades,
      yearsExperience: Number(form.yearsExperience) || 3,
      uaeExperienceYears: Number(form.uaeExperienceYears) || 1,
      nationality: form.nationality || 'UAE Resident',
      location: form.currentLocation || 'Dubai, UAE',
      availability: form.availability,
      hourlyRateAED: Math.round((Number(form.expectedDailyRateAED) || 500) / 8),
      dailyRateAED: Number(form.expectedDailyRateAED) || 500,
      monthlyRateAED: (Number(form.expectedDailyRateAED) || 500) * 22,
      rating: 5.0,
      completedJobs: 0,
      visaStatus: form.visaStatus,
      emiratesIdVerified: true,
      securityCleared: true,
      bio: form.bio || `Skilled ${title} with ${form.uaeExperienceYears} years UAE field experience. Committed to safety and precision.`,
      certifications: form.certificationsText
        ? form.certificationsText.split(',').map((c) => ({
            name: c.trim(),
            issuer: 'Certified Authority',
            year: 2024,
            verified: true
          }))
        : [{ name: 'Technical Trade Certificate', issuer: 'Vocational Board', year: 2023, verified: true }],
      skills: skillsArray,
      languages: form.languages.length > 0 ? form.languages : ['English'],
      portfolioImages: [
        serviceObj?.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
      ],
      reviews: [],
      status: 'pending',
      registeredAt: new Date().toISOString().split('T')[0]
    };

    setStaffList((prev) => [newStaff, ...prev]);
    showToast(
      'Application Submitted Successfully!',
      `Reference #${newId}. Our verification team in Al Barsha will review your Emirates ID and trade credentials.`,
      'success'
    );
    return { success: true, refId: newId };
  };

  const addClientBooking = (bookingData: Omit<BookingSubmission, 'id' | 'createdAt' | 'status'>): { success: boolean; id: string } => {
    const bookingId = `WO-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newBooking: BookingSubmission = {
      ...bookingData,
      id: bookingId,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    setBookings((prev) => [newBooking, ...prev]);
    showToast(
      'Work Order Logged!',
      `Booking ${bookingId} has been queued. An Nspyr technical manager is reviewing engineer availability.`,
      'success'
    );
    return { success: true, id: bookingId };
  };

  const approveStaff = (staffId: string) => {
    setStaffList((prev) =>
      prev.map((staff) => (staff.id === staffId ? { ...staff, status: 'approved' } : staff))
    );
    showToast('Technician Approved', `Staff member ${staffId} is now live in the public directory.`, 'success');
  };

  const rejectStaff = (staffId: string) => {
    setStaffList((prev) =>
      prev.map((staff) => (staff.id === staffId ? { ...staff, status: 'rejected' } : staff))
    );
    showToast('Application Rejected', `Staff application ${staffId} marked as rejected.`, 'info');
  };

  const toggleStaffVerification = (staffId: string) => {
    setStaffList((prev) =>
      prev.map((staff) =>
        staff.id === staffId
          ? { ...staff, emiratesIdVerified: !staff.emiratesIdVerified, securityCleared: !staff.securityCleared }
          : staff
      )
    );
    showToast('Verification Toggled', `Security & Emirates ID verification status updated.`, 'info');
  };

  const updateBookingStatus = (bookingId: string, status: BookingSubmission['status'], assignedStaffIds?: string[]) => {
    setBookings((prev) =>
      prev.map((b) => {
        if (b.id === bookingId) {
          const updated = { ...b, status };
          if (assignedStaffIds) {
            updated.assignedStaffIds = assignedStaffIds;
            const names = staffList
              .filter((s) => assignedStaffIds.includes(s.id))
              .map((s) => s.fullName);
            updated.assignedStaffNames = names;
          }
          return updated;
        }
        return b;
      })
    );
    showToast('Work Order Updated', `Booking ${bookingId} status is now "${status}".`, 'success');
  };

  const deleteBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast('Booking Removed', `Work order ${bookingId} deleted from database.`, 'info');
  };

  const resetToDefaults = () => {
    setStaffList(INITIAL_STAFF_MEMBERS);
    setBookings(INITIAL_BOOKINGS);
    localStorage.removeItem('nspyr_staff_v2');
    localStorage.removeItem('nspyr_bookings_v2');
    showToast('Data Reset', 'All technician rosters and client work orders reset to initial seed values.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        selectedStaffId,
        selectedServiceId,
        staffList,
        bookings,
        toasts,
        bookingModalStaff,
        serviceModalItem,
        navigateTo,
        openBookingModal,
        closeBookingModal,
        openServiceModal,
        closeServiceModal,
        addStaffRegistration,
        addClientBooking,
        approveStaff,
        rejectStaff,
        toggleStaffVerification,
        updateBookingStatus,
        deleteBooking,
        resetToDefaults,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
