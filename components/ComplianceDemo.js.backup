import { useState } from 'react';

const ComplianceDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [businessInfo, setBusinessInfo] = useState({
    type: '',
    state: '',
    employees: '',
    revenue: ''
  });
  const [complianceResults, setComplianceResults] = useState([]);

  const businessTypes = [
    'Restaurant/Food Service',
    'Retail Store',
    'Professional Services',
    'Construction',
    'Healthcare',
    'Technology/Software',
    'Manufacturing',
    'Real Estate'
  ];

  const states = [
    'California', 'Texas', 'Florida', 'New York', 'Illinois', 
    'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'
  ];

  const generateComplianceResults = () => {
    const results = [];
    
    // Corporate Transparency Act
    if (businessInfo.employees > 0) {
      results.push({
        regulation: 'Corporate Transparency Act',
        status: 'action_required',
        deadline: '2025-01-01',
        description: 'File beneficial ownership information with FinCEN',
        penalty: 'Up to $10,000 fine',
        action: 'Submit BOI report by January 1, 2025'
      });
    }

    // State-specific wage laws
    if (businessInfo.state === 'California' && businessInfo.employees >= 5) {
      results.push({
        regulation: 'CA Overtime Pay Requirements',
        status: 'compliant',
        deadline: 'Ongoing',
        description: 'Ensure proper overtime calculations for non-exempt employees',
        penalty: 'Back wages + penalties',
        action: 'Review current payroll practices'
      });
    }

    // Payment platform reporting
    if (businessInfo.revenue >= 600) {
      results.push({
        regulation: '1099-K Reporting Changes',
        status: 'warning',
        deadline: '2025-01-31',
        description: 'New $600 threshold for payment platform reporting',
        penalty: 'IRS penalties for non-compliance',
        action: 'Track all payment platform transactions'
      });
    }

    // Industry-specific regulations
    if (businessInfo.type === 'Restaurant/Food Service') {
      results.push({
        regulation: 'Food Safety Modernization Act',
        status: 'action_required',
        deadline: '2025-03-15',
        description: 'Update HACCP plans and employee training',
        penalty: 'FDA fines up to $100,000',
        action: 'Schedule food safety audit'
      });
    }

    if (businessInfo.type === 'Healthcare') {
      results.push({
        regulation: 'HIPAA Privacy Rule Updates',
        status: 'compliant',
        deadline: 'Ongoing',
        description: 'Maintain patient data privacy and security',
        penalty: 'Up to $1.5M per incident',
        action: 'Conduct annual privacy assessment'
      });
    }

    setComplianceResults(results);
    setCurrentStep(3);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'action_required': return 'text-red-600 bg-red-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'compliant': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'action_required': return '⚠️';
      case 'warning': return '⚡';
      case 'compliant': return '✅';
      default: return 'ℹ️';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Try ComplianceIQ Demo
        </h3>
        <p className="text-gray-600">
          See how we identify compliance requirements for your specific business
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">Step {currentStep + 1} of 4</span>
          <span className="text-sm text-gray-500">
            {currentStep === 0 && 'Business Type'}
            {currentStep === 1 && 'Location & Size'}
            {currentStep === 2 && 'Revenue Info'}
            {currentStep === 3 && 'Your Compliance Report'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Business Type */}
      {currentStep === 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">What type of business do you run?</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {businessTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setBusinessInfo({...businessInfo, type});
                  setCurrentStep(1);
                }}
                className="p-3 text-left border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="font-medium text-gray-900">{type}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Location & Size */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900">Tell us about your business size and location</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary business state
            </label>
            <select
              value={businessInfo.state}
              onChange={(e) => setBusinessInfo({...businessInfo, state: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of employees
            </label>
            <select
              value={businessInfo.employees}
              onChange={(e) => setBusinessInfo({...businessInfo, employees: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select employee count</option>
              <option value="1">Just me (1)</option>
              <option value="2-5">2-5 employees</option>
              <option value="6-10">6-10 employees</option>
              <option value="11-25">11-25 employees</option>
              <option value="26-50">26-50 employees</option>
              <option value="50+">50+ employees</option>
            </select>
          </div>

          <button
            onClick={() => setCurrentStep(2)}
            disabled={!businessInfo.state || !businessInfo.employees}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 3: Revenue */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900">What&apos;s your approximate annual revenue?</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Under $100K',
              '$100K - $500K', 
              '$500K - $1M',
              '$1M - $5M',
              '$5M - $10M',
              'Over $10M'
            ].map((range) => (
              <button
                key={range}
                onClick={() => {
                  setBusinessInfo({...businessInfo, revenue: range});
                  generateComplianceResults();
                }}
                className="p-4 text-left border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="font-medium text-gray-900">{range}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Your Personalized Compliance Report
            </h4>
            <p className="text-gray-600">
              Based on your {businessInfo.type} business in {businessInfo.state} with {businessInfo.employees} employees
            </p>
          </div>

          <div className="space-y-4">
            {complianceResults.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{getStatusIcon(item.status)}</span>
                    <h5 className="font-semibold text-gray-900">{item.regulation}</h5>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2">{item.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Deadline:</span>
                    <div className="text-gray-600">{item.deadline}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Potential Penalty:</span>
                    <div className="text-red-600">{item.penalty}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Next Action:</span>
                    <div className="text-blue-600">{item.action}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <h5 className="font-semibold text-blue-900 mb-2">
              🎯 This is just a preview!
            </h5>
            <p className="text-blue-800 text-sm">
              The full ComplianceIQ platform will provide real-time updates, automated deadline tracking, 
              step-by-step compliance guides, and personalized alerts for your specific business.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentStep(0);
              setBusinessInfo({ type: '', state: '', employees: '', revenue: '' });
              setComplianceResults([]);
            }}
            className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Try Another Business Type
          </button>
        </div>
      )}
    </div>
  );
};

export default ComplianceDemo;
