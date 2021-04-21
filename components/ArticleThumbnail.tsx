import React from 'react';
import Link from 'next/link';
import Post from '../interfaces/posts';

export default function ArticleThumbnail({ ...article }: Post) {
	return (
		<Link href={`/posts/[${article.id}]`} as={`/posts/${article.id}`} key={article.id}>
			<div className="cursor-pointer hover:text-gray-600 w-full transition-all">
				<div className="w-full pb-2/3 bg-gray-100 block relative">
					{/* {imageData.description ? (
						<img
							className="object-cover h-full w-full absolute"
							src={imageData.urls.regular}
							alt={imageData.description}
						/>
					) : (
						<h1>none</h1>
					)} */}
				</div>
				<h1 className="font-bold text-2xl mt-4 block">
					{article.title.charAt(0).toUpperCase() + article.title.slice(1)}
				</h1>
				<p className="text-base mt-1">{article.body.charAt(0).toUpperCase() + article.body.slice(1)}.</p>
			</div>
		</Link>
	);
}
