import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Post from '../interfaces/posts';

const IndexPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			{data.map((a) => {
				return (
					<Link href={`/posts/[${a.id}]`} as={`/posts/${a.id}`} key={a.id}>
						<div className="cursor-pointer hover:text-gray-600">
							<h1 className="font-bold text-2xl mt-4">
								{a.title.charAt(0).toUpperCase() + a.title.slice(1)}
							</h1>
							<p className="text-base mt-1">{a.body.charAt(0).toUpperCase() + a.body.slice(1)}.</p>
						</div>
					</Link>
				);
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
