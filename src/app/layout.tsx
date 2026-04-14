import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const geist = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Nguyen Ngoc Trung — Front-End Developer",
	description:
		"Portfolio of Nguyen Ngoc Trung, a Front-End Developer with 4+ years of experience in React, Vue, Next.js, and TypeScript.",
	openGraph: {
		title: "Nguyen Ngoc Trung — Front-End Developer",
		description: "Portfolio & work showcase",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body className="bg-zinc-950 text-zinc-100 font-sans antialiased">
				<Preloader />
				<SmoothScrollProvider>{children}</SmoothScrollProvider>
			</body>
		</html>
	);
}
