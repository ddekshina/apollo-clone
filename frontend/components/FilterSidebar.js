'use client';

import { useState } from 'react';

export default function FilterSidebar({ filters, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  
  const locations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];
  
  const experienceLevels = [
    { label: 'Any Experience', value: '' },
    { label: '1+ Years', value: '1' },
    { label: '5+ Years', value: '5' },
    { label: '10+ Years', value: '10' },
    { label: '15+ Years', value: '15' }
  ];
  
  const languageOptions = [
    'English', 'Hindi', 'Tamil', 'Telugu', 'Marathi', 
    'Bengali', 'Kannada', 'Malayalam', 'Gujarati'
  ];

  const handleLocationChange = (location) => {
    setSelectedFilters(prev => ({ ...prev, location }));
  };

  const handleExperienceChange = (minExperience) => {
    setSelectedFilters(prev => ({ ...prev, minExperience }));
  };

  const handleLanguageToggle = (language) => {
    setSelectedFilters(prev => {
      const languages = [...prev.languages];
      if (languages.includes(language)) {
        return { ...prev, languages: languages.filter(lang => lang !== language) };
      } else {
        return { ...prev, languages: [...languages, language] };
      }
    });
  };

  const applyFilters = () => {
    onFilterChange(selectedFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      location: '',
      minExperience: '',
      languages: []
    };
    setSelectedFilters(prev => ({ ...prev, ...resetFilters }));
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
      
      {/* Location Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-700 mb-2">Location</h3>
        <select 
          className="w-full p-2 border border-gray-300 rounded-md"
          value={selectedFilters.location}
          onChange={(e) => handleLocationChange(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      
      {/* Experience Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-700 mb-2">Experience</h3>
        <div className="space-y-2">
          {experienceLevels.map(level => (
            <div key={level.value} className="flex items-center">
              <input
                type="radio"
                id={`exp-${level.value}`}
                name="experience"
                value={level.value}
                checked={selectedFilters.minExperience === level.value}
                onChange={() => handleExperienceChange(level.value)}
                className="mr-2"
              />
              <label htmlFor={`exp-${level.value}`} className="text-gray-600">
                {level.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Language Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-700 mb-2">Languages</h3>
        <div className="space-y-2">
          {languageOptions.map(language => (
            <div key={language} className="flex items-center">
              <input
                type="checkbox"
                id={`lang-${language}`}
                checked={selectedFilters.languages.includes(language)}
                onChange={() => handleLanguageToggle(language)}
                className="mr-2"
              />
              <label htmlFor={`lang-${language}`} className="text-gray-600">
                {language}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Filter Buttons */}
      <div className="flex space-x-3">
        <button
          onClick={applyFilters}
          className="flex-grow bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="flex-grow-0 border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}