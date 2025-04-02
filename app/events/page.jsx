import Image from "next/image";

export default function Events() {
  const events = [
    {
      title: "Build with AI 2025",
      date: "26 Mar 2025",
      type: "Workshop / Study Group",
      name: "Build With AI- Prayagraj",
      organizer: "GDG Prayagraj",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/BWAI25-EventThumb-01_k2vs7Fr.png"
    },
    {
      title: "DevFest 2024",
      date: "26 Oct 2024",
      type: "External Ticketing",
      name: "Devfest Prayagraj 2024",
      organizer: "GDG Prayagraj",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Copy%20of%20DF24-Organizer-badge_uFOn2iL.png"
    },
    {
      title: "Google I/O Extended",
      date: "29 Jun 2024",
      type: "Speaker Session / Tech Talk",
      name: "Google I/O Extended Prayagraj",
      organizer: "GDG Prayagraj",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Copy%20of%20IO%20extended%202024%20Bevy%20thumbnail%20with%20editable%20location_bsNVpeV.png"
    },
    {
      title: "Build with AI - Startup Show",
      date: "8 May 2024",
      type: "Hackathon",
      name: "Build with AI - Startup Show",
      organizer: "GDG Prayagraj",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/GDG24-BwAI-Bevy-EventThumb-Blue%20%282%29_flFteli.png"
    },
    {
      title: "Women Techmakers IWD 2024",
      date: "23 Mar 2024",
      type: "Conference",
      name: "IWD'24 Prayagraj",
      organizer: "GDG Prayagraj",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/WTM-IWD-2024-bevy-icon_tjoSuDv.png"
    },
    {
      title: "DevFest 2023",
      date: "16 Dec 2023",
      type: "Conference",
      name: "DevFest Prayagraj 2023",
      organizer: "GDG Prayagraj",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/DF23-Bevy-EventThumb-Blue_dMIUtq1.png"
    },
    {
      title: "Cloud Study Jam",
      date: "25 Nov 2023",
      type: "Workshop",
      name: "Cloud Study Jam 2023",
      organizer: "GDG Prayagraj",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/GDG%20Cloud.png"
    },
    {
      title: "Google I/O Extended 2023",
      date: "15 Jul 2023",
      type: "Conference",
      name: "Google I/O Extended Prayagraj 2023",
      organizer: "GDG Prayagraj",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Copy%20of%20IOE23-PA-Edition-Bevy-Thumbnail-1080x1080-Editable_cdVeKMf.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0B1120] dark:to-[#0A0F1C]">
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
            Our Events
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Join us at our upcoming events or explore our past events to see what GDG Prayagraj has been up to. 
            From workshops to conferences, we organize various events to help developers learn and grow together.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-4 bg-white dark:bg-[#111827]/80 hover:shadow-lg transition-all duration-300">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {event.date}
                </span>
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-2">
                  {event.type}
                </span>
                <h3 className="text-sm sm:text-base font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {event.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {event.organizer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://gdg.community.dev/gdg-prayagraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
          >
            <span className="font-medium">Join Our Community</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
} 