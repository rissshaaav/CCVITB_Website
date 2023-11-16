import Image from "next/image";


const About = () => {

    return (
        <div>
            <Image
                className="h-96  w-full aspect-video object-cover"
                alt="we-together"
                src="/images/img2.jpg"
                width={96}
                height={96}
                unoptimized
            />
            <div>
                <div className="bg-blue-900 h-96 w-full opacity-60 absolute z-900 top-0 font-Poppins text-white">
                </div>
                <h1 className="-mx-20 absolute top-1/4 left-2/4 text-white text-4xl font-bold">ABOUT US</h1>
            </div>
            <section className="bg-gradient-to-r from-indigo-200 to-transparent lg:m-0 flex flex-col-reverse lg:flex-row justify-between">
                <div>
                    <div className="m-0 lg:my-40 mx-10 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Who are we?</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <Image
                    alt="we-together"
                    className="mx-5 my-5 rounded-lg object-contain"
                    src="/images/605.png"
                    height={500}
                    width={500}
                />
            </section>
            <section className="bg-gradient-to-r from-indigo-200 to-transparent lg:m-0 flex flex-col lg:flex-row justify-between">
                <Image
                    alt="we-together"
                    className="mx-5 my-5 rounded-lg object-contain"
                    src="/images/2965738.jpg"
                    height={500}
                    width={500}
                />
                <div>
                    <div className="m-0 lg:my-40 mx-10 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What do we do?</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-r from-indigo-200 to-transparent lg:m-0 flex flex-col-reverse lg:flex-row justify-between">
                <div>
                    <div className="m-0 mb-5 lg:my-40 mx-10 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is our vision?</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <Image
                    alt="we-together"
                    className="mx-5 my-5 rounded-lg object-contain"
                    src="/images/20943892.jpg"
                    height={500}
                    width={500}
                />
            </section>
        </div>
    )
}

export default About;