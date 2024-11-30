// import RSS from "rss"

interface post {
    title: string,
    description: string,
    url: string,
    categories: string[],
    author: string,
    date: string,
}

export const runtime = 'edge';

const posts: post[] = [
    {title: "Test", description: "testing", url: "/blog/1", date: "today", categories: ["weeee"], author: "Nate M"},
    {title: "Test1", description: "testing", url: "/blog/1", date: "today", categories: ["weeee"], author: "Nate M"},
];

export async function GET() {
    // const feed = new RSS({
    //     title: 'Nate\'s goofy blog',
    //     description: "My adventures through wired protocol 6 and anything else I can get my grubby hands onto",
    //     generator: 'RSS for Node and Next.js',
    //     feed_url: 'https://www.as213801.net/rss.xml',
    //     site_url: 'https://www.as213801.net',
    //     managingEditor: '(Nate Moore)',
    //     webMaster: '(Nate Moore)',
    //     copyright: `Copyright ${new Date().getFullYear().toString()}, Nate Moore`,
    //     language: 'en-US',
    //     pubDate: new Date().toUTCString(),
    //     ttl: 60,
    // });
    //
    // posts.map((item) => {
    //     feed.item({
    //         title: item.title,
    //         description: item.description,
    //         url: item.url,
    //         categories: item.categories,
    //         date: item.date,
    //         author: item.author
    //     });
    // });

    // Adapt this for RSS feed generation instead?


    //     <atom:link href="" rel="alternate" type="application/rss+xml" />
    const rss = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  version="2.0">

  <channel>
    <title><![CDATA[Nate\'s goofy blog]]></title>
    <description><![CDATA[My adventures through wired protocol 6 and anything else I can get my grubby hands onto]]></description>
    <link>https://www.as213801.net/rss.xml</link>
    <generator>static-rss-generator</generator>
    <lastBuildDate>${Date().toString()}</lastBuildDate>
    ${posts.map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <pubDate>${item.date}</pubDate>
    </item>`
    )
        .join("\n")}
  </channel>
</rss>
  `.trim();

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}