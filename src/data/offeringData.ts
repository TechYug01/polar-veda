export const offerings = [
  {
    title: "Online Education",
    image: "/images/online-education.webp",
    href: "/offerings/online-education",
  },
  {
    title: "Test Preparation",
    image: "/images/test-preparation.webp",
    href: "/offerings/test-preparation",
  },
  {
    title: "Addon Services",
    image: "/images/addon-services.webp",
    href: "/offerings/addon-services",
  },
  {
    title: "Technology Integration",
    image: "/images/technology-integration.webp",
    href: "/offerings/technology-integration",
  },
];

export const features = {
  onlineEducation: [
    {
      title: "Live Classes",
      image: "/images/online-education/live-classes.webp",
    },
    {
      title: "Recorded Lectures",
      image: "/images/online-education/recorded-lectures.webp",
    },
    {
      title: "Interactive Quizzes",
      image: "/images/online-education/interactive-quizzes.webp",
    },
    {
      title: "Comprehensive Course Materials",
      image: "/images/online-education/course-materials.webp",
    },
  ],
  testPreparation: [
    {
      title: "Comprehensive Mock Tests",
      image: "/images/test-preparation/mock-tests.webp",
    },
    {
      title: "Comprehensive Test Preparation",
      image: "/images/test-preparation/comprehensive-test-preparation.webp",
    },
    {
      title: "Performance Analytics for Test Preparation",
      image: "/images/test-preparation/performance-analytics.webp",
    },
    {
      title: "Test Preparation Services",
      image: "/images/test-preparation/test-preparation-services.webp",
    },
  ],
  addonServices: [
    {
      title: "One-on-One Mentoring",
      image: "/images/addon-services/mentoring.webp",
    },
    {
      title: "Group Study Sessions",
      image: "/images/addon-services/group-study.webp",
    },
    {
      title: "Exclusive Content Access",
      image: "/images/addon-services/exclusive-content.webp",
    },
    {
      title: "Career Counseling",
      image: "/images/addon-services/career-counseling.webp",
    },
  ],
  technologyIntegration: [
    {
      title: "Integration Services",
      image: "/images/technology-integration/integration-services.webp",
    },
    {
      title: "Mobile App Access",
      image: "/images/technology-integration/mobile-app.webp",
    },
    {
      title: "Technology Integration Services",
      image:
        "/images/technology-integration/technology-integration-services.webp",
    },
    {
      title: "Analytics Dashboard Integration",
      image: "/images/technology-integration/analytics-dashboard.webp",
    },
  ],
};

type Feature = {
  image: string;
  title: string;
  description: string;
  keyPoints: string[];
};

export type Service = {
  title: string;
  subTitle: string;
  description: string;
  keyPoints: string[];
  pageData: Feature[];
};

