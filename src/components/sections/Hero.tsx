"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { siteConfig } from "@/lib/data";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function scrambleText(el: HTMLElement, finalText: string, duration = 1.2, delay = 0) {
	const chars = finalText.split("");
	const totalFrames = Math.floor(duration * 60);
	let frame = 0;

	return gsap.to(
		{},
		{
			delay,
			duration,
			onUpdate() {
				frame++;
				const progress = frame / totalFrames;
				el.textContent = chars
					.map((char, i) => {
						if (char === " ") return "\u00a0";
						if (i / chars.length < progress) return char;
						return CHARS[Math.floor(Math.random() * CHARS.length)];
					})
					.join("");
			},
			onComplete() {
				el.textContent = finalText;
			},
		}
	);
}

export function Hero() {
	const containerRef = useRef<HTMLElement>(null);
	const nameRef = useRef<HTMLSpanElement>(null);
	const roleRef = useRef<HTMLSpanElement>(null);
	const ctaPrimaryRef = useMagneticEffect<HTMLAnchorElement>(0.4);
	const ctaSecondaryRef = useMagneticEffect<HTMLAnchorElement>(0.4);

	useEffect(() => {
		// Preloader takes ~2.5s (1.6 count + 0.2 hold + 0.9 split).
		// Start hero animations at 1.8s so content appears as panels fly apart.
		const DELAY = 1.8;

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
				delay: DELAY,
			});

			tl.fromTo("[data-hero-tag]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
				.fromTo(
					"[data-hero-hi]",
					{ opacity: 0, x: -30 },
					{ opacity: 1, x: 0, duration: 0.6 },
					"-=0.2"
				)
				.add(() => {
					if (nameRef.current) {
						nameRef.current.style.opacity = "1";
						scrambleText(nameRef.current, siteConfig.name, 1.4);
					}
					if (roleRef.current) {
						roleRef.current.style.opacity = "1";
						scrambleText(roleRef.current, siteConfig.role, 1.1, 0.35);
					}
				}, "-=0.1")
				.fromTo(
					"[data-hero-bio]",
					{ opacity: 0, y: 16 },
					{ opacity: 1, y: 0, duration: 0.7 },
					"+=0.65"
				)
				.fromTo(
					"[data-hero-cta]",
					{ opacity: 0, y: 16 },
					{ opacity: 1, y: 0, duration: 0.55, stagger: 0.12 },
					"-=0.4"
				)
				.fromTo(
					"[data-hero-scroll]",
					{ opacity: 0 },
					{ opacity: 1, duration: 0.6 },
					"-=0.2"
				);

			// Parallax on glows
			gsap.to("[data-glow-1]", {
				yPercent: -30,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});
			gsap.to("[data-glow-2]", {
				yPercent: -15,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
		>
			{/* Grain */}
			<div
				className="pointer-events-none absolute inset-0 z-10 opacity-[0.025]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
					backgroundRepeat: "repeat",
					backgroundSize: "128px",
				}}
			/>

			{/* Grid */}
			<div
				className="absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage:
						"linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
					backgroundSize: "80px 80px",
				}}
			/>

			{/* Glows */}
			<div
				data-glow-1
				className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none"
			/>
			<div
				data-glow-2
				className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none"
			/>

			<div className="relative z-10 max-w-6xl mx-auto w-full pt-24">
				{/* Badge */}
				<p
					data-hero-tag
					className="opacity-0 inline-flex items-center gap-2 text-sm text-violet-400 font-mono mb-8 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5"
				>
					<span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
					Available for new opportunities
				</p>

				{/* Heading */}
				<h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
					<span className="block overflow-hidden">
						<span
							data-hero-hi
							className="inline-block opacity-0 text-zinc-500 text-2xl sm:text-3xl font-mono mb-1"
						>
							My's name --
						</span>
					</span>
					<span className="block">
						<span
							ref={nameRef}
							className="inline-block opacity-0 font-mono text-white"
						>
							{siteConfig.name}
						</span>
					</span>
					<span className="block mt-1">
						<span
							ref={roleRef}
							className="inline-block opacity-0 text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-indigo-400 text-3xl sm:text-4xl lg:text-5xl font-medium"
						>
							{siteConfig.role}
						</span>
					</span>
				</h1>

				<p
					data-hero-bio
					className="opacity-0 max-w-xl text-zinc-400 text-lg leading-relaxed mb-10"
				>
					{siteConfig.bio}
				</p>

				{/* CTAs with magnetic effect */}
				<div className="flex flex-wrap gap-4">
					<a
						ref={ctaPrimaryRef}
						data-hero-cta
						href="#projects"
						onClick={(e) => {
							e.preventDefault();
							document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
						}}
						className="opacity-0 group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors overflow-hidden"
					>
						<span className="relative z-10">View my work</span>
						<svg
							className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							aria-hidden="true"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
						</svg>
					</a>
					<a
						ref={ctaSecondaryRef}
						data-hero-cta
						href={`mailto:${siteConfig.email}`}
						className="opacity-0 px-7 py-3.5 rounded-full border border-zinc-700 hover:border-violet-500/50 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300"
					>
						Get in touch
					</a>
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				data-hero-scroll
				className="opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
			>
				<span className="text-zinc-600 text-[10px] font-mono tracking-[0.2em] uppercase">
					scroll
				</span>
				<div className="relative w-px h-16 bg-zinc-800 overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-1/2 bg-violet-400 animate-[scrollLine_2s_ease-in-out_infinite]" />
				</div>
			</div>
		</section>
	);
}
