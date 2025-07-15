interface cardData {
    title: string;
    content: string[][];
}

const data: cardData[] = [
    {title: "Points of Presence", content: [
            ["https://quprawholesale.com/", "Shams Hanna (Qupra DC) - Netherlands 🇳🇱"],
            ["https://tritan.gg/", "Tritan Intenet - Kansas City 🇺🇸"]
        ]},
    {title: "Prefixes", content: [
            ["https://bgp.tools/prefix/2a12:bec4:15f0::/45", "2a12:bec4:15f0::/45"],
            ["https://bgp.tools/prefix/2a12:bec4:15f8::/45", "2a12:bec4:15f8::/45"],
            ["https://bgp.tools/prefix/2602:f766:b::/48", "2602:f766:b::/48"]
        ]},
    {title: "Upstreams", content: [
            ["https://bgp.tools/as/215605", "AS215605 - Shams Hanna"],
            ["https://bgp.tools/as/393577", "AS393577 - Tritan Internet"],
            ["https://bgp.tools/as/401538", "AS401538 - Nova 86"]
        ]},
    {title: "Main Peers & IXs", content: [
            ["https://bgp.tools/as/215605", "AS215605 - Shams Hanna"],
            ["https://bgp.tools/as/393577", "AS393577 - Tritan Internet"],
            ["https://bgp.tools/as/401538", "AS401538 - Nova 86"],
            ["https://bgp.tools/ixp/F4IX%20MCI", "IX4378 - F4IX MCI"]
        ]}
];

interface article {
    title: string;
    uri: string;
    content: string;
}

const articles: article[] = [
    {
        title: "BGP Part 1",
        uri: "/blog/bgping-my-way",
        content: "Learning about the Border Gateway Protocol, and actually utilizing it with my own IP space"
    }
];

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-10 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center text-xl leading-tight">
                <h1 className={"text-2xl"}> <a href={"https://bgp.tools/as/213801"} className={"underline"} target={"_blank"}> AS213801</a> - Nate M</h1>
                <div className={"subtitleTilda"}><h2>Making the internet my home one step at a time</h2></div>
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className={"grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 gap-3 min-h-2 mx-8"}>
                    {
                        data.map((stuff, index) => (
                            <div
                                key={index}
                                className={"p-4 text-center rounded-lg"}
                                style={{backgroundColor: "#350535"}}
                            >
                                <h1 className={"text-3xl"}>
                                    {stuff.title}
                                </h1>
                                <ul className={"underline"}>
                                    {
                                        stuff.content.map((item: string[], index: number) => (
                                            <li key={index}><a href={item[0]} target={"_blank"}>{item[1]}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                    <div className={"p-4 text-center rounded-lg bg-[#350535]  md:col-span-2 md:col-start-2 col-span-1 col-start-1"}>
                        <h1 className={"text-3xl mb-6"}>
                            Blog time!
                        </h1>
                        <ul>
                            {
                                articles.map((item, index: number) => (
                                    <li key={index} className={"flex"}>
                                        <a href={item.uri} target={"_blank"}
                                           className={"underline text-nowrap"}>{item.title}: </a>
                                        <p className={"ml-0.5 text-wrap"}>{item.content}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </main>
            <footer className={"text-center w-full"}>
                <a href={"/feed.xml"} className={"text-center underline"}>rss feed</a>
                <p>😳 issa footr 😳</p>

            </footer>
        </div>
    );
}
