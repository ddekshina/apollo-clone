const mongoose = require('mongoose');
const Doctor = require('../models/doctor');
const dotenv = require('dotenv');

dotenv.config();

// Sample doctor data
const doctorData = [
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, MD (Internal Medicine)',
    experience: 12,
    languages: ['English', 'Hindi', 'Marathi'],
    consultationFee: 800,
    availableSlots: 5,
    location: 'Mumbai',
    rating: 4.8,
    reviewCount: 124,
    imageUrl: 'https://example.com/doctor1.jpg',
    about: 'Dr. Rajesh Kumar is a highly experienced physician with expertise in treating various medical conditions including diabetes, hypertension, and respiratory disorders.'
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, DNB (Family Medicine)',
    experience: 8,
    languages: ['English', 'Hindi', 'Punjabi'],
    consultationFee: 700,
    availableSlots: 3,
    location: 'Delhi',
    rating: 4.7,
    reviewCount: 98,
    imageUrl: 'https://example.com/doctor2.jpg',
    about: 'Dr. Priya Sharma specializes in family medicine and has received training from prestigious institutions. She focuses on preventive care and chronic disease management.'
  },
  {
    name: 'Dr. Sanjay Gupta',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, MD (Internal Medicine), DM (Cardiology)',
    experience: 15,
    languages: ['English', 'Hindi', 'Bengali'],
    consultationFee: 1200,
    availableSlots: 2,
    location: 'Kolkata',
    rating: 4.9,
    reviewCount: 210,
    imageUrl: 'https://example.com/doctor3.jpg',
    about: 'Dr. Sanjay Gupta is a renowned physician with specialization in cardiology. He has published several research papers and is a member of various medical associations.'
  },
  {
    name: 'Dr. Lakshmi Nair',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, MD (Internal Medicine)',
    experience: 10,
    languages: ['English', 'Tamil', 'Malayalam'],
    consultationFee: 900,
    availableSlots: 6,
    location: 'Chennai',
    rating: 4.6,
    reviewCount: 156,
    imageUrl: 'https://example.com/doctor4.jpg',
    about: 'Dr. Lakshmi Nair has extensive experience in treating infectious diseases, metabolic disorders, and autoimmune conditions.'
  },
  {
    name: 'Dr. Arjun Reddy',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, MD (Internal Medicine)',
    experience: 7,
    languages: ['English', 'Telugu', 'Hindi'],
    consultationFee: 750,
    availableSlots: 4,
    location: 'Hyderabad',
    rating: 4.5,
    reviewCount: 87,
    imageUrl: 'https://example.com/doctor5.jpg',
    about: 'Dr. Arjun Reddy is known for his patient-centered approach and holistic treatment methods. He specializes in lifestyle diseases and respiratory conditions.'
  },
  {
    name: 'Dr. Kavita Patel',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, MD (Internal Medicine), Fellowship in Endocrinology',
    experience: 14,
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1000,
    availableSlots: 3,
    location: 'Ahmedabad',
    rating: 4.8,
    reviewCount: 178,
    imageUrl: 'https://example.com/doctor6.jpg',
    about: 'Dr. Kavita Patel is a specialist in endocrinology with focus on diabetes management and thyroid disorders. She follows evidence-based treatment protocols.'
  },
  {
    name: 'Dr. Mohan Rao',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, DNB (General Medicine)',
    experience: 9,
    languages: ['English', 'Kannada', 'Hindi'],
    consultationFee: 850,
    availableSlots: 5,
    location: 'Bangalore',
    rating: 4.7,
    reviewCount: 135,
    imageUrl: 'https://example.com/doctor7.jpg',
    about: 'Dr. Mohan Rao has expertise in treating acute and chronic illnesses. He is particularly interested in preventive medicine and geriatric care.'
  },
  {
    name: 'Dr. Fatima Ahmed',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, MD (Internal Medicine)',
    experience: 11,
    languages: ['English', 'Hindi', 'Urdu'],
    consultationFee: 950,
    availableSlots: 4,
    location: 'Lucknow',
    rating: 4.6,
    reviewCount: 142,
    imageUrl: 'https://example.com/doctor8.jpg',
    about: 'Dr. Fatima Ahmed specializes in infectious diseases and respiratory medicine. She has extensive experience managing complex medical cases.'
  },
  {
    name: 'Dr. Vikram Singh',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, MD (Internal Medicine), DM (Gastroenterology)',
    experience: 18,
    languages: ['English', 'Hindi', 'Punjabi'],
    consultationFee: 1500,
    availableSlots: 2,
    location: 'Delhi',
    rating: 4.9,
    reviewCount: 256,
    imageUrl: 'https://example.com/doctor9.jpg',
    about: 'Dr. Vikram Singh is a renowned gastroenterologist with extensive experience in managing digestive disorders and liver diseases.'
  },
  {
    name: 'Dr. Ananya Das',
    specialty: 'general-physician-internal-medicine',
    qualification: 'MBBS, MD (Internal Medicine)',
    experience: 6,
    languages: ['English', 'Bengali', 'Hindi'],
    consultationFee: 700,
    availableSlots: 7,
    location: 'Kolkata',
    rating: 4.5,
    reviewCount: 89,
    imageUrl: 'https://example.com/doctor10.jpg',
    about: 'Dr. Ananya Das is known for her compassionate care and thorough approach to diagnosis and treatment. She focuses on women\'s health issues.'
  }
];

// Connect to MongoDB and seed data
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding');
    
    // Clear existing data
    await Doctor.deleteMany({});
    console.log('Previous doctor data cleared');
    
    // Insert new data
    await Doctor.insertMany(doctorData);
    console.log('Database seeded successfully with doctor data');
    
    // Disconnect after seeding
    mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeding function
seedDatabase();