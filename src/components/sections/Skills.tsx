"use client";

import { skills } from "@/lib/data";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export function Skills() {
	const sectionRef = useRevealAnimation<HTMLElement>({ stagger: 0.12 });
	const allSkillItems = skills.flatMap((g) => g.items);

	return (
		<section id="skills" ref={sectionRef} className="py-32 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="mb-16">
					<p data-reveal className="text-violet-400 font-mono text-sm mb-4 opacity-0">
						04. Skills
					</p>
					<h2 data-reveal className="text-4xl sm:text-5xl font-bold text-white opacity-0">
						Tech I work with
					</h2>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{skills.map((group) => (
						<div
							key={group.category}
							data-reveal
							className="opacity-0 p-5 rounded-2xl border border-zinc-800/50 bg-zinc-900/20"
						>
							<h3 className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-4">
								{group.category}
							</h3>
							<div className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span
										key={item}
										className="px-2.5 py-1 text-xs rounded-full bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 hover:border-violet-500/40 hover:text-violet-300 transition-colors"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Marquee strip */}
				<div
					data-reveal
					className="mt-16 opacity-0 overflow-hidden border-y border-zinc-800/50 py-5"
				>
					<div className="flex gap-10 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
						{[...allSkillItems, ...allSkillItems].map((item, i) => (
							<span
								// biome-ignore lint/suspicious/noArrayIndexKey: stable marquee list
								key={i}
								className="text-zinc-700 text-sm font-medium"
							>
								{item}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
