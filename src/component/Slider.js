"use client"
export default function Slider(props) {
    console.log(props)
// const [images,setImage] = useState()
    return (
        <div className="max-w-2xl m-auto">
            {props.images && props.images.map((item,index)=>(
          <div id="default-carousel" className="relative mb-4 mt-4 ml-4" data-carousel="static">
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                  First Slide
                </span>
                <div>{item}</div>
                <img
                  src={item[index]}
                  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
                {item}
              </div>
  
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={item}
                  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
  
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={item}
                  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
            </div>
  
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
  
            <button
              type="button"
              className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden">Previous</span>
              </span>
            </button>
  
            <button
              type="button"
              className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="hidden">Next</span>
              </span>
            </button>
          </div>
            )) }
        </div>
    );
  }
  