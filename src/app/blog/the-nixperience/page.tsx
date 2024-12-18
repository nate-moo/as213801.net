import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "The Nixperience",
    description: "My experience with NixOS as my daily driver for a year",
    authors: { name: "Nate M", url: "https://www.as213801.net"},
    category: "Linux",
};

export default function bgpingMyWay() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-10 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <div className={"md:inline-flex w-full md:mt-4 text-center mt-16"}>
                <a href={"/"}> <h1 className={"text-1xl md:ml-4 underline lg:block block"}>Web Home</h1> </a>
                <h1 className={"text-4xl ml-auto mr-auto mx-2 text-center"}>{String(metadata.title)}</h1>
                <a href={"/blog"}> <h1 className={"text-1xl md:mr-4 underline lg:block block"}>Blog Home</h1> </a>
            </div>

            <div className={"md:mx-32 mx-2 md:text-xl"}>
                <h2 className={"text-3xl text-center"}>
                    The NixOS Experience
                </h2>
                <p>

                </p>
                <br/>
            </div>
        </div>
    )
}