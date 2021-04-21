import React from 'react';
import Post from '../interfaces/posts';
import Link from 'next/link';

export default function SmallArticleThumbnail({ ...highlight }: Post) {
	return (
		<Link href={`/posts/[${highlight.id}]`} as={`/posts/${highlight.id}`} key={highlight.id}>
			<div className="cursor-pointer hover:text-gray-600 w-full h-2/3 transition-all">
				<div className="pb-10/12 bg-gray-100 block relative">
					<h1 className="font-bold text-2xl absolute bottom-4 left-4">
						{highlight.title.charAt(0).toUpperCase() + highlight.title.slice(1)}
					</h1>
				</div>
			</div>
		</Link>
	);
}
