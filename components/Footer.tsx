import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="flex flex-col text-black-100 border-t border-gray-100 mt-5">
			<div
				className="flex max-md:flex-col flex-wrap justify-between gap-5
			sm:px-16 px-6 py-6"
			>
				<div className="flex flex-col justify-start items-start gap-6">
					<Link href="/" className="flex justify-center items-center">
						<Image
							src="/logo.svg"
							alt="logo"
							width={118}
							height={18}
							className="object-contain"
						/>
					</Link>
					<p className="text-base text-gray-700">
						Carhub 2023 <br />
						All Rights Reserved &copy;
					</p>
				</div>
				<div className="footer__links">
					{footerLinks.map((link) => {
						return (
							<div key={link.title} className="footer__link">
								<h3>{link.title}</h3>
								{link.links.map((link) => {
									return (
										<Link
											key={link.title}
											href={link.url}
											className="text-gray-500"
										>
											{link.title}
										</Link>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</footer>
	);
};
export default Footer;
