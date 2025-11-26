import { Mail, Linkedin, Github, ArrowUpRight, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="animate-slide-in">
              <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 px-4 py-2 bg-white rounded-full shadow-lg">Contact</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Let's work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">together</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Open to freelance work, collaborations, and full-time opportunities. Let's build something exceptional.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:samuelyohannesa@gmail.com"
                  className="group flex items-center gap-4 text-gray-900 hover:text-blue-600 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="font-medium">samuelyohannesa@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+251923926681"
                  className="group flex items-center gap-4 text-gray-900 hover:text-blue-600 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <div className="font-medium">+251 923 926 681</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-900">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-medium">Addis Ababa, Ethiopia</div>
                  </div>
                </div>

              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/samuel-yohannes-90570126a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all"
                >
                  <Linkedin size={18} />
                  <span className="font-medium text-sm">LinkedIn</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://github.com/yosami14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all"
                >
                  <Github size={18} />
                  <span className="font-medium text-sm">GitHub</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-2xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a message</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors text-gray-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors resize-none text-gray-900"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
