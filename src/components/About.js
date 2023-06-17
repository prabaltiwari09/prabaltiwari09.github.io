import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Prabal.
                        <br className="hidden lg:inline-block" />I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Prabal Tiwari is a software engineer with 4 years of experience in backend technologies. He has a strong background in Node.js and Spring Boot and has previously worked as a software development engineer with Rebel Foods and Rakuten Symphony. Currently residing in Indore, India, Prabal is passionate about his work and enjoys exploring new technologies. In his free time, he indulges in activities such as swimming, cycling, traveling, and socializing. His technical skills include JavaScript, Node.js, MySQL, Java, Spring Boot, and AWS. Prabal is driven by his belief in the transformative power of technology and strives to write impactful code that can bring about positive change in the world.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}