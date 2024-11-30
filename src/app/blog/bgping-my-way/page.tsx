import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "BGPing my way into the internet",
    description: "Learning about the Border Gateway Protocol, and actually utilizing it with my own IP space",
    authors: { name: "Nate M", url: "https://www.as213801.net"},
    category: "Networking",
};

export default function bgpingMyWay() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-10 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <div className={"md:inline-flex w-full md:mt-4 text-center mt-16"}>
                <a href={"/"}> <h1 className={"text-1xl md:ml-4 underline lg:block block"}>Web Home</h1> </a>
                <h1 className={"text-4xl ml-auto mr-auto mx-2 text-center"}>BGPing my way into the internet</h1>
                <a href={"/blog"}> <h1 className={"text-1xl md:mr-4 underline lg:block block"}>Blog Home</h1> </a>
            </div>

            <div className={"md:mx-32 mx-2 md:text-xl"}>
                <h2 className={"text-3xl text-center"}>
                    What even is BGP?
                </h2>
                <p>
                    BGP is, at a very high level, one of the main backbones of the internet. BGP is a network of
                    Autonomous Systems (AS&#39;s) that have agreed to connect to each other and share resources
                    between themselves. It is this agreement lets the many different Internet Service Providers (ISPs)
                    talk with each other easily and efficiently. On a side note, the BGP system relies heavily on trust,
                    and this can be realized if you look at a few incidents that have happened in the past. If you&#39;re curious
                    about these incidents, you can find more on them as cloudflare did a great article
                    about <a href={"https://www.cloudflare.com/learning/security/glossary/bgp-hijacking/"} className={"underline"}>BGP hijacking here.</a>
                </p>
                <br/>
                <h2 className={"text-3xl text-center"}>
                    Why am I even touching this?
                </h2>
                <p>
                    Its fun... Ok but really, I enjoy learning about everything and anything I can. Given the chance and ability to
                    learn about how the internet works by actually doing the things that big ISPs do myself. Well, I
                    Just couldn&#39;t pass this opportunity up! I am not doing this alone though, I have 3 good friends helping
                    me through the process (Yo Dylan, Shams, and Alex!), as well as everyone else in the discord server ;)
                    They are a tremendous help because I am very new to this and I am very often at a loss as to what I should do.
                </p>
                <br/>
                <h2 className={"text-3xl text-center"}>
                    Would I recommend just anyone try this?
                </h2>
                <p>
                    Its complicated. I am only just scratching the surface at this point but it is so cool to be learning
                    by actually just doing it. For everyone else though, this process has a lot of waiting involved so if
                    you have very low patience I would recommend straying away. I began looking into getting my AS number
                    on November 7th, 2024 and I officially received my AS number from RIPE on November 26th, 2024. Now yes,
                    that is not terribly long but it&#39;s still more than a week. Some LIR&#39;s can take even longer than mine.
                    In addition to the waiting periods with this, you do have the ability to make some people pretty unhappy
                    if you make a mistake. This isn&#39;t neccisarily setting up a few fiber runs and calling it a day, you&#39;re
                    touching the depths of the internet and interacting with other providers, some of which are gigantic!
                </p>
                <br/>
                <h2 className={"text-3xl text-center"}>
                    Closing remarks
                </h2>
                <p>
                    I have so much more to learn, as I said before I am just barely scratching the surface of this system.
                    There is a list of different things that I want to figure out still, setting up multihoming so I can have
                    a server located a bit closer to me than the netherlands, as well as more diverse peers and routes.
                    Maybe even getting the possibility of leasing a small block of IPv4 addresses to increase my presence.
                </p>
            </div>
        </div>
)
}