import React from 'react';
import FenceCalculator from './FenceCalculator';
import ServiceDetails from './ServiceDetails';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Fence Staining Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Get an instant quote for your fence staining project. We provide UV protection and waterproof staining with professional results guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">✓ 2-Coat UV Protection</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">✓ Waterproof Stain</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">✓ Professional Cleaning</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">✓ Repair Services</span>
          </div>
        </div>
        
        <ServiceDetails />
        <FenceCalculator />
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Services?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Premium Materials</h4>
                <p className="text-sm text-gray-600">We use only the highest quality UV-resistant, waterproof stains that last for years.</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Expert Application</h4>
                <p className="text-sm text-gray-600">Our professional team ensures even coverage and proper preparation for lasting results.</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">Flexible Pricing</h4>
                <p className="text-sm text-gray-600">We work within your budget while maintaining our quality standards.</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">Complete Service</h4>
                <p className="text-sm text-gray-600">From cleaning to repairs to staining - we handle every aspect of your project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;