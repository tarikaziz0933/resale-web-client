import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="absolute transform -translate-y-1/2 right-1/2 top-1/2">
                    <div className="mb-5">
                        <h3 className="mb-5 text-xl md:text-2xl font-semibold text-red-300">
                            Shape your body with
                        </h3>
                        <h1 className="tracking-wide text-3xl sm:text-4xl md:text-6xl font-bold text-red-500">
                            Resaler
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-slate-200">
                            We work worldwide. Our motive is to keep you healthy with our{" "}
                            <br />
                            <span className="text-2xl font-bold">
                                used gym equipment.
                            </span>
                        </p>
                    </div>
                    <div className="top-12 relative">
                        <Link to="/categories">
                            <button className="btn btn-outline btn-accent">Get Start</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="absolute transform -translate-y-1/2 right-1/2 top-1/2">
                    <div className="mb-5">
                        <h3 className="mb-5 text-xl md:text-2xl font-semibold text-red-300">
                            Shape your body with
                        </h3>
                        <h1 className="tracking-wide text-3xl sm:text-4xl md:text-6xl font-bold text-red-500">
                            Resaler
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-slate-200">
                            Collect your one's from our{" "}
                            <br />
                            <span className="text-2xl font-bold">
                                used gym equipment.
                            </span>
                        </p>
                    </div>
                    <div className="top-12 relative">
                        <Link to="/categories">
                            <button className="btn btn-outline btn-accent">Get Start</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="absolute transform -translate-y-1/2 right-1/2 top-1/2">
                    <div className="mb-5">
                        <h3 className="mb-5 text-xl md:text-2xl font-semibold text-red-300">
                            Shape your body with
                        </h3>
                        <h1 className="tracking-wide text-3xl sm:text-4xl md:text-6xl font-bold text-red-500">
                            Resaler
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-slate-200">
                            We work worldwide. Our motive is to keep you healthy with our{" "}
                            <br />
                            <span className="text-2xl font-bold">
                                used gym equipment.
                            </span>
                        </p>
                    </div>
                    <div className="top-12 relative">
                        <Link to="/categories">
                            <button className="btn btn-outline btn-accent">Get Start</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;
