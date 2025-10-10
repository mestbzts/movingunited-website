import { useNavigate } from "react-router-dom";

const Blog1 = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen bg-white">
			<div className="container mx-auto px-4 py-8 max-w-2xl">
				<button className="mb-4 text-primary underline" onClick={() => navigate("/blog")}>
					&larr; Back to Blogs
				</button>
				<div className="text-xs text-primary font-semibold mb-2">Staging</div>
				<h1 className="text-3xl font-bold mb-4">Staging Your Home for Sale</h1>
				<img src="/images/blogs/staging1.jpg" alt="Staging Your Home for Sale" className="w-full rounded object-cover mb-6" />
				<img src="/images/blogs/staging2.jpg" alt="Staging Your Home for Sale 2" className="w-full rounded object-cover mb-6" />
				<div className="text-base text-gray-800 whitespace-pre-line">
{`Full blog content for staging your home...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. 
Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Curabitur nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.`}
				</div>
			</div>
		</div>
	);
};

export default Blog1;
