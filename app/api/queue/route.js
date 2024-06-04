import { NextResponse } from 'next/server'


const ans = [
    {
        time: 'Pierwsza przerwa - 8:45 - 8:55',
        songs: [
            {
                reserved: true,
                title: 'Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children',
                channel: 'Baby Shark - Pinkfong Kids’ Songs & Stories',
                avatar: 'https://yt3.ggpht.com/1cyrOm4Y6f959LIjhE2Zwqp77Lts6P_nCBCv0uRsMWTd-JYYY7TBXztNM52G7pJYzk-8g3AS9Nc=s88-c-k-c0x00ffffff-no-nd-rj',
                thumbnail: 'https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBfPJdOrAe6XPL62Qa1DCl3BpqHKg'
            },
            {
                reserved: false,
                title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
                channel: 'Luis Fonsi',
                avatar: 'https://yt3.ggpht.com/KozJ5jf107ZGpJmYOswW8yb7YQHBXwz-Cah27pwKctaunJxJcfIy3wPJb7RNAxQ1Q6uKU8lPHw=s88-c-k-c0x00ffffff-no-rj',
                thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg'
            },
            {
                reserved: false,
                title: 'Ed Sheeran - Shape of You [Official Video]',
                channel: 'Ed Sheeran',
                avatar: 'https://yt3.ggpht.com/ytc/AKedOLTtUOc-ILRLRiXlbZ6WESwLbshzKlNssXsV9imqoA=s88-c-k-c0x00ffffff-no-rj',
                thumbnail: 'https://i.ytimg.com/vi/JGwWNGJdvx8/mqdefault.jpg'
            },
        ]
    },
    {
        time: 'Druga przerwa - 9:40 - 9:50',
        songs: [
            {
                reserved: true,
                title: 'Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children',
                channel: 'Baby Shark - Pinkfong Kids’ Songs & Stories',
                avatar: 'https://yt3.ggpht.com/1cyrOm4Y6f959LIjhE2Zwqp77Lts6P_nCBCv0uRsMWTd-JYYY7TBXztNM52G7pJYzk-8g3AS9Nc=s88-c-k-c0x00ffffff-no-nd-rj',
                thumbnail: 'https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBfPJdOrAe6XPL62Qa1DCl3BpqHKg'
            },
            {
                reserved: true,
                title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
                channel: 'Luis Fonsi',
                avatar: 'https://yt3.ggpht.com/KozJ5jf107ZGpJmYOswW8yb7YQHBXwz-Cah27pwKctaunJxJcfIy3wPJb7RNAxQ1Q6uKU8lPHw=s88-c-k-c0x00ffffff-no-rj',
                thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg'
            },
            {
                reserved: false,
                title: 'Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack',
                channel: 'Wiz Khalifa',
                avatar: 'https://yt3.ggpht.com/ytc/AKedOLRmXw_LlSmrHR5xvHB9wgE3JkT5yE8S0iHkb0sI=s88-c-k-c0x00ffffff-no-rj',
                thumbnail: 'https://i.ytimg.com/vi/RgKAFK5djSk/mqdefault.jpg'
            },
            {
                reserved: false,
                title: 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars',
                channel: 'Mark Ronson',
                avatar: 'https://yt3.ggpht.com/ytc/AKedOLQ7Eo1JYfJP1dCXrAmLAnCmTcRrTlh2-CtSd7A0=s88-c-k-c0x00ffffff-no-rj',
                thumbnail: 'https://i.ytimg.com/vi/OPf0YbXqDm0/mqdefault.jpg'
            },
        ]
    }
]

export const GET = async (req, res) => {
    return NextResponse.json({ans, status: 200})
}