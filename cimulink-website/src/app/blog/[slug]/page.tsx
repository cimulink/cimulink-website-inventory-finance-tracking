"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Sample blog post data - in a real app, this would come from markdown files
  const blogPosts = {
    "introducing-bookflow": {
      title: "Introducing BookFlow: The Future of Publishing Backoffice Management",
      excerpt: "Discover how BookFlow is revolutionizing inventory and financial tracking for publishers and educational institutions.",
      date: "2025-08-15",
      author: "Sarah Johnson",
      readTime: "5 min read",
      content: `
        <div class="prose max-w-none">
          <p>In today's fast-paced publishing environment, managing inventory and financial operations efficiently is more critical than ever. Publishers and educational institutions face unique challenges that generic solutions simply can't address. That's why we're excited to introduce BookFlow – a purpose-built platform designed specifically for the book industry.</p>
          
          <h2>The Problem with Traditional Backoffice Management</h2>
          <p>Many publishers still rely on spreadsheets and manual processes to manage their operations. This approach leads to:</p>
          <ul>
            <li>Time-consuming data entry and reconciliation</li>
            <li>Increased risk of errors and stockouts</li>
            <li>Limited visibility across multiple warehouses</li>
            <li>Difficulty tracking complex batch orders</li>
            <li>Inaccurate financial reporting</li>
          </ul>
          
          <h2>How BookFlow Solves These Challenges</h2>
          <p>BookFlow transforms backoffice operations by providing a unified platform that automates key processes:</p>
          
          <h3>Real-Time Inventory Management</h3>
          <p>Get a complete, real-time view of your inventory across all warehouses and sales channels. Our system automatically syncs stock levels, preventing costly stockouts and overstocking situations.</p>
          
          <h3>Automated Financial Tracking</h3>
          <p>Say goodbye to manual reconciliation. BookFlow automatically syncs sales orders with inventory and payment data, providing accurate financial reporting at your fingertips.</p>
          
          <h3>Specialized Batch Management</h3>
          <p>Educational publishers face unique challenges with course-specific orders. Our Batch Management tool lets you create and assign custom book sets for specific courses or student groups, streamlining the entire fulfillment process.</p>
          
          <h2>Real-World Impact</h2>
          <p>Early adopters have already seen significant improvements:</p>
          <blockquote class="border-l-4 border-primary pl-4 italic">
            "BookFlow cut our financial closing time by 80% and eliminated stockouts during our peak season. It has been a complete game-changer for our operations."
            <footer class="mt-2 not-italic font-semibold">– Jane Doe, Director of Operations, Fictional University Press</footer>
          </blockquote>
          
          <h2>Getting Started with BookFlow</h2>
          <p>Ready to transform your backoffice operations? Our implementation process is designed to get you up and running quickly:</p>
          <ol>
            <li><strong>Discovery Call:</strong> We map out your current workflows to understand your unique challenges</li>
            <li><strong>Platform Configuration:</strong> We tailor BookFlow to your exact needs</li>
            <li><strong>Go Live:</strong> We launch your new system with ongoing support</li>
          </ol>
          
          <p>Most clients are live within 4-6 weeks, seeing immediate improvements in efficiency and accuracy.</p>
          
          <div class="bg-muted p-6 rounded-lg my-8">
            <h3 class="text-xl font-bold mb-4">Ready to Eliminate Backoffice Chaos?</h3>
            <p class="mb-4">See how BookFlow can transform your publishing operations with a personalized demo.</p>
            <Button asChild>
              <Link href="/#cta">Schedule Your Demo</Link>
            </Button>
          </div>
        </div>
      `
    },
    "batch-management-success": {
      title: "How University Presses Are Mastering Batch Management",
      excerpt: "Learn how academic publishers are using BookFlow's batch management features to streamline their course material distribution.",
      date: "2025-08-01",
      author: "Michael Chen",
      readTime: "7 min read",
      content: `
        <div class="prose max-w-none">
          <p>Academic publishers face unique challenges that traditional inventory management systems struggle to address. Managing course-specific book sets, coordinating with multiple departments, and ensuring timely distribution to students requires specialized tools and processes. BookFlow's Batch Management feature is changing the game for university presses across the country.</p>
          
          <h2>The Complexity of Academic Publishing</h2>
          <p>University presses and educational institutions deal with complex order structures that go beyond simple book sales:</p>
          <ul>
            <li>Course-specific book sets with multiple titles</li>
            <li>Departmental orders with varying requirements</li>
            <li>Student group distributions with custom configurations</li>
            <li>Seasonal peaks during enrollment periods</li>
            <li>Integration with academic calendars and schedules</li>
          </ul>
          
          <h2>BookFlow's Batch Management Solution</h2>
          <p>Our Batch Management tool was designed specifically to address these challenges:</p>
          
          <h3>Intuitive Batch Creation</h3>
          <p>Create custom batches with just a few clicks. Assign specific books to courses, departments, or student groups with our drag-and-drop interface.</p>
          
          <h3>Automated Picking Lists</h3>
          <p>Generate optimized picking lists that group items by location and batch, reducing fulfillment time and errors.</p>
          
          <h3>Real-Time Tracking</h3>
          <p>Monitor batch progress from creation to delivery with real-time status updates and notifications.</p>
          
          <h2>Case Study: State University Press</h2>
          <p>State University Press was struggling with their fall semester distribution, managing over 200 different course batches manually:</p>
          <blockquote class="border-l-4 border-primary pl-4 italic">
            "Before BookFlow, we were using spreadsheets and email chains to manage our batch orders. It was chaos during peak season. With BookFlow, we've reduced our fulfillment time by 60% and eliminated picking errors entirely."
            <footer class="mt-2 not-italic font-semibold">– Dr. Amanda Rodriguez, Operations Manager</footer>
          </blockquote>
          
          <h2>Best Practices for Batch Management</h2>
          <p>Based on our work with dozens of academic publishers, here are some key best practices:</p>
          
          <h3>1. Plan Ahead</h3>
          <p>Create your batches at least 2-3 weeks before the start of the semester to allow for proper preparation and inventory checks.</p>
          
          <h3>2. Use Descriptive Naming</h3>
          <p>Develop a consistent naming convention for your batches that includes course codes, semesters, and any special requirements.</p>
          
          <h3>3. Leverage Automation</h3>
          <p>Set up automatic notifications for key milestones like batch creation, picking completion, and shipping confirmation.</p>
          
          <h2>Looking Forward</h2>
          <p>As educational institutions continue to evolve, so will our Batch Management capabilities. We're currently developing features for:</p>
          <ul>
            <li>Integration with student information systems</li>
            <li>Automated reorder suggestions based on historical data</li>
            <li>Enhanced analytics for course material usage patterns</li>
          </ul>
          
          <p>These innovations will further streamline academic publishing operations and provide even greater value to our university press partners.</p>
        </div>
      `
    },
    "inventory-automation-tips": {
      title: "5 Inventory Automation Tips Every Publisher Should Know",
      excerpt: "Expert strategies to optimize your inventory management and reduce costs with automated systems.",
      date: "2025-07-20",
      author: "Emma Rodriguez",
      readTime: "4 min read",
      content: `
        <div class="prose max-w-none">
          <p>Inventory management can make or break a publishing business. With the right automation strategies, you can reduce costs, improve accuracy, and free up your team to focus on what they do best – creating amazing content. Here are five essential tips to optimize your inventory automation.</p>
          
          <h2>1. Implement Real-Time Inventory Tracking</h2>
          <p>The foundation of effective inventory automation is real-time visibility. Instead of relying on periodic counts or manual updates, implement a system that automatically syncs stock levels across all your sales channels and warehouses.</p>
          <p>Benefits include:</p>
          <ul>
            <li>Prevention of overselling and stockouts</li>
            <li>Accurate demand forecasting</li>
            <li>Improved customer satisfaction</li>
          </ul>
          
          <h2>2. Set Up Automated Reorder Points</h2>
          <p>Don't wait until you're completely out of stock to reorder. Configure automated reorder points based on lead times, sales velocity, and seasonal patterns. This ensures you always have the right amount of inventory without overstocking.</p>
          
          <h3>How to Calculate Reorder Points:</h3>
          <p>Reorder Point = (Average Daily Sales × Lead Time) + Safety Stock</p>
          
          <h2>3. Leverage Predictive Analytics</h2>
          <p>Use historical sales data and market trends to predict future demand. Modern inventory management systems can analyze patterns and automatically adjust your purchasing recommendations based on upcoming seasons, new releases, and market conditions.</p>
          
          <h2>4. Automate Returns Processing</h2>
          <p>Returns are inevitable in publishing, but they don't have to be a manual headache. Set up automated workflows that:</p>
          <ul>
            <li>Process return authorizations instantly</li>
            <li>Update inventory levels automatically</li>
            <li>Generate credit memos and refunds</li>
            <li>Route returned items to the appropriate location</li>
          </ul>
          
          <h2>5. Integrate with Your Entire Ecosystem</h2>
          <p>Your inventory system shouldn't work in isolation. Ensure seamless integration with:</p>
          <ul>
            <li>Your e-commerce platform</li>
            <li>Accounting software</li>
            <li>Shipping carriers</li>
            <li>Print-on-demand services</li>
            <li>Warehouse management systems</li>
          </ul>
          
          <h2>Measuring Success</h2>
          <p>Track these key metrics to measure the effectiveness of your inventory automation:</p>
          <ul>
            <li><strong>Inventory Turnover Ratio:</strong> How quickly you sell through your inventory</li>
            <li><strong>Stockout Frequency:</strong> How often you run out of popular items</li>
            <li><strong>Carrying Cost Percentage:</strong> What percentage of inventory value is spent on storage and handling</li>
            <li><strong>Order Accuracy Rate:</strong> Percentage of orders fulfilled correctly</li>
          </ul>
          
          <div class="bg-muted p-6 rounded-lg my-8">
            <h3 class="text-xl font-bold mb-4">Ready to Automate Your Inventory?</h3>
            <p class="mb-4">BookFlow provides all these automation features and more, specifically designed for publishers and educational institutions.</p>
            <Button asChild>
              <Link href="/#cta">Learn More About BookFlow</Link>
            </Button>
          </div>
        </div>
      `
    }
  };

  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Blog Post Header */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary hover:underline inline-flex items-center gap-2 mb-4">
              ← Back to Blog
            </Link>
            <div className="text-sm text-muted-foreground mb-2">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {post.readTime}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground">by {post.author}</p>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, relatedPost]) => (
                  <article key={slug} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={`/blog/${slug}`} className="hover:text-primary">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {new Date(relatedPost.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
