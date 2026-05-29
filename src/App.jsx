import React, { useState } from "react";

import photosnapLogo from "./assets/photosnap.svg";
import manageLogo from "./assets/manage.svg";
import accountLogo from "./assets/account.svg";
import myhomeLogo from "./assets/myhome.svg";
import loopStudiosLogo from "./assets/loop-studios.svg";
import faceitLogo from "./assets/faceit.svg";
import shortlyLogo from "./assets/shortly.svg";
import insureLogo from "./assets/insure.svg";
import eyecamLogo from "./assets/eyecam-co.svg";
import airFilterLogo from "./assets/the-air-filter-company.svg";
import mobileBg from "./assets/bg-header-mobile.svg";
import iconRemove from "./assets/icon-remove.svg";
const jobPost = [
  {
    id: 1,
    company: "Photosnap",
    logo: photosnapLogo,
    isNew: true,
    isFeatured: true,
    role: "Frontend",
    level: "Senior",
    position: "Senior Frontend Developer",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: manageLogo,
    isNew: true,
    isFeatured: true,
    role: "Fullstack",
    level: "Midweight",
    position: "Fullstack Developer",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: accountLogo,
    isNew: true,
    isFeatured: false,
    role: "Frontend",
    level: "Junior",
    position: "Junior Frontend Developer",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: myhomeLogo,
    isNew: false,
    isFeatured: false,
    role: "Frontend",
    level: "Junior",
    position: "Junior Frontend Developer",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: loopStudiosLogo,
    isNew: false,
    isFeatured: false,
    role: "Fullstack",
    level: "Midweight",
    position: "Software Engineer",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: faceitLogo,
    isNew: false,
    isFeatured: false,
    role: "Backend",
    level: "Junior",
    position: "Junior Backend Developer",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: shortlyLogo,
    isNew: false,
    isFeatured: false,
    role: "Frontend",
    level: "Junior",
    position: "Junior Developer",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: insureLogo,
    isNew: false,
    isFeatured: false,
    role: "Frontend",
    level: "Junior",
    position: "Junior Frontend Developer",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: eyecamLogo,
    isNew: false,
    isFeatured: false,
    role: "Fullstack",
    level: "Midweight",
    position: "Fullstack Engineer",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: airFilterLogo,
    isNew: false,
    isFeatured: false,
    role: "Frontend",
    level: "Junior",
    position: "Front-end Dev",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];
const App = () => {
  const [filters, setFilters] = useState([]);

  const addFilter = (item) => {
    if (!filters.includes(item)) {
      setFilters([...filters, item]);
    }
  };

  const removeFilter = (item) => {
    setFilters(filters.filter((f) => f !== item));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobPost.filter((job) => {
    if (filters.length === 0) return true;

    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    return filters.every((filter) => tags.includes(filter));
  });
  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-[url('./assets/bg-header-mobile.svg')] md:bg-[url('./assets/bg-header-desktop.svg')] bg-(--green-400) bg-no-repeat bg-top bg-cover h-40" />

      {/* CONTAINER */}
      <div className="w-full max-w-5xl mx-auto px-6">
        {/* FILTER BAR */}
        {filters.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-5 flex flex-wrap items-center gap-4 -mt-8 relative z-10">
            <div className="flex flex-wrap gap-4">
              {filters.map((filter) => (
                <div key={filter} className="flex overflow-hidden rounded-lg">
                  <span className="bg-(--green-50) text-(--green-400) px-3 py-1.5 font-bold text-md">
                    {filter}
                  </span>

                  <button
                    onClick={() => removeFilter(filter)}
                    className="bg-(--green-400) px-3 hover:bg-(--green-900) transition"
                  >
                    <img src={iconRemove} alt="remove filter" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={clearFilters}
              className="ml-auto text-(--gray-400) hover:text-(--green-400) hover:underline font-bold text-md"
            >
              Clear
            </button>
          </div>
        )}

        {/* JOB LIST */}
        <main className="flex flex-col gap-12 py-14">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`bg-white relative rounded-md shadow-lg px-6 py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between ${
                job.isFeatured ? "border-l-[5px] border-(--green-400)" : ""
              }`}
            >
              {/* LEFT SIDE */}
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                {/* LOGO */}
                <img
                  className="w-15 h-15 md:w-20 md:h-20 absolute -top-6 left-6 md:static"
                  src={job.logo}
                  alt={job.company}
                />

                {/* INFO */}
                <div className="mt-4 md:mt-0 flex flex-col gap-3">
                  {/* COMPANY + BADGES */}
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-bold text-(--green-400)">
                      {job.company}
                    </p>

                    {job.isNew && (
                      <span className="bg-(--green-400) text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW!
                      </span>
                    )}

                    {job.isFeatured && (
                      <span className="bg-(--green-900) text-white text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* POSITION */}
                  <h2 className="font-bold text-lg md:text-xl hover:text-(--green-400) cursor-pointer transition">
                    {job.position}
                  </h2>

                  {/* DETAILS */}
                  <div className="flex flex-wrap items-center gap-2 text-(--gray-400) text-sm border-b md:border-none pb-4 md:pb-0">
                    <p>{job.postedAt}</p>
                    <span>•</span>
                    <p>{job.contract}</p>
                    <span>•</span>
                    <p>{job.location}</p>
                  </div>
                </div>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-4">
                {[job.role, job.level, ...job.languages, ...job.tools].map(
                  (item, i) => (
                    <button
                      key={i}
                      onClick={() => addFilter(item)}
                      className="bg-(--green-50) text-(--green-400) font-bold px-3 py-2 rounded-md hover:bg-(--green-400) hover:text-white"
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
