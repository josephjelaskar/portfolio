import React from 'react';

import professionalPhoto from './assets/professional_look_black.png';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-400">Joseph Jelaskar Seeriack</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <button className="md:hidden text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-100 mb-6 leading-tight">
                Lead Software Engineer & <span className="text-blue-400">Cloud-Native Solutions Architect</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Building scalable, high-performance applications with 15+ years of expertise in .NET, Azure, and Angular technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#experience" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  View My Work
                </a>
                <a href="#contact" className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src={professionalPhoto}
                    alt="Joseph Jelaskar"
                    className="w-full h-full object-cover opacity-90"
                    style={{ 
                      objectPosition: '40% 40%'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-blue-900/20"></div>
                </div>
                <div className="relative h-full flex items-end justify-start p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Technical Leadership</h3>
                    <p className="text-blue-200">15+ Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a results-driven technical leader with over 15 years of experience architecting and delivering robust, cloud-native solutions across Web, Mobile, and Windows platforms. My passion lies in transforming complex business requirements into scalable, high-performing applications using cutting-edge technologies like .NET 8, Azure, and Angular 18.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I thrive in leadership roles, guiding development squads to success by fostering collaboration, enforcing code quality, and championing Agile and DevOps best practices. My expertise spans the full stack, from database design and optimization to frontend user experience and cloud infrastructure.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I have successfully delivered solutions for global clients in diverse domains including Manufacturing (Bridgestone), Healthcare, and Financial Services, always focusing on innovation, efficiency, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Cloud & DevOps
              </h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300   px-3 py-1 rounded-full text-sm">Azure App Services</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Function Apps</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">API Management</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Key Vault</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Azure AI Search</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Data Factory</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Application Insights</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Log Analytics</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Monitoring</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Storage</span>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Backend Technologies
              </h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">.NET 8</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">ASP.NET Core</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">C#</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Web API</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Entity Framework</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">WCF</span>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Frontend & Mobile
              </h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Angular 18</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">MAUI</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Xamarin</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">WPF</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Bootstrap</span>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z M7 8h10 M7 12h10 M7 16h10" />
                </svg>
                Databases
              </h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Azure SQL</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">SQL Server</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">SSRS</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">SSIS</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">SQLite</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Redis Cache</span>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Architecture & Methodologies
              </h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Microservices</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">MVVM</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">MVC</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Prism</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Agile/Scrum</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">DevOps</span>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Domains
              </h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Healthcare</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Financial Services</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Publishing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="space-y-12">
            {/* NCS Pte Ltd */}
            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-50">Lead Software Engineer | Tech Lead</h3>
                  <p className="text-lg text-blue-300 font-semibold">NCS Pte Ltd, Singapore</p>
                  <p className="text-gray-400">Dec 2017 – Present</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Current Role</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-100">
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Led the strategic Tire Retreading product development for Bridgestone with 4 squads each consisting of about 5 team members to deliver high-performing Web, Mobile and Reporting solutions for EU and Americas</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Architected and delivered high-performance cloud-native solutions leveraging Azure App Services, AI Search, and SQL DB</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Mentored developers, resolved technical blockers, conducted code reviews, and improved overall code quality</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Involved in database analysis, design and performance optimization of applications, and optimizing database & report performance</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Implemented end-to-end CI/CD pipelines integrating unit tests, functional tests, SonarCloud analysis, and visual test automation</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Facilitated Agile ceremonies and scaled Scrum adoption across squads ensuring velocity consistency and sprint health</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Acted as interim Scrum Master and represented teams in Technical Design Council discussions</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Integrated Azure AI Search to enable fuzzy/full-text/faceted search experiences over large datasets</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Delivered sprint metrics (burndown, velocity, bug flow) and quality KPIs (automation coverage, release readiness)</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold text-blue-400 mb-2">Key Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">.NET 8</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">ASP.NET Core</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">Azure Services</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">Angular 18</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">MAUI</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">Azure DevOps</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">SonarCloud</span>
                </div>
              </div>
            </div>

            {/* Previous Experience */}
            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-50">Senior Software Engineer</h3>
                  <p className="text-lg text-blue-300 font-semibold">Medisys Innovation, Singapore</p>
                  <p className="text-gray-400">Sep 2016 – Nov 2017</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-100">
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Contributed to all phases of the software development lifecycle, from planning through to deployment and post-release support</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Actively engaged in requirement gathering and analysis sessions, preparing design document, technical solution documents, database design</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Delivered full-stack HealthTech applications including EMR and CMS systems (GPConnect)</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Integrated national healthcare systems: NEHR, NIR, NHIS, CDLENS, CIDC</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Designed interactive Angular UI components with Material & Kendo UI</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Followed MVVM architecture for clean separation in WPF and MVC-based web applications</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">C#.NET</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">WPF</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">ASP.NET Web API</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">Angular 2</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">SQL Server</span>
                </div>
              </div>
            </div>

            {/* Capgemini Experience */}
            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-50">Software Consultant</h3>
                  <p className="text-lg text-blue-300 font-semibold">Capgemini India Pvt Ltd, Chennai</p>
                  <p className="text-gray-400">Jan 2014 – July 2016</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-100">
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Actively involved all phases of the software development lifecycle, from planning through to deployment and post-release support</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Led backend development for financial modules integrating with Credit Bureau, Loan Processing, and Cadencie Handoff</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Collaborated with business analysts to gather requirements, deliver design documents, and ensure stakeholder alignment</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Built SSRS reports and implemented ETL processing using SSIS</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Employed AngularJS for client-side enhancements and WCF REST services for backend integrations</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Participated in Agile-Scrum based delivery cycles</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">ASP.NET MVC</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">C#.NET</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">WCF</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">Entity Framework</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">AngularJS</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">jQuery</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">Bootstrap CSS</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">SQL Server</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">SSRS</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">SSIS</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">TFS</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">Jenkins</span>
                </div>
              </div>
            </div>

            {/* ILink MultiTech Solutions Experience */}
            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-50">Senior Software Engineer</h3>
                  <p className="text-lg text-blue-300 font-semibold">ILink MultiTech Solutions, Chennai</p>
                  <p className="text-gray-400">Nov 2010 – Dec 2013</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-100">
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Actively participated in analyzing business requirements, preparing design and database documents</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Developed application logic leveraging advanced C#, XAML, and WPF concepts</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Applied Prism's design principles and MVVM architecture for modular, maintainable solutions</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Worked extensively on modules such as Client & Pet, booking appointments, visit, and settings</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Utilized LINQ and Entity Framework for efficient data operations</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Designed interactive, user-friendly custom controls and UI templates, including both built-in and Telerik controls</span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Involved in test case preparation and unit testing to ensure quality deliverables</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">Prism</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">MVVM</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">WPF</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">C#.NET</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">SQL Server</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">SSRS</span>
                  <span className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300">TFS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Certifications & Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg text-center border border-gray-700">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Professional Scrum Developer I (PSD I)</h3>
              <p className="text-gray-300">Certified in Scrum development practices and Agile methodologies.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg text-center border border-gray-700">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Microsoft Certified Professional Developer (MCPD)</h3>
              <p className="text-gray-300">Certified expertise in Microsoft development technologies and practices.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg text-center border border-gray-700">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Microsoft Azure AI Fundamentals</h3>
              <p className="text-gray-300">Earned trophy on Microsoft Learn for Azure AI Fundamentals: AI Overview.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">I'm always open to discussing new opportunities, innovative projects, or sharing knowledge.</p>
          <div className="bg-gray-800/50 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-200 placeholder-gray-400" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-200 placeholder-gray-400" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-200 placeholder-gray-400" />
              <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-200 placeholder-gray-400"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-300 mb-4">You can also reach me directly:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">josephjelasker@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="text-gray-300">linkedin.com/in/josephjelaskar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Joseph Jelaskar Seeriack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
