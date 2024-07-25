import {ReactNode} from 'react';
import SubHeader from '@/app/shoes/_components/subHeader';
import SearchBox from '@/app/shoes/_components/sidebar/searchBox';
import TopBanner from '@/app/shoes/_components/banners/topBanner';
import SideBanner from '@/app/shoes/_components/sidebar/sideBanner';
import MailingList from '@/app/shoes/_components/sidebar/mailingList';

export default function ShoesLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <section className="grid grid-cols-4">
      <SubHeader />
      <div className="flex flex-col col-span-full lg:col-span-1">
        <SearchBox />
        <SideBanner />
        <MailingList />
      </div>
      <div className="col-span-full lg:col-span-3 2xl:mx-20">
        <TopBanner />
        <main>
          {children}
        </main>
      </div>
    </section>
  );
}
