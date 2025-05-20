import React, { useState } from 'react';
import { FaLinkedinIn, FaYoutube, FaTwitter, FaFacebookF, FaInstagram,FaRegCalendarAlt,FaBookmark } from 'react-icons/fa';

const App = () => {
  const [activeBookCategory, setActiveBookCategory] = useState('Non-Fiction');

  const handleBookCategoryClick = (category) => {
    setActiveBookCategory(category);
  };

  return (
    <div className='overflow-x-hidden'>
      
           <nav className='flex flex-row justify-between bg-black text-white py-4 px-6 items-center fixed top-0 left-0 w-full z-50'>
        <div className='flex flex-row items-center gap-4'>
          <div>
            <img className='w-20 h-16' src="https://static.vecteezy.com/system/resources/previews/012/762/245/non_2x/pv-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg"/></div> 
         <div className="flex flex-col">
           <h3 className='text-amber-500 text-2xl font-semibold'>Pawan Verma</h3>
          <p className='text-sm'>Author | Speaker | Management Consultant</p>
          <p className='text-sm leading-tight'>Igniting <span className='text-amber-500'>Minds</span> | Inspiring <span className='text-amber-500'>Hearts</span>  </p>
         </div>
        </div>

       <div>
        <ul className='flex flex-row gap-6 text-lg'>
          <a href="#"className="hover:text-amber-500 hover:border-b-2 hover:border-amber-500 pb-1 transition duration-300">Home</a>
          <a href="#about" className="hover:text-amber-500 hover:border-b-2 hover:border-amber-500 pb-1 transition duration-300">About</a>
          <a href="#speaking" className="hover:text-amber-500 hover:border-b-2 hover:border-amber-500 pb-1 transition duration-300">Speaking</a>
          <a href="#consulting" className="hover:text-amber-500 hover:border-b-2 hover:border-amber-500 pb-1 transition duration-300">Consulting</a>
          <a href="#publishing" className="hover:text-amber-500 hover:border-b-2 hover:border-amber-500 pb-1 transition duration-300">Publishing</a>
          
         <div className="relative group">
          <a href="#" className="hover:text-amber-500 hover:border-b-2 hover:border-amber-500 pb-1 transition duration-300" >
             More <span className="text-xs">▼</span>
        </a>

      <div className="absolute right-0 hidden group-hover:block bg-amber-500 shadow-lg border rounded mt-2 w-48 z-10">
        <a href="#books" className="block px-4 py-2 text-sm hover:bg-gray-700 break-words">Books</a>
        <a href="#events" className="block px-4 py-2 text-sm hover:bg-gray-700 break-words">Events & Activities</a>
        <a href="#ready" className="block px-4 py-2 text-sm hover:bg-gray-700 break-words">Ready To Transform?</a>
        <a href="#awards" className="block px-4 py-2 text-sm hover:bg-gray-700 break-words">Awards & Recognition</a>
        <a href="#blogs" className="block px-4 py-2 text-sm hover:bg-gray-700 break-words">Blogs</a>
        <a href="#testinomials" className="block px-4 py-2 text-sm hover:bg-gray-700 break-words">Book Testimonials</a>
        <a href="#contact" className="block px-4 py-2 text-sm hover:bg-gray-700 break-words">Contact Us</a>
      </div>
</div>


          
        </ul>
       </div>
      </nav>
      
      <section className='flex flex-row ml-22  w-full'>
        {/* left section */}
        <div className='flex flex-col mt-60  w-2/5 p-4'>
            <div><img className='w-full h-auto rounded-2xl' src="https://content.jdmagicbox.com/v2/comp/delhi/n5/011pxx11.xx11.190322164515.l4n5/catalogue/pawan-verma-and-associates-defence-colony-delhi-lawyers-0rosxkq91a.jpg?fit=around%7C350:350&crop=350:350;*,*"/></div>
            <div className="mt-4">
              <p className='text-xl font-semibold'>Author , Thought Leader , Professional Speaker , and Management <br /> Consultant </p>
            <p className='text-sm text-gray-600 mt-2'>Empowering organizations and leaders to achieve extraordinary results horugh visionary leadership and strategic transformation.</p>
            </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center text-left p-4 w-3/5">
            <h1 className="text-amber-500 text-5xl  mb-20 font-bold">DR. PAWAN VERMA</h1>
            <div className="text-3xl font-serif italic mt-8 relative">
              <p className="absolute left-[-0.5em] top-[-0.5em] text-6xl text-amber-500">"</p>
              <p className="ml-6 mr-6">If you continue leading today with the methods of yesterday, you are bound to go out of leadership tomorrow.</p>
              
            </div>
            <div className="flex mt-8">
              <button className="bg-amber-500 text-white py-3 px-8 rounded-md mr-4 text-lg hover:bg-amber-600 transition duration-300">Learn More</button>
              
            <a href="#contact">
              <button className="border border-amber-500 text-amber-500 py-3 px-8 rounded-md text-lg hover:bg-amber-50 text-amber-600 transition duration-300">Contact Now</button>
            </a>
            </div>
            <div className="flex mt-8">
              <span className="dot w-3 h-3 bg-amber-500 rounded-full mx-1"></span>
              <span className="dot w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
              <span className="dot w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
            </div>
          </div>
        </section>

      <section id="about" className="py-12 bg-gray-100 id">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800  ml-130 inline-block border-b-4 border-amber-500 pb-2 mb-12">Latest Books</h2>

          {/* Friction Book Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 text-left mb-6 relative">
              <span className="absolute left-0 top-0 text-amber-500 text-3xl"><FaBookmark/></span><span className="ml-10">Friction Book's</span>
            </h3>
            <div className="flex items-center justify-center">
              {/* Left Arrow */}
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer mr-4 shadow-md">
                <span className="text-white text-xl">&#8249;</span>
              </div>

              {/* Book Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center w-3/4">
                <img className="w-40 h-auto rounded-md mr-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVxtulsDovLLXdzLbSEtJVrp828MwSENJxA&s" alt="Friction Book Cover"/>
                <div className="text-left flex-grow">
                  <h4 className="text-xl font-bold text-gray-800">No Closure No Forgiveness</h4>
                  <div className="text-amber-500 text-sm mt-1">★★★★★</div> {/* Placeholder rating */}
                  <p className="text-gray-600 text-sm mt-2">Non-Fiction - Leadership</p>
                  <p className="text-gray-700 mt-4 text-sm">"No Closure, No Forgiveness" by Pawan Verma is a thought-provoking book that delves into the complexities of emotional wounds, justice, and unresolved pain. It explores how individuals and societies grapple with past traumas, betrayals, and injustices that remain unacknowledged or unaddressed. Verma examines the human need for closure and the challenges of forgiveness when healing is incomplete. Through compelling narratives and deep reflections, the book sheds light on the psychological and societal consequences of carrying unresolved grief or anger, urging readers to confront their truths rather than suppress them. It's a powerful exploration of memory, reconciliation, and the emotional cost of silence.</p>
                  <div className="flex mt-6">
                    <button className="bg-amber-500 text-white py-2 px-6 rounded-md mr-4 text-sm hover:bg-amber-600 transition duration-300" onClick={() => default_api.codebase_search(query='No Closure No Forgiveness', explanation='Searching for the Friction Book details.')}>Read More</button>
                    <button className="border border-amber-500 text-amber-500 py-2 px-6 rounded-md text-sm hover:bg-amber-50 text-amber-600 transition duration-300" onClick={() => default_api.codebase_search(query='No Closure No Forgiveness', explanation='Searching for where to buy the Friction Book.')}>Buy Now</button>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer mr-4 shadow-md">
                <span className="text-white text-xl">&#8250;</span>
              </div>
            </div>
          </div>

          {/* Non-Friction Book Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 text-left mb-6 relative">
              <span className="absolute left-0 top-0 text-amber-500 text-3xl"><FaBookmark/></span><span className="ml-10">Non - Friction Book's</span>
            </h3>
             <div className="flex items-center justify-center">
              {/* Left Arrow */}
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer mr-4 shadow-md">
                <span className="text-white text-xl">&#8249;</span>
              </div>

              {/* Book Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center w-3/4">
                <img className="w-40 h-auto rounded-md mr-6" src="https://m.media-amazon.com/images/I/71JRmQguz9L._UF1000,1000_QL80_.jpg" alt="Non-Friction Book Cover"/>
                <div className="text-left flex-grow">
                  <h4 className="text-xl font-bold text-gray-800">The 10X Leader</h4>
                  <div className="text-amber-500 text-sm mt-1">★★★★★</div> {/* Placeholder rating */}
                  <p className="text-gray-600 text-sm mt-2">Non-Fiction - Leadership</p>
                  <p className="text-gray-700 mt-4 text-sm">Leadership expert Pawan Verma introduces you to a new kind of leader, the 10X leader -the one who looks at leadership as a responsibility to make the world a better place to live. Equipped with a larger purpose and a future-oriented mindset, this 10X leader harnesses the power of ideas and innovation to create meaningful impact in organizations and communities alike.</p>
                  <div className="flex mt-6">
                    <button className="bg-amber-500 text-white py-2 px-6 rounded-md mr-4 text-sm hover:bg-amber-600 transition duration-300" onClick={() => default_api.codebase_search(query='The 10X Leader', explanation='Searching for the Non-Friction Book details.')}>Read More</button>
                    <button className="border border-amber-500 text-amber-500 py-2 px-6 rounded-md text-sm hover:bg-amber-50 text-amber-600 transition duration-300" onClick={() => default_api.codebase_search(query='The 10X Leader', explanation='Searching for where to buy the Non-Friction Book.')}>Buy Now</button>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer ml-4 shadow-md">
                <span className="text-white text-xl">&#8250;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Book Published Section */}
      <section  id ="publishing" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-8">Book Published</h2>
          <div className="flex justify-center space-x-4 mb-12">
            <button
              className={`py-2 px-6 rounded-full text-lg font-semibold ${activeBookCategory === 'Non-Fiction' ? 'bg-amber-500 text-black' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => handleBookCategoryClick('Non-Fiction')}
            >
               Non - Fiction
            </button>
            <button
               className={`py-2 px-6 rounded-full text-lg font-semibold ${activeBookCategory === 'Romance' ? 'bg-amber-500 text-black' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => handleBookCategoryClick('Romance')}
            >
              Romance
            </button>
            <button
              className={`py-2 px-6 rounded-full text-lg font-semibold ${activeBookCategory === 'Paranormal' ? 'bg-amber-500 text-black' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => handleBookCategoryClick('Paranormal')}
            >
              Paranormal
            </button>
          </div>

          {/* Book Covers Display */}
          <div>
            {activeBookCategory === 'Non-Fiction' && (
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {/* Non-Fiction Books */}
                <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/8132UG9kjNL._UF1000,1000_QL80_.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/81QGhzp8G2L._UF1000,1000_QL80_.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/51dQ1Xuxg1L.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/71UidDXpvLL._UF1000,1000_QL80_.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/51dQ1Xuxg1L.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://www.jaicobooks.com/wp-content/uploads/2024/07/J-3221_The10xLeader.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/611pfFtWjlL.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>

              </div>
            )}
            {activeBookCategory === 'Romance' && (
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                 {/* Romance Books */}
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682152178i/125148989.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/615qVEVez3L.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/819cKUW5FsL._UF1000,1000_QL80_.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/71wZ7d1qIcL._AC_UF1000,1000_QL80_.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/61TD5HKqhwL.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://m.media-amazon.com/images/I/81rZYpBTqXL._UF1000,1000_QL80_.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700425061i/202408445.jpg" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
              </div>
            )}
            {activeBookCategory === 'Paranormal' && (
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                 {/* Paranormal Books */}
                 <div className="flex flex-col items-center">
                  <img className="w-auto h-60 rounded-md shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAHp04UvqCGYJP2Bc1Wm3yur_AfQn8vr0ZA&s" alt="Book Cover"/>
                  <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-md text-sm hover:bg-amber-600 transition duration-300">Buy on Amazon</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

       {/* Book at a Glance Section */}
       <section id='books' className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-10">Book at a Glance <span role="img" aria-label="books">📚</span></h2>
          <p className="text-gray-600 mb-12">Discover our curated collection of insightful books that will transform your perspective <br /> on leadership, personal growth, and professional development.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Book 1: The 10X Leader */}
            <div className="flex flex-col items-center text-center">
              <img className="w-48 h-auto rounded-md shadow-md" src="https://m.media-amazon.com/images/I/71JRmQguz9L._UF1000,1000_QL80_.jpg" alt="The 10X Leader Cover"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">The 10X Leader</h4>
              <p className="text-gray-700 text-sm">Breaking the Rules of Conventional Leadership</p>
              <p className="text-gray-500 text-xs mt-1">by Pawan Verma</p>
              <button className="mt-4 bg-amber-500 text-white py-2 px-6 rounded-md text-sm hover:bg-amber-600 transition duration-300 flex items-center justify-center">
                <span className="mr-1">&#128214;</span> Read More
              </button>
            </div>

            {/* Book 2: Age of the Imperfect Leader */}
            <div className="flex flex-col items-center text-center">
              <img className="w-48 h-auto rounded-md shadow-md" src="https://m.media-amazon.com/images/I/611pfFtWjlL.jpg" alt="Age of the Imperfect Leader Cover"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Age of the Imperfect Leader</h4>
              <p className="text-gray-700 text-sm">Leading from the Heart</p>
              <p className="text-gray-500 text-xs mt-1">by Pawan Verma</p>
              <button className="mt-4 bg-amber-500 text-white py-2 px-6 rounded-md text-sm hover:bg-amber-600 transition duration-300 flex items-center justify-center">
                <span className="mr-1">&#128214;</span> Read More
              </button>
            </div>

            {/* Book 3: Unbroken */}
            <div className="flex flex-col items-center text-center">
              <img className="w-48 h-auto rounded-md shadow-md" src="https://m.media-amazon.com/images/I/51dQ1Xuxg1L.jpg" alt="Unbroken Cover"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Unbroken</h4>
              <p className="text-gray-700 text-sm">A Journey of Resilience and Redemption</p>
              <p className="text-gray-500 text-xs mt-1">by Pawan Verma</p>
              <button className="mt-4 bg-amber-500 text-white py-2 px-6 rounded-md text-sm hover:bg-amber-600 transition duration-300 flex items-center justify-center">
                 <span className="mr-1">&#128214;</span> Read More
              </button>
            </div>

            {/* Book 4: No Closure No Forgiveness */}
            <div className="flex flex-col items-center text-center">
              <img className="w-48 h-auto rounded-md shadow-md" src="https://m.media-amazon.com/images/I/71UidDXpvLL._UF1000,1000_QL80_.jpg" alt="No Closure No Forgiveness Cover"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">No Closure No Forgiveness</h4>
              <p className="text-gray-700 text-sm">A Gripping Psychological Thriller</p>
              <p className="text-gray-500 text-xs mt-1">by Pawan Verma</p>
              <button className="mt-4 bg-amber-500 text-white py-2 px-6 rounded-md text-sm hover:bg-amber-600 transition duration-300 flex items-center justify-center">
                <span className="mr-1">&#128214;</span> Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events and Activities at a Glance Section */}
      <section id='events' className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-14">Events and Activities at a Glance <span role="img" aria-label="events">🎉</span></h2>
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1: The 10X Leader Book Launch */}
            <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-4">
              <img className="w-full h-auto rounded-md shadow-md" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3e44761c-2471-44ed-bb2b-b0ba4c4f579e.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt="The 10X Leader Book Launch"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">The 10X Leader Book Launch</h4>
              <p className="text-gray-700 text-sm mt-2">An exclusive event at the Grand Hyatt featuring industry leaders and management professionals discussing the principles of 10X leadership.</p>
              <p className="text-gray-500 text-xs mt-3 flex items-center"><span className="mr-1"> <FaRegCalendarAlt/> </span> May 15, 2025</p>
            </div>

            {/* Event 2: Leadership Masterclass */}
            <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-4">
              <img className="w-full h-auto rounded-md shadow-md" src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/OMC/leadershipMAIN-20170712083242876.jpg" alt="Leadership Masterclass"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Leadership Masterclass</h4>
              <p className="text-gray-700 text-sm mt-2">A full-day workshop for executives and aspiring leaders on implementing the 10X leadership principles in their organizations.</p>
              <p className="text-gray-500 text-xs mt-3 flex items-center"><span className="mr-1"> <FaRegCalendarAlt/> </span> June 22, 2025</p>
            </div>

            {/* Event 3: International Literary Festival */}
            <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-4">
              <img className="w-full h-auto rounded-md shadow-md" src="https://publishingperspectives.com/wp-content/uploads/2021/09/710-Reykjavik-THIS-ONE-festival-audience-ftw.jpg" alt="International Literary Festival"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">International Literary Festival</h4>
              <p className="text-gray-700 text-sm mt-2">Join Dr. Verma at the prestigious International Literary Festival where he will discuss his journey from finance to fiction writing.</p>
               <p className="text-gray-500 text-xs mt-3 flex items-center"><span className="mr-1"> <FaRegCalendarAlt/> </span> July 8-10, 2025</p>
            </div>
          </div>

          {/* View All Events Button */}
          <button className="mt-8 bg-black text-white py-3 px-8 rounded-md text-lg hover:bg-gray-800 transition duration-300">View All Events</button>
        </div>
      </section>

      {/* Professional Speaker Section */}
      <section id='speaking' className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-4">Professional Speaker</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <img className="w-full h-auto rounded-md shadow-md" src="https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=" alt="Speaker image 1"/>
              <p className="text-gray-700 text-sm mt-4">An expert is typically an individual whose knowledge and experience are deeply rooted within a specific industry or field.</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <img className="w-full h-auto rounded-md shadow-md" src="https://c8.alamy.com/comp/2PTMRF0/business-and-entrepreneurship-symposium-female-speaker-giving-a-talk-at-business-meeting-audience-in-conference-hall-rear-view-of-unrecognized-participant-in-audience-2PTMRF0.jpg" alt="Speaker image 2"/>
              <p className="text-gray-700 text-sm mt-4">The core task of a professional speaker is to deliver speeches or presentations at various events, such as conferences, seminars, corporate meetings, or special occasions.</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <img className="w-full h-auto rounded-md shadow-md" src="https://as2.ftcdn.net/jpg/02/92/67/21/1000_F_292672190_0xt0zCuAXJGysTLZuEE9UZwWLNoFBEZ2.jpg" alt="Speaker image 3"/>
              <p className="text-gray-700 text-sm mt-4">One of the main benefits of working with a professional speaker is that they spend a significant amount of time researching and crafting their speeches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Container for Management Consultant and Ready to Transform Sections */}
      <div className="container mx-auto">
        {/* Management Consultant Section */}
        <section id='consulting' className="py-12 bg-white text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-4">Management Consultant</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-6">
              <img className="w-full h-auto rounded-md shadow-md" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Management_Consultant.jpg" alt="Consultant image 1"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Strategic Leadership</h4>
              <p className="text-gray-700 text-sm mt-2">Developing leadership capabilities and strategic thinking at all levels of your organization to drive sustainable growth.</p>
              <a href="#" className="text-amber-500 text-sm mt-4 hover:underline flex items-center">Learn more <span className="ml-1">→</span></a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-6">
              <img className="w-full h-auto rounded-md shadow-md" src="https://www.businessbecause.com/uploads/default/news/images/bcd6fe35b1322d80dce526af93cf4457dc097bf4.png" alt="Consultant image 2"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Organizational Transformation</h4>
              <p className="text-gray-700 text-sm mt-2">Guiding organizations through complex change initiatives with a focus on culture, structure, and leadership alignment.</p>
              <a href="#" className="text-amber-500 text-sm mt-4 hover:underline flex items-center">Learn more <span className="ml-1">→</span></a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-6">
              <img className="w-full h-auto rounded-md shadow-md" src="https://www.humanresourcesmba.net/wp-content/uploads/2021/09/management-consultant.jpg" alt="Consultant image 3"/>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Innovation & Growth</h4>
              <p className="text-gray-700 text-sm mt-2">Building innovation capabilities and growth strategies for businesses looking to expand or enter new markets.</p>
              <a href="#" className="text-amber-500 text-sm mt-4 hover:underline flex items-center">Learn more <span className="ml-1">→</span></a>
            </div>
          </div>
        </section>

        {/* Ready to Transform Section */}
        <section id='ready' className="py-12">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Transform Your Organization?</h2>
              <p className="text-gray-600 mb-8">
                With experience serving on boards and leading initiatives in organizations like Reliance <br />
                Group and LIC of India, Dr. Verma brings a wealth of practical knowledge to help your <br />
                organization thrive.
              </p>
              <button className="bg-black text-white py-3 px-8 rounded-md text-lg hover:bg-gray-800 transition duration-300">Schedule a Consultation</button>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2">
              <img className="w-full h-auto rounded-lg shadow-md" src="https://s29814.pcdn.co/wp-content/uploads/2022/11/Shutterstock_2074606618.png" alt="Ready to Transform Your Organization"/>
            </div>
          </div>
        </section>
      </div>

      {/* Awards & Recognition Section */}
      <section  id='awards' className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-8">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {/* Award Card 1: Leadership Excellence Award */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <img className="w-20 h-20" src="https://images.jdmagicbox.com/quickquotes/images_main/-dmvmrdvl.jpg" alt="Leadership Excellence Award"/>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Leadership Excellence <br /> Award</h4>
              <p className="text-gray-600 text-sm mt-2">Financial Services Forum, 2024</p>
              <span className="mt-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center">
                <span className="mr-1">🏆</span> Excellence
              </span>
            </div>

            {/* Award Card 2: Best Business Author */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                 <img className="w-20 h-20" src="https://5.imimg.com/data5/RU/UJ/MY-17868609/school-gold-medal.jpg" alt="Best Business Author"/>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Best Business Author</h4>
              <p className="text-gray-600 text-sm mt-2">India Authors Award, 2023</p>
               <span className="mt-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center">
                <span className="mr-1">✍️</span> Author
              </span>
            </div>

            {/* Award Card 3: Distinguished Speaker */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                 <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAE9oFvEuRDZKmO7tmIxpmcSvg5k3s5WtPA&s" alt="Distinguished Speaker"/>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Distinguished Speaker</h4>
              <p className="text-gray-600 text-sm mt-2">Global Leadership Summit, <br /> 2022</p>
               <span className="mt-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center">
                <span className="mr-1">🎙️</span> Speaker
              </span>
            </div>

            {/* Award Card 4: Lifetime Achievement */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                 <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdZp4P4SJlzs73-qwz3lpgOLAdjykWKZ_cw&s" alt="Lifetime Achievement"/>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Lifetime Achievement</h4>
              <p className="text-gray-600 text-sm mt-2">Financial Services Association, <br /> 2021</p>
               <span className="mt-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center">
                <span className="mr-1">🌟</span> Achievement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id='blogs' className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-8">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Blog Card 1: In the Service Of God */}
            <div className="flex flex-col items-start text-left bg-gray-100 rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-2">In the Service Of God</h4>
              <p className="text-gray-700 text-sm flex-grow">God is highly disturbed. He surveys the universe and finds everything to be in order. But as he looks around, he finds his own heaven...</p>
              <p className="text-gray-500 text-xs mt-4">By Pawan Verma</p>
              <a href="#" className="text-amber-500 text-sm mt-2 hover:underline">Read More</a>
            </div>

            {/* Blog Card 2: Of Men And Women */}
            <div className="flex flex-col items-start text-left bg-gray-100 rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Of Men And Women</h4>
              <p className="text-gray-700 text-sm flex-grow">Life is indeed cruel to men. When they are born, their mothers get compliments and flowers, when they get married, their brides get presents and...</p>
              <p className="text-gray-500 text-xs mt-4">By Pawan Verma</p>
              <a href="#" className="text-amber-500 text-sm mt-2 hover:underline">Read More</a>
            </div>

            {/* Blog Card 3: Tax Us More, Dear FM */}
            <div className="flex flex-col items-start text-left bg-gray-100 rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Tax Us More, Dear FM</h4>
              <p className="text-gray-700 text-sm flex-grow">Dear Pranab Da, As you were reading out the pages of your budget speech in the Parliament last week, with me and my family members listening...</p>
               <p className="text-gray-500 text-xs mt-4">By Pawan Verma</p>
              <a href="#" className="text-amber-500 text-sm mt-2 hover:underline">Read More</a>
            </div>
          </div>

          {/* View All Blogs Button */}
          <button className="mt-8 bg-black text-white py-3 px-8 rounded-md text-lg hover:bg-gray-800 transition duration-300">View All Blogs</button>
        </div>
      </section>

      {/* Book Testimonials Section */}
      <section id='testinomials' className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-8">Book Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Testimonial Card 1 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <div className="text-amber-500 text-xl mb-2">★★★★★</div>
              <p className="text-gray-700 italic mb-4">"It's a must read for all the new generation leaders who wants to hone their leadership."
              </p>
              <p className="text-gray-800 font-semibold">Manish Mimani</p>
              <p className="text-gray-600 text-sm">Founder & CEO, Protectt.ai Labs</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <div className="text-amber-500 text-xl mb-2">★★★★★</div>
              <p className="text-gray-700 italic mb-4">"Highly recommended to practitioners for through on new-age Leadership."
              </p>
              <p className="text-gray-800 font-semibold">M. Balachandran</p>
              <p className="text-gray-600 text-sm">Former Chairman, Bank of India and NPCI</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
              <div className="text-amber-500 text-xl mb-2">★★★★★</div>
              <p className="text-gray-700 italic mb-4">"The 10X Leader makes you think about leadership in an entirely new way."
              </p>
              <p className="text-gray-800 font-semibold">Manish Mimani</p>
              <p className="text-gray-600 text-sm">Founder & CEO, Protectt.ai Labs Pvt Ltd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id='contact' className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-amber-500 pb-2 mb-8">Social Media</h2>
          <div className="flex justify-center space-x-8 mt-12">
            {/* LinkedIn */}
            <div className="flex flex-col items-center">
              <a href="#" className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-2xl hover:bg-amber-500 hover:text-white transition duration-300">
               <FaLinkedinIn />
              </a>
              <p className="text-gray-600 text-sm mt-2">LinkedIn</p>
            </div>
            {/* YouTube */}
            <div className="flex flex-col items-center">
              <a href="#" className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-2xl hover:bg-amber-500 hover:text-white transition duration-300">
                <FaYoutube />
              </a>
              <p className="text-gray-600 text-sm mt-2">YouTube</p>
            </div>
            {/* Twitter */}
            <div className="flex flex-col items-center">
              <a href="#" className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-2xl hover:bg-amber-500 hover:text-white transition duration-300">
               <FaTwitter />
              </a>
              <p className="text-gray-600 text-sm mt-2">Twitter</p>
            </div>
            {/* Facebook */}
            <div className="flex flex-col items-center">
              <a href="#" className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-2xl hover:bg-amber-500 hover:text-white transition duration-300">
                <FaFacebookF/>
              </a>
              <p className="text-gray-600 text-sm mt-2">Facebook</p>
            </div>
            {/* Instagram */}
            <div className="flex flex-col items-center">
              <a href="#" className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-2xl hover:bg-amber-500 hover:text-white transition duration-300">
                <FaInstagram/>
              </a>
              <p className="text-gray-600 text-sm mt-2">Instagram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img className="w-16 h-auto mb-4" src="https://static.vecteezy.com/system/resources/previews/012/762/245/non_2x/pv-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg" alt="Pawan Verma Logo"/> {/* Placeholder logo */}
            <p className="text-gray-400 text-sm mb-4">Author, speaker, and consultant helping individuals and organizations tell their stories with impact.</p>
            {/* Social Media Icons in Footer (as per image) */}
            <div className="flex space-x-4">
      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-amber-500 transition duration-300">
        <FaLinkedinIn />
      </a>
      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-amber-500 transition duration-300">
        <FaYoutube />
      </a>
      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-amber-500 transition duration-300">
        <FaTwitter />
      </a>
      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-amber-500 transition duration-300">
        <FaFacebookF />
      </a>
      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-amber-500 transition duration-300">
        <FaInstagram />
      </a>
    </div>



          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-amber-500">Home</a></li>
              <li><a href="#" className="hover:text-amber-500">About</a></li>
              <li><a href="#" className="hover:text-amber-500">Books</a></li>
              <li><a href="#" className="hover:text-amber-500">Speaking</a></li>
              <li><a href="#" className="hover:text-amber-500">Consulting</a></li>
              <li><a href="#" className="hover:text-amber-500">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-amber-500">Free Writing Guide</a></li>
              <li><a href="#" className="hover:text-amber-500">Leadership Toolkit</a></li>
              <li><a href="#" className="hover:text-amber-500">Storytelling Templates</a></li>
              <li><a href="#" className="hover:text-amber-500">Podcast</a></li>
              <li><a href="#" className="hover:text-amber-500">Video Library</a></li>
              <li><a href="#" className="hover:text-amber-500">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">Join my newsletter for insights on leadership, storytelling, and writing.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email" className="py-2 px-4 rounded-md bg text-white bg-gray-700 flex-grow"/>
              <button className="bg-amber-500 text-black py-2 px-4 rounded-md hover:bg-amber-600 transition duration-300">Subscribe</button>
            </div>
            <p className="text-gray-500 text-xs mt-4">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Policies */}
        <div className="container mx-auto border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Author Name. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-amber-500">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500">Terms of Service</a>
            <a href="#" className="hover:text-amber-500">Cookie Policy</a>
          </div>
        </div>
      </footer>

      
    </div>
  )
}

export default App
