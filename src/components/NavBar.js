function NavBar(params) {
    return (
        <div>
            <nav className="flex items-center space-y-0.5 bg-slate-600 justify-between w-full h-2/3">
                <div><a href="#" className="text-2xl text-white ml-5">ApniWebsite</a></div>
                <div className="flex">
                    <ul className="flex">
                        <li className="inline  text-white font-semibold mr-9 mt-3 mb-3"><a href="#">Home </a></li>
                        <li className="inline  text-white font-semibold mr-9 mt-3 mb-3"><a href="#">Contact </a></li>
                        <li className="inline  text-white font-semibold mr-9 mt-3 mb-3"><a href="#">About Us </a></li>
                    </ul>
                    <button className="bg-gray-400 mr-8 py-1 px-3 rounded-md mt-3 mb-3 text-white font-bold">Sign Up</button>
                    <button className="bg-gray-400 mr-8 py-1 px-3 rounded-md mt-3 mb-3 text-white font-bold">Sign In</button>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;