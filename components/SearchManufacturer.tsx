"use client";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/type";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const SearchManufacturer = ({
	manufacture,
	setManufacture,
}: SearchManufacturerProps) => {
	const [query, setQuery] = useState("");
	const filterManufacturers =
		query === ""
			? manufacturers
			: manufacturers.filter((manuf) =>
					manuf
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );
	return (
		<div className="search-manufacturer">
			<Combobox value={manufacture} onChange={setManufacture}>
				<div className="w-full relative">
					<Combobox.Button className="absolute top-[14px]">
						<Image
							src="/car-logo.svg"
							alt="logo"
							width={20}
							height={20}
							className="ml-4"
						/>
					</Combobox.Button>
					<Combobox.Input
						className="search-manufacturer__input"
						placeholder="Volkswagen"
						displayValue={(manuf: string) => manuf}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options>
							{filterManufacturers.map((fm) => (
								<Combobox.Option
									value={fm}
									key={fm}
									className={({ active }) =>
										`relative search-manufacturer__option ${
											active ? "text-white bg-primary-blue" : "text-gray-900"
										}`
									}
								>
									{fm}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};
export default SearchManufacturer;
