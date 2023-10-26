import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import Link from 'next/link'

const LandingPage = () => {
    return (
        <div>
            <div class="bg-img py-20 " style={{
                // backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-black-atmosphere-simple-meal-food-food-banner-picture-image_1084037.jpg')"
            }}>
                <div class="container mx-auto px-6">
                    <h2 class="text-4xl font-bold mb-2 text-white">
                        Fresh Food with Great Taste
                    </h2>
                    <h3 class="text-2xl mb-8 text-gray-200">
                        Discover what you need easily!
                    </h3>

                    <Link href='/Menu' class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Order Now
                    </Link>
                </div>
            </div>
            <div class="cards-hed">
                <h2>
                    <pre>
                        View All Our New Openings
                    </pre>
                </h2>
            </div>
            <div class="cards">
                <div class="card c1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div class="card c2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div class="card c3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div class="card c4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div class="card c5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <section class="test">
                <div class="container mx-auto px-6 mt-20">
                    <h2 class="text-xl font-semibold text-center text-gray-800 mb-8">
                        Testimonials
                    </h2>
                    <h2 class="text-4xl font-bold text-center text-gray-800 mb-20">
                        <pre>
                            We have worked with thousands
                            <br />
                            of amazing people
                        </pre>
                    </h2>
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/3 px-2 mb-4 pt-24">
                            <div class="bg-white rounded-2xl shadow-lg py-2">
                                <p class="text-gray-800 text-base px-6 mb-5">Great app with lots of offers</p>
                                <div className='flex ml-6 items-center justify-start'>
                                    <Avatar>
                                        <AvatarImage src="https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2020/05/0.jpg?resize=500%2C500&ssl=1" />
                                        <AvatarFallback>Logo</AvatarFallback>
                                    </Avatar>
                                    <p class="text-gray-500 font-medium text-xs md:text-sm px-6">John Hamilton</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2 mb-4">
                            <div class="bg-white rounded-2xl shadow-lg py-2">
                                <p class="text-gray-800 text-base px-6 mb-5">It'd been an absolute smooth and delightful experience as of late with the initial glitches of last year seem to have all been fixed and its interface is quite easy to use. They are fast to respond to most issues and queries.</p>
                                <div className='flex ml-6 items-center justify-start'>
                                    <Avatar>
                                        <AvatarImage src="https://cdn.youpic.com/huge/1416143_3ogqbsrvmm1khn4ehg9m5ucmtm_103510.jpg" />
                                        <AvatarFallback>Logo</AvatarFallback>
                                    </Avatar>
                                    <p class="text-gray-500 font-medium text-xs md:text-sm px-6">Mary Poppins</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2 mb-4 pt-16">
                            <div class="bg-white rounded-2xl shadow-lg py-2">
                                <p class="text-gray-800 text-base px-6 mb-5">Fantastic experience. It's good to have someone who can deliver food at your doorstep.</p>
                                <div className='flex ml-6 items-center justify-start'>
                                    <Avatar>
                                        <AvatarImage src="https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg:large" />
                                        <AvatarFallback>Logo</AvatarFallback>
                                    </Avatar>
                                    <p class="text-gray-500 font-medium text-xs md:text-sm px-6">Jonas Kahnwald</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2 mb-4">
                            <div class="bg-white rounded-2xl shadow-lg py-2">
                                <p class="text-gray-800 text-base px-6 mb-5">Really fantastic - as a British tourist to India I would say this is much better than Deliveroo or UberEats, as we have in the UK. Perfect service and very accurate order tracking every time. Many thanks to the team for creating such a great app!</p>
                                <div className='flex ml-6 items-center justify-start'>
                                    <Avatar>
                                        <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" />
                                        <AvatarFallback>Logo</AvatarFallback>
                                    </Avatar>
                                    <p class="text-gray-500 font-medium text-xs md:text-sm px-6">Peter Doppler</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2 mb-4">
                            <div class="bg-white rounded-2xl shadow-lg py-2">
                                <p class="text-gray-800 text-base px-6 mb-5">One of the best food-delivery websites!</p>
                                <div className='flex ml-6 items-center justify-start'>
                                    <Avatar>
                                        <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" />
                                        <AvatarFallback>Logo</AvatarFallback>
                                    </Avatar>
                                    <p class="text-gray-500 font-medium text-xs md:text-sm px-6">Claudia Tiedmann</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2 mb-4">
                            <div class="bg-white rounded-2xl shadow-lg py-2">
                                <p class="text-gray-800 text-base px-6 mb-5">It is a game-changer in the world of food delivery and dining apps! I can't express how much I love using it. The app's user-friendly interface makes ordering food a breeze. It's like having a world of cuisine options at your fingertips. The variety of restaurants and dishes available is mind-blowing – from local favorites to global cuisines. The real-time tracking feature is a lifesaver, ensuring I know exactly when my food will arrive.</p>
                                <div className='flex ml-6 items-center justify-start'>
                                    <Avatar>
                                        <AvatarImage src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" />
                                        <AvatarFallback>Logo</AvatarFallback>
                                    </Avatar>
                                    <p class="text-gray-500 font-medium text-xs md:text-sm px-6">Katherina Nielson</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LandingPage