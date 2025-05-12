"use client";
import React, { useState } from "react";

const faqs = [
  // About Us
  {
    section: "About Us",
    question: "What is GDG Prayagraj?",
    answer:
      "GDG Prayagraj (Google Developer Group Prayagraj) is a volunteer-run community for developers, students, and tech enthusiasts in the Prayagraj region who are interested in Google's developer technologies. This includes Android, Google Cloud Platform (GCP), Flutter, Firebase, Web technologies, AI/Machine Learning, and more. Our goal is to learn, share knowledge, and network together.",
  },
  {
    section: "About Us",
    question: "What is TFUG Prayagraj?",
    answer:
      "TFUG Prayagraj (TensorFlow User Group Prayagraj) is a community specifically focused on TensorFlow, Google's open-source machine learning framework, and the broader ecosystem of AI/ML technologies. We cater to learners and practitioners interested in AI/ML through focused workshops, talks, and discussions.",
  },
  {
    section: "About Us",
    question: "What's the relationship between GDG and TFUG Prayagraj?",
    answer:
      "While both are community groups supported by Google, GDG Prayagraj has a broader focus across various Google technologies, whereas TFUG Prayagraj specializes specifically in TensorFlow and AI/ML. We often collaborate and share resources, representing different facets of the Google developer ecosystem in Prayagraj. Both are run by local volunteers.",
  },
  {
    section: "About Us",
    question: "How are GDG Prayagraj and TFUG Prayagraj different from other tech communities or college clubs in Prayagraj?",
    answer:
      "Prayagraj has a growing tech scene with various college clubs and communities! GDG Prayagraj focuses broadly on Google developer technologies (Cloud, Android, Web, AI, etc.), while TFUG Prayagraj specializes in TensorFlow and AI/ML. Both are part of global networks supported by Google, offering access to structured learning programs and potential connections with Google experts. We aim to connect students, professionals, and enthusiasts in an open, volunteer-run environment focused on learning and sharing, complementing the activities of university-specific clubs or other local groups.",
  },
  {
    section: "About Us",
    question: "Who can join?",
    answer:
      "Anyone interested in technology is welcome! Whether you're a student, a professional developer, a designer, a beginner curious about tech, or an expert in your field, you're invited to join our community and events.",
  },
  // Membership & Events
  {
    section: "Membership & Events",
    question: "How do I become a member? Is there a cost?",
    answer:
      "Membership is completely free! The best way to join and stay updated is by becoming a member on our official GDG Community Platform and/or our Meetup page. [Insert links here]",
  },
  {
    section: "Membership & Events",
    question: "How can I find out about upcoming events?",
    answer:
      "We announce all our events primarily on our Meetup page. You can also follow us on social media for updates. [Insert links here]",
  },
  {
    section: "Membership & Events",
    question: "What kind of events do you organize?",
    answer:
      "We host a variety of events, including technical workshops, hands-on labs, tech talks by industry experts, study jams, community celebrations, and networking meetups.",
  },
  {
    section: "Membership & Events",
    question: "Are your events free?",
    answer:
      "Yes, the vast majority of our events are free to attend for all community members. Occasionally, larger special events might have different arrangements, but this will always be clearly communicated beforehand.",
  },
  {
    section: "Membership & Events",
    question: "Where are events usually held?",
    answer:
      "We host events at various locations in Prayagraj, often collaborating with local academic institutions or other supportive venues. The specific venue is always listed on the event page. We also sometimes host online events.",
  },
  {
    section: "Membership & Events",
    question: "Do I need to be an expert to attend?",
    answer:
      "Not at all! Our events cater to a range of skill levels. Many events are beginner-friendly, while others dive into more advanced topics. The key requirement is enthusiasm to learn!",
  },
  // Code of Conduct
  {
    section: "Code of Conduct",
    question: "What are the community guidelines or Code of Conduct for participating in GDG/TFUG Prayagraj events?",
    answer:
      "We are committed to providing a welcoming, respectful, inclusive, and harassment-free experience for everyone. All attendees, speakers, sponsors, and volunteers at our events are required to agree with and adhere to our Code of Conduct. You can find the full Code of Conduct here: [Insert CoC link here]",
  },
  // Getting Involved
  {
    section: "Getting Involved",
    question: "How can I volunteer for events?",
    answer:
      "We love community participation! We periodically put out calls for volunteers for specific events via our Meetup page and social channels. You can also express your interest by contacting the organizers directly. [Insert contact link here]",
  },
  {
    section: "Getting Involved",
    question: "How can I become a speaker?",
    answer:
      "If you have expertise in a relevant technology and would like to share your knowledge, we'd love to hear from you! Please reach out to the organizing team with your topic idea. [Insert speaker proposal/contact link here]",
  },
  {
    section: "Getting Involved",
    question: "Can my company sponsor GDG/TFUG Prayagraj?",
    answer:
      "Yes! We welcome support from local and national companies. Sponsorship helps us organize more impactful events. Please contact us to discuss opportunities. [Insert sponsorship contact link here]",
  },
  {
    section: "Getting Involved",
    question: "I have an idea for an event or collaboration. Who do I talk to?",
    answer:
      "We're always open to new ideas! Please get in touch with the organizing team to share your thoughts. [Insert contact link here]",
  },
  // Community Landscape
  {
    section: "Community Landscape",
    question: "What other tech communities like GDG, TFUG, or FFDG exist in Uttar Pradesh?",
    answer:
      "Uttar Pradesh has a vibrant and expanding tech community ecosystem! Besides GDG & TFUG Prayagraj, you can find other GDG and TFUG chapters, Google Developer Student Clubs (GDSCs), specialized groups like FFDG Prayagraj, university-specific clubs, and startup/incubator communities. We often collaborate with other communities and encourage exploring the diverse opportunities available across UP!",
  },
];

const groupedFaqs = faqs.reduce((acc, faq) => {
  acc[faq.section] = acc[faq.section] || [];
  acc[faq.section].push(faq);
  return acc;
}, {});

export default function FAQPage() {
  const [open, setOpen] = useState({ section: null, idx: null });

  const handleToggle = (section, idx) => {
    if (open.section === section && open.idx === idx) {
      setOpen({ section: null, idx: null });
    } else {
      setOpen({ section, idx });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-[#0B1120] dark:via-[#181F3A] dark:to-[#0A0F1C] py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-white drop-shadow-lg">
          Frequently Asked Questions
        </h1>
        <div className="space-y-16">
          {Object.entries(groupedFaqs).map(([section, faqs]) => (
            <div key={section}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
                {section}
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => {
                  const isOpen = open.section === section && open.idx === idx;
                  return (
                    <div
                      key={idx}
                      className={`transition-all duration-300 rounded-xl shadow-lg hover:shadow-2xl bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md border-2 ${isOpen ? 'border-gradient-to-r border-blue-500 border-l-8 dark:border-blue-400 scale-[1.02]' : 'border-transparent'} group`}
                      style={{ boxShadow: isOpen ? '0 8px 32px 0 rgba(66,133,244,0.15)' : undefined }}
                    >
                      <button
                        className="w-full flex justify-between items-center p-6 focus:outline-none"
                        onClick={() => handleToggle(section, idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-6 h-6 ml-2 text-gray-500 dark:text-blue-200 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500 dark:text-blue-300' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} px-6 pb-4`}
                      >
                        <div className={`pt-2 text-gray-700 dark:text-gray-200 text-base animate-fade-in ${isOpen ? 'animate-fade-in' : ''}`}
                          style={{ transition: 'opacity 0.4s' }}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 