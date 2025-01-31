import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <section className=" max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
      </section>
    </main>
  );
}
