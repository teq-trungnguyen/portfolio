"use client";

import { siteConfig } from "@/lib/data";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export function Contact() {
	const sectionRef = useRevealAnimation<HTMLElement>({ stagger: 0.12 });

	return (
		<section id="contact" ref={sectionRef} className="py-32 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="max-w-2xl">
					<p data-reveal className="text-violet-400 font-mono text-sm mb-4 opacity-0">
						05. Contact
					</p>
					<h2 data-reveal className="text-4xl sm:text-5xl font-bold text-white mb-6 opacity-0">
						Let&apos;s work together
					</h2>
					<p data-reveal className="text-zinc-400 text-lg leading-relaxed mb-10 opacity-0">
						Have a project in mind or just want to chat? I&apos;m always open to new
						opportunities, collaborations, or simply a good conversation about tech.
					</p>

					<div data-reveal className="flex flex-wrap gap-4 opacity-0">
						<a
							href={`mailto:${siteConfig.email}`}
							className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
						>
							{siteConfig.email}
							<svg
								className="w-4 h-4 group-hover:translate-x-1 transition-transform"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
							</svg>
						</a>
					</div>

					<div data-reveal className="mt-8 flex flex-col gap-4 opacity-0 sm:flex-row">
						<a
							href={siteConfig.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
						>
							<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
							</svg>
							GitHub
						</a>
						<a
							href={siteConfig.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
						>
							<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
							LinkedIn
						</a>
						<a
							href={`tel:${siteConfig.phone}`}
							className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
						>
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							{siteConfig.phone}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
