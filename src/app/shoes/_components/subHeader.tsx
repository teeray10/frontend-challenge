export default function SubHeader() {
  return (
    <section className="bg-lightest_grey font-suez text-grey text-center flex flex-col justify-center items-center w-full gap-5 py-5 lg:mb-10 col-span-full lg:gap-96 lg:flex-row">
      <p>ADVENTURE IS JUST AROUND THE CORNER!</p>
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <button className="border-[3px] w-fit h-10 px-4 rounded-md border-blue text-blue">FIND A STORE</button>
        <a>NOT IN SOUTH AFRICA?</a>
      </div>
    </section>
  )
}