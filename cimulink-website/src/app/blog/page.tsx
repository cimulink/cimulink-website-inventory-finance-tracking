"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  // Sample blog posts data - in a real app, this would come from markdown files
  const blogPosts = [
    {
      id: "1",
      slug: "introducing-bookflow",
      title: "Introducing BookFlow: The Future of Publishing Backoffice Management",
      excerpt: "Discover how BookFlow is revolutionizing inventory and financial tracking for publishers and educational institutions.",
      date: "2025-08-15",
      author: "Sarah Johnson",
      readTime: "5 min read"
    },
    {
      id: "2",
      slug: "batch-management-success",
      title: "How University Presses Are Mastering Batch Management",
      excerpt: "Learn how academic publishers are using BookFlow's batch management features to streamline their course material distribution.",
      date: "2025-08-01",
      author: "Michael Chen",
      readTime: "7 min read"
    },
    {
      id: "3",
      slug: "inventory-automation-tips",
      title: "5 Inventory Automation Tips Every Publisher Should Know",
      excerpt: "Expert strategies to optimize your inventory management and reduce costs with automated systems.",
      date: "2025-07-20",
      author: "Emma Rodriguez",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cimulink Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and stories from the publishing industry
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} • {post.readTime}
                </div>
                <h2 className="text-xl font-bold mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{post.author}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6 opacity-90">
              Get the latest insights on publishing backoffice management delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
