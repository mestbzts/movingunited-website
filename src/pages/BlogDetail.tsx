import { useParams, useNavigate } from "react-router-dom";

// Use the same blogs array as in Blog.tsx
const blogs = [
	{
		id: 0,
		title: "How to Prepare for a Big Move",
		category: "Moving Tips",
		summary: "Essential steps to make your move stress-free.",
		content: `Full blog content for preparing for a big move...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. 
Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Curabitur nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.`,
		images: ["/images/blogs/move1.jpg"],
	},
	{
		id: 1,
		title: "Staging Your Home for Sale",
		category: "Staging",
		summary: "Tips to make your home irresistible to buyers.",
		content: `Full blog content for staging your home...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. 
Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Curabitur nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.`,
		images: ["/images/blogs/staging1.jpg", "/images/blogs/staging2.jpg"],
	},
	{
		id: 2,
		title: "Commercial Relocation Checklist",
		category: "Commercial",
		summary: "A checklist for a smooth office relocation.",
		content: `Full blog content for commercial relocation...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. 
Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Curabitur nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.`,
		images: ["/images/blogs/commercial1.jpg"],
	},
	{
		id: 3,
		title: "Packing Guide for Fragile Items",
		category: "Packing Guide",
		summary: "How to safely pack your fragile belongings.",
		content: `Full blog content for packing fragile items...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. 
Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Curabitur nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.`,
		images: ["/images/blogs/packing1.jpg"],
	},
	{
		id: 4,
		title: "Planning Your Move: Timeline & Checklist",
		category: "Planning",
		summary: "A step-by-step timeline for a stress-free move.",
		content: `Full blog content for planning your move...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. 
Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Curabitur nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.`,
		images: ["/images/blogs/planning1.jpg"],
	},
	// ...add more blogs as needed
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
