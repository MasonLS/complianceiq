"use client"

import { useState } from 'react'
import { ChevronRight, AlertTriangle, CheckCircle, Clock, MapPin, Users, Building } from 'lucide-react'

interface BusinessInfo {
  type: string
  size: string
  state: string
}

interface ComplianceItem {
  id: string
  title: string
  description: string
  deadline: string
  priority: 'high' | 'medium' | 'low'
  status: 'overdue' | 'due_soon' | 'upcoming'
  actionItems: string[]
}

const businessTypes = [
  'Technology/Software',
  'Retail/E-commerce', 
  'Professional Services',
  'Healthcare',
  'Food & Beverage',
  'Manufacturing',
  'Construction',
  'Other'
]

const companySizes = [
  '1-5 employees',
  '6-20 employees', 
  '21-50 employees',
  '51+ employees'
]

const states = [
  'California', 'Texas', 'Florida', 'New York', 'Illinois', 'Pennsylvania', 
  'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'Other'
]

export function ComplianceDemo() {
  const [step, setStep] = useState(1)
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    type: '',
    size: '',
    state: ''
  })
  const [showResults, setShowResults] = useState(false)

  const generateComplianceItems = (info: BusinessInfo): ComplianceItem[] => {
    const items: ComplianceItem[] = []
    
    // Corporate Transparency Act - applies to most small businesses
    items.push({
      id: 'cta',
      title: 'Corporate Transparency Act Reporting',
      description: 'File beneficial ownership information with FinCEN',
      deadline: 'January 1, 2025',
      priority: 'high',
      status: 'overdue',
      actionItems: [
        'Identify all beneficial owners (25%+ ownership)',
        'Collect required personal information and documents',
        'File BOI report through FinCEN website',
        'Set up annual update reminders'
      ]
    })

    // State-specific wage laws
    if (info.state === 'California') {
      items.push({
        id: 'ca_wage',
        title: 'California Wage & Hour Compliance',
        description: 'Update wage policies for 2025 minimum wage increases',
        deadline: 'January 1, 2025',
        priority: 'high',
        status: 'due_soon',
        actionItems: [
          'Update minimum wage to $16.50/hour',
          'Review overtime calculation methods',
          'Update employee handbooks',
          'Post new wage notices in workplace'
        ]
      })
    }

    // Size-specific requirements
    if (info.size.includes('21-50') || info.size.includes('51+')) {
      items.push({
        id: 'fmla',
        title: 'FMLA Compliance Review',
        description: 'Ensure Family Medical Leave Act compliance for eligible employees',
        deadline: 'March 15, 2025',
        priority: 'medium',
        status: 'upcoming',
        actionItems: [
          'Review employee eligibility criteria',
          'Update FMLA policies and procedures',
          'Train managers on FMLA requirements',
          'Post required FMLA notices'
        ]
      })
    }

    // Industry-specific requirements
    if (info.type === 'Healthcare') {
      items.push({
        id: 'hipaa',
        title: 'HIPAA Security Assessment',
        description: 'Annual review of patient data protection measures',
        deadline: 'April 30, 2025',
        priority: 'high',
        status: 'upcoming',
        actionItems: [
          'Conduct risk assessment of PHI handling',
          'Review business associate agreements',
          'Update security policies and procedures',
          'Train staff on privacy requirements'
        ]
      })
    }

    if (info.type === 'Food & Beverage') {
      items.push({
        id: 'food_safety',
        title: 'Food Safety Modernization Act Compliance',
        description: 'Update food safety plans and training records',
        deadline: 'February 28, 2025',
        priority: 'high',
        status: 'due_soon',
        actionItems: [
          'Review and update HACCP plans',
          'Conduct supplier verification activities',
          'Update employee food safety training',
          'Schedule facility inspection'
        ]
      })
    }

    // Payment platform reporting (applies to most businesses)
    items.push({
      id: 'payment_reporting',
      title: '1099-K Payment Platform Reporting',
      description: 'New thresholds for payment platform transaction reporting',
      deadline: 'January 31, 2025',
      priority: 'medium',
      status: 'due_soon',
      actionItems: [
        'Review payment platform transactions',
        'Reconcile 1099-K forms received',
        'Update accounting records',
        'Prepare for tax filing requirements'
      ]
    })

    return items
  }

  const handleBusinessInfoChange = (field: keyof BusinessInfo, value: string) => {
    setBusinessInfo(prev => ({ ...prev, [field]: value }))
  }

  const handleGenerateReport = () => {
    setShowResults(true)
    setStep(4)
  }

  const complianceItems = showResults ? generateComplianceItems(businessInfo) : []

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'overdue': return <AlertTriangle className="h-5 w-5 text-red-500" />
      case 'due_soon': return <Clock className="h-5 w-5 text-yellow-500" />
      case 'upcoming': return <CheckCircle className="h-5 w-5 text-green-500" />
      default: return <CheckCircle className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between text-sm">
          <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            <Building className="h-4 w-4 mr-1" />
            Business Type
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <Users className="h-4 w-4 mr-1" />
            Company Size
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <div className={`flex items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
            <MapPin className="h-4 w-4 mr-1" />
            Location
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <div className={`flex items-center ${step >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
            <CheckCircle className="h-4 w-4 mr-1" />
            Results
          </div>
        </div>
      </div>

      <div className="p-6">
        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">What type of business do you run?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {businessTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    handleBusinessInfoChange('type', type)
                    setStep(2)
                  }}
                  className="p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">How many employees do you have?</h3>
            <div className="grid grid-cols-2 gap-3">
              {companySizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    handleBusinessInfoChange('size', size)
                    setStep(3)
                  }}
                  className="p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">What state is your business located in?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => {
                    handleBusinessInfoChange('state', state)
                  }}
                  className={`p-3 text-left border rounded-lg transition-colors ${
                    businessInfo.state === state 
                      ? 'border-blue-300 bg-blue-50 text-blue-700' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
            {businessInfo.state && (
              <button
                onClick={handleGenerateReport}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Generate My Compliance Report
              </button>
            )}
          </div>
        )}

        {step === 4 && showResults && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Your Personalized Compliance Dashboard</h3>
              <p className="text-gray-600">
                Based on your {businessInfo.type} business with {businessInfo.size} in {businessInfo.state}
              </p>
            </div>

            <div className="space-y-4">
              {complianceItems.map((item) => (
                <div key={item.id} className={`border rounded-lg p-4 ${getPriorityColor(item.priority)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(item.status)}
                      <h4 className="font-semibold">{item.title}</h4>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white">
                      {item.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm mb-2">{item.description}</p>
                  <p className="text-sm font-medium mb-3">Deadline: {item.deadline}</p>
                  
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium text-sm mb-2">Action Items:</h5>
                    <ul className="text-sm space-y-1">
                      {item.actionItems.map((action, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">This is just a preview!</h4>
              <p className="text-blue-800 text-sm">
                ComplianceIQ will provide real-time updates, automated deadline tracking, 
                and step-by-step guidance for all your compliance requirements. 
                Join our waitlist to be notified when we launch!
              </p>
            </div>

            <button
              onClick={() => {
                setStep(1)
                setShowResults(false)
                setBusinessInfo({ type: '', size: '', state: '' })
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Try Again with Different Business Info
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
