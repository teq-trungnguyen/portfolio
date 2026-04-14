export const siteConfig = {
	name: "Trung Nguyen",
	role: "Front-End Developer",
	bio: "Front-End Developer with over 4 years of experience specializing in React, Vue, Next.js, Nuxt.js, and TypeScript. Focused on building clean, fast, and user-friendly web applications.",
	email: "nntrung0403@gmail.com",
	phone: "(+84) 971631844",
	github: "https://github.com/teq-trungnguyen",
	linkedin: "https://linkedin.com/in/trungnguyen0403",
	cv: "/NguyenNgocTrung_CV.pdf",
};

export const experiences = [
	{
		company: "Teqnological Asia",
		role: "Front-End Developer",
		period: "Aug 2021 – Present",
		highlights: [
			"Quickly adapted to Japanese work environments and development processes.",
			"Collaborated with cross-functional teams: PMs, designers, backend engineers, and BrSEs.",
			"Converted complex financial requirements into intuitive applications for Japanese clients.",
			"Improved scalability by optimizing workflows and implementing automated delivery processes.",
			"Leveraged AI tools to review code, plan features, and accelerate development efficiency.",
			"Trained and supervised team members for ongoing projects.",
		],
	},
	{
		company: "Freelance Developer",
		role: "Full-Stack Developer",
		period: "Aug 2024 – Present",
		highlights: [
			"Specialized in developing interactive landing pages using HTML5, CSS3, and JavaScript.",
			"Handled both frontend and backend responsibilities in full-stack projects.",
			"Developed flexible Content Management Systems (CMS) for clients.",
			"Ensured seamless integration with backend services for a cohesive user experience.",
		],
	},
];

export const skills = [
	{
		category: "Frameworks",
		items: ["React", "Next.js", "Vue", "Nuxt.js", "TanStack Ecosystem"],
	},
	{
		category: "Languages",
		items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
	},
	{
		category: "Styling & UI",
		items: ["Tailwind CSS", "SCSS", "Ant Design", "styled-components"],
	},
	{
		category: "Tools & Workflow",
		items: ["Git", "GitHub Actions", "Docker", "CI/CD", "Vite", "Webpack"],
	},
	{
		category: "Other Skills",
		items: ["REST APIs", "SEO", "Performance Optimization", "SSR / CSR / SSG"],
	},
	{
		category: "AI Tools",
		items: ["GitHub Copilot", "Cursor", "Claude Code"],
	},
];

export const projects = [
	{
		id: 1,
		title: "Flame — AI Chatbot",
		description:
			"Multi-tenant AI chatbot platform with custom themes per client. Implemented authentication via Amazon Cognito and set up CI/CD pipelines using GitHub Actions.",
		tags: ["React", "TypeScript", "Amazon Cognito", "GitHub Actions", "CI/CD"],
		href: "#",
		year: "2024",
	},
	{
		id: 2,
		title: "Calendar AI",
		description:
			"AI-powered calendar app with real-time WebSocket communication for low-latency message streaming. Established codebase, chatbot interface, and SSO login from scratch.",
		tags: ["React", "WebSocket", "SSO", "GitLab CI", "TypeScript"],
		href: "#",
		year: "2024",
	},
	{
		id: 3,
		title: "Review360",
		description:
			"Employee performance review system with Keycloak SSO, permission-based UI rendering, and performance history timeline built on Strapi + MySQL backend.",
		tags: ["React", "Strapi", "MySQL", "Keycloak", "SSO"],
		href: "#",
		year: "2023",
	},
	{
		id: 4,
		title: "Avatars CMS",
		description:
			"Full-ownership project: codebase setup, reusable component library, design system alignment, and cross-team code reviews with Japanese stakeholders.",
		tags: ["React", "TypeScript", "Component Library", "CMS"],
		href: "#",
		year: "2023",
	},
	{
		id: 5,
		title: "Company Website",
		description:
			"SEO-optimized company website with CMS-driven dynamic content, responsive design, unit testing, and automated CI/CD pipelines triggered by CMS tag creation.",
		tags: ["Next.js", "CMS", "SEO", "CI/CD", "Unit Testing"],
		href: "#",
		year: "2022",
	},
];

export const education = {
	degree: "B.S. in Computer Science",
	school: "University of Science – VNUHCM",
	period: "2017 – 2021",
};

export const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
];
