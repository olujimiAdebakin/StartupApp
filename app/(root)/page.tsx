import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import { title } from "process";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'JIMI'},
      _id: 1,
      descripton: "This is a descripton",
      image:
        "https://img.freepik.com/free-photo/robot-doing-peace-sign_1048-3527.jpg?t=st=1730464841~exp=1730468441~hmac=3e594445d6268d68dcd65f2d87dac0ec006b09094bf61d93c0271611f0effde2&w=740",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch. Connect. Launch. <br /> Make It Happen
        </h1>

        <p className="sub-heading !max-w-3xl">
          Pitch your idea, grab investor attention, and transform your startup
          dreams into reality.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for 
          "${query}"` : "All Startups"} 
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
              <p className="no-results">No Startups Found</p>
          )}

        </ul>
      </section>
    </>
  );
}
