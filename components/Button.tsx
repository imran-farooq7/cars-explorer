"use client";
import { ButtonProps } from "@/type";
import Image from "next/image";

const Button = ({ title, styles, handleClick }: ButtonProps) => {
	return (
		<button
			disabled={false}
			type={"button"}
			className={`custom-btn ${styles}`}
			onClick={handleClick}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	);
};
export default Button;
