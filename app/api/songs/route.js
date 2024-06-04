import { NextResponse } from 'next/server'

const ans = [
    {
        title: 'Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children',
        channel: 'Baby Shark - Pinkfong Kids’ Songs & Stories',
        avatar: 'https://yt3.ggpht.com/1cyrOm4Y6f959LIjhE2Zwqp77Lts6P_nCBCv0uRsMWTd-JYYY7TBXztNM52G7pJYzk-8g3AS9Nc=s88-c-k-c0x00ffffff-no-nd-rj',
        thumbnail: 'https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBfPJdOrAe6XPL62Qa1DCl3BpqHKg'
    },
    {
        title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
        channel: 'Luis Fonsi',
        avatar: 'https://yt3.ggpht.com/KozJ5jf107ZGpJmYOswW8yb7YQHBXwz-Cah27pwKctaunJxJcfIy3wPJb7RNAxQ1Q6uKU8lPHw=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg'
    },
    {
        title: 'Johny Johny Yes Papa 👶 THE BEST Song for Children | LooLoo Kids',
        channel: 'LooLoo Kids - Nursery Rhymes and Children\'s Songs',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLTVQi13o-jJUr2sjNGi9oxYwCHHs7Wt8_ZjcmIfKQ=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/fu-zZfEfBqY/mqdefault.jpg'
    },
    {
        title: 'Bath Song | CoComelon Nursery Rhymes & Kids Songs',
        channel: 'Cocomelon - Nursery Rhymes',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLQ_BeDFmryvJouNm-1FpEzTgJjZhJcv5_vLzLbUoA=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/egxVRj1ioi0/mqdefault.jpg'
    },
    {
        title: 'Ed Sheeran - Shape of You [Official Video]',
        channel: 'Ed Sheeran',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLTtUOc-ILRLRiXlbZ6WESwLbshzKlNssXsV9imqoA=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/JGwWNGJdvx8/mqdefault.jpg'
    },
    {
        title: 'Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack',
        channel: 'Wiz Khalifa',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRmXw_LlSmrHR5xvHB9wgE3JkT5yE8S0iHkb0sI=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/RgKAFK5djSk/mqdefault.jpg'
    },
    {
        title: 'Wheels on the Bus | CoComelon Nursery Rhymes & Kids Songs',
        channel: 'Cocomelon - Nursery Rhymes',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLQ_BeDFmryvJouNm-1FpEzTgJjZhJcv5_vLzLbUoA=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/0dtacEWBzOI/mqdefault.jpg'
    },
    {
        title: 'Phonics Song with TWO Words - A For Apple - ABC Alphabet Songs with Sounds for Children',
        channel: 'ChuChu TV Nursery Rhymes & Kids Songs',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLTgDf5DKyE0HHwJNTnN0qXE7rTfg97-Q0bXJeX_Lw=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/ySiWUtwXbIw/mqdefault.jpg'
    },
    {
        title: 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars',
        channel: 'Mark Ronson',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLQ7Eo1JYfJP1dCXrAmLAnCmTcRrTlh2-CtSd7A0=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/OPf0YbXqDm0/mqdefault.jpg'
    },
    {
        title: 'Learning Colors – Colorful Eggs on a Farm',
        channel: 'Mega Fun Kids Songs & Nursery Rhymes',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLQCOEqmlj7pAimkdQd2eC7QwJ8B7E-WppzYag=s88-c-k-c0x00ffffff-no-rj',
        thumbnail: 'https://i.ytimg.com/vi/OKHxD5GwqO0/mqdefault.jpg'
    }
];


export const POST = async (req, res) => {
    return NextResponse.json(ans, {status: 201})
}