import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-black/90 text-white/80 py-10">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <img src="/mancave-hd-transparent.png" alt="logo" />
                    <h2 className='text-white/80 text-center text-2xl font-semibold mt-3'>WHAT IS A MANCAVE?</h2>
                    <p className="text-white/40 mt-3">
                        A room, space, corner or area of a dwelling that is specifically reserved for a male person to be in a solitary condition, away from the rest of the household in order to work, play, involve himself in certain hobbies, activities without interuption.
                    </p>
                    <h2 className='text-white/80 text-center text-2xl font-semibold mt-3'>ABOUT US</h2>
                    <p className="text-white/40 mt-3">Established in 2024, Mancave Magazine is the epitome of masculine elegance in the digital realm! As an independent purveyor of refined taste, we are not just a publication; we are a curated experience meticulously crafted for the modern man of discerning style and passion. Within these virtual pages, we celebrate the artistry of roaring engines, the allure of sleek gears, the pulse of cutting-edge gaming, and the symphony of timeless music. Mancave Magazine is the brainchild of a dedicated team, tirelessly committed to the pursuit of excellence in men's culture. We may not boast multinational proportions, but our authenticity and commitment set us apart. Join us on this journey where craftsmanship, sophistication, and the pursuit of all things extraordinary converge, redefining the essence of the modern man's lifestyle. Welcome to the Mancave – where substance meets style with unapologetic refinement.</p>
                </div>
                <nav className="lg:w-1/3">
                    <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0">
                        <li>
                            <Link href="/home" className="text-white/80 hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/brief-histories" className="text-white/80 hover:text-white">
                                Brief Histories
                            </Link>
                        </li>
                        <li>
                            <Link href="/what-is-a-silodrome" className="text-white/80 hover:text-white">
                                What is a Silodrome?
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="text-white/80 hover:text-white">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="lg:w-1/3 mt-8 lg:mt-0 text-center lg:text-right">
                    <div className="flex space-x-4">
                        {/* <SocialIcon kind="facebook" href="#" />
                        <SocialIcon kind="twitter" href="#" />
                        <SocialIcon kind="youtube" href="#" />
                        <SocialIcon kind="instagram" href="#" /> */}
                    </div>
                    <p className="text-white/80 mt-4">
                        &copy; {new Date().getFullYear()} Silodrome. All rights reserved. Powered by Gasoline and Caffeine.
                    </p>
                </div>
            </div>
        </footer>
    );
}