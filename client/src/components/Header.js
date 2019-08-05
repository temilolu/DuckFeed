import React from 'react';

const Header = () => (
	<React.Fragment>
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<svg
					className="fill-current h-8 w-8 mr-2"
					height="60"
					viewBox="0 0 60 60"
					width="60"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="Shape"
						d="m59.861 45.5h.005l-17.557-30.5h16.691c.4404522.0003206.829252-.2875769.9574398-.7089629.1281879-.4213859-.0344238-.8770258-.4004398-1.1220371l-17.92-12c-.4240468-.28466283-.9944603-.20403748-1.323.187-11.014 13.115-10.333 12.124-10.314 12.693.012.237-.344-.806 6.029 16.57l-24.668-9.552c-.3730676-.1447469-.7965043-.0531533-1.0763994.2328359-.2798951.2859893-.36234828.7113003-.2096006 1.0811641l5.675 13.775-14.55-2.968c-.41771024-.0850946-.84344164.1039672-1.06040649.470913-.21696486.3669458-.17745668.8310909.09840649 1.156087l22 25.833c.1900798.2234143.468667.3521055.762.352h24c.2919624-.0002729.5692245-.1281276.759-.35l12-14c.2798477-.3206277.3210463-.7851225.102-1.15zm-21.039 7.27-31.068-16.204 47.716 9.734zm2.447-49.44 14.44 9.67h-22.563zm-1.269 11.67 17.028 29.577-14.86-3.031-9.736-26.546zm-.136 26.076-7.228-1.476-16.712-14.621 21.023 8.14zm-26.317-15.519 15.128 13.236-10.563-2.155zm-8.447 11.879 31.247 16.3-13.047 5.075zm41.44 21.564h-18.211l27.317-10.623z"
						transform="translate(0 -1)"
					/>
				</svg>

				<span className="font-semibold text-xl tracking-tight">DuckFeed</span>
			</div>

			{/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
				<div className="text-right">
					<a
						href="/"
						className=" inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 text-right"
					>
						My Account
					</a>
				</div>
			</div> */}
		</nav>
	</React.Fragment>
);

export default Header;
