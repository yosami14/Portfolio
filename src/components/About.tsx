export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-slide-in">
              <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 px-4 py-2 bg-blue-50 rounded-full">About Me</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Crafting digital experiences with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> precision</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg">
                I'm a dedicated full-stack developer and content creator based in Addis Ababa, Ethiopia. I graduated with a Bachelor of Computer Science from the American College of Technology, where I received the Best Capstone Project Award for outstanding work.
              </p>
              <p className="text-lg">
                With expertise in Django, Python, JavaScript, and modern web technologies, I've worked across multiple roles - from full-stack development and video editing to project leadership and data management. I specialize in building scalable web applications while also creating high-quality video content for organizations like Mastercard and MINT.
              </p>
              <p className="text-lg">
                I bring strong problem-solving abilities, analytical thinking, and attention to detail to every project. Whether it's developing responsive interfaces, managing complex datasets, or leading teams to connect job seekers with opportunities, I'm passionate about creating solutions that make a real impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-2xl hover:scale-105 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">2+</div>
                <div className="text-sm font-semibold text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="group relative p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">6+</div>
                <div className="text-sm font-semibold text-gray-600">Projects Completed</div>
              </div>
            </div>
            <div className="group relative p-8 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100 hover:border-pink-300 transition-all hover:shadow-2xl hover:scale-105 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-br from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">4</div>
                <div className="text-sm font-semibold text-gray-600">Professional Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
