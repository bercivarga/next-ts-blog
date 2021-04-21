import { InferGetStaticPropsType } from 'next';
import Post from '../interfaces/posts';
import ArticleThumbnail from '@components/ArticleThumbnail';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import React from 'react';
import Head from 'next/head';

/* const APIKEY: string | unknown = process.env.REACT_APP_UNSPLASH_ACCESSKEY; */

const IndexPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const highlights: Post[] = data.slice(0, 5);

	return (
		<React.Fragment>
			<Head>
				<title>Lorem Handelsblad</title>
			</Head>
			<div className="xl:w-4/5 xl:flex xl:flex-col xl:content-center xl:m-auto p-4">
				<Header />
				<Highlight {...highlights} />
				<div className="m-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{data.slice(0, 30).map((article: Post) => {
						return <ArticleThumbnail {...article} />;
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export const getStaticProps = async () => {
	const [ blogRes /* imgRes */ ] = await Promise.all([
		fetch(`https://jsonplaceholder.typicode.com/posts/`)
		/* fetch(`https://api.unsplash.com/photos?page=1&per_page=30&client_id=${APIKEY}`) */
	]);

	const data = await blogRes.json();
	/* const imgData = await imgRes.json(); */

	return {
		props: {
			data
			/* imgData */
		}
	};
};

export default IndexPage;
