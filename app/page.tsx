import Footer from "@/src/components/Footer";
import { ThemeToggle } from "@/src/components/ThemeToggle";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "A year in color trends",
    subtitle:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...",
    image: "/blog1.webp",
    date: "Mar 21, 2023",
    readTime: "2 min read",
    views: 0,
    comments: 0,
    likes: 15,
  },
  {
    id: 2,
    title: "Why wireframes are always a better idea",
    subtitle:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...",
    image: "/blog2.jpg",
    date: "Mar 21, 2023",
    readTime: "1 min read",
    views: 0,
    comments: 0,
    likes: 15,
  },
  {
    id: 3,
    title: "The importance of the designer notebook",
    subtitle:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...",
    image: "/blog3.jpeg",
    date: "Mar 21, 2023",
    readTime: "2 min read",
    views: 0,
    comments: 0,
    likes: 6,
  },
  {
    id: 4,
    title: "Why every web designer needs inspiration",
    subtitle:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...",
    image: "/blog4.jpg",
    date: "Mar 21, 2023",
    readTime: "1 min read",
    views: 0,
    comments: 0,
    likes: 5,
  },
];

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          width={1920}
          height={1080}
          className="opacity-70"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-white text-lg font-semibold">FEEDs & GRIDs</h1>
        <ThemeToggle />
        <div className="flex space-x-8">
          <a href="#" className="text-white text-sm hover:underline">
            HOME
          </a>
          <a href="#" className="text-white text-sm hover:underline">
            CONTACT US
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h3 className="text-sm uppercase tracking-wide mb-4">
          How to be an amazing designer
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Industry of User Experience Design
        </h1>
      </div>

      {/* Listing Content */}
      <div className="px-10 py-8">
        {/* Categories */}
        <div className="flex justify-start items-center gap-6 mb-6">
          <button className="text-gray-500 hover:text-gray-900">
            All Posts
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            Web Design 101
          </button>
          <button className="text-gray-500 hover:text-gray-900">UX / UI</button>
          <button className="text-gray-500 hover:text-gray-900">
            Tools & Tips
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border rounded-lg shadow-sm overflow-hidden"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
                width={200}
                height={150}
              />
              <div className="p-4">
                <div className="text-sm text-gray-500 flex items-center justify-between">
                  <span>Admin</span>
                  <span>
                    {blog.date} · {blog.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mt-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{blog.subtitle}</p>
                <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
                  <span>
                    {blog.views} views · {blog.comments} comments
                  </span>
                  <span className="flex items-center gap-1">
                    ❤️ {blog.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
