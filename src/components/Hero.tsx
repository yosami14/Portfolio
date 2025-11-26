import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full mb-8 shadow-lg shadow-blue-100/50">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue-900">Available for opportunities</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1] animate-slide-up">
              Samuel<br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite' }}>
                Yohannes
              </span>
            </h1>

            <div className="space-y-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
                Full-Stack Developer
              </p>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Specializing in Django & Python. Building scalable, modern web applications that solve real-world problems and empower communities.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-medium hover:border-gray-900 transition-all hover:scale-105 hover:shadow-xl"
            >
              Get in touch
            </button>
          </div>

          <div className="flex items-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/yosami14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-gray-900 hover:shadow-xl transition-all hover:scale-110"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-yohannes-90570126a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-gray-900 hover:shadow-xl transition-all hover:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:samuelyohannesa@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-gray-900 hover:shadow-xl transition-all hover:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative">
                  <div className="w-72 md:w-80 lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 group-hover:rotate-2">
                    <img
                      src="/src/assets/Untitled design (3).png"
                      alt="Samuel Yohannes"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-40 animate-float"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-blue-600 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
