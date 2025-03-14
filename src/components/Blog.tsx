"use client";

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "5 Common Plumbing Issues and How to Fix Them",
    description:
      "Discover the most common plumbing problems homeowners face and learn simple DIY fixes before calling a plumber.",
    image: "/assets/plumber1.jpg",
  },
  {
    id: 2,
    title: "Why Regular Drain Cleaning is Important",
    description:
      "Clogged drains can lead to costly repairs. Learn why routine drain maintenance is essential for a healthy plumbing system.",
    image: "/assets/plumber1.jpg",
  },
  {
    id: 3,
    title: "How to Detect a Hidden Water Leak in Your Home",
    description:
      "Water leaks can go unnoticed for months, leading to damage. Here’s how to spot and prevent them early.",
    image: "/assets/plumber1.jpg",
  },
];

const Blog = () => {
  return (
    <div className="w-full bg-[#FFEFCF80] ">
      <section className=" py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold   text-[#020248]">Recent News</h2>
          {/* <p className="text-center text-gray-600 mt-2">
            Stay updated with the latest plumbing tips and guides.
            </p> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  width={600}
                  height={600}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#020248]">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{post.description}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
