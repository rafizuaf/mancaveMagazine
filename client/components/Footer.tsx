import Link from 'next/link';

export function Footer() {
    return (
        <footer className='bg-black/90'>
            <div className="bg-black/90 text-white/80 py-5">
                <div className="mx-10 flex flex-col lg:flex-row gap-10 items-start justify-between">
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <img src="/mancave-hd-transparent.png" alt="logo" />
                    </div>
                    <nav className="lg:w-1/3">
                        <h2 className='text-white/80 text-center text-2xl font-semibold '>WHAT IS A MANCAVE?</h2>
                        <p className="text-white/40 mt-3 text-justify">
                            A room, space, corner or area of a dwelling that is specifically reserved for a male person to be in a solitary condition, away from the rest of the household in order to work, play, involve himself in certain hobbies, activities without interuption.
                        </p>

                    </nav>
                    <div className="lg:w-1/3 lg:mt-0 text-center lg:text-right">
                        <h2 className='text-white/80 text-center text-2xl font-semibold '>ABOUT US</h2>
                        <p className="text-white/40 mt-3 text-justify">Established in 2024, Mancave Magazine is the epitome of masculine elegance in the digital realm. As an independent purveyor of refined taste, we are not just a publication; we are a curated experience meticulously crafted for the modern...</p>
                        <span><Link href="/about" className="text-mancave underline">Read More</Link></span>

                    </div>
                </div>
            </div>
            <div className='bg-white/40'>
                <p className="text-white/80 text-center md:text-end px-10">
                    &copy; {new Date().getFullYear()} Mancave Magazine. All rights reserved.
                </p>
            </div>
        </footer>
    );
}