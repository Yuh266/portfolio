export type Language = "vi" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    downloadCv: string;
  };
  contactInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    github: string;
    githubUrl: string;
    location: string;
  };
  hero: {
    greeting: string;
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    quoteTitle: string;
    quoteSub: string;
    badgeBuild: string;
    badgeText: string;
  };
  stats: {
    expNum: string;
    expTitle: string;
    expSub: string;
    projNum: string;
    projTitle: string;
    projSub: string;
    clientsTitle: string;
    clientsSub: string;
    learningTitle: string;
    learningSub: string;
  };
  about: {
    tag: string;
    title: string;
    desc: string;
    cleanCode: string;
    cleanCodeSub: string;
    problemSolving: string;
    problemSolvingSub: string;
    teamWork: string;
    teamWorkSub: string;
    moreAbout: string;
    quoteText: string;
  };
  experience: {
    tag: string;
    title: string;
    fulltime: string;
    intern: string;
    freelance: string;
    present: string;
    jobs: {
      date: string;
      company: string;
      role: string;
      location: string;
      type: "fulltime" | "intern" | "freelance";
      bullets: string[];
    }[];
  };
  education: {
    title: string;
    items: {
      degree: string;
      school: string;
      year: string;
      country: string;
    }[];
  };
  skills: {
    title: string;
    backend: string;
    database: string;
    frontend: string;
    frameworks: string;
    tools: string;
    aiSkills: string;
  };
  projects: {
    tag: string;
    title: string;
    viewAll: string;
    items: {
      id: string;
      name: string;
      type: string;
      image: string;
      tags: string[];
      link: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    desc: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formSubject: string;
    formSubjectPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    copied: string;
  };
  footer: {
    role: string;
    quote: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      skills: "Kỹ năng",
      contact: "Liên hệ",
      downloadCv: "Tải CV",
    },
    contactInfo: {
      name: "Nguyễn Quang Huy",
      title: "Full-Stack Developer",
      phone: "0971424792",
      email: "nhuy04625@gmail.com",
      github: "Yuh266",
      githubUrl: "https://github.com/Yuh266",
      location: "Đan Phượng, Hà Nội",
    },
    hero: {
      greeting: "H E L L O,  I ' M",
      firstName: "Nguyễn Quang",
      lastName: "Huy",
      title: "Full-Stack Developer",
      description:
        "Tôi xây dựng các ứng dụng web có khả năng mở rộng với mã nguồn sạch và giải pháp thực tế. Đam mê phát triển backend, tích hợp hệ thống và kiến tạo các sản phẩm mang lại giá trị thực tế.",
      viewProjects: "Xem Dự Án Của Tôi",
      contactMe: "Liên Hệ Tôi",
      quoteTitle: "Good Code",
      quoteSub: "Better Tomorrow.",
      badgeBuild: "Build",
      badgeText: "Scalable Web Applications.",
    },
    stats: {
      expNum: "1+",
      expTitle: "Năm Thực Chiến",
      expSub: "Lập trình Web & Backend",
      projNum: "5+",
      projTitle: "Dự Án Production",
      projSub: "Web App, SaaS & AI",
      clientsTitle: "Kiến Trúc Chuẩn Hóa",
      clientsSub: "Clean Code & Tối Ưu CSDL",
      learningTitle: "Tư Duy Sản Phẩm",
      learningSub: "Tích Hợp AI & Thích Ứng Nhanh",
    },
    about: {
      tag: "MỤC TIÊU NGHỀ NGHIỆP",
      title: "Đam mê xây dựng hệ thống backend hiệu năng cao",
      desc: "Tôi là Lập trình viên Full-Stack có kinh nghiệm thực chiến phát triển các hệ thống RESTful APIs, quản lý doanh nghiệp, ứng dụng tích hợp AI và nền tảng xử lý dữ liệu lớn. Tôi thành thạo Laravel, MySQL, JavaScript, Redis, Queues, tích hợp API và triển khai hệ thống production. Mong muốn cống hiến lâu dài cho sản phẩm, không ngừng củng cố kiến trúc backend, tối ưu hiệu năng và khả năng mở rộng hệ thống.",
      cleanCode: "Kiến Trúc Chuẩn Hóa",
      cleanCodeSub: "Clean Code & Scalability",
      problemSolving: "Tích Hợp Đa Nền Tảng",
      problemSolvingSub: "AI APIs, Queues & Payments",
      teamWork: "Triển Khai Production",
      teamWorkSub: "Linux Server, Nginx & CI/CD",
      moreAbout: "Xem Chi Tiết Kinh Nghiệm",
      quoteText: "Turn Ideas Into Scalable Products.",
    },
    experience: {
      tag: "KINH NGHIỆM LÀM VIỆC",
      title: "Kinh Nghiệm Chuyên Môn",
      fulltime: "Toàn thời gian",
      intern: "Thực tập sinh",
      freelance: "Tự do",
      present: "Hiện tại",
      jobs: [
        {
          date: "09/2025 – Hiện tại",
          company: "Tino Tech Technology Company",
          role: "Full-Stack Developer",
          location: "Hà Nội, VN",
          type: "fulltime",
          bullets: [
            "Thiết kế cấu trúc CSDL và phát triển hệ thống RESTful APIs hiệu năng cao cho ứng dụng di động (Ionic) và các nền tảng web đa dịch vụ.",
            "Xây dựng các thuật toán nghiệp vụ cốt lõi: tính cước động theo khoảng cách, ghép nối tài xế – hành khách, quy trình đặt món, thống kê doanh thu và tích hợp cổng thanh toán trực tuyến.",
            "Tích hợp đa mô hình AI (chat thông minh, sinh ảnh/video, xử lý tệp/âm thanh, voice AI) và thiết lập cơ chế quản lý tiêu thụ token & thanh toán.",
            "Tối ưu hóa hàng đợi (Queues & Redis) để xử lý mượt mà các tác vụ AI và tiến trình nền dài hạn, đảm bảo tính mở rộng và ổn định của hệ thống.",
            "Xây dựng cơ chế phân quyền theo vai trò (RBAC) cho kiến trúc SaaS đa chi nhánh và đồng bộ dữ liệu hai chiều tự động qua Google Sheets API.",
          ],
        },
        {
          date: "03/2025 – 08/2025",
          company: "Amcolab Technology Company",
          role: "Full-stack Developer Intern",
          location: "Hà Nội, VN",
          type: "intern",
          bullets: [
            "Phát triển và bảo trì các module quản lý công việc, hợp đồng, tải lên hồ sơ cho website tuyển dụng người nước ngoài tại Nhật Bản (Jobportal).",
            "Xây dựng tính năng lên lịch phỏng vấn và tích hợp quản lý phòng họp trực tuyến Zoom interview.",
            "Triển khai chức năng quản trị và hệ thống gợi ý hồ sơ ứng viên (CV) tiềm năng.",
          ],
        },
      ],
    },
    education: {
      title: "HỌC VẤN",
      items: [
        {
          degree: "Chuyên ngành Công nghệ Thông tin",
          school: "Trường Đại học Xây dựng Hà Nội (HUCE)",
          year: "2026 – Hiện tại",
          country: "Hà Nội, Việt Nam",
        },
        {
          degree: "Chuyên ngành Công nghệ Thông tin",
          school: "Trường Cao đẳng FPT Polytechnic",
          year: "2023 – 2025",
          country: "Hà Nội, Việt Nam",
        },
      ],
    },
    skills: {
      title: "KỸ NĂNG CHUYÊN MÔN",
      backend: "Back-end",
      database: "Database & Cache",
      frontend: "Front-end",
      frameworks: "Frameworks & Mobile",
      tools: "Công cụ & Triển khai",
      aiSkills: "Kỹ năng AI & Công nghệ mới",
    },
    projects: {
      tag: "DỰ ÁN TIÊU BIỂU",
      title: "Các Dự Án Đã Triển Khai Thực Tế",
      viewAll: "Xem tất cả dự án",
      items: [
        {
          id: "gapmove",
          name: "GAPMOVE",
          type: "Ứng dụng gọi xe công nghệ (Mobile & Web)",
          image: "/images/project-gapmove-mobile.png",
          tags: ["Laravel", "MySQL", "Redis", "REST API", "Angular/Ionic"],
          link: "https://gapmove.com/home",
        },
        {
          id: "chatapp",
          name: "ChatApp AI",
          type: "Nền tảng trợ lý AI đa tính năng & Đa phương thức",
          image: "/images/project-chatapp.png",
          tags: ["Laravel", "AI APIs", "Queue", "SSE", "Angular/Ionic"],
          link: "https://goplusai.com/guest",
        },
        {
          id: "travel",
          name: "Asia Travel",
          type: "Nền tảng du lịch & Đặt tour đa ngôn ngữ",
          image: "/images/project-travel.png",
          tags: ["Laravel", "ReactJS", "MySQL", "Tailwind CSS", "REST API"],
          link: "https://asia-travel.com.vn",
        },
        {
          id: "goimenu",
          name: "GoiMenu SaaS",
          type: "Hệ thống SaaS quản lý gọi món & doanh thu F&B",
          image: "/images/project-goimenu.png",
          tags: ["Laravel", "MySQL", "Tailwind CSS", "Blade", "REST API"],
          link: "https://goimenu.com",
        },
        {
          id: "tinopage",
          name: "TinoPage",
          type: "Nền tảng tạo Bio Page động tích hợp AI",
          image: "/images/project-tinobio.png",
          tags: ["Laravel", "Google Sheets API", "AI Integration", "Blade"],
          link: "https://www.tinopage.com",
        },
      ],
    },
    contact: {
      tag: "LIÊN HỆ VỚI TÔI",
      title: "Cùng Thảo Luận Về Dự Án Mới",
      desc: "Nếu bạn có câu hỏi, đề xuất dự án hoặc cơ hội việc làm, đừng ngần ngại gửi tin nhắn hoặc kết nối trực tiếp qua các kênh liên lạc dưới đây.",
      formName: "Họ và Tên",
      formNamePlaceholder: "Nhập họ và tên của bạn",
      formEmail: "Địa Chỉ Email",
      formEmailPlaceholder: "vidu@gmail.com",
      formSubject: "Tiêu Đề Tin Nhắn",
      formSubjectPlaceholder: "Trao đổi về cơ hội hợp tác",
      formMessage: "Nội Dung Tin Nhắn",
      formMessagePlaceholder: "Chia sẻ chi tiết về nhu cầu hoặc dự án của bạn...",
      formSubmit: "Gửi Tin Nhắn",
      formSending: "Đang gửi...",
      formSuccess: "Cảm ơn bạn! Tin nhắn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất!",
      copied: "Đã sao chép vào bộ nhớ tạm!",
    },
    footer: {
      role: "Full-Stack Developer",
      quote: "Hãy kết nối và cùng tạo nên những sản phẩm bền vững và mở rộng.",
      rights: "Bảo lưu mọi quyền.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    contactInfo: {
      name: "Nguyễn Quang Huy",
      title: "Full-Stack Developer",
      phone: "0971424792",
      email: "nhuy04625@gmail.com",
      github: "Yuh266",
      githubUrl: "https://github.com/Yuh266",
      location: "Dan Phuong, Hanoi, Vietnam",
    },
    hero: {
      greeting: "H E L L O,  I ' M",
      firstName: "Nguyễn Quang",
      lastName: "Huy",
      title: "Full-Stack Developer",
      description:
        "I build scalable web applications with clean code and real-world solutions. Passionate about backend development, system integration and creating products that bring real value.",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      quoteTitle: "Good Code",
      quoteSub: "Better Tomorrow.",
      badgeBuild: "Build",
      badgeText: "Scalable Web Applications.",
    },
    stats: {
      expNum: "1+",
      expTitle: "Year Hands-on",
      expSub: "Web & Backend Dev",
      projNum: "5+",
      projTitle: "Production Projects",
      projSub: "Web Apps, SaaS & AI",
      clientsTitle: "Standard Architecture",
      clientsSub: "Clean Code & DB Optimization",
      learningTitle: "Product Mindset",
      learningSub: "AI Integration & Fast Learner",
    },
    about: {
      tag: "CAREER OBJECTIVE",
      title: "Passionate about building scalable backend systems",
      desc: "Full-Stack Developer with hands-on experience developing RESTful APIs, business management systems, AI-integrated applications, and database-driven platforms. Experienced in Laravel, MySQL, JavaScript, Redis, queues, API integration, and production deployment. Seeking to contribute to a long-term product while continuing to strengthen backend architecture, performance optimization, and system scalability.",
      cleanCode: "Standard Architecture",
      cleanCodeSub: "Clean Code & Scalability",
      problemSolving: "Multi-Platform Integration",
      problemSolvingSub: "AI APIs, Queues & Payments",
      teamWork: "Production Deployment",
      teamWorkSub: "Linux Server, Nginx & CI/CD",
      moreAbout: "View Full Experience",
      quoteText: "Turn Ideas Into Scalable Products.",
    },
    experience: {
      tag: "WORK EXPERIENCE",
      title: "Professional Experience",
      fulltime: "Full-time",
      intern: "Intern",
      freelance: "Freelance",
      present: "Present",
      jobs: [
        {
          date: "09/2025 – Present",
          company: "Tino Tech Technology Company",
          role: "Full-Stack Developer",
          location: "Hanoi, VN",
          type: "fulltime",
          bullets: [
            "Designed optimized database structures and developed high-performance RESTful APIs for Ionic mobile applications and multi-service web platforms.",
            "Engineered core business logic: dynamic distance-based fare calculation, driver-passenger matching algorithms, ordering workflows, revenue analytics, and online payment integrations.",
            "Integrated multi-model AI features (smart chat, AI image/video generation, audio/file processing, voice AI), token consumption tracking, and payment systems.",
            "Optimized asynchronous Queues & Redis for handling long-running AI tasks and background jobs, ensuring scalability and responsiveness.",
            "Implemented Role-Based Access Control (RBAC) for multi-tenant SaaS systems and automated two-way data synchronization via Google Sheets API.",
          ],
        },
        {
          date: "03/2025 – 08/2025",
          company: "Amcolab Technology Company",
          role: "Full-stack Developer Intern",
          location: "Hanoi, VN",
          type: "intern",
          bullets: [
            "Developed and maintained modules for job management, contracts, and uploaded documents on a recruitment website for foreigners in Japan (Jobportal).",
            "Built features for interview scheduling and Zoom interview integration.",
            "Implemented functionality to manage and suggest potential candidate CVs.",
          ],
        },
      ],
    },
    education: {
      title: "EDUCATION",
      items: [
        {
          degree: "Major: Information Technology",
          school: "Hanoi University of Civil Engineering (HUCE)",
          year: "2026 – Present",
          country: "Hanoi, Vietnam",
        },
        {
          degree: "Major: Information Technology",
          school: "FPT Polytechnic College",
          year: "2023 – 2025",
          country: "Hanoi, Vietnam",
        },
      ],
    },
    skills: {
      title: "TECHNICAL SKILLS",
      backend: "Back-end",
      database: "Database & Cache",
      frontend: "Front-end",
      frameworks: "Frameworks & Mobile",
      tools: "Tools & Deployment",
      aiSkills: "AI Skills & Modern Tech",
    },
    projects: {
      tag: "FEATURED PROJECTS",
      title: "Recent Production Works",
      viewAll: "View All Projects",
      items: [
        {
          id: "gapmove",
          name: "GAPMOVE",
          type: "Ride-Hailing Mobile & Web Platform",
          image: "/images/project-gapmove-mobile.png",
          tags: ["Laravel", "MySQL", "Redis", "REST API", "Angular/Ionic"],
          link: "https://gapmove.com/home",
        },
        {
          id: "chatapp",
          name: "ChatApp AI",
          type: "Multi-Feature AI Assistant Platform",
          image: "/images/project-chatapp.png",
          tags: ["Laravel", "AI APIs", "Queue", "SSE", "Angular/Ionic"],
          link: "https://goplusai.com/guest",
        },
        {
          id: "travel",
          name: "Asia Travel",
          type: "Multilingual Travel & Tour Booking Platform",
          image: "/images/project-travel.png",
          tags: ["Laravel", "ReactJS", "MySQL", "Tailwind CSS", "REST API"],
          link: "https://asia-travel.com.vn",
        },
        {
          id: "goimenu",
          name: "GoiMenu SaaS",
          type: "F&B Store Revenue & Ordering SaaS System",
          image: "/images/project-goimenu.png",
          tags: ["Laravel", "MySQL", "Tailwind CSS", "Blade", "REST API"],
          link: "https://goimenu.com",
        },
        {
          id: "tinopage",
          name: "TinoPage",
          type: "Dynamic Bio Page Generator with AI",
          image: "/images/project-tinobio.png",
          tags: ["Laravel", "Google Sheets API", "AI Integration", "Blade"],
          link: "https://www.tinopage.com",
        },
      ],
    },
    contact: {
      tag: "GET IN TOUCH",
      title: "Let's Build Something Great",
      desc: "Whether you have a question, project proposal, or job opportunity, feel free to send a message or connect directly through the channels below.",
      formName: "Full Name",
      formNamePlaceholder: "Your full name",
      formEmail: "Email Address",
      formEmailPlaceholder: "example@gmail.com",
      formSubject: "Subject",
      formSubjectPlaceholder: "Collaboration or project inquiry",
      formMessage: "Your Message",
      formMessagePlaceholder: "Tell me more about your requirements or project...",
      formSubmit: "Send Message",
      formSending: "Sending...",
      formSuccess: "Thank you! Your message has been sent successfully. I will get back to you soon!",
      copied: "Copied to clipboard!",
    },
    footer: {
      role: "Full-Stack Developer",
      quote: "Let's connect and build scalable, robust web systems together.",
      rights: "All rights reserved.",
    },
  },
};
