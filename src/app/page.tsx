import SubHeader from '@/app/_components/subHeader';
import SearchBox from '@/app/_components/searchBox';

export default function Home() {
  return (
    <>
      <SubHeader />
      <SearchBox />
      <main className="bg-white flex min-h-screen flex-col items-center justify-between">
      </main>
    </>
  );
}
