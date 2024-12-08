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
    {title: "Test", description: "testing", url: "/blog/1", date: "today", categories: ["weeee"], author: "Nate M"},
];

export async function GET() {
    const feed = new RSS({
        title: 'Nate\'s goofy blog',
        description: "My adventures through wired protocol 6 and anything else I can get my grubby hands onto",
        generator: 'RSS for Node and Next.js',
        feed_url: 'https://www.as213801.net/rss.xml',
        site_url: 'https://www.as213801.net',
        managingEditor: '(Nate Moore)',
        webMaster: '(Nate Moore)',
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