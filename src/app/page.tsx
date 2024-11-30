interface cardData {
    title: string;
    content: string[][];
}

const data: cardData[] = [
    {title: "Points of Presence", content: [["https://quprawholesale.com/", "Shams Hana (Qupra DC) - Netherlands 🇳🇱"]]},
    {title: "Prefixes", content: [["https://bgp.tools/prefix/2a12:bec4:15f0::/44", "2a12:bec4:15f0::/44"]]},
    {title: "Upstreams", content: [["https://bgp.tools/as/215605", "AS215605 - Shams Hana"]]},
    {title: "Peers", content: [["https://bgp.tools/as/215605", "AS215605 - Shams Hana"]]}
];

interface article {
    title: string;
    uri: string;
    content: string;
}

const articles: article[] = [
    {title: "first", content: "Lorem Ipsum", uri: "/blog/1"},
];

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-10 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center text-xl leading-tight">
                <h1 className={"text-2xl"}> <a href={"https://bgp.tools/as/213801"} className={"underline"} target={"_blank"}> AS213801</a> - Nate M</h1>
                <h2>~ Making the internet my home one step at a time ~</h2>
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
                </div>
                <div className={"p-4 text-center rounded-lg ml-auto mr-auto"}
                     style={{backgroundColor: "#350535", gridColumn: "2 / 4"}}>
                    <h1 className={"text-3xl mb-6"}>
                        Blog time!
                    </h1>
                    <ul>
                        {
                            articles.map((item, index: number) => (
                                <li key={index} className={"flex"}>
                                    <a href={item.uri} target={"_blank"} className={"underline"}>{item.title}</a>
                                    <p>: {item.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </main>
            <footer className={"text-center w-full"}>
                <a href={"/rss.xml"} className={"text-center underline"}>rss feed</a>
                <p>😳 issa foot 😳</p>

            </footer>
        </div>
    );
}

// function card(title: string, content: [string[]]) {
//     return (
//
//     )
// }

// function links(link: string, content: string) {
//     return (
//             <li><a href={link} target={"_blank"}>{content}</a></li>
//     )
// }
