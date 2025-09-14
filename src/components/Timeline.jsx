import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    year: "2017 – Present",
    title: "Lead Software Engineer | Tech Lead",
    company: "NCS Pte Ltd, Singapore",
    duration: "Dec 2017 – Present",
    highlights: [
      "Led strategic Tire Retreading product development for Bridgestone with 4 squads",
      "Architected cloud-native solutions leveraging Azure App Services, AI Search & SQL DB",
      "Mentored developers, resolved technical blockers, conducted code reviews",
      "Implemented CI/CD pipelines integrating unit tests, SonarCloud analysis, automation",
    ],
    tech: [".NET 8", "ASP.NET Core", "Azure Services", "Angular 18", "MAUI", "Azure DevOps"],
  },
  {
    id: 2,
    year: "2016 – 2017",
    title: "Senior Software Engineer",
    company: "Medisys Innovation, Singapore",
    duration: "Sep 2016 – Nov 2017",
    highlights: [
      "Delivered full-stack HealthTech applications including EMR and CMS systems",
      "Integrated national healthcare systems (NEHR, NIR, NHIS, CDLENS, CIDC)",
      "Designed Angular UI components with Material & Kendo UI",
    ],
    tech: ["C#.NET", "WPF", "ASP.NET Web API", "Angular 2", "SQL Server"],
  },
  {
    id: 3,
    year: "2014 – 2016",
    title: "Software Consultant",
    company: "Capgemini India Pvt Ltd, Chennai",
    duration: "Jan 2014 – Jul 2016",
    highlights: [
      "Led backend development for financial modules integrating with Credit Bureau & Loan Processing",
      "Built SSRS reports and ETL with SSIS",
      "Enhanced frontend with AngularJS and WCF REST services",
    ],
    tech: ["ASP.NET MVC", "C#.NET", "WCF", "Entity Framework", "AngularJS", "SQL Server"],
  },
  {
    id: 4,
    year: "2010 – 2013",
    title: "Senior Software Engineer",
    company: "ILink MultiTech Solutions, Chennai",
    duration: "Nov 2010 – Dec 2013",
    highlights: [
      "Developed WPF applications with Prism and MVVM architecture",
      "Worked on client & pet modules, booking appointments, and settings",
      "Designed custom UI controls and templates",
    ],
    tech: ["Prism", "MVVM", "WPF", "C#.NET", "SQL Server"],
  },
];

const Timeline = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="relative flex">
          {/* Timeline Bar */}
          <div className="w-1 bg-gray-700 absolute left-4 top-0 bottom-0"></div>

          <div className="ml-12 flex flex-col space-y-10 w-full">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Dot */}
                <div
                  className={`w-6 h-6 rounded-full border-2 absolute -left-12 top-2 cursor-pointer transition-all ${
                    activeId === exp.id
                      ? "bg-blue-600 border-blue-400"
                      : "bg-gray-800 border-gray-600 hover:border-blue-400"
                  }`}
                  onClick={() => setActiveId(exp.id)}
                ></div>

                {/* Card */}
                <div
                  className={`p-6 rounded-xl shadow-lg border transition-all duration-500 ${
                    activeId === exp.id
                      ? "bg-gray-800/90 border-blue-600"
                      : "bg-gray-800/50 border-gray-700 opacity-70"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-50">{exp.title}</h3>
                  <p className="text-lg text-blue-300 font-semibold">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.duration}</p>

                  {activeId === exp.id && (
                    <>
                      <ul className="list-disc list-inside space-y-2 text-gray-200 mb-4">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx}>{h}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-700/50 px-3 py-1 rounded text-sm text-blue-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
