import { useEffect, useRef } from "react";
import CSSBox, { type CSSBoxRef } from "./fancy/css-box";

export default function MilkKrateBox() {
	const boxRef = useRef<CSSBoxRef>(null);

	useEffect(() => {
		if (boxRef.current) {
			boxRef.current.rotateTo(-35, 45);
		}
	}, []);

	// Example text face component
	const TextFace = ({
		texts,
		className,
	}: {
		texts: string[];
		className?: string;
	}) => (
		<div className={`bg-black flex flex-col ${className || ""}`}>
			{texts.map((text, i) => (
				<div key={i} className="text-white font-bold tracking-wider">
					{text}
				</div>
			))}
		</div>
	);

	return (
		<CSSBox
			ref={boxRef}
			width={200}
			height={200}
			depth={200}
			perspective={600}
			stiffness={100}
			damping={30}
			faces={{
				front: (
					<TextFace
						texts={["THE WORLD", "IS YOUR", "OYSTER"]}
						className="text-right justify-end items-end h-full w-full p-2 select-none"
					/>
				),
				back: (
					<TextFace
						texts={["MAKE THINGS", "YOU WISH", "EXISTED"]}
						className="text-left justify-end h-full w-full p-2 select-none"
					/>
				),
				right: (
					<img
						src="/krate_face.png"
						alt=""
						className="w-full h-full object-cover"
					/>
				),
				left: (
					<img
						src="/krate_face.png"
						alt=""
						className="w-full h-full object-cover"
					/>
				),
				top: (
					<TextFace
						texts={["YOU CAN", "JUST", "DO THINGS"]}
						className="text-right justify-end items-end h-full w-full p-2 select-none"
					/>
				),
				bottom: (
					<TextFace
						texts={["BREAK", "THINGS", "MOVE", "FAST"]}
						className="items-end w-full h-full p-2 select-none"
					/>
				),
			}}
			className="text-3xl"
		/>
	);
}
