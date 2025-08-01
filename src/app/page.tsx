import { ComplianceDemo } from '@/components/ComplianceDemo'
import { WaitlistForm } from '@/components/WaitlistForm'
import { CheckCircle, Shield, AlertTriangle, Clock, DollarSign, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">ComplianceIQ</h1>
            </div>
            <div className="text-sm text-gray-600">
              Your AI Compliance Copilot
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Never Miss a 
            <span className="text-blue-600"> Compliance Deadline</span> Again
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ComplianceIQ is your AI-powered compliance assistant that tracks regulatory changes, 
            translates complex requirements into simple action items, and keeps your small business 
            compliant without the complexity or cost of enterprise solutions.
          </p>
          
          {/* Problem Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-700">51%</div>
              <div className="text-sm text-red-600">of small businesses say compliance hinders growth</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-700">90%</div>
              <div className="text-sm text-yellow-600">never heard of new FinCEN reporting requirements</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">$289B</div>
              <div className="text-sm text-green-600">annual cost of compliance in the US</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See How ComplianceIQ Works
          </h2>
          <p className="text-lg text-gray-600">
            Try our interactive demo to see how we simplify compliance for your business
          </p>
        </div>
        
        <ComplianceDemo />
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Small Businesses Choose ComplianceIQ
            </h2>
            <p className="text-lg text-gray-600">
              Built specifically for businesses with 2-50 employees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Tracking</h3>
              <p className="text-gray-600">
                Automatically identifies which regulations apply to your specific business type, location, and size
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Plain English</h3>
              <p className="text-gray-600">
                Converts complex legal language into simple, actionable steps you can actually understand
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proactive Alerts</h3>
              <p className="text-gray-600">
                Get notified about upcoming deadlines and new requirements before they become problems
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-State Support</h3>
              <p className="text-gray-600">
                Handles businesses operating across different states with varying compliance requirements
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Step-by-Step Guidance</h3>
              <p className="text-gray-600">
                Detailed checklists and workflows for every compliance task, no legal expertise required
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Just $49/month - a fraction of the cost of legal consultations or enterprise software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Regulations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Track The Regulations That Matter Most
            </h2>
            <p className="text-lg text-gray-600">
              Stay compliant with the latest requirements affecting small businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Corporate Transparency Act</h3>
              <p className="text-gray-600 text-sm">New beneficial ownership reporting requirements that many businesses don\'t know about</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">FinCEN Reporting</h3>
              <p className="text-gray-600 text-sm">Complex new requirements for beneficial ownership that started January 1, 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Payment Platform Rules</h3>
              <p className="text-gray-600 text-sm">New 1099-K reporting thresholds for Venmo, PayPal, and other payment platforms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">State Wage Laws</h3>
              <p className="text-gray-600 text-sm">Varying overtime, minimum wage, and sick leave requirements across different states</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Employment Law Updates</h3>
              <p className="text-gray-600 text-sm">New hiring, firing, and workplace safety regulations that change frequently</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Data Privacy Compliance</h3>
              <p className="text-gray-600 text-sm">GDPR-like requirements and state privacy laws that small businesses struggle with</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be among the first to get access to ComplianceIQ when we launch. 
            Early users get 50% off their first year!
          </p>
          
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6" />
            <span className="text-lg font-semibold">ComplianceIQ</span>
          </div>
          <p className="text-gray-400">
            Your AI Compliance Copilot for Small Business
          </p>
        </div>
      </footer>
    </div>
  )
}
