import Image from "next/image";

export const MainIntro = () => (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 mb-16 justify-center">
        <Image className="rounded-full mx-auto lg:mx-0 ring-white lg:w-48 w-28" alt="Photo of me" src="/me.jpg" width={200} height={200} />
        <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl mt-2 text-teal-300">
                Valerii Bubenshchikov
            </h1>
            <p className="mt-1 text-center lg:text-start">
                I write about web development, programming, <br/>
                and other things that interest me.
            </p>
            <div className="mt-4 text-sm">
                <span>Feel free to reach out to me on</span>
                <p className="flex gap-2 justify-center lg:justify-start">
                    <a className="text-blue-500 hover:text-blue-600 font-bold" target="_blank" href="https://twitter.com/theaugustbright">Twitter</a>
                    <span>•</span>
                    <a className="text-blue-500 hover:text-blue-600 font-bold" target="_blank" href="https://www.linkedin.com/in/augustbright/">LinkedIn</a>
                </p>
            </div>
        </div>
    </div>
)