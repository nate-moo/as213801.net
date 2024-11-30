import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AS213801',
}

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-10 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center text-xl leading-tight">
                <h1 className={"text-2xl"}> <a href={"https://bgp.tools/as/213801"} className={"underline"} target={"_blank"}> AS213801</a> - Nate M</h1>
                <h2>~ Making the internet my home one step at a time ~</h2>
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className={"grid grid-cols-4 grid-rows-1 gap-3"}>
                    <div className={"p-4 text-center outline outline-1 rounded-lg"}>
                        <h1 className={"text-3xl"}>
                            Points Of Presence
                        </h1>
                        <ul className={"underline"}>
                            <li>
                                <a href={"https://quprawholesale.com/"} target={"_blank"}>Shams Hana (Qupra DC) - Netherlands 🇳🇱</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"p-4 text-center outline outline-1 rounded-lg"}>
                        <h1 className={"text-3xl"}>
                            Prefixes
                        </h1>
                        <ul className={"underline"}>
                            <li>
                                <a href={"https://bgp.tools/prefix/2a12:bec4:15f0::/44"} target={"_blank"}>2a12:bec4:15f0::/44</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"p-4 text-center outline outline-1 rounded-lg"}>
                        <h1 className={"text-3xl"}>
                            Upstreams
                        </h1>
                        <ul className={"underline"}>
                            <li>
                                <a href={"https://bgp.tools/as/215605"} target={"_blank"}>AS215605 - Shams Hana</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"p-4 text-center outline outline-1 rounded-lg"}>
                        <h1 className={"text-3xl"}>
                            Peers
                        </h1>
                        <ul className={"underline"}>
                            <li>
                                <a href={"https://bgp.tools/as/215605"} target={"_blank"}>AS215605 - Shams Hana</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
