import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Heart, 
  ExternalLink, 
  Mail, 
  Coffee, 
  FolderGit2, 
  GraduationCap, 
  Briefcase, 
  Send, 
  Stars, 
  Layers, 
  Cpu,
  CheckCircle2,
  Phone,
  FileCheck,
  Award
} from 'lucide-react';

// Custom SVG Icon untuk GitHub
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Custom SVG Icon untuk LinkedIn
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeSkillCategory, setActiveSkillCategory] = useState('qa');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, text: '' });

  // Data Keahlian sesuai CV
  const skillsData = {
    qa: [
      { name: 'Katalon Studio & Automation UI', level: 92 },
      { name: 'Manual & Black-Box Testing', level: 95 },
      { name: 'Postman (API Testing & Validation)', level: 88 },
      { name: 'Test Scenario & Case Documentation', level: 94 },
      { name: 'Defect Density & Bug Tracking', level: 90 },
      { name: 'STLC / SDLC & UAT Testing', level: 90 },
    ],
    dev: [
      { name: 'Laravel Framework (PHP)', level: 88 },
      { name: 'RESTful API Architecture', level: 90 },
      { name: 'MySQL (Relational / Multi-Tenant DB)', level: 86 },
      { name: 'React.js (Frontend Basics)', level: 75 },
      { name: 'HTML5, CSS3 & JavaScript', level: 85 },
      { name: 'Query Optimization & CRUD Logic', level: 82 },
    ],
    tools: [
      { name: 'Git & GitHub Version Control', level: 86 },
      { name: 'Laragon & XAMPP Environment', level: 92 },
      { name: 'Visual Studio Code', level: 95 },
      { name: 'Network Configuration (TKJ)', level: 85 },
    ]
  };

  // Proyek QA & Pengembangan Sistem sesuai CV
  const projects = [
    {
      id: 1,
      title: 'Automated Testing - Library System',
      category: 'testing',
      role: 'QA Engineer (Academic Project)',
      desc: 'Merancang Test Plan & WBS, mengotomasi 13 regression test suites menggunakan Katalon Studio di Chrome dengan 100% pass rate untuk autentikasi, CRUD, pencarian, dan transaksi.',
      tags: ['Katalon Studio', 'Automated UI', 'Regression Testing', 'Chrome Webdriver'],
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 2,
      title: 'Multi-Tenant API Engine (WIT.ID)',
      category: 'development',
      role: 'Backend Developer Intern',
      desc: 'Membangun core business logic dan RESTful API menggunakan Laravel (PHP) dalam arsitektur multi-tenant. Mengelola skema MySQL berisolasi tinggi dan optimasi query data.',
      tags: ['Laravel', 'REST API', 'MySQL Multi-Tenant', 'Postman'],
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 3,
      title: 'Functional Testing - Shoe Inventory',
      category: 'testing',
      role: 'QA Specialist (Academic Project)',
      desc: 'Menyusun skenario dan 20+ manual test cases mendalam (Preconditions, Steps, Test Data). Mengeksekusi manual black-box testing serta mendokumentasikan defect reproduction.',
      tags: ['Manual Testing', 'Black-Box', 'Test Cases', 'Bug Reporting'],
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 4,
      title: 'Government Personnel Information System',
      category: 'development',
      role: 'System Developer (Undergraduate Thesis)',
      desc: 'Menganalisis alur administrasi kepegawaian pemerintah, merancang arsitektur database relasional, mengembangkan modul inti berbasis Laravel, dan menyusun technical manual.',
      tags: ['Laravel', 'MySQL', 'System Analysis', 'UAT Documentation'],
      demoUrl: '#',
      repoUrl: '#'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus({ submitted: true, text: 'Terima kasih telah menghubungi! Pesanmu segera kubaca ya! 💖✨' });
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setFormStatus({ submitted: false, text: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#0d0a17] text-[#f3e8ff] font-sans selection:bg-[#ff4d8d] selection:text-white relative overflow-hidden pb-16">
      
      {/* Background Glow Lights */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-[40%] right-[-10%] w-[450px] h-[450px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0d0a17]/85 border-b border-[#2e204d]/60 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-gradient-to-tr from-[#ff4d8d] to-[#c084fc] text-white shadow-lg shadow-pink-500/25">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-purple-300">
              tiara.dev &lt;/&gt;
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-pink-200/80">
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
            <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
            <a href="#journey" className="hover:text-pink-400 transition">Journey</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </div>

          <a 
            href="#contact"
            className="px-4 py-2 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-[#ff4d8d] to-[#9333ea] text-white shadow-md shadow-pink-500/20 hover:scale-105 transition active:scale-95"
          >
            Hire Me 💌
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-10 space-y-24">

        {/* HERO SECTION */}
        <section id="about" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18122a] border border-pink-500/30 text-xs font-semibold text-pink-300 shadow-inner">
              <Stars className="w-4 h-4 text-pink-400 animate-spin" />
              Information Systems Graduate • Ready to Relocate / WFO in Bandung
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Hello! I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d8d] via-[#f43f5e] to-[#c084fc] drop-shadow-[0_4px_24px_rgba(255,77,141,0.35)]">
                Siti Tiara Nur Aziza
              </span> 🌸
            </h1>

            <p className="text-pink-100/75 text-base sm:text-lg max-w-xl leading-relaxed">
              Spesialis <span className="text-pink-300 font-semibold">Quality Assurance (Manual & Automated Testing)</span> serta 
              <span className="text-purple-300 font-semibold"> Backend Web Developer (Laravel)</span>. Berpengalaman dalam pengujian fungsionalitas, validasi REST API, dan perancangan database relasional MySQL.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#ff4d8d] to-[#9333ea] text-white font-bold text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition"
              >
                Lihat Pengujian & Proyek ✨
              </a>
              <a 
                href="https://www.linkedin.com/in/siti-tiara-nur-aziza-901294229/" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl bg-[#18122a] border border-[#2e204d] hover:border-pink-500/40 text-pink-200 font-semibold text-sm flex items-center gap-2 hover:-translate-y-0.5 transition"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Polaroid Frame */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative bg-[#1c1433] p-4 pb-6 rounded-3xl border-2 border-pink-500/30 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300">
              
              <div className="flex items-center justify-between pb-3 px-1 border-b border-pink-500/20 mb-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                </div>
                <span className="text-[10px] font-mono text-pink-300/80 tracking-wider">~/tiara-profile/qa-dev.png</span>
              </div>

              <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-b from-[#2e1d47] to-[#130b24] flex flex-col items-center justify-center relative border border-pink-500/20">
                <img 
                  src="public/tiara.jpeg"                  alt="Tiara Profile" 
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0d0a17]/90 backdrop-blur-md p-2.5 rounded-xl border border-pink-500/30 flex items-center justify-between text-xs">
                  <span className="text-pink-300 font-semibold flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> Ready to WFO Bandung
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                    Open to Work
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#ff4d8d] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-[#0d0a17] flex items-center gap-1 -rotate-6">
                <FileCheck className="w-3.5 h-3.5" /> 100% Katalon Pass Rate
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff4d8d]">Capabilities</span>
            <h2 className="text-3xl font-bold">Technical Skills & Expertise 🪄</h2>
            <p className="text-xs text-pink-200/60 max-w-md mx-auto">Kombinasi analisis pengujian perangkat lunak dan arsitektur backend yang kokoh.</p>
          </div>

          <div className="flex justify-center gap-2 sm:gap-4">
            {[
              { id: 'qa', label: 'QA & Testing Tools', icon: FileCheck },
              { id: 'dev', label: 'Programming & DB', icon: Cpu },
              { id: 'tools', label: 'Environment & SDLC', icon: Terminal },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkillCategory(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition ${
                    activeSkillCategory === tab.id
                      ? 'bg-gradient-to-r from-[#ff4d8d] to-[#9333ea] text-white shadow-lg shadow-pink-500/25'
                      : 'bg-[#18122a] text-pink-200/70 hover:bg-[#231a3d] border border-[#2e204d]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-4">
            {skillsData[activeSkillCategory].map((skill, index) => (
              <div 
                key={index}
                className="bg-[#18122a] p-4 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm text-pink-100 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-pink-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#0d0a17] h-2 rounded-full overflow-hidden p-0.5 border border-pink-500/20">
                  <div 
                    className="bg-gradient-to-r from-[#ff4d8d] to-[#c084fc] h-full rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff4d8d]">Showcase</span>
              <h2 className="text-3xl font-bold">Featured Projects & QA Works 🚀</h2>
            </div>

            <div className="flex bg-[#18122a] p-1.5 rounded-2xl border border-[#2e204d] text-xs">
              {[
                { id: 'all', label: 'All' },
                { id: 'testing', label: 'QA & Testing' },
                { id: 'development', label: 'Web Development' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-xl capitalize font-semibold transition ${
                    activeTab === tab.id
                      ? 'bg-[#ff4d8d] text-white shadow-md'
                      : 'text-pink-200/60 hover:text-pink-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#18122a] rounded-3xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 uppercase">
                      {project.role}
                    </span>
                    <FolderGit2 className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-pink-100/70 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[11px] bg-[#0d0a17] text-purple-200/80 px-2.5 py-1 rounded-lg border border-[#2e204d]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-pink-500/10">
                    <button 
                      className="flex-1 py-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Project Detail
                    </button>
                    <a 
                      href="https://github.com" 
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-[#0d0a17] hover:bg-[#231a3d] text-pink-200 border border-[#2e204d] transition"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY & EXPERIENCE SECTION */}
        <section id="journey" className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff4d8d]">Career Path</span>
            <h2 className="text-3xl font-bold">Experience & Education 📖</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Experience */}
            <div className="bg-[#18122a] p-6 rounded-3xl border border-pink-500/20 space-y-4">
              <div className="flex items-center gap-3 text-pink-300">
                <Briefcase className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Work Experience</h3>
              </div>
              <div className="space-y-5 border-l-2 border-pink-500/30 pl-4 ml-1">
                <div>
                  <span className="text-xs font-mono text-pink-400">2026</span>
                  <h4 className="font-semibold text-sm text-pink-100">Government Institution • System Developer</h4>
                  <p className="text-xs text-pink-100/60 mt-1">Menganalisis kebutuhan kepegawaian, membangun modul berbasis Laravel, serta menyusun dokumentasi teknis & UAT.</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-pink-400">Juli 2025 - Oktober 2025</span>
                  <h4 className="font-semibold text-sm text-pink-100">WIT.ID • Web Developer Intern</h4>
                  <p className="text-xs text-pink-100/60 mt-1">Mengembangkan RESTful API dengan arsitektur Multi-Tenant, optimasi skema database MySQL, dan debugging fungsional.</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-pink-400">Desember 2020 - Januari 2021</span>
                  <h4 className="font-semibold text-sm text-pink-100">Kecamatan Karangpawitan • Administrative Intern</h4>
                  <p className="text-xs text-pink-100/60 mt-1">Mengelola pencatatan administrasi kependudukan dan registrasi publik secara sistematis.</p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="bg-[#18122a] p-6 rounded-3xl border border-purple-500/20 space-y-4">
              <div className="flex items-center gap-3 text-purple-300">
                <GraduationCap className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Education & Certifications</h3>
              </div>
              <div className="space-y-5 border-l-2 border-purple-500/30 pl-4 ml-1">
                <div>
                  <span className="text-xs font-mono text-purple-400">2022 - 2026</span>
                  <h4 className="font-semibold text-sm text-pink-100">Institut Pendidikan Indonesia Garut</h4>
                  <p className="text-xs text-pink-100/60 mt-1">Sarjana Sistem Informasi (Fresh Graduate). Aktif dalam kepengurusan BEM FITS & HIMASIFOR.</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400">Maret 2021</span>
                  <h4 className="font-semibold text-sm text-pink-100 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Sertifikasi Kompetensi Kejuruan (TKJ)
                  </h4>
                  <p className="text-xs text-pink-100/60 mt-1">Perancangan skema IP Addressing, konfigurasi routing, switch, serta infrastruktur jaringan kabel dan nirkabel.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff4d8d]">Get In Touch</span>
            <h2 className="text-3xl font-bold">Mari Terhubung 💌</h2>
            <p className="text-sm text-pink-200/70">Terbuka untuk posisi Quality Assurance (QA) atau Backend Developer di Bandung & sekitarnya.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 text-xs">
            <a 
              href="mailto:tiaranuraziza517@gmail.com" 
              className="p-3 bg-[#18122a] border border-pink-500/20 rounded-2xl flex items-center gap-3 hover:border-pink-500 transition"
            >
              <Mail className="w-4 h-4 text-pink-400" />
              <span className="text-pink-100 truncate">tiaranuraziza517@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/6281910069108" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-[#18122a] border border-pink-500/20 rounded-2xl flex items-center gap-3 hover:border-pink-500 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span className="text-pink-100">0819-1006-9108</span>
            </a>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="bg-[#18122a] p-6 sm:p-8 rounded-3xl border border-pink-500/30 shadow-2xl space-y-4 relative"
          >
            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-2">Nama Lengkap / Instansi</label>
              <input 
                type="text"
                placeholder="misal: PT Neuronworks Indonesia"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0d0a17] border border-[#2e204d] rounded-2xl px-4 py-3 text-sm text-white placeholder-pink-200/30 focus:outline-none focus:border-pink-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-2">Email</label>
              <input 
                type="email"
                placeholder="recruitment@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0d0a17] border border-[#2e204d] rounded-2xl px-4 py-3 text-sm text-white placeholder-pink-200/30 focus:outline-none focus:border-pink-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-2">Pesan</label>
              <textarea 
                rows="4"
                placeholder="Tulis pesan atau tawaran kesempatan kerja sama..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0d0a17] border border-[#2e204d] rounded-2xl px-4 py-3 text-sm text-white placeholder-pink-200/30 focus:outline-none focus:border-pink-500 transition"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#ff4d8d] via-[#f43f5e] to-[#9333ea] text-white font-bold text-sm shadow-lg shadow-pink-500/30 hover:opacity-95 hover:scale-[1.01] transition active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Kirim Pesan ke Tiara
            </button>

            {formStatus.submitted && (
              <div className="p-3 bg-pink-500/20 border border-pink-500/50 rounded-xl text-center text-xs font-semibold text-pink-300">
                {formStatus.text}
              </div>
            )}
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-[#2e204d] pt-8 text-center text-xs text-pink-200/50 space-y-2">
        <p>Portfolio Siti Tiara Nur Aziza • QA & Backend Web Developer ✨</p>
        <p className="font-mono">Institut Pendidikan Indonesia Garut • Ready for WFO Bandung</p>
      </footer>

    </div>
  );
}