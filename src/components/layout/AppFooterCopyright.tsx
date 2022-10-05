import config from "../../config";

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-dark-500 dark:text-light-500">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/jkhabra/portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Vite (react) & Tailwind CSS Portfolio
				</a>
				<a
					href="#"
					target="__blank"
					className="text-dark-300 dark:text-light-300 font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					{config.appName}
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
