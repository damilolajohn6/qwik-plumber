import Service from "@/components/Service";
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
  {
    id: 4,
    title: "How to Detect a Hidden Water Leak in Your Home",
    description:
      "Water leaks can go unnoticed for months, leading to damage. Here’s how to spot and prevent them early.",
    image: "/assets/plumber1.jpg",
  },
  {
    id: 5,
    title: "How to Detect a Hidden Water Leak in Your Home",
    description:
      "Water leaks can go unnoticed for months, leading to damage. Here’s how to spot and prevent them early.",
    image: "/assets/plumber1.jpg",
  },
  {
    id: 6,
    title: "How to Detect a Hidden Water Leak in Your Home",
    description:
      "Water leaks can go unnoticed for months, leading to damage. Here’s how to spot and prevent them early.",
    image: "/assets/plumber1.jpg",
  },
];

const BlogPage = () => {
  return (
    <div className="w-full  ">
      <section className=" bg-yellow-500 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left Side - Text Content */}
          <div className="w-full  rounded-lg p-6 md:p-10 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0A0A5E] leading-tight">
              Explore Our Publications to Stay on The Lastest Trends
            </h1>
          </div>

          {/* Right Side - Image Content */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/assets/handy.png"
              alt="Plumbing Tools"
              width={600}
              height={500}
              className="object-contain max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12">
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
      <Service />
    </div>
  );
};

export default BlogPage;
