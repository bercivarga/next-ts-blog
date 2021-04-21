import React from 'react';
import ArticleThumbnail from '@components/ArticleThumbnail';
import Post from '../interfaces/posts';
import SmallArticleThumbnail from '@components/SmallArticleThumbnail';

export default function Highlight({ ...highlights }: Post[]) {
	return (
		<div className="block sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
			<ArticleThumbnail {...highlights[0]} />
			<div className="hidden sm:grid sm:grid-cols-2 lg:grid-rows-2 gap-4">
				<SmallArticleThumbnail {...highlights[1]} />
				<SmallArticleThumbnail {...highlights[2]} />
				<SmallArticleThumbnail {...highlights[3]} />
				<SmallArticleThumbnail {...highlights[4]} />
			</div>
		</div>
	);
}
