import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Video Editor | Content Creator | Project Team Leader | Data',
      company: 'American College of Technology',
      type: 'Full-time',
      period: 'Oct 2024 - Present',
      location: 'Addis Ababa, Ethiopia',
      description: 'Video Editor: Edited online course content for organizations like Mastercard, Mesrat, and MINT using Adobe Premiere Pro & Audition. Ensured high-quality visuals, audio, and branding. Project Team Leader (Bekat): Led a team connecting unemployed individuals with job opportunities, managing outreach, reporting, and communication with government and partners. Data Cleaner (SEED): Cleaned and organized large datasets to improve accuracy, consistency, and data-driven decision-making.',
      skills: ['Adobe Premiere Pro', 'Adobe Audition', 'Video Editing', 'Project Management', 'Data Cleaning']
    },
    {
      title: 'Full Stack Developer',
      company: 'Dallol Dynamics',
      type: 'Internship',
      period: 'Jul 2024 - Sep 2024',
      location: 'Addis Ababa, Ethiopia · Hybrid',
      description: 'Worked on web development with a focus on frontend technologies using HTML, CSS, JavaScript, Django, and Python. Contributed to UI design, backend support, and database management, gaining real-world experience and strengthening problem-solving, collaboration, and full-stack development skills.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Django', 'Python', 'Full Stack Development']
    },
    {
      title: 'Data Reporting & Cleaning | Front-End Intern',
      company: 'GFGC',
      type: 'Internship',
      period: 'Oct 2023 - Jan 2024',
      location: 'Addis Ababa, Ethiopia',
      description: 'Assisted with front-end development and backend data management, ensuring data accuracy and integrity. Prepared reports, managed large datasets, and collaborated with the team to enhance internal systems, strengthening analytical, organizational, and communication skills.',
      skills: ['Front-End Development', 'Data Management', 'Data Reporting', 'Data Cleaning']
    },
    {
      title: 'Field Data Collection',
      company: 'Komari Arada',
      type: 'Contract',
      period: 'Nov 2023 - Dec 2023',
      location: 'Addis Ababa, Ethiopia',
      description: 'Collected and organized data from organizations and customers through field surveys, leveraging strong communication skills to engage participants and ensure accurate, reliable information for company research and analysis.',
      skills: ['Data Collection', 'Field Research', 'Communication']
    },
    {
      title: 'Frontend Developer Intern',
      company: 'LetsGrowMore',
      type: 'Remote Internship',
      period: 'Nov 2023 - Dec 2023',
      location: 'Remote',
      description: 'Built responsive web interfaces with HTML, CSS, and JavaScript in a remote team, demonstrating adaptability, strong communication, and timely task delivery.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Remote Collaboration']
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 px-4 py-2 bg-blue-50 rounded-full">Experience</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building expertise through diverse roles and real-world projects
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl card-3d"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Briefcase size={20} className="text-blue-600" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-2">
                        <span className="font-medium">{exp.company}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span className="text-sm">{exp.type}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <span>{exp.period}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
