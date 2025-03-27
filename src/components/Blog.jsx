import React, { useState } from 'react';

const Blog = () => {
  // Sample blog data - you would typically fetch this from an API
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: AI Integration",
      category: "Web Development",
      date: "March 5, 2025",
      author: "John Smith",
      excerpt: "Discover how artificial intelligence is reshaping modern web development practices and creating new opportunities for businesses.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Essential SEO Strategies for 2025",
      category: "Digital Marketing",
      date: "February 28, 2025",
      author: "Emily Johnson",
      excerpt: "Learn the latest search engine optimization techniques to improve your website's visibility and drive organic traffic.",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Responsive Design: Best Practices for Mobile-First Approach",
      category: "UI/UX Design",
      date: "February 22, 2025",
      author: "Michael Rodriguez",
      excerpt: "Explore key strategies for creating websites that perform flawlessly across all devices with a mobile-first mindset.",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "E-commerce Trends Transforming Online Shopping",
      category: "E-commerce",
      date: "February 15, 2025",
      author: "Sarah Williams",
      excerpt: "Stay ahead of the competition with these emerging e-commerce trends that are changing how consumers shop online.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Securing Your Website: Cybersecurity Essentials",
      category: "Cybersecurity",
      date: "February 10, 2025",
      author: "David Chen",
      excerpt: "Protect your business and customer data with these fundamental website security practices and tools.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Optimizing Website Performance for Speed",
      category: "Performance",
      date: "February 5, 2025",
      author: "Lisa Taylor",
      excerpt: "Improve user experience and search rankings by implementing these proven techniques to enhance website loading times.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Mobile App Development Trends",
      category: "Mobile Development",
      date: "January 25, 2025",
      author: "Mark Anderson",
      excerpt: "Stay updated with the latest trends in mobile application development that are shaping the future of digital interactions.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      readTime: "7 min read"
    },
    {
      id: 8,
      title: "The Rise of Progressive Web Apps",
      category: "Web Development",
      date: "January 15, 2025",
      author: "Jennifer Lee",
      excerpt: "Explore how PWAs are bridging the gap between websites and native mobile applications, providing seamless user experiences.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9",
      readTime: "8 min read"
    }
  ];

  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Handle search input changes
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
        post.category.toLowerCase().includes(term.toLowerCase()) ||
        post.author.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setFilteredPosts(blogPosts);
  };

  // Extract unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            WebFour Blog
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90 font-poppins font-semibold">
            Insights, trends and strategies in web development and digital solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog Posts */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
            </h2>
            
            {/* No results message */}
            {filteredPosts.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-10 text-center">
                <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-800 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">We couldn't find any posts matching "{searchTerm}"</p>
                <button 
                  onClick={clearSearch}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
            
            {/* Blog post grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      <a href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load more button */}
            {filteredPosts.length > 0 && (
              <div className="mt-10 flex justify-center">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center">
                  <span>Load more articles</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button 
                    onClick={clearSearch}
                    className="absolute right-10 top-2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button 
                  className="absolute right-3 top-2 text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {searchTerm && (
                <p className="mt-2 text-sm text-gray-500">
                  Found {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'}
                </p>
              )}
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => {
                        setSearchTerm(category);
                        setFilteredPosts(blogPosts.filter(post => post.category === category));
                      }}
                      className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <span>{category}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-1">
                        {blogPosts.filter(post => post.category === category).length}
                      </span>
                    </button>
                  </li>
                ))}
                {searchTerm && (
                  <li className="mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={clearSearch}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Show all posts
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-blue-100 mb-4">Get the latest articles and insights delivered directly to your inbox.</p>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full text-gray-800 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="w-full bg-white text-blue-600 rounded-full px-4 py-2 font-medium hover:bg-blue-50 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;