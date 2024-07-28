export default function TopBanner() {
  return (
    <section className="bg-summer-sale bg-no-repeat flex justify-between items-center text-white font-suez px-2 py-3 text-nowrap bg-center max-w-[990px] lg:justify-start lg:mt-0 lg:pl-10 xl:mx-auto">

      <div>
        <h3 className="text-xl lg:text-3xl text-nowrap">SUMMER SALE!</h3>
        <h4 className="lg:text-xl">UP TO 50% OFF!</h4>
      </div>
      <button className="border-2 rounded-md px-2 text-sm lg:text-base lg:px-3 lg:ml-72 xl:ml-96 py-1">SHOP NOW</button>
    </section>
  )
}