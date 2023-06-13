"use client";
import { ButtonProps } from "@/type";
import Image from "next/image";

const Button = ({ title, styles, handleClick, btnType }: ButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || "button"}
			className={`custom-btn ${styles}`}
			onClick={handleClick}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	);
};
export default Button;
