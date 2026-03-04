import { useState } from 'react';

const FILTERS = [
    { label: 'Todos', value: 'all' },
    { label: 'APIs', value: 'api' },
    { label: 'Bases de datos', value: 'db' },
    { label: 'DevOps', value: 'devops' },
    { label: 'Full Stack', value: 'fullstack' },
];

interface Project {
    title: string;
    description: string;
    type: string;
    category: string;
    techs: string[];
    github?: string;
    demo?: string;
    order: number;
}

interface Props {
    projects: Project[];
}

export default function ProjectsFilter({ projects }: Props) {
    const [active, setActive] = useState('all');

    const filtered = active === 'all'
        ? projects
        : projects.filter(p => p.category === active);

    return (
        <section id="projects" className="px-[6vw] py-28 border-t border-[#1e1e1e]">

            {/* Header */}
            <div className="flex items-baseline gap-4 mb-12">
                <span className="text-[#00ff87] text-xs tracking-widest">01</span>
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight">Proyectos</h2>
                <div className="flex-1 h-px bg-[#1e1e1e] ml-4"></div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 flex-wrap mb-12">
                {FILTERS.map(f => (
                    <button
                        key={f.value}
                        onClick={() => setActive(f.value)}
                        className={`text-xs uppercase tracking-widest px-4 py-2 border transition-all
              ${active === f.value
                                ? 'border-[#00ff87] text-[#00ff87] bg-[#00ff87]/10'
                                : 'border-[#1e1e1e] text-[#555] hover:border-[#00ff87] hover:text-[#00ff87]'
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
                {filtered.map((project, i) => (
                    <div
                        key={project.title}
                        className="bg-[#080808] p-9 relative group hover:bg-[#111] transition-colors"
                    >
                        <span className="absolute top-6 right-7 font-display font-black text-5xl text-[#1e1e1e] group-hover:text-[#00ff87]/5 transition-colors leading-none">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="text-[#00ff87] text-xs tracking-widest uppercase mb-2">{project.type}</div>
                        <h3 className="font-display text-xl font-bold mb-3 tracking-tight">{project.title}</h3>
                        <p className="text-sm text-[#555] mb-5 leading-relaxed">{project.description}</p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.techs.map(tech => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 border border-[#1e1e1e] text-[#555] group-hover:border-[#00ff87]/25 group-hover:text-[#00ff87] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                            {project.github && (
                                <a href={project.github} target="_blank" className="text-xs text-[#555] hover:text-[#00ff87] uppercase tracking-widest transition-colors">
                                    GitHub ↗
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" className="text-xs text-[#555] hover:text-[#00ff87] uppercase tracking-widest transition-colors">
                                    Demo ↗
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}