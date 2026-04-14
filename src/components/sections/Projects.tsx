"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
	const sectionRef = useRevealAnimation<HTMLElement>({ stagger: 0.15 });
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const cards = gridRef.current?.querySelectorAll<HTMLElement>("[data-card]");
			if (!cards) return;

			// 3-D tilt on hover
			for (const card of cards) {
				card.addEventListener("mousemove", (e: MouseEvent) => {
					const rect = card.getBoundingClientRect();
					const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
					const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
					gsap.to(card, { rotateX: rx, rotateY: ry, duration: 0.35, ease: "power2.out" });
				});
				card.addEventListener("mouseleave", () => {
					gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });
				});
			}
		}, gridRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} id="projects" className="py-32 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="mb-16">
					<p data-reveal className="text-violet-400 font-mono text-sm mb-4 opacity-0">
						03. Projects
					</p>
					<h2 data-reveal className="text-4xl sm:text-5xl font-bold text-white opacity-0">
						Things I&apos;ve built
					</h2>
				</div>

				<div ref={gridRef} className="grid sm:grid-cols-2 gap-6">
					{projects.map((project) => (
						<div
							key={project.id}
							data-card
							data-reveal
							className="group relative opacity-0 rounded-3xl border border-zinc-800/60 bg-zinc-900/30 p-7 flex flex-col justify-between overflow-hidden hover:border-violet-500/40 hover:bg-violet-500/5 transition-colors"
							style={{ transformStyle: "preserve-3d", perspective: "800px" }}
						>
							{/* Large background number */}
							<span className="absolute -bottom-4 -right-2 text-[100px] font-black text-zinc-800/25 select-none leading-none group-hover:text-violet-900/20 transition-colors duration-500 pointer-events-none">
								{String(project.id).padStart(2, "0")}
							</span>

							<div className="relative z-10">
								<div className="flex items-center justify-between mb-6">
									<span className="text-xs font-mono text-zinc-600">{project.year}</span>
								</div>
								<h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors leading-snug">
									{project.title}
								</h3>
								<p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
							</div>

							<div className="relative z-10 mt-6 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="px-2.5 py-1 text-xs rounded-full bg-zinc-800/70 text-zinc-400 border border-zinc-700/50 group-hover:border-violet-500/20 transition-colors"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
