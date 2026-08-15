import { ImageResponse } from "next/og";

export const alt = "Taha Hamdy — Full-Stack Developer ";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				backgroundColor: "#0f1115",
				padding: "60px 70px",
				fontFamily: "system-ui, -apple-system, sans-serif",
				position: "relative",
			}}
		>
			{/* Subtle grid background */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage:
						"linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>

			{/* Top Header Bar */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					position: "relative",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
					<div
						style={{
							width: "14px",
							height: "14px",
							borderRadius: "50%",
							backgroundColor: "#ff5500",
						}}
					/>
					<span
						style={{
							color: "#ffffff",
							fontSize: "24px",
							fontWeight: 800,
							letterSpacing: "-0.5px",
						}}
					>
						TAHA HAMDY
					</span>
					<span
						style={{
							color: "#71717a",
							fontSize: "18px",
							fontFamily: "monospace",
							marginLeft: "8px",
						}}
					>
						/ FULL-STACK ARCH
					</span>
				</div>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						backgroundColor: "#18181b",
						border: "1px solid #27272a",
						padding: "8px 16px",
						borderRadius: "9999px",
					}}
				>
					<div
						style={{
							width: "8px",
							height: "8px",
							borderRadius: "50%",
							backgroundColor: "#00e5a0",
						}}
					/>
					<span
						style={{
							color: "#a1a1aa",
							fontSize: "14px",
							fontFamily: "monospace",
						}}
					>
						AVAILABLE FOR CONTRACTS
					</span>
				</div>
			</div>

			{/* Main Statement */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
					position: "relative",
					maxWidth: "950px",
				}}
			>
				<h1
					style={{
						fontSize: "64px",
						fontWeight: 900,
						color: "#ffffff",
						lineHeight: 1.05,
						letterSpacing: "-2px",
						margin: 0,
					}}
				>
					I build the systems{" "}
					<span style={{ color: "#ff5500" }}>businesses run on.</span>
				</h1>
				<p
					style={{
						fontSize: "22px",
						color: "#a1a1aa",
						lineHeight: 1.4,
						margin: 0,
					}}
				>
					Full-Stack Developer delivering high-throughput SaaS platforms,
					e-commerce infrastructure, and distributed pipelines.
				</p>
			</div>

			{/* Bottom Stack Chips & Domain */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					borderTop: "1px solid #27272a",
					paddingTop: "24px",
					position: "relative",
				}}
			>
				<div style={{ display: "flex", gap: "10px" }}>
					{[
						"Next.js 16",
						"NestJS",
						"TypeScript",
						"PostgreSQL",
						"BullMQ",
						"Redis",
						"Docker",
					].map((tech) => (
						<div
							key={tech}
							style={{
								backgroundColor: "#18181b",
								border: "1px solid #27272a",
								color: "#d4d4d8",
								padding: "6px 14px",
								borderRadius: "6px",
								fontSize: "14px",
								fontFamily: "monospace",
								fontWeight: 600,
							}}
						>
							{tech}
						</div>
					))}
				</div>

				<span
					style={{
						color: "#71717a",
						fontSize: "16px",
						fontFamily: "monospace",
					}}
				>
					taha-hamdy.vercel.app
				</span>
			</div>
		</div>,
		{
			...size,
		},
	);
}
