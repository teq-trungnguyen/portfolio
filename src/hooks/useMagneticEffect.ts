"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function useMagneticEffect<T extends HTMLElement>(strength = 0.38) {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const handleMove = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			gsap.to(el, {
				x: (e.clientX - cx) * strength,
				y: (e.clientY - cy) * strength,
				duration: 0.3,
				ease: "power2.out",
			});
		};

		const handleLeave = () => {
			gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
		};

		el.addEventListener("mousemove", handleMove);
		el.addEventListener("mouseleave", handleLeave);

		return () => {
			el.removeEventListener("mousemove", handleMove);
			el.removeEventListener("mouseleave", handleLeave);
		};
	}, [strength]);

	return ref;
}
