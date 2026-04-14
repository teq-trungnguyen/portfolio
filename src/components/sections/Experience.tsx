"use client";

import { experiences } from "@/lib/data";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export function Experience() {
	const sectionRef = useRevealAnimation<HTMLElement>({ stagger: 0.15 });

	return (
		<section id="experience" ref={sectionRef} className="py-32 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="mb-16">
					<p data-reveal className="text-violet-400 font-mono text-sm mb-4 opacity-0">
						02. Experience
					</p>
					<h2 data-reveal className="text-4xl sm:text-5xl font-bold text-white opacity-0">
						Where I&apos;ve worked
					</h2>
				</div>

				<div className="relative">
					{/* Vertical line */}
					<div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800 hidden md:block" />

					<div className="space-y-12">
						{experiences.map((exp) => (
							<div
								key={exp.company}
								data-reveal
								className="opacity-0 md:pl-10 relative"
							>
								{/* Dot */}
								<div className="hidden md:flex absolute left-0 top-1.5 w-2 h-2 -translate-x-[3.5px] rounded-full bg-violet-500 ring-4 ring-zinc-950" />

								<div className="rounded-2xl p-px bg-linear-to-br from-violet-500/20 via-zinc-800/10 to-cyan-500/15 hover:from-violet-500/50 hover:to-cyan-500/40 transition-all duration-300">
									<div className="rounded-[calc(1rem-1px)] bg-zinc-950/80 backdrop-blur-sm p-6">
										<div className="flex flex-wrap items-start justify-between gap-3 mb-4">
											<div>
												<h3 className="text-lg font-semibold text-white">{exp.role}</h3>
												<p className="text-violet-400 text-sm font-medium mt-0.5">{exp.company}</p>
											</div>
											<span className="text-xs font-mono text-zinc-500 bg-zinc-800/60 px-3 py-1 rounded-full border border-zinc-700/50">
												{exp.period}
											</span>
										</div>

										<ul className="space-y-2">
											{exp.highlights.map((point) => (
												<li key={point} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
													<span className="mt-2 w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
													{point}
												</li>
											))}
										</ul>
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
