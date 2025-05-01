'use client';

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row">
      {/* Doctor Image */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <div className="w-full md:w-32 h-32 rounded-full overflow-hidden bg-gray-200 relative">
          {doctor.imageUrl ? (
            <img 
              src={doctor.imageUrl} 
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>
      </div>
      
      {/* Doctor Information */}
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-blue-600 font-medium">{doctor.specialty}</p>
            <p className="text-gray-600">{doctor.qualification}</p>
            <p className="text-gray-600">{doctor.experience} years experience</p>
            
            {doctor.languages && doctor.languages.length > 0 && (
              <p className="text-gray-600 text-sm mt-1">
                Languages: {doctor.languages.join(', ')}
              </p>
            )}
            
            <div className="flex items-center mt-2">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {doctor.rating} Rating
              </div>
              <span className="text-gray-500 text-sm ml-2">({doctor.reviewCount} reviews)</span>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-800 font-medium">₹{doctor.consultationFee}</p>
            <div className="mt-2">
              {doctor.availableSlots > 0 ? (
                <span className="text-green-600 text-sm">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-1"></span>
                  Available today
                </span>
              ) : (
                <span className="text-gray-500 text-sm">
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-1"></span>
                  Not available
                </span>
              )}
            </div>
          </div>
        </div>
        
        {doctor.about && (
          <div className="mt-3">
            <p className="text-gray-600 text-sm">{doctor.about}</p>
          </div>
        )}
        
        <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Book Appointment
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition duration-200">
            Consult Online
          </button>
        </div>
      </div>
    </div>
  );
}