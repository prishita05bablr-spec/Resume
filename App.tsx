import React, { useEffect } from 'react';
import { 
  Menu, 
  X, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ArrowRight,
  ChevronDown,
  ChevronRight,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Database,
  TrendingUp
} from 'lucide-react';
import { RESUME_DATA, EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Scroll Observer for "reveal-on-scroll" animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-900 text-white min-h-screen selection:bg-brand-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-dark-900/80 backdrop-blur-md">
        <div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
          <a href="#" className="text-xl font-medium tracking-tight font-serif flex items-center gap-2">
            <span className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-xs font-bold font-sans">PG</span>
            {RESUME_DATA.name}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-white text-dark-900 rounded-full text-xs font-bold tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-dark-900 border-b border-neutral-800 p-6 flex flex-col gap-6 md:hidden animate-fade-in">
            <a href="#about" className="text-lg font-serif text-white" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#experience" className="text-lg font-serif text-white" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
            <a href="#education" className="text-lg font-serif text-white" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
            <a href="#contact" className="text-lg font-serif text-brand-400" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[750px] overflow-hidden flex items-center justify-center">
        {/* Background - Abstract Data Visual */}
        <div className="absolute inset-0 w-full h-full animate-zoom-slow">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
            alt="Data Analytics Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/40 to-dark-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-transparent to-dark-900"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-medium">Open for Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-[0.9] tracking-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Shaping Future <br /> <span className="text-neutral-500 italic font-light">Leaders.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {RESUME_DATA.summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-dark-900 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#experience" 
              className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-pulse-slow">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
          </div>
        </div>
      </header>

      {/* Experience Section - Split Layout */}
      <section id="experience" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
            
            {/* Sticky Visual Anchor */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl reveal-on-scroll">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" 
                    alt="Analytics Dashboard" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                      <h3 className="text-2xl font-serif text-white italic mb-2">Work History</h3>
                      <p className="text-neutral-300 text-xs font-light leading-relaxed mb-4">
                        A track record of analyzing data to drive strategic growth and digital marketing initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable List */}
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-2 border-b border-white/10 pb-8 reveal-on-scroll">
                  <span className="text-brand-400 font-bold text-[10px] tracking-[0.2em] uppercase">Professional Journey</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-white">Experience</h2>
                </div>

                {EXPERIENCE_DATA.map((item, index) => (
                  <div key={item.id} className={`reveal-on-scroll delay-${(index + 1) * 100}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-400 border border-brand-500/20">
                        <Briefcase size={14} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium tracking-tight text-white">{item.company}</h3>
                        <p className="text-neutral-400 text-sm">{item.location}</p>
                      </div>
                    </div>
                    
                    <div className="group relative p-6 rounded-2xl glass-panel glass-card-hover cursor-default">
                      <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                        <span className="text-lg font-serif italic text-white">{item.role}</span>
                        <span className="text-xs font-mono text-brand-400 bg-brand-900/30 px-2 py-1 rounded">{item.period}</span>
                      </div>
                      <ul className="space-y-3">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex gap-3 text-sm text-neutral-400 font-light leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Grid */}
      <section id="education" className="py-24 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
            <div>
              <span className="text-brand-400 text-xs font-bold tracking-widest uppercase mb-2 block">Academic Background</span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Education</h2>
            </div>
            <div className="hidden md:block h-px flex-1 bg-white/10 ml-12 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={edu.id} className={`group cursor-pointer reveal-on-scroll delay-${(index + 1) * 100}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-neutral-800 relative">
                  <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay z-10"></div>
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1523050854058-8df90110c9f1' : index === 1 ? '1606761568499-6d2451b23c66' : '1509062522246-3755977927d7'}?q=80&w=1000&auto=format&fit=crop`} 
                    alt={edu.institution} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                     <div className="p-2 bg-dark-900/50 backdrop-blur rounded-lg">
                        <GraduationCap className="w-5 h-5 text-brand-400" />
                     </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl mb-1 font-serif italic text-white">{edu.institution}</h3>
                    <p className="text-neutral-400 text-sm">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-medium text-white">{edu.year}</span>
                    <span className="block text-xs text-neutral-500">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center reveal-on-scroll">
            <span className="text-brand-400 text-xs font-bold tracking-widest uppercase mb-2 block">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Skills & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
             {SKILLS_DATA.map((skillGroup, index) => (
                <div key={index} className="glass-panel p-8 rounded-2xl reveal-on-scroll">
                   <h3 className="text-xl font-serif italic mb-6 flex items-center gap-3">
                      {index === 0 ? <Database size={20} className="text-brand-400"/> : <TrendingUp size={20} className="text-brand-400"/>}
                      {skillGroup.category}
                   </h3>
                   <div className="flex flex-wrap gap-3">
                      {skillGroup.skills.map(skill => (
                        <span key={skill} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-neutral-300 transition-colors cursor-default border border-white/5">
                          {skill}
                        </span>
                      ))}
                   </div>
                </div>
             ))}
          </div>
          
          {/* Certification Card */}
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-900/40 to-dark-800 p-8 md:p-12 border border-white/10">
                 <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                       <div className="flex items-center gap-2 mb-2 text-brand-400">
                          <Download size={16} />
                          <span className="text-xs font-bold uppercase tracking-wider">Certification</span>
                       </div>
                       <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{cert.title}</h3>
                       <p className="text-neutral-400 mb-1">{cert.issuer}</p>
                       <p className="text-sm text-neutral-500 max-w-lg">{cert.details}</p>
                    </div>
                    <div className="shrink-0">
                       <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-8 h-8 opacity-80" alt="LinkedIn" />
                       </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-dark-900 border-t border-white/5 pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
             <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-white text-dark-900 rounded-full flex items-center justify-center text-xs font-bold font-sans">PG</span>
                <span className="text-xl text-white tracking-tight font-serif">Prishita Girdhar</span>
             </div>
             <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                Business Analytics professional passionate about data-driven decision making and market strategy.
             </p>
             <div className="flex gap-4 text-neutral-400">
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-white transition-colors"><Mail size={20} /></a>
             </div>
          </div>

          <div>
             <h4 className="text-white font-medium mb-6 text-sm">Quick Links</h4>
             <ul className="space-y-3 text-xs text-neutral-500 font-light">
                <li><a href="#about" className="hover:text-brand-400 transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-brand-400 transition-colors">Experience</a></li>
                <li><a href="#education" className="hover:text-brand-400 transition-colors">Education</a></li>
                <li><a href="#skills" className="hover:text-brand-400 transition-colors">Skills</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-medium mb-6 text-sm">Contact Info</h4>
             <ul className="space-y-3 text-xs text-neutral-500 font-light">
                <li className="flex gap-2 items-center">
                   <MapPin size={14} className="shrink-0" />
                   {RESUME_DATA.contact.location}
                </li>
                <li className="flex gap-2 items-center">
                   <Phone size={14} className="shrink-0" />
                   {RESUME_DATA.contact.phone}
                </li>
                <li className="flex gap-2 items-center">
                   <Mail size={14} className="shrink-0" />
                   {RESUME_DATA.contact.email}
                </li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-medium mb-6 text-sm">Positions of Responsibility</h4>
             <div className="glass-panel p-4 rounded-xl">
                <h5 className="text-sm text-white mb-1">XIME SIP Committee</h5>
                <p className="text-[10px] text-neutral-400 mb-2">Data Analyst</p>
                <p className="text-[10px] text-neutral-500 leading-relaxed">
                  Oversaw data management for Summer Internship Program.
                </p>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
           <p>© {new Date().getFullYear()} Prishita Girdhar. All rights reserved.</p>
           <p>Designed with <span className="text-brand-400">♥</span> for Excellence</p>
        </div>
      </footer>
    </div>
  );
};

export default App;