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
                    Hey yall! Lets ride the hype train of NixOS back into January of 2024! Here we can see the community was probably just as big
                    but it was still not as well known (at least I didn&#39;t know about it). It was around January 4th, 2024 when I was enlightened
                    by the distro that is NixOS. The worst part, I&apos;m still using that exact configuration to this day; though it has been edited
                    thoroughly. And I will say it upfront, This distro is not for the faint of heart, it requires time and effort to learn how
                    it works, why it works, and why I&apos;m still on the damn thing...
                </p>
                <br/>
                <h2 className={"text-3xl text-center"}>
                    Why am I still on this godforsaken distro
                </h2>
                <div>
                    I can sum it up into about 2 words, Hasn&apos;t Broken. Yes its that simple, I for some reason have a
                    tenancy to break everything I touch... Mac OS,
                    Windows, Linux, FreeBSD, prolly even Solaris and OpenIndiana. Its inevitable, BUT this distro has
                    some amazing and very unique features that
                    have been preventing me from absolutely nuking my computer multiple times in a row!
                    <br/><br/>
                    <h3 className={"text-2xl text-center"}>Generations</h3>
                    First and the biggest thing: Generations, these things are fucking amazing, and have saved my ass
                    multiple
                    times because of bad packages, weird updates, cancelling a rebuild half way through... all these
                    issues make
                    the generations a godsend. Basically you can rest assured that any system change you make is
                    completely and utterly reversible.
                    <br/><br/>
                    <h3 className={"text-2xl text-center"}>The Nix Config</h3>
                    The second thing, not as big but still incredibly important: the
                    <code className={"bg"}>/etc/nixos/configuration.nix</code> file!
                    This thing is the single dictatorship of your computer. Everything that you want, need, or use will
                    be defined by this file.
                    Filesystem mounts, packages, users, groups, hostnames, networking, sudo rules, udev rules, what
                    kernel you use,
                    what kernel modules, kernel params, timezone, locale, ... basically EVERYTHING is there. Yes I know,
                    this sounds really bad,
                    or even like a security risk, but let me assure you, this makes it extremely easy to migrate from
                    machine to machine without
                    needing to clone disks, or reinstall by hand. Just copy the configuration, hit it with that
                    nixos-install, and reset your password!
                    <br/><br/>
                    <h3 className={"text-2xl text-center"}>Nothing Just Works (and its a good thing)</h3>
                    The last main item on this list must be... Its kinda like security by obscurity, you have a distro
                    with a filesystem layout
                    like no other, everything on this system lives in the <code>/nix/store</code> directory and some things are
                    linked out and around to the standard locations. You WILL run into problems trying to run anything that
                    hasn&#39;t been packaged specifically for nixos, nearly anything you download from the internet will just
                    straight up not run. Even though this sounds like a pain, this is a really good thing. Everything that
                    has been packaged for nixos includes hashes for the provided files/binaries, and specific deps. The inclusion
                    of these dependencies allows for greater control over which versions are accessed by which packages,
                    reducing the number of dependency conflicts to effectively zero! (Also it can package windows binaries
                    into linux native acting binaries with wine, ex: winbox3, winbox 4 is linux native though)

                </div>
            </div>
        </div>
    )
}