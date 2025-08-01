"use client"

import { useState } from 'react'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: '',
    company_name: '',
    business_type: '',
    company_size: '',
    current_compliance_challenges: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      console.log('Successfully added to waitlist:', result)
      setIsSubmitted(true)
    } catch (err: any) {
      console.error('Error submitting to waitlist:', err)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">You\'re on the list!</h3>
        <p className="text-gray-600 mb-4">
          Thanks for joining our waitlist. We\'ll notify you as soon as ComplianceIQ is ready, 
          and you\'ll get 50% off your first year!
        </p>
        <p className="text-sm text-gray-500">
          Keep an eye on your inbox for updates and early access opportunities.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Company Inc."
          />
        </div>

        <div>
          <label htmlFor="business_type" className="block text-sm font-medium text-gray-700 mb-1">
            Business Type
          </label>
          <select
            id="business_type"
            name="business_type"
            value={formData.business_type}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select business type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="company_size" className="block text-sm font-medium text-gray-700 mb-1">
            Company Size
          </label>
          <select
            id="company_size"
            name="company_size"
            value={formData.company_size}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select company size</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="current_compliance_challenges" className="block text-sm font-medium text-gray-700 mb-1">
            Current Compliance Challenges
          </label>
          <textarea
            id="current_compliance_challenges"
            name="current_compliance_challenges"
            rows={3}
            value={formData.current_compliance_challenges}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="What compliance issues keep you up at night?"
          />
        </div>

        {error && (
          <div className="flex items-center space-x-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !formData.email}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <span>Join Waitlist - Get 50% Off!</span>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. No spam, just updates about ComplianceIQ.
        </p>
      </form>
    </div>
  )
}
