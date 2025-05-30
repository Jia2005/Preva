import { useState, useEffect } from 'react';
import { Phone, Calendar, TrendingUp, Shield, Users, BarChart3, ArrowRight, X, Activity, Brain, Heart, Zap, Building2, LineChart, FileText, Target, Menu} from 'lucide-react';

const PrevaCare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [modelAnimationStep, setModelAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            
            if (entry.target.id === 'proactive-model') {
              let step = 0;
              const animateModel = () => {
                if (step <= 9) {
                  setModelAnimationStep(step);
                  step++;
                  setTimeout(animateModel, step === 4 ? 800 : 600);
                }
              };
              setTimeout(animateModel, 500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'why-prevacare', 'proactive-model'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const CallbackModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative animate-in slide-in-from-bottom-4 duration-300">
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Request a Call Back</h3>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <input 
            type="text" 
            placeholder="Company Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button 
            onClick={() => setIsModalOpen(false)}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium hover:scale-105"
          >
            Request Call Back
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-2 transition-all duration-700 ${heroLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
              </div>
              <span className="text-2xl font-semibold text-blue-500">preva.care</span>
            </div>
            
            <div className={`hidden md:flex items-center space-x-8 transition-all duration-700 delay-200 ${heroLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-gray-700 hover:text-blue-500 font-medium pb-1 transition-all duration-300 ${
                  activeSection === 'home' 
                    ? 'border-b-2 border-blue-500 text-blue-500' 
                    : 'border-b-2 border-transparent'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('why-prevacare')}
                className={`text-gray-700 hover:text-blue-500 font-medium pb-1 transition-all duration-300 ${
                  activeSection === 'why-prevacare' 
                    ? 'border-b-2 border-blue-500 text-blue-500' 
                    : 'border-b-2 border-transparent'
                }`}
              >
                Why PrevaCare
              </button>
              <button 
                onClick={() => scrollToSection('proactive-model')}
                className={`text-gray-700 hover:text-blue-500 font-medium pb-1 transition-all duration-300 ${
                  activeSection === 'proactive-model' 
                    ? 'border-b-2 border-blue-500 text-blue-500' 
                    : 'border-b-2 border-transparent'
                }`}
              >
                Our Model
              </button>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === 'home' 
                      ? 'bg-blue-50 text-blue-500 font-medium' 
                      : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('why-prevacare')}
                  className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === 'why-prevacare' 
                      ? 'bg-blue-50 text-blue-500 font-medium' 
                      : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
                  }`}
                >
                  Why PrevaCare
                </button>
                <button 
                  onClick={() => scrollToSection('proactive-model')}
                  className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === 'proactive-model' 
                      ? 'bg-blue-50 text-blue-500 font-medium' 
                      : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
                  }`}
                >
                  Our Model
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-20 left-10 w-64 h-64 border border-white rounded-full transition-all duration-1000 ${heroLoaded ? 'scale-100 opacity-10' : 'scale-0 opacity-0'}`}></div>
          <div className={`absolute bottom-20 right-10 w-48 h-48 border border-white rounded-full transition-all duration-1000 delay-300 ${heroLoaded ? 'scale-100 opacity-10' : 'scale-0 opacity-0'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full opacity-30 transition-all duration-1000 delay-500 ${heroLoaded ? 'scale-100' : 'scale-0'}`}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-blue-400">Proactive Health</span> for a <br />
            <span className="text-emerald-400">Productive Workplace</span>
          </h1>
          <p className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            India's most complete preventive healthcare platform for corporates, employees & elders.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium text-lg flex items-center gap-2 hover:scale-105 transform">
              <Calendar size={20} />
              Schedule a Demo
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-lg flex items-center gap-2 hover:scale-105 transform"
            >
              <Phone size={20} />
              Request a Call Back
            </button>
          </div>
        </div>
      </section>

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
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">Corporate Pain Points We Solve</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Rising Absenteeism & Burnout",
                    desc: "Employee health issues leading to decreased productivity and increased operational costs",
                    color: "red",
                    delay: "0"
                  },
                  {
                    icon: BarChart3,
                    title: "No ROI from Current Wellness Spends",
                    desc: "Traditional wellness programs lack measurable outcomes and employee engagement",
                    color: "orange",
                    delay: "200"
                  },
                  {
                    icon: Building2,
                    title: "Manual Compliance & Scattered Vendors",
                    desc: "Complex vendor management with no centralized dashboard or unified reporting system",
                    color: "yellow",
                    delay: "400"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 transform hover:scale-105 ${
                      isVisible['why-prevacare'] 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${parseInt(item.delay) + 600}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`bg-${item.color}-50 p-3 rounded-lg`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">How PrevaCare Solves This</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Doctor & Diagnostics Plans",
                    desc: "Comprehensive healthcare coverage with vetted medical professionals and diagnostic centers",
                    color: "blue",
                    delay: "0"
                  },
                  {
                    icon: LineChart,
                    title: "Health Dashboards & Analytics",
                    desc: "Real-time insights and data visualization for informed decision-making and ROI tracking",
                    color: "emerald",
                    delay: "200"
                  },
                  {
                    icon: FileText,
                    title: "Auto-generated Compliance Certificates",
                    desc: "Automated compliance management with instant certificate generation and audit trails",
                    color: "purple",
                    delay: "400"
                  },
                  {
                    icon: Target,
                    title: "Engagement Tracking",
                    desc: "Monitor employee participation and measure program effectiveness with detailed analytics",
                    color: "indigo",
                    delay: "600"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 border-l-4 border-${item.color}-500 transform hover:scale-105 ${
                      isVisible['why-prevacare'] 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${parseInt(item.delay) + 800}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`bg-${item.color}-50 p-3 rounded-lg`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={`text-center lg:text-left transition-all duration-700 delay-1000 ${
                isVisible['why-prevacare'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 hover:scale-105 transform">
                  Talk to a Corporate Wellness Expert
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="relative mb-16">
              <div className="hidden lg:block">
                <div className="flex justify-center items-start mb-20 relative">
                  <div className="flex items-center space-x-16">
                    <div className={`relative transition-all duration-500 ${modelAnimationStep >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                      <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-500 relative">
                        <Activity className="w-12 h-12 text-blue-500" />
                        <span className="absolute -top-3 -left-3 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                      </div>
                      <div className="text-center mt-4 max-w-32">
                        <h3 className="text-md font-semibold text-gray-800 mb-2">Lab Check</h3>
                        <p className="text-sm text-gray-600">Comprehensive health screenings</p>
                      </div>
                    </div>

                    <div className={`w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-20 transition-all duration-500 delay-300 ${modelAnimationStep >= 1 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

                    <div className={`relative transition-all duration-500 delay-500 ${modelAnimationStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                      <div className="bg-emerald-100 w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-emerald-500 relative">
                        <Phone className="w-12 h-12 text-emerald-500" />
                        <span className="absolute -top-3 -left-3 bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                      </div>
                      <div className="text-center mt-4 max-w-32">
                        <h3 className="text-md font-semibold text-gray-800 mb-2">App Integration</h3>
                        <p className="text-sm text-gray-600">Seamless data integration</p>
                      </div>
                    </div>

                    <div className={`w-16 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full mb-20 transition-all duration-700 delay-700 ${modelAnimationStep >= 3 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

                    <div className={`relative transition-all duration-700 delay-1000 ${modelAnimationStep >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                      <div className="bg-purple-100 w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-purple-500 relative">
                        <BarChart3 className="w-12 h-12 text-purple-500" />
                        <span className="absolute -top-3 -left-3 bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                      </div>
                      <div className="text-center mt-4 max-w-32">
                        <h3 className="text-md font-semibold text-gray-800 mb-2">Health Data</h3>
                        <p className="text-sm text-gray-600">Real-time tracking</p>
                      </div>
                    </div>
                  </div>

                  <svg className={`absolute right-8 top-[30px] transition-all duration-1000 delay-1500 ${modelAnimationStep >= 5 ? 'opacity-100' : 'opacity-0'}`} width="150" height="450" viewBox="0 0 150 450" fill="none">
                    <path 
                        d="M25 25 Q135 25 135 160 L135 160 Q135 295 25 295 L5 295" 
                        stroke="url(#gradient3to4)" 
                        strokeWidth="4" 
                        fill="none"
                        strokeDasharray="500"
                        strokeDashoffset={modelAnimationStep >= 5 ? "0" : "500"}
                        style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
                    /> 
                    <defs>
                        <linearGradient id="gradient3to4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                    </defs>
                  </svg>
                  <div className={`absolute top-[323px] right-[175px] w-[130px] h-1 bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-700 delay-2300 ${modelAnimationStep >= 6 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
                </div>

                <div className="flex justify-center items-center space-x-16">
                  <div className={`relative transition-all duration-700 delay-2500 ${modelAnimationStep >= 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                    <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-red-500 relative ml-5">
                      <Zap className="w-12 h-12 text-red-500" />
                      <span className="absolute -top-3 -left-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                    </div>
                    <div className="text-center mt-4 max-w-32">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Action</h3>
                      <p className="text-sm text-gray-600">Personalized recommendations</p>
                    </div>
                  </div>
                  
                  <div className={`w-16 h-1 bg-gradient-to-l from-orange-500 to-red-500 rounded-full mb-20 transition-all duration-700 delay-2300 ${modelAnimationStep >= 7 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

                  <div className={`relative transition-all duration-700 delay-2100 ${modelAnimationStep >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                    <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-orange-500 relative ml-5">
                      <Brain className="w-12 h-12 text-orange-500" />
                      <span className="absolute -top-3 -left-3 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                    </div>
                    <div className="text-center mt-4 max-w-32">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Analysis</h3>
                      <p className="text-sm text-gray-600">Intelligent insights</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden">
                <div className="relative">
                  {[
                    { icon: Activity, title: "Lab Check", desc: "Comprehensive health screenings", color: "blue", number: "1" },
                    { icon: Phone, title: "App Integration", desc: "Seamless data integration", color: "emerald", number: "2" },
                    { icon: BarChart3, title: "Health Data", desc: "Real-time tracking", color: "purple", number: "3" },
                    { icon: Brain, title: "AI Analysis", desc: "Intelligent insights", color: "orange", number: "4" },
                    { icon: Zap, title: "Action", desc: "Personalized recommendations", color: "red", number: "5" }
                  ].map((step, index) => (
                    <div key={index} className="relative flex items-center mb-8 last:mb-0">
                      {index < 4 && (
                        <div className={`absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-${step.color}-500 to-gray-300`}></div>
                      )}
                      
                      <div className="flex items-center bg-white rounded-lg shadow-md p-4 w-full hover:shadow-lg transition-shadow">
                        <div className={`bg-${step.color}-100 w-20 h-20 rounded-full flex items-center justify-center mr-4 shadow-lg border-4 border-${step.color}-500 relative flex-shrink-0`}>
                          <step.icon className={`w-10 h-10 text-${step.color}-500`} />
                          <span className={`absolute -top-2 -left-2 bg-${step.color}-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold`}>
                            {step.number}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                          <p className="text-sm text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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