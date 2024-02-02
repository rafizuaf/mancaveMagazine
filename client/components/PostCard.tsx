import Link from "next/link";
import * as React from "react";

interface Comment {
    id: number;
    content: string;
    author: string;
    authorId: number;
    createdAt: string;
    updatedAt: string;
}

interface Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    thumbnail: string;
    tags: string[];
    comments: Comment[];
    createdAt: string;
    updatedAt: string;
    author: string;
    authorId: number;
}

export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

export const truncateContent = (content: string, wordsCount: number): string => {
    const words = content.split(' ');
    if (words.length > wordsCount) {
        return words.slice(0, wordsCount).join(' ') + '...';
    }
    return content;
};

const PostCard: React.FC = () => {
    const posts: Post[] = [
        {
            id: 1,
            title: `The Most Stylish Mini Bike Ever: Auto Fabrica's Type 0.1`,
            slug: 'the-most-stylish-mini-bike-ever',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Consectetur adipiscing elit pellentesque habitant. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Duis at tellus at urna condimentum. Sit amet mattis vulputate enim. Vivamus at augue eget arcu dictum. Interdum posuere lorem ipsum dolor sit amet. A scelerisque purus semper eget duis at. Suspendisse in est ante in. Quis lectus nulla at volutpat diam ut venenatis tellus in. Vitae tempus quam pellentesque nec nam aliquam. Pharetra et ultrices neque ornare aenean. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Malesuada bibendum arcu vitae elementum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Neque viverra justo nec ultrices dui sapien.

            Lacus vel facilisis volutpat est velit egestas dui id. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Neque convallis a cras semper. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Quis ipsum suspendisse ultrices gravida dictum. Pellentesque habitant morbi tristique senectus et netus. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Faucibus ornare suspendisse sed nisi lacus sed. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Nunc sed augue lacus viverra vitae congue eu consequat ac. Purus in mollis nunc sed id semper risus in. Enim eu turpis egestas pretium aenean pharetra. Laoreet sit amet cursus sit amet. Interdum posuere lorem ipsum dolor. Feugiat pretium nibh ipsum consequat. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
            
            Non nisi est sit amet facilisis magna etiam tempor. Facilisis volutpat est velit egestas dui id ornare arcu odio. Duis at consectetur lorem donec massa. Magnis dis parturient montes nascetur. Amet venenatis urna cursus eget nunc. Vestibulum sed arcu non odio euismod lacinia at quis risus. At in tellus integer feugiat scelerisque varius morbi. Posuere urna nec tincidunt praesent semper. Et ultrices neque ornare aenean euismod elementum nisi quis. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nullam non nisi est sit amet facilisis magna. Odio aenean sed adipiscing diam donec adipiscing tristique. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Pulvinar pellentesque habitant morbi tristique senectus. Cras ornare arcu dui vivamus arcu felis. Vivamus at augue eget arcu dictum varius duis at consectetur. Amet mauris commodo quis imperdiet massa.`,
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/5a01cbe59f8dce508025d53d/1512642810515-I7XPGYNAP2FH6FWGB1SY/Auto+Fabrica+Type+01+%281%29+%28Large%29.jpg',
            tags: ['motorcycles', 'kids'],
            comments: [
                {
                    id: 1,
                    content: 'Comment 1',
                    author: 'Isal',
                    authorId: 2,
                    createdAt: '2022-01-01',
                    updatedAt: '2022-01-01',
                }
            ],
            createdAt: '2022-01-23',
            updatedAt: '2022-01-23',
            author: 'Rafi',
            authorId: 1
        },
        {
            id: 2,
            title: `A Porsche 911 Reimagined By Singer – The Brooklyn Commission`,
            slug: 'a-porsche-911-reimagined-by-singer',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Consectetur adipiscing elit pellentesque habitant. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Duis at tellus at urna condimentum. Sit amet mattis vulputate enim. Vivamus at augue eget arcu dictum. Interdum posuere lorem ipsum dolor sit amet. A scelerisque purus semper eget duis at. Suspendisse in est ante in. Quis lectus nulla at volutpat diam ut venenatis tellus in. Vitae tempus quam pellentesque nec nam aliquam. Pharetra et ultrices neque ornare aenean. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Malesuada bibendum arcu vitae elementum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Neque viverra justo nec ultrices dui sapien.

            Lacus vel facilisis volutpat est velit egestas dui id. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Neque convallis a cras semper. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Quis ipsum suspendisse ultrices gravida dictum. Pellentesque habitant morbi tristique senectus et netus. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Faucibus ornare suspendisse sed nisi lacus sed. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Nunc sed augue lacus viverra vitae congue eu consequat ac. Purus in mollis nunc sed id semper risus in. Enim eu turpis egestas pretium aenean pharetra. Laoreet sit amet cursus sit amet. Interdum posuere lorem ipsum dolor. Feugiat pretium nibh ipsum consequat. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
            
            Non nisi est sit amet facilisis magna etiam tempor. Facilisis volutpat est velit egestas dui id ornare arcu odio. Duis at consectetur lorem donec massa. Magnis dis parturient montes nascetur. Amet venenatis urna cursus eget nunc. Vestibulum sed arcu non odio euismod lacinia at quis risus. At in tellus integer feugiat scelerisque varius morbi. Posuere urna nec tincidunt praesent semper. Et ultrices neque ornare aenean euismod elementum nisi quis. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nullam non nisi est sit amet facilisis magna. Odio aenean sed adipiscing diam donec adipiscing tristique. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Pulvinar pellentesque habitant morbi tristique senectus. Cras ornare arcu dui vivamus arcu felis. Vivamus at augue eget arcu dictum varius duis at consectetur. Amet mauris commodo quis imperdiet massa.`,
            thumbnail: 'https://silodrome.com/wp-content/uploads/2021/06/Porsche-911-Reimagined-By-Singer-e1623163700512-1600x1131.jpg',
            tags: ['cars', 'porsche', 'european'],
            comments: [],
            createdAt: '2022-01-23',
            updatedAt: '2022-01-23',
            author: 'Isal',
            authorId: 2
        }
    ];

    return (
        <article className="mb-5">
            {posts.map(post => (
                <div key={post.id} className="container text-center">
                    <div>
                        <Link href={`/${post.slug}`} className="text-xl md:text-4xl text-gray-700 hover:text-mancave transition duration-300 font-bold my-2">{post.title}</Link>
                        <div className="flex flex-wrap justify-center mt-2 mb-5">
                            {post.tags.map((tag, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <span className="text-xs md:text-sm text-center text-gray-700 px-2">|</span>}
                                    <Link href={`/${tag}`} className="text-xs md:text-sm text-center hover:underline transition duration-300 text-mancave px-2">
                                        {tag.toUpperCase()}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </div>
                        <img src={post.thumbnail} alt="Thumbnail" className="w-full h-auto object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-300" />
                        <p className="text-center md:text-start text-xs md:text-base font-semibold italic text-gray-700 my-3">Written by <span className="text-mancave">{post.author}</span> | {formatDate(post.createdAt)}</p>
                        <p className="md:text-lg text-justify text-pretty">
                            {truncateContent(post.content, 30)}
                            {' '}
                            <Link href={`/${post.slug}`} className="text-mancave hover:underline transition duration-300">
                                Read more
                            </Link>
                        </p>
                        <hr className="my-5 bg-mancave" />
                    </div>
                </div>
            ))}
        </article>
    );
};

export default PostCard;