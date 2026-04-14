"use client";

import { skills } from "@/lib/data";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export function Skills() {
	const sectionRef = useRevealAnimation<HTMLElement>({ stagger: 0.12 });
	const allSkillItems = skills.flatMap((g) => g.items);

	// interleave a separator between each item
	const withSep = allSkillItems.flatMap((item) => [item, null]);

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
							className="opacity-0 rounded-2xl p-px bg-linear-to-br from-violet-500/30 via-zinc-800/20 to-cyan-500/20 hover:from-violet-500/50 hover:to-cyan-500/40 transition-all duration-300"
						>
							<div className="h-full p-5 rounded-[calc(1rem-1px)] bg-zinc-950/80 backdrop-blur-sm">
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
						</div>
					))}
				</div>

				{/* Marquee strip — two rows, opposite directions, fade edges */}
				<div
					data-reveal
					className="mt-16 opacity-0 overflow-hidden"
					style={{
						maskImage:
							"linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
					}}
				>
					<div
						className="flex gap-8 whitespace-nowrap mb-3"
						style={{ willChange: "transform", animation: "marquee 35s linear infinite" }}
					>
						{[...withSep, ...withSep].map((item, i) =>
							item === null ? (
								<span
									// biome-ignore lint/suspicious/noArrayIndexKey: stable marquee list
									key={i}
									className="text-violet-500/50 text-xs select-none"
								>
									◆
								</span>
							) : (
								<span
									// biome-ignore lint/suspicious/noArrayIndexKey: stable marquee list
									key={i}
									className="text-sm font-medium text-zinc-400"
								>
									{item}
								</span>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
