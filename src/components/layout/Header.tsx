"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

export function Header() {
	const headerRef = useRef<HTMLElement>(null);
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		setMenuOpen(false);
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header
			ref={headerRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50" : "bg-transparent"
			}`}
		>
			<nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				<a
					href="#"
					className="text-lg font-bold tracking-tight text-white hover:text-violet-400 transition-colors"
				>
					{siteConfig.name.split(" ")[0]}
					<span className="text-violet-400">.</span>
				</a>

				{/* Desktop nav */}
				<ul className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<li key={link.label}>
							<a
								href={link.href}
								onClick={(e) => handleNavClick(e, link.href)}
								className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
							>
								{link.label}
							</a>
						</li>
					))}
					<li>
						<a
							href={`mailto:${siteConfig.email}`}
							className="text-sm px-4 py-2 rounded-full border border-violet-500/50 text-violet-400 hover:bg-violet-500/10 transition-colors font-medium"
						>
							Hire me
						</a>
					</li>
				</ul>

				{/* Mobile hamburger */}
				<button
					type="button"
					aria-label="Toggle menu"
					onClick={() => setMenuOpen((v) => !v)}
					className="md:hidden flex flex-col gap-1.5 p-2"
				>
					<span
						className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
					/>
				</button>
			</nav>

			{/* Mobile menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
			>
				<ul className="flex flex-col bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/50 px-6 py-4 gap-4">
					{navLinks.map((link) => (
						<li key={link.label}>
							<a
								href={link.href}
								onClick={(e) => handleNavClick(e, link.href)}
								className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