export const serviceData: Record<string, Service> = {
  onlineEducation: {
    title: "Online Education",
    subTitle: "Engaging courses for all ages.",
    description:
      "Our Online Education platform offers a wide range of courses designed for various learning levels. With interactive content and expert educators, students can enhance their skills from the comfort of their homes. We cater to all ages, providing personalized learning paths to ensure everyone achieves their educational goals.",
    keyPoints: [
      "Interactive Learning",
      "Expert Educators",
      "Flexible Scheduling",
    ],
    pageData: [
      {
        image: "/images/online-education/live-classes.webp",
        title: "Live Classes",
        description:
          "Join our live classes for an interactive and personalized online learning experience with expert educators guiding you throughout the journey.",
        keyPoints: [
          "Interactive Sessions",
          "Expert Instructors",
          "Flexible Scheduling",
        ],
      },
      {
        image: "/images/online-education/recorded-lectures.webp",
        title: "Recorded Lectures",
        description:
          "Our recorded lectures provide students with the flexibility to learn at their own pace while accessing high-quality educational content.",
        keyPoints: [
          "Flexible Learning",
          "High-Quality Content",
          "Expert Instructors",
        ],
      },
      {
        image: "/images/online-education/interactive-quizzes.webp",
        title: "Interactive Quizzes",
        description:
          "Our interactive quizzes are designed to enhance learning through engagement and immediate feedback, ensuring a unique educational experience.",
        keyPoints: [
          "Engaging learning experience",
          "Instant feedback mechanism",
          "Comprehensive subject coverage",
        ],
      },
      {
        image: "/images/online-education/course-materials.webp",
        title: "Comprehensive Course Materials",
        description:
          "Our comprehensive course materials cater to various educational needs, ensuring quality and engagement for all learners.",
        keyPoints: [
          "Tailored for diverse learners",
          "Interactive and engaging content",
          "Accessible anytime, anywhere",
        ],
      },
    ],
  },
  testPreparation: {
    title: "Test Preparation",
    subTitle: "Tailored test prep resources.",
    description:
      "Our Test Preparation services provide students with the necessary tools to excel in their exams. From comprehensive study materials to mock tests, we ensure students are well-prepared. Our expert guidance helps them tackle various competitive exams with confidence and clarity.",
    keyPoints: ["Mock Tests", "Study Guides", "Expert Guidance"],
    pageData: [
      {
        image: "/images/test-preparation/mock-tests.webp",
        title: "Comprehensive Mock Tests",
        description:
          "Our mock tests are meticulously designed to provide a comprehensive exam preparation experience, ensuring students are well-equipped for success.",
        keyPoints: [
          "Realistic exam experience",
          "Expertly crafted questions",
          "Performance analytics",
        ],
      },
      {
        image: "/images/test-preparation/comprehensive-test-preparation.webp",
        title: "Comprehensive Test Preparation",
        description:
          "Our comprehensive test preparation service offers tailored practice questions designed to help you excel in your exams with quality feedback and expert support.",
        keyPoints: [
          "Tailored practice questions",
          "Real-time performance feedback",
          "Expert guidance available",
        ],
      },
      {
        image: "/images/test-preparation/performance-analytics.webp",
        title: "Performance Analytics for Test Preparation",
        description:
          "Our performance analytics service offers personalized insights for effective test preparation, enhancing your learning experience with data-driven strategies.",
        keyPoints: [
          "Data-Driven Insights",
          "Personalized Study Plans",
          "Real-Time Performance Tracking",
        ],
      },
      {
        image: "/images/test-preparation/test-preparation-services.webp",
        title: "Test Preparation Services",
        description:
          "Our test preparation services offer curated study materials tailored to boost your performance and confidence for any examination.",
        keyPoints: [
          "Comprehensive resources",
          "Expertly crafted content",
          "Focused study plans",
        ],
      },
    ],
  },
  addonServices: {
    title: "Addon Services",
    subTitle: "Additional resources for better outcomes.",
    description:
      "We offer various Addon Services that complement our main offerings. These include personal mentoring, access to exclusive webinars, and tailored study plans. Our goal is to provide holistic support to learners, ensuring they have all the resources they need to succeed.",
    keyPoints: [
      "Personal Mentoring",
      "Exclusive Webinars",
      "Tailored Study Plans",
    ],
    pageData: [
      {
        image: "/images/addon-services/mentoring.webp",
        title: "One-on-One Mentoring",
        description:
          "Our one-on-one mentoring offers personalized guidance to enhance your learning experience, ensuring you achieve your academic and professional goals.",
        keyPoints: [
          "Personalized guidance",
          "Flexible scheduling",
          "Expert mentors",
        ],
      },
      {
        image: "/images/addon-services/group-study.webp",
        title: "Group Study Sessions",
        description:
          "Our group study sessions provide a dynamic environment tailored for collaborative learning, ensuring each participant thrives with expert guidance.",
        keyPoints: [
          "Collaborative learning",
          "Expert guidance",
          "Flexible scheduling",
        ],
      },
      {
        image: "/images/addon-services/exclusive-content.webp",
        title: "Exclusive Content Access",
        description:
          "Our exclusive content is crafted to elevate your learning experience with top-notch resources tailored just for you.",
        keyPoints: [
          "Exclusive Learning Materials",
          "Tailored Educational Resources",
          "Expertly Curated Content",
        ],
      },
      {
        image: "/images/addon-services/career-counseling.webp",
        title: "Career Counseling",
        description:
          "Our career counseling service offers personalized guidance to help you navigate your career path effectively and confidently.",
        keyPoints: [
          "Personalized guidance",
          "Expert advisors",
          "Diverse career options",
        ],
      },
    ],
  },
  technologyIntegration: {
    title: "Technology Integration",
    subTitle: "Integrating tech for effective learning.",
    description:
      "At Polar Veda, we believe in harnessing technology to improve education. Our Technology Integration services ensure that learners benefit from the latest advancements in ed-tech. We provide solutions that make learning more engaging and effective, preparing students for a tech-driven future.",
    keyPoints: [
      "Latest Ed-Tech Tools",
      "Engaging Content",
      "Seamless Learning Experience",
    ],
    pageData: [
      {
        image: "/images/technology-integration/integration-services.webp",
        title: "Integration Services",
        description:
          "Our Integration Services enhance educational experiences through customized solutions, ensuring quality and efficiency in learning management systems.",
        keyPoints: [
          "Custom LMS Solutions",
          "Seamless Integration",
          "Expert Training Provided",
        ],
      },
      {
        image: "/images/technology-integration/mobile-app.webp",
        title: "Mobile App Access",
        description:
          "Our mobile app access ensures personalized learning experiences, enhancing engagement and education for students.",
        keyPoints: [
          "Seamless integration",
          "User-friendly interface",
          "Real-time access",
        ],
      },
      {
        image:
          "/images/technology-integration/technology-integration-services.webp",
        title: "Technology Integration Services",
        description:
          "Our technology integration services offer innovative solutions for seamless virtual classrooms, tailored to enhance student engagement and learning outcomes.",
        keyPoints: [
          "Innovative Learning Solutions",
          "Seamless Technology Setup",
          "Enhancing Student Engagement",
        ],
      },
      {
        image: "/images/technology-integration/analytics-dashboard.webp",
        title: "Analytics Dashboard Integration",
        description:
          "Our Analytics Dashboard Integration offers customized solutions for effective data management and insights, empowering educational institutions to leverage technology for better outcomes.",
        keyPoints: [
          "Real-time data insights",
          "User-friendly interface",
          "Customizable features",
        ],
      },
    ],
  },
};
