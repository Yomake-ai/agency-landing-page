import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-neutral-900">
      {/* Header */}
      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
        <nav className="relative max-w-5xl w-full flex flex-wrap md:flex-nowrap basis-full items-center justify-between py-2 ps-5 pe-2 md:py-0 mx-2 lg:mx-auto">
          <div className="flex items-center">
            {/* Logo */}
            <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="#" aria-label="Yomake">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#ff0] rounded-lg flex items-center justify-center mr-2">
                  <span className="text-black font-bold text-lg">Y</span>
                </div>
                <span className="text-white font-bold text-xl">Yomake</span>
              </div>
            </a>
          </div>

          {/* Button Group */}
          <div className="md:order-3 flex items-center gap-x-3">
            <div className="md:ps-3">
              <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-neutral-800 rounded-full focus:outline-hidden" href="#">
                Request demo
              </a>
            </div>

            <div className="md:hidden">
              <button 
                type="button" 
                className="size-9 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
              >
                {!isMenuOpen ? (
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                ) : (
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Collapse */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:block`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-y-3 py-2 md:py-0 md:ps-7">
              <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="#" aria-current="page">Home</a>
              <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="#">Stories</a>
              <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="#">Reviews</a>
              <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="#">Approach</a>
              <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="#">Product</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main id="content">
        {/* Hero */}
        <div className="overflow-hidden bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
            <h1 className="font-semibold text-white text-5xl md:text-6xl">
              <span className="text-[#ff0]">Yomake Agency:</span> Transforming ideas into reality
            </h1>
            <div className="mt-5 max-w-4xl">
              <p className="text-neutral-400 text-lg">
                It is a creative hub where imagination meets craftsmanship to transform ideas into tangible realities. At Yomake Agency, we specialize in turning conceptual visions into concrete forms, whether it be through design, artistry, or technological innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Clients */}
        <div className="relative overflow-hidden pt-4 bg-neutral-900">
          <svg className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" className="stroke-neutral-700/50" stroke="currentColor" />
            <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" className="stroke-neutral-700/50" stroke="currentColor" />
            <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" className="stroke-neutral-700/50" stroke="currentColor" />
            <path d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027" className="stroke-neutral-700/50" stroke="currentColor" />
            <path d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036" className="stroke-neutral-700/50" stroke="currentColor" />
            <path d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045" className="stroke-neutral-700/50" stroke="currentColor" />
          </svg>

          <div className="relative z-10">
            <div className="max-w-5xl px-4 xl:px-0 mx-auto">
              <div className="mb-4">
                <h2 className="text-neutral-400">Trusted by Open Source, enterprise, and more than 99,000 of you</h2>
              </div>

              <div className="flex justify-between gap-6">
                {/* Company logos would go here - using text placeholders for now */}
                <div className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400 flex items-center justify-center text-xs">LEDGER</div>
                <div className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400 flex items-center justify-center text-xs">OPENAI</div>
                <div className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400 flex items-center justify-center text-xs">XEVO</div>
                <div className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400 flex items-center justify-center text-xs">FULLVIEW</div>
                <div className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400 flex items-center justify-center text-xs">FIGMA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Stories */}
        <div className="bg-neutral-900 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Success stories</h2>
              <p className="mt-1 text-neutral-400">Global brands see measurable success when they collaborate with us. From higher conversion and payment approval rates to faster processing speeds. Discover their stories here.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
              {/* Card 1 */}
              <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100" href="#">
                <div className="mb-5">
                  <div className="w-8 h-8 bg-[#ff0] rounded flex items-center justify-center text-black font-bold">M</div>
                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-white">43%</p>
                    <h3 className="mt-5 font-medium text-lg text-white">Enhancement in Customer Engagement</h3>
                    <p className="mt-1 text-neutral-400">With the aim of optimizing customer interactions and boosting brand loyalty, the team at Yomake leveraged Mailchimp's powerful tools and expertise to deliver exceptional results.</p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                    Case study
                  </span>
                </p>
              </a>

              {/* Card 2 */}
              <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100" href="#">
                <div className="mb-5">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold">S</div>
                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-white">20%</p>
                    <h3 className="mt-5 font-medium text-lg text-white">Rise in E-commerce</h3>
                    <p className="mt-1 text-neutral-400">In collaboration with Shopify, Yomake embarked on a mission to revolutionize the e-commerce experience for a fictitious fashion brand, "StyleAura.".</p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                    Case study
                  </span>
                </p>
              </a>

              {/* Card 3 */}
              <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100" href="#">
                <div className="mb-5">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">G</div>
                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-white">12%</p>
                    <h3 className="mt-5 font-medium text-lg text-white">Streamlining Development</h3>
                    <p className="mt-1 text-neutral-400">With the goal of accelerating project delivery and enhancing collaboration among development teams, Yomake leveraged GitLab's comprehensive suite of tools and Yomake's expertise in digital product development.</p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                    Case study
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-neutral-900">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Yomake reviews</h2>
              <p className="mt-1 text-neutral-400">With over 30 awards, and achievements, we proudly demonstrate our unwavering dedication to excellence and client success.</p>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
              <div>
                <blockquote>
                  <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                    To say that switching to Yomake has been life-changing is an understatement. My business has tripled since then.
                  </p>

                  <footer className="mt-6">
                    <div className="flex items-center">
                      <div className="md:hidden shrink-0">
                        <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                      </div>
                      <div className="ms-4 md:ms-0">
                        <div className="text-base font-semibold text-white">Nicole Grazioso</div>
                        <div className="text-xs text-neutral-400">Director Payments & Risk | Airbnb</div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>

              <div className="hidden md:block mb-24 md:mb-0">
                <img className="rounded-xl" src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-neutral-900">
          <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className="border border-neutral-800 rounded-xl">
              <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                      <path d="m21 3 1 11h-2" />
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                      <path d="M3 4h8" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">2,000+</h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">Yomake partners</p>
                    </div>
                  </div>

                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <img className="relative z-2 shrink-0 size-8 rounded-full border-3 border-neutral-800" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                      <img className="relative z-1 shrink-0 size-8 rounded-full border-3 border-neutral-800 -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                      <img className="relative shrink-0 size-8 rounded-full border-3 border-neutral-800" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">85%</h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">Happy customers</p>
                    </div>
                  </div>

                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                      <path d="m2 16 6 6" />
                      <circle cx="16" cy="9" r="2.9" />
                      <circle cx="6" cy="5" r="3" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">$55M+</h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">Ads managed yearly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="bg-neutral-900">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Our approach</h2>
              <p className="mt-1 text-neutral-400">This profound insight guides our comprehensive strategy — from meticulous research and strategic planning to the seamless execution of brand development and website or product deployment.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
              </div>

              <div>
                <div className="mb-4">
                  <h3 className="text-[#ff0] text-xs font-medium uppercase">Steps</h3>
                </div>

                {/* Timeline Items */}
                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">1</span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">Market Research and Analysis:</span> Identify your target audience and understand their needs, preferences, and behaviors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">2</span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">Product Development and Testing:</span> Develop digital products or services that address the needs and preferences of your target audience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">3</span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">Marketing and Promotion:</span> Develop a comprehensive marketing strategy to promote your digital products or services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">4</span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">Launch and Optimization:</span> Launch your digital products or services to the market, closely monitoring their performance and user feedback.
                    </p>
                  </div>
                </div>

                <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden" href="#">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                    <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path>
                  </svg>
                  Schedule a call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="bg-neutral-900">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact us</h2>
              <p className="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
              <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                <form>
                  <div className="space-y-4">
                    <div className="relative">
                      <input type="text" id="name" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" placeholder="Name" />
                      <label htmlFor="name" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400">Name</label>
                    </div>

                    <div className="relative">
                      <input type="email" id="email" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" placeholder="Email" />
                      <label htmlFor="email" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400">Email</label>
                    </div>

                    <div className="relative">
                      <input type="text" id="company" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" placeholder="Company" />
                      <label htmlFor="company" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400">Company</label>
                    </div>

                    <div className="relative">
                      <input type="text" id="phone" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" placeholder="Phone" />
                      <label htmlFor="phone" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400">Phone</label>
                    </div>

                    <div className="relative">
                      <textarea id="message" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" placeholder="This is a textarea placeholder" rows={4}></textarea>
                      <label htmlFor="message" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400">Tell us about your project</label>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="text-xs text-neutral-500">All fields are required</p>
                    <p className="mt-5">
                      <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden" href="#">
                        Submit
                        <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </form>
              </div>

              <div className="space-y-14">
                <div className="flex gap-x-5">
                  <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Our address:</h4>
                    <address className="mt-1 text-neutral-400 text-sm not-italic">
                      300 Bath Street, Tay House<br />
                      Glasgow G2 4JR, United Kingdom
                    </address>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Email us:</h4>
                    <a className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200" href="mailto:hello@example.so">
                      hello@example.so
                    </a>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">We're hiring</h4>
                    <p className="mt-1 text-neutral-400">We're thrilled to announce that we're expanding our team and looking for talented individuals like you to join us.</p>
                    <p className="mt-2">
                      <a className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-hidden focus:underline" href="#">
                        Job openings
                        <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-neutral-900">
        <svg className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" className="stroke-neutral-700/50" stroke="currentColor" />
          <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" className="stroke-neutral-700/50" stroke="currentColor" />
          <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" className="stroke-neutral-700/50" stroke="currentColor" />
        </svg>

        <div className="relative z-10">
          <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
            <div className="inline-flex items-center">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#ff0] rounded-lg flex items-center justify-center mr-2">
                  <span className="text-black font-bold text-sm">Y</span>
                </div>
                <span className="text-white font-bold text-lg">Yomake</span>
              </div>

              <div className="border-s border-neutral-700 ps-5 ms-5">
                <p className="text-sm text-neutral-400">© 2025 Yomake Labs.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
