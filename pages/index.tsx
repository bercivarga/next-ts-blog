import { InferGetStaticPropsType } from 'next';
import Post from '../interfaces/posts';
import ArticleThumbnail from '@components/ArticleThumbnail';

const IndexPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
			{data.map((article) => {
				return <ArticleThumbnail {...article} />;
			})}
		</div>
	);
};

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data: Post[] = await res.json();

	return {
		props: {
			data
		}
	};
};

export default IndexPage;
