export default function TopBanner() {
  return (
    <section className="bg-summer-sale bg-no-repeat flex justify-between items-center bg-start text-white font-suez px-2 py-3 text-nowrap xl:bg-center max-w-[990px] lg:justify-start lg:mt-0 lg:pl-10 xl:mx-auto">

      <div>
        <h3 className="text-xl lg:text-3xl text-nowrap">SUMMER SALE!</h3>
        <h4 className="lg:text-xl">UP TO 50% OFF!</h4>
      </div>
      <button className="border-[3px] rounded-sm text-sm py-1 px-2 hover:bg-white hover:text-blue lg:text-base lg:px-5 lg:ml-52 xl:ml-96">SHOP NOW</button>
    </section>
  )
}