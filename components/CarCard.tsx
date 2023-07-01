"use client";
import { useState } from "react";
import Image from "next/image";
import { CarCardProps } from "@/type";
import { calculateCarRent } from "@/utils";
import Button from "./Button";
import { CarDetails } from "./index";
interface CarProps {
	car: CarCardProps;
}
const CarCard = ({ car }: CarProps) => {
	const { city_mpg, model, transmission, year, make, drive } = car;
	const [isOpen, setIsOpen] = useState(false);
	const carRent = calculateCarRent(city_mpg, year);
	return (
		<div className="car-card group">
			<div className="car-card__content">
				<h2 className="car-card__content-title">
					{make} {model}
				</h2>
			</div>
			<p className="flex mt-6 text-[32px] font-extrabold">
				<span className="self-start text-[14px] font-semibold">$</span>
				{carRent}

				<span className="self-end text-[14px] font-semibold">/day</span>
			</p>
			<div className="relative w-full h-40 my-3 object-contain">
				<Image
					src="/hero.png"
					alt="car"
					fill
					priority
					sizes="(max-width: 768px) 100vw"
					className="object-contain"
				/>
			</div>
			<div className="relative flex  w-full mt-2">
				<div className="flex justify-between text-gray group-hover:invisible w-full">
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src="/steering-wheel.svg"
							width={20}
							height={20}
							alt="steering"
						/>
						<p className="text-[14px]">
							{transmission === "a" ? "Automatic" : "Manual"}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Image src="/tire.svg" width={20} height={20} alt="tire" />
						<p className="text-[14px]">{drive.toUpperCase()}</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Image src="/gas.svg" width={20} height={20} alt="steering" />
						<p className="text-[14px]">{city_mpg} MPG</p>
					</div>
				</div>
				<div className="car-card__btn-container">
					<Button
						title="View More"
						styles="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
						handleClick={() => setIsOpen(true)}
					/>
				</div>
			</div>
			<CarDetails isOpen={isOpen} close={() => setIsOpen(false)} car={car} />
		</div>
	);
};
export default CarCard;
