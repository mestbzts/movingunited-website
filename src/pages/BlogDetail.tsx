import { useParams, useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 0,
    title: "How to Prepare for a Big Move",
    category: "Moving Tips",
    summary: "Essential steps to make your move stress-free.",
    content: "Full blog content for preparing for a big move...",
    images: ["/images/blogs/move1.jpg"],
  },
  {
    id: 1,
    title: "Staging Your Home for Sale",
    category: "Staging",
    summary: "Tips to make your home irresistible to buyers.",
    content: "Full blog content for staging your home...",
    images: ["/images/blogs/staging1.jpg", "/images/blogs/staging2.jpg"],
  },
  {
    id: 2,
    title: "Commercial Relocation Checklist",
    category: "Commercial",
    summary: "A checklist for a smooth office relocation.",
    content: "Full blog content for commercial relocation...",
    images: ["/images/blogs/commercial1.jpg"],
  },
  // ...same as in Blog.tsx
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
        <button className="text-primary underline" onClick={() => navigate("/blog")}>
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <button className="mb-4 text-primary underline" onClick={() => navigate("/blog")}>
          &larr; Back to Blogs
        </button>
        <div className="text-xs text-primary font-semibold mb-2">{blog.category}</div>
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        {blog.images && (
          <div className="flex flex-col gap-4 mb-6">
            {blog.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${blog.title} ${idx + 1}`}
                className="w-full rounded object-cover"
              />
            ))}
          </div>
        )}
        <div className="text-base text-gray-800 whitespace-pre-line">{blog.content}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
