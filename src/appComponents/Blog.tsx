export function Blog() {
  const articles = [
    {
      id: 1,
      title: "3D Design Trends for 2024",
      category: "3D Design",
      excerpt:
        "Explore the future of 3D design with innovative ideas and inspirations.",
      image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-abstrait-technologie-rechercher-apprendre.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Mastering 3D Interfaces",
      category: "3D Design",
      excerpt: "Learn the art of crafting seamless 3D experiences.",
      image: "https://images.pexels.com/photos/8728222/pexels-photo-8728222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Top Graphic Design Tools",
      category: "Graphic Design",
      excerpt:
        "Discover the latest tools shaping the graphic design landscape.",
      image: "https://images.pexels.com/photos/8000529/pexels-photo-8000529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Creative Typography in Graphic Design",
      category: "Graphic Design",
      excerpt: "Unleash the power of typography in your projects.",
      image: "https://images.pexels.com/photos/5292242/pexels-photo-5292242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Social Media Product Visualization Tips",
      category: "Product Visualization",
      excerpt: "Engage audiences with stunning product visuals.",
      image: "https://images.pexels.com/photos/267355/pexels-photo-267355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Boost Engagement with Product Visuals",
      category: "Product Visualization",
      excerpt: "Learn how to elevate your social media strategy with visuals.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-black text-black dark:text-gray-200 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
        <p className="text-center mb-12 text-lg">
          Check out our latest blog posts on 3D design, graphic design, and
          product visualization for social media.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-950 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {article.category}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
