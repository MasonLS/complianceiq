import { useState } from 'react';
import { supabase } from '../lib/supabase';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const businessTypes = [
    'Restaurant/Food Service',
    'Retail Store', 
    'Professional Services',
    'Construction',
    'Healthcare',
    'Technology/Software',
    'Manufacturing',
    'Real Estate',
    'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email,
            business_type: businessType,
            product: 'ComplianceIQ',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      setEmail('');
      setBusinessType('');
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          You're on the list!
        </h3>
        <p className="text-gray-600 mb-6">
          We'll notify you as soon as ComplianceIQ is ready. In the meantime, we'll send you helpful compliance tips and updates.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Join the Waitlist
        </h3>
        <p className="text-gray-600">
          Be the first to know when ComplianceIQ launches. Get early access and special pricing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
            Business Type
          </label>
          <select
            id="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select your business type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default WaitlistForm;
