import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'TechSync',
      category: 'Platform Development',
      description: 'A centralized platform designed to uplift the Ethiopian developer community with real-time messaging, collaboration tools, and AI-powered insights.',
      tech: ['Django', 'WebSockets', 'HTMX', 'Telegram Bot', 'Gemini AI'],
      features: [
        'Real-time peer-to-peer and group messaging',
        'Community project visibility and collaboration',
        'Tech event aggregation and localization',
        'AI-powered community insights'
      ],
      link: 'https://github.com/yosami14/Tech_Sync'
    },
    {
      title: 'SmartFix',
      category: 'Business Management',
      description: 'Integrated mobile repair shop management system streamlining operations from appointment scheduling to device tracking.',
      tech: ['Django', 'Python', 'SQLite', 'Telegram API'],
      features: [
        'Appointment scheduling system',
        'Automated customer notifications',
        'Device repair tracking',
        'Admin management dashboard'
      ],
      link: 'https://github.com/yosami14/Mobile-Repair-Shop'
    },
    {
      title: 'EarthFlow',
      category: 'Data Visualization',
      description: 'Global real-time weather dashboard with clean visualizations and comprehensive forecast information.',
      tech: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      features: [
        'Real-time weather data visualization',
        'Multi-day forecast display',
        'Clean, intuitive interface',
        'Dynamic data updates'
      ],
      link: 'https://github.com/yosami14/Earth-Flow'
    },
    {
      title: 'CineGuide',
      category: 'Entertainment Platform',
      description: 'Interactive movie and TV show discovery platform with extensive browsing and search capabilities.',
      tech: ['JavaScript', 'Bootstrap', 'jQuery', 'TMDB API'],
      features: [
        'Browse trending content',
        'Advanced search functionality',
        'Category-based filtering',
        'Responsive design'
      ],
      link: 'https://github.com/yosami14/CineGuide'
    },
    {
      title: 'Dynamic Admin Panel',
      category: 'Content Management',
      description: 'Versatile admin dashboard enabling dynamic content updates built for both Django and Laravel frameworks.',
      tech: ['Django/Laravel', 'Python/PHP'],
      features: [
        'Dynamic content management',
        'Image and text updates',
        'User-friendly interface',
        'Real-time preview'
      ]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              A selection of projects showcasing technical expertise and problem-solving capabilities
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl card-3d"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all"
                      >
                        View Project
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                        Key Features
                      </div>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
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
