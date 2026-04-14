"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { education, siteConfig } from "@/lib/data";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

gsap.registerPlugin(ScrollTrigger);

const stats = [
	{ number: 4, suffix: "+", label: "Years of experience" },
	{ number: 10, suffix: "+", label: "Projects shipped" },
	{ number: 2, suffix: "", label: "Companies" },
	{ number: 99, suffix: "%", label: "Coffee powered" },
];

export function About() {
	const sectionRef = useRevealAnimation<HTMLElement>({ stagger: 0.12 });
	const statsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const counters = statsRef.current?.querySelectorAll<HTMLElement>("[data-count]");
			if (!counters) return;

			for (const el of counters) {
				const target = Number(el.dataset.count);
				const obj = { val: 0 };

				gsap.to(obj, {
					val: target,
					duration: 1.8,
					ease: "power2.out",
					snap: { val: 1 },
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
						toggleActions: "play none none none",
					},
					onUpdate() {
						el.textContent = String(Math.round(obj.val));
					},
				});
			}
		}, statsRef);

		return () => ctx.revert();
	}, []);

	return (
		<section id="about" ref={sectionRef} className="py-32 px-6">
			<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
				{/* Text */}
				<div>
					<p data-reveal className="text-violet-400 font-mono text-sm mb-4 opacity-0">
						01. About
					</p>
					<h2 data-reveal className="text-4xl sm:text-5xl font-bold text-white mb-6 opacity-0">
						The person behind
						<br />
						<span className="text-zinc-400">the code</span>
					</h2>
					<p data-reveal className="text-zinc-400 text-lg leading-relaxed mb-6 opacity-0">
						{siteConfig.bio}
					</p>
					<p data-reveal className="text-zinc-500 leading-relaxed mb-8 opacity-0">
						Passionate about clean architecture, performance optimization, and delivering
						pixel-perfect interfaces. I thrive in cross-functional teams and have hands-on
						experience working closely with Japanese clients and international stakeholders.
					</p>

					{/* Education */}
					<div
						data-reveal
						className="opacity-0 flex items-start gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30"
					>
						<div className="w-9 h-9 shrink-0 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
							<svg
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3h8"
								/>
							</svg>
						</div>
						<div>
							<p className="text-white font-medium text-sm">{education.degree}</p>
							<p className="text-zinc-500 text-xs mt-0.5">
								{education.school} · {education.period}
							</p>
						</div>
					</div>
				</div>

				{/* Stats with count-up */}
				<div ref={statsRef} className="grid grid-cols-2 gap-6">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors group"
						>
							<div className="text-4xl font-bold text-white mb-2 font-mono tabular-nums">
								<span data-count={stat.number}>0</span>
								<span className="text-violet-400">{stat.suffix}</span>
							</div>
							<div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
