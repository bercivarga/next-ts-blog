import React from 'react';
import Link from 'next/link';
import Post from '../interfaces/posts';

export default function ArticleThumbnail({ ...article }: Post) {
	return (
		<Link href={`/posts/[${article.id}]`} as={`/posts/${article.id}`} key={article.id}>
			<div className="cursor-pointer hover:text-gray-600 w-full">
				<div className="w-full pb-32 bg-gray-50 block" />
				<h1 className="font-bold text-2xl mt-4 block">
					{article.title.charAt(0).toUpperCase() + article.title.slice(1)}
				</h1>
				<p className="text-base mt-1">{article.body.charAt(0).toUpperCase() + article.body.slice(1)}.</p>
			</div>
		</Link>
	);
}
