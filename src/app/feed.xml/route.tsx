import RSS from "rss"

interface post {
    title: string,
    description: string,
    url: string,
    categories: string[],
    author: string,
    date: string,
}

const posts: post[] = [
    // {title: "Test", description: "testing", url: "/blog/1", date: "today", categories: ["weeee"], author: "Nate M"},
    {
        title: "BGPing my way into the internet",
        description: "Learning about the Border Gateway Protocol, and actually utilizing it with my own IP space",
        author: "Nate M",
        categories: ["Networking"],
        url: "https://as213801.net/blog/bgping-my-way",
        date: "12-09-2024"
    }
];

// export const runtime = 'edge';

export async function GET() {
    const feed = new RSS({
        title: 'Nate\'s goofy blog',
        description: "My adventures through wired protocol 6 and anything else I can get my grubby hands onto",
        generator: 'RSS for Node and Next.js',
        feed_url: 'https://www.as213801.net/feed.xml',
        site_url: 'https://www.as213801.net',
        managingEditor: 'blog@as213801.net (Nate M)',
        webMaster: 'blog@as213801.net (Nate M)',
        copyright: `Copyright ${new Date().getFullYear().toString()}, Nate Moore`,
        language: 'en-US',
        pubDate: new Date().toUTCString(),
        ttl: 60,
    });

    posts.map((item) => {
        feed.item({
            title: item.title,
            description: item.description,
            url: item.url,
            categories: item.categories,
            date: item.date,
            author: item.author
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}