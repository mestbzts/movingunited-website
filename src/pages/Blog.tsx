import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "10 Essential Moving Tips for a Stress-Free Experience",
      excerpt: "Planning a move? These expert tips will help you stay organized and reduce stress throughout the entire moving process.",
      category: "Moving Tips",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "How to Pack Fragile Items: A Complete Guide",
      excerpt: "Learn the professional techniques for packing delicate items like glassware, artwork, and electronics safely.",
      category: "Packing Guide",
      date: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "The Ultimate Moving Checklist: 8 Weeks Before",
      excerpt: "Start planning your move with our comprehensive timeline and checklist covering everything you need to do.",
      category: "Planning",
      date: "March 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Commercial Moving: Minimizing Business Downtime",
      excerpt: "Discover strategies for relocating your business efficiently while keeping operations running smoothly.",
      category: "Commercial",
      date: "February 28, 2024",
      readTime: "8 min read",
    },
    {
      title: "Storage Solutions: Short-term vs Long-term Options",
      excerpt: "Compare different storage options and learn which solution is best for your specific needs.",
      category: "Storage",
      date: "February 20, 2024",
      readTime: "5 min read",
    },
    {
      title: "Moving with Pets: A Complete Guide",
      excerpt: "Make the transition easier for your furry friends with these helpful tips for moving with pets.",
      category: "Moving Tips",
      date: "February 15, 2024",
      readTime: "6 min read",
    },
    {
      title: "How to Choose the Right Moving Company",
      excerpt: "Learn what to look for when selecting a moving company and questions you should ask before hiring.",
      category: "Advice",
      date: "February 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "Decluttering Before Your Move: A Room-by-Room Guide",
      excerpt: "Reduce your moving costs and simplify your move by decluttering effectively before packing.",
      category: "Planning",
      date: "February 5, 2024",
      readTime: "9 min read",
    },
    {
      title: "The Hidden Costs of Moving and How to Avoid Them",
      excerpt: "Understand all potential moving expenses and learn how to budget effectively for your relocation.",
      category: "Budgeting",
      date: "January 28, 2024",
      readTime: "6 min read",
    },
  ];

  const categories = ["All", "Moving Tips", "Packing Guide", "Planning", "Commercial", "Storage", "Advice", "Budgeting"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Moving Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert advice, tips, and guides to make your move easier and more efficient
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <Badge className="w-fit mb-4">Featured Post</Badge>
              <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {posts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {posts[0].readTime}
                </div>
              </div>
              <Button className="w-fit group">
                Read Article 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-muted rounded-lg min-h-[300px]" />
          </div>
        </Card>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="bg-muted h-48" />
              <div className="p-6">
                <Badge variant="outline" className="mb-3">{post.category}</Badge>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <Button variant="ghost" className="group/btn p-0">
                  Read More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest moving tips, guides, and special offers.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-md border bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
