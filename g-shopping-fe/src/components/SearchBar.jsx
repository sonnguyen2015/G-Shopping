import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
	return (
		<div className="group relative">
			<input
				type="text"
				className="w-full py-1 px-5 input-primary"
				placeholder="What are you looking for?"
			/>
			<button
				type="button"
				className="absolute right-2 top-2 group-hover:text-button-hover2"
			>
				<BiSearch size={20} />
			</button>
		</div>
	);
};

export default SearchBar;
