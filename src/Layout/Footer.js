

export default function Footer() {

    return (

        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-2 dark:bg-sky-500 static">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CODERHOUSE</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-white">© 2022 <a href="https://flowbite.com/" className="hover:underline">Shopping Goods</a>. All Rights Reserved.
            </span>
        </footer>
    )
}