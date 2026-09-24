import React from 'react';
import { Link } from 'react-router-dom';
import { Target, BookOpen, Compass, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const interests = [
    { title: 'Software Engineering', desc: 'Designing structured, maintainable software systems and modular code.' },
    { title: 'Full-Stack Development', desc: 'Connecting responsive frontend clients to reliable backend services.' },
    { title: 'Web Development', desc: 'Crafting clean, accessible, modern web applications with React and JavaScript.' },
    { title: 'Java & Object-Oriented Design', desc: 'Core Java, encapsulation, inheritance, polymorphism, and memory concepts.' },
    { title: 'Data Structures & Algorithms', desc: 'Algorithmic efficiency, problem solving, arrays, hash maps, and sorting.' },
    { title: 'Problem Solving', desc: 'Daily algorithmic practice on platforms like HackerRank and technical puzzles.' },
    { title: 'Robotics & Hardware Integration', desc: 'Embedded systems, Arduino programming, ultrasonic sensors, and motor drivers.' },
    { title: 'Practical Application Development', desc: 'Turning academic concepts into functional, interactive software solutions.' }
  ];

  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Background & Mindset
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I'm a Computer Science Engineering student who enjoys turning ideas into practical applications. My current focus is strengthening my Java, DSA and full-stack development skills while building projects that help me understand real-world software development.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              Currently in my 4th year pursuing a B.Tech in Computer Science and Engineering at Sandip University, Sijoul (School of Computer Science and Engineering), expected graduation in 2027.
            </p>
            <p>
              Throughout my engineering journey, I have prioritized hands-on development over passive theory. Whether it's building full-stack web applications like the Baking App and Employee Management System, exploring real-time chat architectures during my internship at i2i, or engineering an autonomous obstacle avoiding car using Arduino and ultrasonic sensors, I find genuine satisfaction in building systems that work.
            </p>
            <p>
              My long-term ambition is to grow into an impactful Software Engineer and contribute at a premier technology company such as Google. To work toward this aspiration, I dedicate my everyday effort to solving algorithmic problems, writing clean code, and mastering computer science fundamentals.
            </p>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-3">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-500" />
                <span>Primary Career Goal</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Aspiring Software Engineer / Full-Stack Developer seeking entry-level roles, graduate engineering positions, and placement opportunities where I can solve meaningful problems and learn alongside experienced engineering teams.
              </p>
            </div>
          </div>

          {/* Core Areas of Interest */}
          <div className="lg:col-span-5 space-y-4">
            {/* Profile Snapshot Card */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-4 shadow-sm flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-cyan-500/30 shrink-0 bg-neutral-900">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                  {personalInfo.name}
                </h4>
                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono truncate">
                  B.Tech CSE &middot; Class of 2027
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                  Sandip University, Sijoul
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-500" />
                <span>Core Focus Areas</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800">
                    <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-xs">
              <span className="text-neutral-600 dark:text-neutral-400">
                Want to learn more about my academic journey?
              </span>
              <Link
                to="/education"
                className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                Education <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
