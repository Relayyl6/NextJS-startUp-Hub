// to expose our page on the url /start/1 or 2 or 3, so we can show a new dynamic startp details page for each different startup

import { client } from '@/sanity/lib/client';
import React from 'react';
import { STARTUP_ID_BY_QUERY } from "@/sanity/lib/queries";
import { notFound } from 'next/navigation';
import { formatString } from "@/lib/utils";
import Image from 'next/image';

export const experimental_ppr = true

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id;

    // const param = ;

    const post = await client.fetch(STARTUP_ID_BY_QUERY, { id });

    if (!post) return notFound();

    return (
        <>
            <section className="w-full bg-primary min-h-[230px] pattern flex justify-center items-center flex-col py-10 px-6">

                <p className="bg-secondary px-6 py-3 font-sans font-bold rounded-sm upercase relative before:content-[''] before:absolute
                before:top-2 before:left-2 before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent
                after:content-[''] after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-black after:border-l-[10px]
                after:border-l-transparent">{formatString(post?._createdAt)}</p>

                <h1 className="uppercase bg-black px-6 py-3 font-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px]
                leading-[46px] max-w-5xl text-center my-5">{post.title}</h1>

                <p className='max-w-5xl font-medium text-[20px] text-white text-center break-words'></p>

            </section>

            <section className="px-6 py-10 max-w-7xl mx-auto">
                <Image
                    src={post.image}
                    alt="Thumbnail"
                    className='rounded-xl w-full h-auto'
                />

                <div>

                </div>
            </section>
        </>
    )
}

export default Page