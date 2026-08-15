import Link from "next/link";

export default function NotFound() {
	return (
		<html lang="en" className="dark">
			<body className="min-h-screen bg-[#07090e] text-[#f0f4fc] flex items-center justify-center p-6 font-sans">
				<div className="max-w-md w-full text-center flex flex-col items-center gap-6 p-8 rounded-2xl bg-[#0c1017] border border-[#1d263b] shadow-2xl">
					<div className="font-mono text-5xl font-bold text-[#00e599] tracking-wider">
						404
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold tracking-tight">Page Not Found</h1>
						<p className="text-sm text-[#7e8c9f]">
							The requested resource or endpoint could not be found.
						</p>
					</div>
					<Link
						href="/en"
						className="mono text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-xl bg-[#00e599] text-black hover:bg-[#00c985] transition-all duration-200 no-underline"
					>
						Return Home →
					</Link>
				</div>
			</body>
		</html>
	);
}
