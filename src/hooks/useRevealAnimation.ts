"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
	duration?: number;
	stagger?: number;
	delay?: number;
}

export function useRevealAnimation<T extends HTMLElement>(
	options: RevealOptions = {}
): React.RefObject<T | null> {
	const ref = useRef<T | null>(null);
	const { duration = 0.85, stagger = 0.1, delay = 0 } = options;

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const targets = el.querySelectorAll("[data-reveal]");
		const animTargets = targets.length > 0 ? Array.from(targets) : [el];

		// Fade + subtle slide up
		gsap.fromTo(
			animTargets,
			{ opacity: 0, y: 24 },
			{
				opacity: 1,
				y: 0,
				duration,
				stagger,
				delay,
				ease: "power3.out",
				scrollTrigger: {
					trigger: el,
					start: "top 88%",
					toggleActions: "play none none none",
				},
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => {
				if (trigger.vars.trigger === el) trigger.kill();
			});
		};
	}, [duration, stagger, delay]);

	return ref;
}
