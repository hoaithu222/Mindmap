export const metadata = {
  title: "Giá cả của Mindmap Flow",
  description: "Tìm hiểu về các gói giá và lợi ích của Mindmap Flow. Chọn gói phù hợp với nhu cầu của bạn.",
  keywords: "Mindmap Flow, giá cả, gói dịch vụ, sơ đồ tư duy, quản lý dự án",
  robots: "index, follow",

  icons: {
    icon: "https://img.icons8.com/?size=100&id=31090&format=png&color=000000",
  },
  openGraph: {
    type: "website",
    url: "https://mindmapflow.com/price",
    title: "Giá cả của Mindmap Flow",
    description: "Khám phá các gói giá của Mindmap Flow và lựa chọn gói dịch vụ tốt nhất cho bạn.",
    images: [
      {
        url: "https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Giá cả Mindmap Flow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindmapflow",
    creator: "@creator_username",
    title: "Giá cả của Mindmap Flow",
    description: "Tìm hiểu các gói giá của Mindmap Flow để chọn lựa gói phù hợp nhất cho bạn.",
    images: ["https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75"],
  },
};


const PricingCard = ({ icon, title, price, features, variant = 'default' }) => {
  const baseClasses = "p-10 rounded-3xl transition-all duration-300 hover:scale-105";
  const variantClasses = {
    default: "bg-white shadow-xl",
    featured: "bg-gray-900 text-white shadow-2xl scale-105"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="text-center mb-8">
        <div className={`w-28 h-28 mx-auto rounded-3xl ${
          variant === 'featured' ? 'bg-coral-400' : 
          title === 'Basic' ? 'bg-emerald-400' : 'bg-indigo-400'
        } flex items-center justify-center mb-6`}>
          {title === 'Basic' && (
            <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 1 0-1.41-1.41z"/>
            </svg>
          )}
          {title === 'Startup' && (
            <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          )}
          {title === 'Enterprise' && (
            <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
          )}
        </div>
        <h3 className={`text-3xl font-bold ${variant === 'featured' ? 'text-white' : 'text-gray-800'} mb-2`}>
          {title}
        </h3>
        <div className="flex items-baseline justify-center gap-1 mb-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-xl text-gray-500">/ user</span>
        </div>
      </div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <svg 
              className="w-6 h-6 text-green-500 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className={`text-lg ${variant === 'featured' ? 'text-gray-300' : 'text-gray-600'}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-10 px-8 py-4 text-lg bg-indigo-600 text-white rounded-full hover:bg-indigo-700 flex items-center justify-center gap-3 transition-colors duration-300">
        Choose Plan
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: 'Basic',
      price: '10',
      features: [
        'Get started with messaging',
        'Flexible team meetings',
        '5 TB cloud storage'
      ]
    },
    {
      title: 'Startup',
      price: '24',
      features: [
        'All features in Basic',
        'Flexible call scheduling',
        '15 TB cloud storage'
      ]
    },
    {
      title: 'Enterprise',
      price: '35',
      features: [
        'All features in Startup',
        'Growth oriented',
        'Unlimited cloud storage'
      ]
    }
  ];

  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-indigo-600">Flexible</span> Plans
          </h2>
          <p className="text-xl text-gray-600">
            Choose a plan that works best for you and your team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              {...plan}
              variant={index === 1 ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;