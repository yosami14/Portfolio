export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        'Django', 'Python', 'JavaScript (ES6+)', 'PHP', 'Laravel',
        'Java', 'C++', 'HTML5', 'CSS3', 'jQuery'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Bootstrap', 'HTMX', 'Django Channels', 'WebSockets',
        'Telegram Bot API', 'Gemini AI API', 'RESTful APIs'
      ]
    },
    {
      title: 'Databases',
      skills: [
        'Microsoft SQL Server', 'SQLite', 'Database Design', 'SQL Optimization'
      ]
    },
    {
      title: 'Core Competencies',
      skills: [
        'Full-stack Development', 'System Architecture', 'API Integration',
        'Responsive Design', 'Version Control', 'Problem Solving'
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 px-4 py-2 bg-white rounded-full shadow-lg">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl card-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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
