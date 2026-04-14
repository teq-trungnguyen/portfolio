"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export function Preloader() {
	const topRef = useRef<HTMLDivElement>(null);
	const bottomRef = useRef<HTMLDivElement>(null);
	const counterRef = useRef<HTMLSpanElement>(null);
	const barRef = useRef<HTMLDivElement>(null);
	const [done, setDone] = useState(false);

	useEffect(() => {
		const obj = { val: 0 };

		const tl = gsap.timeline();

		// Count 000 → 100 while filling the progress bar
		tl.to(obj, {
			val: 100,
			duration: 1.6,
			ease: "power2.inOut",
			onUpdate() {
				const n = Math.round(obj.val);
				if (counterRef.current) counterRef.current.textContent = String(n).padStart(3, "0");
				if (barRef.current) barRef.current.style.transform = `scaleX(${n / 100})`;
			},
		})
			// Brief hold at 100
			.to({}, { duration: 0.2 })
			// Split — top panel flies up, bottom panel flies down
			.to(topRef.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "split")
			.to(bottomRef.current, { yPercent: 100, duration: 0.9, ease: "power4.inOut" }, "split")
			.add(() => setDone(true));

		return () => { tl.kill(); };
	}, []);

	if (done) return null;

	return (
		<div className="fixed inset-0 z-200 pointer-events-none select-none overflow-hidden">
			{/* Top half */}
			<div
				ref={topRef}
				className="absolute inset-x-0 top-0 h-1/2 bg-zinc-950 flex flex-col items-center justify-end pb-10"
			>
				<span className="font-mono text-[10px] tracking-[0.6em] text-zinc-600 uppercase mb-3">
					Portfolio
				</span>
				<span className="font-bold text-xl tracking-widest text-white">
					Trung Nguyen
					<span className="text-violet-400">.</span>
				</span>
			</div>

			{/* Center split line */}
			<div className="absolute inset-x-0 top-1/2 h-px bg-zinc-800/80 -translate-y-px z-10" />

			{/* Bottom half */}
			<div
				ref={bottomRef}
				className="absolute inset-x-0 bottom-0 h-1/2 bg-zinc-950 flex flex-col items-center justify-start pt-10 gap-4"
			>
				{/* Progress bar */}
				<div className="w-52 h-px bg-zinc-800 overflow-hidden">
					<div
						ref={barRef}
						className="h-full bg-violet-400 origin-left"
						style={{ transform: "scaleX(0)" }}
					/>
				</div>
				{/* Counter */}
				<span ref={counterRef} className="font-mono text-xs text-zinc-600 tabular-nums">
					000
				</span>
			</div>
		</div>
	);
}
