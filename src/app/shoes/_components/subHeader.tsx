export default function SubHeader() {
  return (
    <section className="bg-lightest_grey font-suez text-grey text-center flex flex-col justify-between items-center w-full gap-3 py-5 col-span-full lg:px-14 lg:mb-10 lg:flex-row 2xl:px-40">
      <p className="text-nowrap lg:ml-20">ADVENTURE IS JUST AROUND THE CORNER!</p>
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <button className="border-[3px] w-fit h-10 px-4 rounded-md border-blue text-blue text-nowrap">FIND A STORE</button>
        <a>NOT IN SOUTH AFRICA?</a>
      </div>
    </section>
  )
}