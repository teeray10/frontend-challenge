import {ReactNode} from 'react';
import SubHeader from '@/app/shoes/_components/subHeader';
import SearchBox from '@/app/shoes/_components/searchBox';
import TopBanner from '@/app/shoes/_components/banners/topBanner';

export default function ShoesLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <section className="grid grid-cols-4">
      <SubHeader />
      <div className="col-span-full lg:col-span-1">
        <SearchBox />
      </div>
      <div className="col-span-full lg:col-span-3">
        <TopBanner />
        <main>
          {children}
        </main>
      </div>
    </section>
  );
}
