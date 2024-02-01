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
    content: string;
    thumbnail: string;
    tags: string[];
    comments: Comment[];
    createdAt: string;
    updatedAt: string;
    author: string;
    authorId: number;
}

const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

const PostCard: React.FC = () => {
    const posts: Post[] = [
        {
            id: 1,
            title: `The Most Stylish Mini Bike Ever: Auto Fabrica's Type 0.1`,
            content: 'Content 1',
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
            content: 'Content 2',
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
                <div key={post.id} className="text-center">
                    <div className="mx-auto">
                        <a href={`/post/${post.id}`} className="text-xl md:text-4xl text-gray-700 hover:text-mancave transition duration-300 font-bold my-2">{post.title}</a>
                        <div className="flex flex-wrap justify-center mt-2 mb-5">
                            {post.tags.map((tag, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <span className="text-xs md:text-sm text-center text-gray-700 px-2">|</span>}
                                    <a href={`/${tag}`} className="text-xs md:text-sm text-center text-mancave px-2">
                                        {tag.toUpperCase()}
                                    </a>
                                </React.Fragment>
                            ))}
                        </div>
                        <img src={post.thumbnail} alt="Thumbnail" className="md:px-5 w-full h-auto object-cover" />
                        <p className="text-center md:text-start text-xs md:text-base font-bold italic text-gray-700 my-3 px-5">Written by <span className="text-mancave">{post.author}</span> | {formatDate(post.createdAt)}</p>
                        <p>{post.content}</p>
                        <p>{post.comments.length}</p>
                        <hr className="my-5 bg-mancave" />
                    </div>
                </div>
            ))}
        </article>
    );
};

export default PostCard;