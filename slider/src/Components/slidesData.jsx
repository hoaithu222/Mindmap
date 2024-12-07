import { Brain, Code, Settings, Share2, Rocket, Heart, Image, Book, Users, Trophy, Target, Clock, Shield, Leaf, Zap, Star, Layout, Lock, Lightbulb, Phone } from 'lucide-react';

export const slides = [
  {
    title: "CHÀO MỪNG MỌI NGƯỜI ĐẾN VỚI DỰ ÁN NHÓM MÌNH",
    subtitle: "KHÁM PHÁ SỨC MẠNH CỦA TƯ DUY TRỰC QUAN",
    icon: <Heart className="w-16 h-16 text-black mb-4" />,
    content: [],
    bgColor: "bg-gradient-to-br from-blue-500 to-pink-500",
    fullImage: true,
    imageUrl: "/image01.png"
  },
  {
    title: "TỔNG QUAN DỰ ÁN",
    subtitle: "DỰ ÁN WEBSITE XÂY DỰNG SƠ ĐỒ TƯ DUY (MINDMAP)",
    icon: <Brain className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Giới thiệu",
        points: [
          "Website xây dựng sơ đồ tư duy là một công cụ học tập trực tuyến tiên tiến.",
          "Giúp người dùng tổ chức, hệ thống hóa và trình bày thông tin trực quan.",
          "Cung cấp nền tảng thân thiện người dùng, khuyến khích sáng tạo và tương tác."
        ]
      },
      {
        title: "Tầm nhìn",
        points: [
          "Trở thành công cụ mindmap hàng đầu cho giáo dục và doanh nghiệp",
          "Thúc đẩy văn hóa học tập sáng tạo và hiệu quả",
          "Xây dựng cộng đồng người dùng tích cực"
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-900"
  },
  {
    title: "MỤC TIÊU DỰ ÁN",
    subtitle: "ĐỊNH HƯỚNG VÀ MỤC ĐÍCH",
    icon: <Target className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Mục tiêu chính",
        points: [
          "Cung cấp công cụ trực quan để tổ chức kiến thức hiệu quả",
          "Hỗ trợ ghi nhớ và cải thiện tư duy sáng tạo",
          "Đơn giản hóa việc tạo và quản lý sơ đồ tư duy"
        ]
      },
      {
        title: "Mục tiêu",
        points: [
          "Tạo ra nhiều chức năng hữu ích hơn nữa",
          "Tích hợp thêm AI để giải quyết vấn đề của người dùng yêu cầu",
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-yellow-500 to-yellow-700"
  },
  {
    title: "ĐỐI TƯỢNG NGƯỜI DÙNG",
    subtitle: "PHÂN TÍCH NHU CẦU NGƯỜI DÙNG",
    icon: <Users className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Người học",
        points: [
          "Học sinh, sinh viên cần công cụ học tập hiệu quả",
          "Người tự học muốn tổ chức kiến thức",
          "Nghiên cứu sinh cần lập kế hoạch nghiên cứu"
        ]
      },
      {
        title: "Người dạy",
        points: [
          "Giáo viên cần công cụ giảng dạy trực quan",
          "Đào tạo viên doanh nghiệp",
          "Chuyên gia chia sẻ kiến thức"
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-green-600 to-green-900"
  },
  {
    title: "GIAO DIỆN CHÍNH",
    subtitle: "TRẢI NGHIỆM NGƯỜI DÙNG TRỰC QUAN",
    icon: <Layout className="w-16 h-16 text-white mb-4" />,
    content: [],
    fullImage: true,
    imageUrl: "/api/placeholder/1920/1080",
    bgColor: "bg-gradient-to-br from-indigo-600 to-indigo-900"
  },
  {
    title: "CÔNG NGHỆ FRONTEND",
    subtitle: "CÁC CÔNG NGHỆ ĐÃ SỬ DỤNG",
    icon: <Code className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Framework & Libraries",
        points: [
          "Next.js 14 với App Router và Server Components",
          "React Flow cho visualization",
          "Tailwind CSS cho styling hiện đại",
          "SWR cho state management"
        ]
      },
      {
        title: "Development Tools",
        points: [
          "TypeScript cho type safety",
          "ESLint & Prettier cho code quality",
          "Jest & React Testing Library cho testing",
          "Vercel cho deployment"
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-purple-600 to-purple-900"
  },
  {
    title: "CÔNG NGHỆ BACKEND",
    subtitle: "HỆ THỐNG MẠNH MẼ VÀ BẢO MẬT",
    icon: <Shield className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Core Technologies",
        points: [
          "NestJS Framework cho server",
          "GraphQL API cho data fetching",
          "PostgreSQL với Prisma ORM",
          "Redis cho caching"
        ]
      },
      {
        title: "Cloud Services",
        points: [
          "AWS/Azure cho hosting",
          "S3 cho file storage",
          "CloudFront cho CDN",
          "Lambda cho serverless functions"
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-gray-600 to-gray-900"
  },

  {
    title: "TÍNH NĂNG CHÍNH",
    subtitle: "TRẢI NGHIỆM NGƯỜI DÙNG TOÀN DIỆN",
    icon: <Star className="w-16 h-16 text-white mb-4" />,
    content: [],
    fullImage: true,
    imageUrl: "/api/placeholder/1920/1080",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-800"
  },
  {
    title: "QUẢN LÝ MINDMAP",
    subtitle: "CÔNG CỤ CHUYÊN NGHIỆP",
    icon: <Settings className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Tạo và Chỉnh sửa",
        points: [
          "Giao diện kéo-thả trực quan",
          "Nhiều template chuyên nghiệp",
          "Có thể tạo nhiều mindmap"
        ]
      },
      {
        title: "Tùy chỉnh",
        points: [
          "Thay đổi màu sắc và font chữ",
          "Thêm hình ảnh và icon",
          "Xuất file đa định dạng"
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-green-500 to-green-800"
  },
  {
    title: "TÍNH NĂNG CỘNG TÁC",
    subtitle: "LÀM VIỆC NHÓM HIỆU QUẢ",
    icon: <Share2 className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Chia sẻ",
        points: [
          "Chia sẻ mindmap qua link",
          "Em cung muốn phát triển thêm các tính năng dưới đây :",
          "Phân quyền chi tiết",
          "Comment và feedback"
        ]
      },
      {
        title: "Em cũng nghiên cứu phát triển thêm:",
        points: [
          "Chỉnh sửa đồng thời",
          "Chat trong ứng dụng",
          "Theo dõi thay đổi live"
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-yellow-600 to-yellow-900"
  },
  {
    title: "HIỆU SUẤT HỆ THỐNG",
    subtitle: "TỐI ƯU TRẢI NGHIỆM",
    icon: <Zap className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Frontend Performance",
        points: [
          "Next.js image optimization",
          "Code splitting tự động",
          "Caching thông minh với SWR"
        ]
      },
      {
        title: "Backend Performance",
        points: [
          "Load balancing tự động",
          "Database indexing",
          "Redis caching layer"
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-800"
  },
  {
    title: "DEMO TÍNH NĂNG",
    subtitle: "TRẢI NGHIỆM THỰC TẾ",
    icon: <Image className="w-16 h-16 text-white mb-4" />,
    content: [],
    fullImage: true,
    imageUrl: "/api/placeholder/1920/1080",
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-800"
  },
  {
    title: "KẾT QUẢ MONG ĐỢI",
    subtitle: "MỤC TIÊU ĐỊNH LƯỢNG",
    icon: <Trophy className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Hoàn thiện dự án",
        points: [
          "Với những chức năng đã đặt ra",
          "Chìn chu về giao diện UI/UX",
          "Tối ưu hóa website",
        ]
      },
      {
        title: "Tác động",
        points: [
          "Cải thiện hiệu quả học tập",
          "Tăng năng suất làm việc",
          "Xây dựng cộng đồng học tập"
        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-800"
  },
  {
    title: "TƯƠNG LAI PHÁT TRIỂN",
    subtitle: "TẦM NHÌN DÀI HẠN",
    icon: <Rocket className="w-16 h-16 text-white mb-4" />,
    content: [
      {
        title: "Tính năng mới",
        points: [
          "AI cho tự động tạo mindmap",
          "Tích hợp thêm nhiều tính năng cần thiết",
          "Phát triện dự án trên nhiều nền tảng"
        ]
      },
      {
        title: "Mở rộng",
        points: [
          "Phiên bản mobile native",
          "Hỗ trợ đa ngôn ngữ",

        ]
      }
    ],
    bgColor: "bg-gradient-to-br from-cyan-600 to-cyan-900"
  },
  {
    title: "DEMO TỔNG QUAN",
    subtitle: "TRẢI NGHIỆM THỰC TẾ",
    icon: <Image className="w-16 h-16 text-white mb-4" />,
    content: [],
    fullImage: true,
    imageUrl: "/api/placeholder/1920/1080",
    bgColor: "bg-gradient-to-br from-slate-600 to-slate-900"
  },
]