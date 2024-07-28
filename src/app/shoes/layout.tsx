import {ReactNode} from 'react';
import SubHeader from '@/app/shoes/_components/subHeader';
import SearchBox from '@/app/shoes/_components/searchBox';
import TopBanner from '@/app/shoes/_components/topBanner';
import SideBanner from '@/app/shoes/_components/sideBanner';
import MailingList from '@/app/shoes/_components/mailingList';

export default function ShoesLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <section className="grid grid-cols-4 lg:grid-cols-[366px,auto,auto,auto]">
      <SubHeader />
      <div className="flex flex-col col-span-full md:col-start-2 md:col-end-4 lg:col-span-1 lg:min-w-[366px]">
        <SearchBox />
        <SideBanner />
        <MailingList />
      </div>
      <div className="col-span-full mx-2 mt-2 lg:col-span-3 lg:mx-10 lg:mt-0">
        <TopBanner />
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
