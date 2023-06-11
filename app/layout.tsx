import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
	title: "Cars Explorer",
	description: "Explore the best cars in the world",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
