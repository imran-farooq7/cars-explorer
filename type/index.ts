import { MouseEventHandler } from "react";

export interface ButtonProps {
	title: string;
	styles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: "button" | "submit";
}
export interface CustomFilterProps {
	title: string;
}
export interface SearchManufacturerProps {
	manufacture: string;
	setManufacture: (manufacture: string) => void;
}
export interface CarCardProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}
export interface CarDetailsProps {
	isOpen: boolean;
	close: () => void;
	car: CarCardProps;
}
