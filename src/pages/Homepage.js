import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Phone, 
  Calendar, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3,
  ArrowRight,
  X,
  Activity,
  Brain,
  Heart,
  Zap,
  Building2,
  LineChart,
  FileText,
  Target
} from 'lucide-react';

const PrevaCare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const CallbackModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Request a Call Back</h3>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="text" 
            placeholder="Company Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            onClick={() => setIsModalOpen(false)}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Request Call Back
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-semibold text-blue-500">preva.care</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-500 font-medium border-b-2 border-blue-500 pb-1">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Health Checkups</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Contact</a>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-medium">
                Get Healthy
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Video Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-blue-400">Proactive Health</span> for a <br />
            <span className="text-emerald-400">Productive Workplace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            India's most complete preventive healthcare platform for corporates, employees & elders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium text-lg flex items-center gap-2 hover:scale-105">
              <Calendar size={20} />
              Schedule a Demo
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-lg flex items-center gap-2"
            >
              <Phone size={20} />
              Request a Call Back
            </button>
          </div>
        </div>
      </section>

      {/* Why PrevaCare Section */}
      <section id="why-prevacare" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible['why-prevacare'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why <span className="text-blue-500">PrevaCare</span> for Corporates?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your workplace wellness with our comprehensive, data-driven approach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">Corporate Pain Points We Solve</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Rising Absenteeism & Burnout</h4>
                      <p className="text-gray-600">Employee health issues leading to decreased productivity and increased operational costs</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">No ROI from Current Wellness Spends</h4>
                      <p className="text-gray-600">Traditional wellness programs lack measurable outcomes and employee engagement</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <Building2 className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Manual Compliance & Scattered Vendors</h4>
                      <p className="text-gray-600">Complex vendor management with no centralized dashboard or unified reporting system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">How PrevaCare Solves This</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Doctor & Diagnostics Plans</h4>
                      <p className="text-gray-600">Comprehensive healthcare coverage with vetted medical professionals and diagnostic centers</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-emerald-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <LineChart className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Health Dashboards & Analytics</h4>
                      <p className="text-gray-600">Real-time insights and data visualization for informed decision-making and ROI tracking</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Auto-generated Compliance Certificates</h4>
                      <p className="text-gray-600">Automated compliance management with instant certificate generation and audit trails</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <Target className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Engagement Tracking</h4>
                      <p className="text-gray-600">Monitor employee participation and measure program effectiveness with detailed analytics</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center lg:text-left">
                <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium flex items-center gap-2 mx-auto lg:mx-0">
                  Talk to a Corporate Wellness Expert
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Model Section */}
      <section id="proactive-model" className={`py-20 bg-white transition-all duration-1000 ${isVisible['proactive-model'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-500">Proactive Model</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prevention-first approach with AI-powered insights for superior health outcomes
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Process Flow */}
            <div className="relative mb-16">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
                {[
                  { icon: Activity, title: "Lab Check", desc: "Comprehensive health screenings", color: "blue" },
                  { icon: Phone, title: "App", desc: "Seamless data integration", color: "emerald" },
                  { icon: BarChart3, title: "Health Data", desc: "Real-time tracking", color: "purple" },
                  { icon: Brain, title: "AI Analysis", desc: "Intelligent insights", color: "orange" },
                  { icon: Zap, title: "Action", desc: "Personalized recommendations", color: "red" }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center group relative">
                    <div className={`bg-${step.color}-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:bg-${step.color}-200 transition-colors shadow-lg`}>
                      <step.icon className={`w-10 h-10 text-${step.color}-500`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 max-w-32">{step.desc}</p>
                    {index < 4 && (
                      <ArrowRight className="hidden md:block absolute -right-8 top-8 w-6 h-6 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <Activity className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Tracking</h3>
                <p className="text-gray-600">Continuous monitoring of vital health metrics enabling early intervention and prevention</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Employee Risk Scoring</h3>
                <p className="text-gray-600">AI-powered health risk assessment for targeted interventions and personalized care plans</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <BarChart3 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Engagement Insights</h3>
                <p className="text-gray-600">Comprehensive analytics on program participation rates and overall effectiveness metrics</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium flex items-center gap-2 mx-auto">
                Explore Our Approach
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && <CallbackModal />}
    </div>
  );
};

export default PrevaCare;