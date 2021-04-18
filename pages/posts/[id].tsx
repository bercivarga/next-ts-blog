import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from 'next';
import Post from '../../interfaces/posts';

export default function BlogPost({data}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			<h1>{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</h1>
			<h3>Written by {data.userId}</h3>
			<p>{data.body.charAt(0).toUpperCase() + data.body.slice(1)}</p>
		</div>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data: Post[] = await res.json();

	const paths = data.map(p => ({
		params: {id: p.id.toString()}
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const { params } = context;

	const emptyPost: Post = {
		title: 'Post not found',
		body: '',
		userId: 0,
		id: 0
	};

	if (!params?.id) {
		return {
			props: {
				data: emptyPost
			}
		}
	}

	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	const data: Post = await res.json();

	return {
		props: {
			data
		}
	};
};
