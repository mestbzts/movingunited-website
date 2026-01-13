import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BackToTopButton from "@/components/BackToTopButton";
import BigMoveImg from "@/assets/bigmove.jpg";
import Staging from "@/assets/staging.jpg";
import Move from "@/assets/move.jpg";
import Fragile from "@/assets/fragile.jpg";
import Office from "@/assets/office.jpg";

const blogs = [
	{
		id: 0,
		title: "How to Prepare for a Big Move",
		category: "Moving Tips",
		summary: "Essential steps to make your move stress-free.",
		content: "Full blog content for preparing for a big move...",
		images: [BigMoveImg],
	},
	{
		id: 1,
		title: "How to Stage Your Home",
		category: "Staging",
		summary: "Tips to make your home irresistible to buyers.",
		content: "Full blog content for staging your home...",
		images: [Staging],
	},
	{
		id: 2,
		title: "Commercial Relocation Checklist",
		category: "Commercial",
		summary: "A checklist for a smooth office relocation.",
		content: "Full blog content for commercial relocation...",
		images: [Office],
	},
	{
		id: 3,
		title: "Packing Guide for Fragile Items",
		category: "Packing Guide",
		summary: "How to safely pack your fragile belongings.",
		content: "Full blog content for packing fragile items...",
		images: [Fragile],
	},
	{
		id: 4,
		title: "Planning Your Move: Timeline & Checklist",
		category: "Planning",
		summary: "A step-by-step timeline for a stress-free move.",
		content: "Full blog content for planning your move...",
		images: [Move],
	},
	// ...add more blogs as needed
];

const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

const Blog = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const navigate = useNavigate();

	const filteredBlogs =
		selectedCategory === "All"
			? blogs
			: blogs.filter((b) => b.category === selectedCategory);

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl font-bold mb-6">Moving Blog</h1>
					<p className="text-xl max-w-3xl mx-auto">
						Expert advice, tips, and guides to make your move easier and more
						efficient
					</p>
				</div>
			</section>

			{/* Category Bar */}
			<div className="flex justify-center gap-4 px-4 py-6 bg-gray-100 sticky top-0 z-10">
				{categories.map((cat) => (
					<button
						key={cat}
						className={`px-4 py-2 rounded-full text-sm font-semibold ${
							selectedCategory === cat
								? "bg-primary text-white"
								: "bg-white text-primary border border-primary"
						}`}
						onClick={() => setSelectedCategory(cat)}
						type="button"
					>
						{cat}
					</button>
				))}
			</div>

			{/* Blog Grid */}
			<section className="py-12 container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredBlogs.map((blog) => (
						<Card
							key={blog.id}
							className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
						>
							{blog.images && blog.images[0] && (
								<img
									src={blog.images[0]}
									alt={blog.title}
									className="w-full h-56 object-cover object-center rounded-t-lg"
								/>
							)}
							<div className="p-6 flex flex-col flex-1">
								<div className="text-xs text-primary font-semibold mb-2">
									{blog.category}
								</div>
								<h2 className="text-xl font-bold mb-2">{blog.title}</h2>
								<p className="text-sm text-muted-foreground mb-4">
									{blog.summary}
								</p>
								<Link
									to={`/blog/${blog.id}`}
									onClick={() => window.scrollTo(0, 0)}
									className="mt-auto text-primary font-semibold underline text-sm text-left"
									style={{ width: "fit-content" }}
								>
									Read More
								</Link>
							</div>
						</Card>
					))}
				</div>
			</section>
			<BackToTopButton />
		</div>
	);
};

export default Blog;
