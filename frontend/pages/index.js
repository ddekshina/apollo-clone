import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Header from '../components/Header';
import DoctorCard from '../components/DoctorCard';
import FilterSidebar from '../components/FilterSidebar';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    specialty: 'general-physician-internal-medicine',
    location: '',
    minExperience: '',
    languages: []
  });

  useEffect(() => {
    fetchDoctors();
  }, [currentPage, filters]);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      
      // Build query parameters
      const params = new URLSearchParams();
      params.append('page', currentPage);
      params.append('limit', 10);
      
      if (filters.specialty) {
        params.append('specialty', filters.specialty);
      }
      
      if (filters.location) {
        params.append('location', filters.location);
      }
      
      if (filters.minExperience) {
        params.append('minExperience', filters.minExperience);
      }
      
      if (filters.languages.length > 0) {
        params.append('languages', filters.languages.join(','));
      }

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctors/list-doctors?${params.toString()}`);
      
      setDoctors(response.data.data);
      setTotalPages(response.data.pages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Consult Top General Physicians Online | Apollo 247 Clone</title>
        <meta name="description" content="Book appointments with top general physicians and internal medicine specialists. Get medical advice, second opinions, and medical prescriptions online." />
        <meta name="keywords" content="general physician, internal medicine, doctor consultation, online doctor, medical advice, Apollo 247 clone" />
        <link rel="canonical" href="https://your-domain.com/specialties/general-physician-internal-medicine" />
        <meta property="og:title" content="Consult Top General Physicians Online | Apollo 247 Clone" />
        <meta property="og:description" content="Book appointments with top general physicians and internal medicine specialists. Get medical advice, second opinions, and medical prescriptions online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/specialties/general-physician-internal-medicine" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consult Top General Physicians Online | Apollo 247 Clone" />
        <meta name="twitter:description" content="Book appointments with top general physicians and internal medicine specialists. Get medical advice, second opinions, and medical prescriptions online." />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">General Physician & Internal Medicine</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          <div className="w-full md:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-60">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6">
                  {doctors.length > 0 ? (
                    doctors.map(doctor => (
                      <DoctorCard key={doctor._id} doctor={doctor} />
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No doctors found matching your criteria.</p>
                    </div>
                  )}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="flex">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`mx-1 px-3 py-1 rounded ${
                            currentPage === page
                              ? 'bg-blue-500 text-white'
                              : 'bg-white text-blue-500 border border-blue-500'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}