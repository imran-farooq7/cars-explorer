import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { getAllCars } from "@/utils";

export default async function Home() {
	const data = await getAllCars();
	const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;
	console.log(data);
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Car Catalouge</h1>
					<p>Explore the cars you like</p>
				</div>
				<div className="home__filters">
					<SearchBar />
					<div className="home_filter-container">
						<CustomFilter title="fuel" />
						<CustomFilter title="year" />
					</div>
				</div>
				{!isDataEmpty ? (
					<div className="home__car-wrapper">
						{data?.map((car) => (
							<CarCard car={car} />
						))}
					</div>
				) : (
					<div className="home__error-container">
						<h2 className="text-black text-xl font-bold">Opps,no results</h2>
						<p>{data?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
