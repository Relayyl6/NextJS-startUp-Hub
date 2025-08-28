import SearchForm from "@/components/SearchForm";
import type {StartUpCardType} from "@/components/StartUpCard";
import StartUpCard from "@/components/StartUpCard";
// import { posts } from "@/constants";
// import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERIES } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "StartUp",
  description: "New StartUp hub for entry and logging",
};

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const params = { search: query || null }

  // const posts = await client.fetch(STARTUP_QUERIES);
  const { data: posts } = await sanityFetch({query: STARTUP_QUERIES, params: params });

  return (
    <>
      <section className="w-full bg-primary min-h-[530px] flex justify-center items-center flex-col py-10 px-6 pattern">
        <h1 className="uppercase bg-black px-6 py-3 shadow-200 shadow-zinc-500 mx-auto font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch Your StartUp, <br/> Connext With Entrepreneurs
        </h1>

        <p className="font-medium text-[20px] text-white text-center break-words !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual competitions
        </p>

        <SearchForm query={query}/>
      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {
            query ? `Search Result for ${query}` : 'All Startups'
          }
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {
            posts?.length > 0 ? (
              posts.map((post: StartUpCardType, index: number) => (
                <StartUpCard key={post?._id || index} post={post}/>
              ))
            ) : (
              <p className="text-black-100 text-sm font-normal">No startups found</p>
            )
          }
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
