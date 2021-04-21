import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch, AiOutlineCloseSquare } from 'react-icons/ai';
import Link from 'next/link';

export default function Header() {
	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	function handleChange(): void {
		setIsOpen(!isOpen);
	}

	return (
		<div className="my-4 mb-8 sm:my-8 flex flex-row justify-between items-center w-full">
			<Link href="/" as="/">
				<button type="button">
					<img
						className="w-24 sm:w-48 cursor-pointer"
						src="https://lh3.googleusercontent.com/proxy/AXE6xyB6Ax73HLdNPyW1cfIzupNSH-WDLmpAosI8eMkwzP-SjzAoHwANUmFCl2k9_i-7Bhs8sDeYfS6ECovfZcmqVjxpdiFDSNvGPfrH09clAW0"
						alt="loremnews-logo"
					/>
				</button>
			</Link>
			<div className="hidden sm:flex sm:flex-row sm:items-center">
				<button type="button" className="p-3 ml-1 hover:bg-gray-100 rounded-sm cursor-pointer transition-all">
					Bookmarks
				</button>
				<button type="button" className="p-3 ml-1 hover:bg-gray-100 rounded-sm cursor-pointer transition-all">
					Podcasts
				</button>
				<div className="ml-1 flex flex-row items-center p-3 hover:bg-gray-100 rounded-sm cursor-pointer transition-all">
					<AiOutlineSearch />
					<button type="button" className="ml-2">
						Search
					</button>
				</div>
				<button
					type="button"
					className="w-12 h-12 ml-2 overflow-hidden rounded-full border-2 border-gray-400 focus:border-red-700 focus:outline-none"
				>
					<img
						className="object-cover object-center w-full h-full"
						src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
						alt="user-photo"
					/>
				</button>
			</div>
			<button type="button" className="block sm:hidden" onClick={handleChange}>
				<GiHamburgerMenu className="fill-current w-8 h-8 cursor-pointer" />
			</button>
			<div
				className={`${isOpen
					? 'block'
					: 'hidden'} z-50 flex justify-center items-center sm:hidden fixed inset-0 bg-gray-900 text-white text-2xl`}
			>
				<button type="button" className="absolute top-8 right-4" onClick={handleChange}>
					<AiOutlineCloseSquare className="fill-current w-8 h-8" />
				</button>
				<div className="flex flex-col w-full">
					<button type="button" className="p-4 focus:bg-gray-400 focus:outline-none">
						Bookmarks
					</button>
					<button
						type="button"
						className="p-4 focus:bg-gray-400 focus:outline-none border-t-2 border-b-2 border-gray-100"
					>
						Podcasts
					</button>
					<button
						type="button"
						className="p-4 focus:bg-gray-400 focus:outline-none flex justify-center items-center border-b-2 border-gray-100"
					>
						<span>Search</span>
						<AiOutlineSearch className="ml-2" />
					</button>
					<div className="px-4 flex flex-col items-center justify-center mt-4">
						<button
							type="button"
							className="w-12 h-12 overflow-hidden rounded-full border-2 border-gray-400 focus:border-red-700 focus:outline-none text-white"
						>
							<img
								className="object-cover object-center w-full h-full"
								src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
								alt="user-photo"
							/>
						</button>
						<span className="text-sm mt-2">Account</span>
						<span className="text-sm mt-2">Settings</span>
						<span className="text-sm mt-2">Log out</span>
					</div>
				</div>
			</div>
		</div>
	);
}
