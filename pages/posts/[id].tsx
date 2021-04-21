import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from 'next';
import Head from 'next/head';
import Post from '../../interfaces/posts';
import Header from '@components/Header';

/* const APIKEY: string | unknown = process.env.REACT_APP_UNSPLASH_ACCESSKEY; */

export default function BlogPost({data}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			<Head>
				<title>{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</title>
				<meta name='author' content={data.userId.toString()}></meta>
				<meta property='og:title' content={data.title}></meta>
			</Head>
			<div className='xl:w-4/5 xl:flex xl:flex-col xl:content-center xl:m-auto p-4 pb-12'>
				<Header />
				<div className='w-full lg:w-2/3 lg:ml-auto lg:mr-auto mt-8'>
					<div className="w-full pb-2/3 bg-gray-100 block relative">
						{/* <img className='object-cover h-full w-full absolute' src={imgData.urls.regular} alt={imgData.description}></img> */}
					</div>
					<h1 className='mt-4 font-bold text-3xl'>{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</h1>
					<h3 className='mt-2 text-lg text-red-800'>Written by {data.userId}</h3>
					<p className='mt-8'>{data.body.charAt(0).toUpperCase() + data.body.slice(1)}.</p>
					<p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin gravida hendrerit lectus a. Nunc congue nisi vitae suscipit tellus mauris a diam. Dolor magna eget est lorem. In pellentesque massa placerat duis ultricies lacus sed turpis. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Libero volutpat sed cras ornare arcu dui. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Cras semper auctor neque vitae. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Vitae congue eu consequat ac felis. Sit amet aliquam id diam maecenas. In iaculis nunc sed augue lacus viverra vitae congue. Turpis in eu mi bibendum neque egestas. Feugiat sed lectus vestibulum mattis ullamcorper velit. Eget velit aliquet sagittis id consectetur purus. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Facilisis sed odio morbi quis commodo. Dignissim convallis aenean et tortor at risus.</p>
					<p className='mt-4'>Fames ac turpis egestas sed. Viverra tellus in hac habitasse platea dictumst. Tortor id aliquet lectus proin nibh nisl. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Arcu dui vivamus arcu felis bibendum ut. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Quam vulputate dignissim suspendisse in est. Mauris augue neque gravida in. Amet risus nullam eget felis eget. Fringilla est ullamcorper eget nulla facilisi. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Praesent semper feugiat nibh sed. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Egestas maecenas pharetra convallis posuere morbi leo urna. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Tortor vitae purus faucibus ornare. Dolor morbi non arcu risus quis varius quam quisque.</p>
					<p className='mt-4'>Gravida arcu ac tortor dignissim convallis aenean et tortor at. Ac turpis egestas integer eget aliquet nibh praesent tristique. Sit amet mattis vulputate enim nulla aliquet porttitor. Fringilla ut morbi tincidunt augue interdum velit. Egestas sed sed risus pretium quam. Amet volutpat consequat mauris nunc. Ornare lectus sit amet est placerat in egestas erat imperdiet. Sagittis orci a scelerisque purus semper eget duis at. Neque ornare aenean euismod elementum nisi quis eleifend quam. Vel fringilla est ullamcorper eget. Mattis molestie a iaculis at erat pellentesque.</p>
					<p className='mt-4'>Id diam maecenas ultricies mi eget mauris. Duis at consectetur lorem donec massa sapien faucibus et. Quis vel eros donec ac odio. Magna eget est lorem ipsum dolor sit amet. Neque laoreet suspendisse interdum consectetur. Facilisis leo vel fringilla est ullamcorper eget. Turpis cursus in hac habitasse platea dictumst. Aliquam id diam maecenas ultricies mi. Viverra adipiscing at in tellus integer feugiat. A cras semper auctor neque vitae tempus. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Nibh sed pulvinar proin gravida hendrerit lectus. Dictum varius duis at consectetur lorem donec. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Consequat ac felis donec et odio. A pellentesque sit amet porttitor eget dolor. At quis risus sed vulputate odio ut enim blandit. Lacinia quis vel eros donec ac.</p>
					<p className='mt-4'>Adipiscing diam donec adipiscing tristique risus nec. Amet volutpat consequat mauris nunc congue nisi. Convallis a cras semper auctor neque. Donec massa sapien faucibus et molestie ac feugiat sed. In dictum non consectetur a erat nam at. Et malesuada fames ac turpis egestas integer eget. Porttitor massa id neque aliquam vestibulum morbi. Sed libero enim sed faucibus turpis in eu mi bibendum. Enim ut sem viverra aliquet eget sit amet. At ultrices mi tempus imperdiet. Quis hendrerit dolor magna eget. Viverra nibh cras pulvinar mattis nunc sed. Tempor id eu nisl nunc mi. Facilisi etiam dignissim diam quis enim lobortis. Ac odio tempor orci dapibus ultrices in iaculis nunc. In ante metus dictum at tempor.</p>
				</div>
			</div>
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
				data: emptyPost,
				imgData: {}
			}
		}
	}
	
	const [blogRes, /* imgRes */] = await Promise.all([
		fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
	/* 	fetch(`https://api.unsplash.com/photos/random/?client_id=${APIKEY}`) */
	])

	const data = await blogRes.json();
	/* const imgData = await imgRes.json(); */

	return {
		props: {
			data,
			/* imgData */
		}
	};
};
