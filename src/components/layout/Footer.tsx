import { siteConfig } from "@/lib/data";

export function Footer() {
	return (
		<footer className="border-t border-zinc-800/50 py-8">
			<div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
				<p>
					&copy; {siteConfig.name} - {2024}
				</p>
				<div className="flex items-center gap-6">
					<a
						href={siteConfig.github}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors"
					>
						GitHub
					</a>
					<a
						href={siteConfig.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors"
					>
						LinkedIn
					</a>
					<a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
						Email
					</a>
				</div>
			</div>
		</footer>
	);
}
