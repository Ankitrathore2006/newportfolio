(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/projectsData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "automation-library-advanced",
        title: "Automation for Library Management",
        shortDescription: "An advanced library automation system focusing on efficient book handling, tracking, and reporting.",
        introduction: "This project automates traditional library operations such as book issuance, returns, member management, and reporting. It reduces manual workload, minimizes errors, and improves overall operational efficiency.",
        keyInsights: [
            "Automated issue & return workflow",
            "Role-based access for Admin & Librarian",
            "Accurate inventory tracking",
            "Detailed activity reports"
        ],
        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        features: [
            "Book & Member Management",
            "Fine Calculation System",
            "Admin Dashboard",
            "Search & Filters"
        ],
        futureScope: [
            "RFID-based tracking",
            "Cloud deployment",
            "AI-based book recommendations"
        ],
        image: "/work-photo/FULL STACK WEB DEVELOPER (3).png",
        github: "https://github.com/Ankitrathore2006/library-management",
        liveLink: "http://polygwalior.ac.in/lib_ankit/index1.php"
    },
    {
        slug: "salary-management-system",
        title: "Salary Management System",
        shortDescription: "A system for managing employee salaries, payslips, deductions, and payroll records.",
        introduction: "This application automates salary calculations, deductions, and payslip generation, ensuring accuracy and transparency in payroll management.",
        keyInsights: [
            "Automated payroll processing",
            "Secure employee records",
            "Accurate salary calculation"
        ],
        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        features: [
            "Payslip Generation",
            "Salary Calculation",
            "Deduction Handling",
            "Employee Management"
        ],
        futureScope: [
            "Bank API integration",
            "HR role-based access",
            "Cloud payroll system"
        ],
        image: "/images/salary.jpeg",
        github: "",
        liveLink: "https://www.polygwalior.ac.in/lib_ankit"
    },
    {
        slug: "ecommerce-trupti-beverages",
        title: "E-Commerce Billing for Trupti Beverages",
        shortDescription: "A hybrid e-commerce billing platform with inventory, authentication, and invoice generation.",
        introduction: "This project provides a complete billing and inventory management solution for a beverage business with authentication and automated invoicing.",
        keyInsights: [
            "Hybrid MERN + PHP architecture",
            "Automated billing system",
            "Secure authentication"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "PHP"
        ],
        features: [
            "Product Management",
            "Billing System",
            "Invoice Generation",
            "Authentication"
        ],
        futureScope: [
            "Online payment integration",
            "Mobile app version",
            "Sales analytics dashboard"
        ],
        image: "/images/trupti.png",
        github: "",
        liveLink: "https://oceangelide.in/"
    },
    {
        slug: "personal-ai-assistant-jiya",
        title: "Personal AI Assistant (Jiya)",
        shortDescription: "A desktop-based AI assistant capable of voice interaction and system automation.",
        introduction: "Jiya is a Python-based AI assistant that automates system tasks, responds to voice commands, and provides an interactive desktop experience using NLP and speech technologies.",
        keyInsights: [
            "Voice-based interaction",
            "Multithreaded PyQt5 GUI",
            "Modular architecture"
        ],
        technologies: [
            "Python",
            "PyQt5",
            "SpeechRecognition",
            "NLP",
            "TTS"
        ],
        features: [
            "Voice Commands",
            "Chatbot Responses",
            "System Automation",
            "Desktop GUI"
        ],
        futureScope: [
            "Screen reading & smart clicks",
            "WhatsApp & Email automation",
            "Cloud AI integration"
        ],
        image: "/images/ai-assistant.png",
        github: "https://github.com/Ankitrathore2006/ai-virtual-system",
        liveLink: ""
    },
    {
        slug: "ai-website-builder-nabi",
        title: "AI-Based Website Builder (Nabi.ai)",
        shortDescription: "An AI-powered platform that generates professional websites from user prompts.",
        introduction: "Nabi.ai enables users to create responsive websites using AI-generated layouts and content, significantly reducing development time.",
        keyInsights: [
            "Prompt-based website generation",
            "AI-driven UI creation",
            "Scalable architecture"
        ],
        technologies: [
            "React",
            "Node.js",
            "TailwindCSS",
            "OpenAI API"
        ],
        features: [
            "AI Layout Generation",
            "Responsive Design",
            "Content Automation"
        ],
        futureScope: [
            "Drag-and-drop editor",
            "CMS integration",
            "One-click deployment"
        ],
        image: "/images/ai-builder.png",
        github: "https://github.com/Ankitrathore2006/nabi.ai",
        liveLink: ""
    },
    {
        slug: "businesspro",
        title: "BusinessPro – Smart Business Platform",
        shortDescription: "A modern business management platform with role-based dashboards.",
        introduction: "BusinessPro is designed to manage inventory, customers, and invoicing through a modern and scalable web application.",
        keyInsights: [
            "Role-based dashboards",
            "Modern UI with animations",
            "Scalable frontend architecture"
        ],
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "TailwindCSS",
            "Framer Motion"
        ],
        features: [
            "Inventory Management",
            "Customer Handling",
            "Invoice Generation"
        ],
        futureScope: [
            "Accounting integration",
            "Backend API expansion",
            "Multi-tenant support"
        ],
        image: "/images/businesspro.png",
        github: "https://github.com/Ankitrathore2006/businessPro-project",
        liveLink: ""
    },
    {
        slug: "chat-app",
        title: "Realtime Chat App",
        shortDescription: "A real-time chat application with authentication and online presence.",
        introduction: "This MERN-based chat application enables users to communicate instantly using Socket.io with secure authentication.",
        keyInsights: [
            "Real-time messaging with Socket.io",
            "JWT authentication",
            "Global state management"
        ],
        technologies: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Socket.io"
        ],
        features: [
            "Real-time Messaging",
            "Online Status",
            "User Authentication"
        ],
        futureScope: [
            "Group chats",
            "Media sharing",
            "Video calling"
        ],
        image: "/images/chat-app.png",
        github: "https://github.com/Ankitrathore2006/chat-app",
        liveLink: ""
    },
    {
        slug: "flight-comparison",
        title: "Flight Comparison Platform",
        shortDescription: "A web application for comparing flight prices with real-time filters.",
        introduction: "This platform allows users to compare flights based on price, availability, and airlines to make better travel decisions.",
        keyInsights: [
            "Real-time search & filtering",
            "Redux-based state handling",
            "Scalable architecture"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Redux",
            "Material UI"
        ],
        features: [
            "Flight Search",
            "Price Filtering",
            "Booking Management"
        ],
        futureScope: [
            "Airline API integration",
            "Hotel booking",
            "Mobile application"
        ],
        image: "/images/flight-compare.webp",
        github: "",
        liveLink: "https://flight-comparign-frontend.vercel.app/"
    },
    {
        slug: "portfolio-concept-1",
        title: "Portfolio Website",
        shortDescription: "A modern portfolio showcasing projects, skills, and personal branding.",
        introduction: "This portfolio highlights professional projects, skills, and achievements using modern UI and animations.",
        keyInsights: [
            "Personal branding focus",
            "Smooth animations",
            "Clean UI/UX"
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        features: [
            "Project Showcase",
            "Responsive Design",
            "Animated UI"
        ],
        futureScope: [
            "Blog section",
            "Dark mode",
            "CMS integration"
        ],
        image: "/work-photo/FULL STACK WEB DEVELOPER (4).png",
        github: "",
        liveLink: "https://ankitrathore2006.github.io/newport.github.io/"
    },
    {
        slug: "online-course-education-platform",
        title: "Online Course & Education Platform",
        shortDescription: "A scalable education platform offering online courses and student dashboards.",
        introduction: "This platform enables students to access online courses, track progress, and manage learning efficiently.",
        keyInsights: [
            "Student progress tracking",
            "Scalable architecture",
            "Modern UI"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB"
        ],
        features: [
            "Course Management",
            "Video Lectures",
            "Student Dashboard"
        ],
        futureScope: [
            "Live classes",
            "Certification system",
            "Mobile app"
        ],
        image: "/work-photo/Desktop - 6.png",
        github: "",
        liveLink: ""
    },
    {
        slug: "ai-safety-api",
        title: "AI Safety API Project",
        shortDescription: "An AI-focused API ensuring safe and controlled AI interactions.",
        introduction: "This project focuses on monitoring and controlling AI responses to ensure safe enterprise-level usage.",
        keyInsights: [
            "AI response validation",
            "Security-focused design",
            "Scalable API"
        ],
        technologies: [
            "Node.js",
            "Express",
            "AI APIs"
        ],
        features: [
            "Request Monitoring",
            "Response Filtering",
            "API Logging"
        ],
        futureScope: [
            "Enterprise integrations",
            "Advanced AI monitoring",
            "Dashboard analytics"
        ],
        image: "/work-photo/UserDashbord.png",
        github: "",
        liveLink: ""
    },
    // {
    //   slug: "dashboard-system",
    //   title: "Analytics Dashboard System",
    //   shortDescription:
    //     "A modern dashboard with charts, insights, and role-based visualization.",
    //   introduction:
    //     "This dashboard system provides real-time analytics, data visualization, and insights for decision-making.",
    //   keyInsights: [
    //     "Role-based analytics",
    //     "Interactive charts",
    //     "Real-time insights",
    //   ],
    //   technologies: ["React", "Chart.js", "TailwindCSS"],
    //   features: [
    //     "Data Visualization",
    //     "User Roles",
    //     "Analytics Reports",
    //   ],
    //   futureScope: [
    //     "Real-time data streams",
    //     "AI-based predictions",
    //     "Export reports",
    //   ],
    //   image: "/work-photo/FULL STACK WEB DEVELOPER (1).png",
    //   github: "",
    //   liveLink: "",
    // },
    {
        slug: "alumni-mentorship-platform",
        title: "Alumni Mentorship & Career Bridge",
        shortDescription: "A platform connecting alumni with students for mentorship and career guidance.",
        introduction: "This platform bridges the gap between alumni and students by enabling mentorship, networking, and career guidance.",
        keyInsights: [
            "Mentor-mentee matching",
            "Secure communication",
            "Career-focused platform"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB"
        ],
        features: [
            "Mentorship Matching",
            "Chat System",
            "Profile Management"
        ],
        futureScope: [
            "Video mentoring",
            "Job board integration",
            "AI-based mentor matching"
        ],
        image: "/work-photo/home Alumini.png",
        github: "",
        liveLink: ""
    },
    {
        slug: "modern-ecommerce",
        title: "Modern Responsive E-Commerce Website",
        shortDescription: "A fully responsive modern e-commerce website with smooth UX and admin controls.",
        introduction: "This project focuses on delivering a modern shopping experience with responsive design and efficient admin management.",
        keyInsights: [
            "User-focused UI/UX",
            "Responsive design",
            "Scalable structure"
        ],
        technologies: [
            "React",
            "Node.js",
            "TailwindCSS"
        ],
        features: [
            "Product Listings",
            "Cart System",
            "Admin Controls"
        ],
        futureScope: [
            "Payment gateway",
            "Order tracking",
            "Mobile app"
        ],
        image: "/work-photo/FULL STACK WEB DEVELOPER.png",
        github: "",
        liveLink: ""
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const contactFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nonempty("Name is required"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().email("Invalid email").nonempty("Email is required"),
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nonempty("Subject is required"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().nonempty("Message is required")
});
const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
};
function ContactForm() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { register, handleSubmit, formState: { errors }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: initialValues,
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(contactFormSchema)
    });
    // ✅ Submit Handler with EmailJS
    const onSubmit = async (data)=>{
        setLoading(true);
        try {
            const payload = {
                name: data.name,
                to_name: "Full Stack Developer",
                message: data.message,
                email: data.email,
                title: data.subject
            };
            const serviceID = ("TURBOPACK compile-time value", "service_rwkvsu1");
            const templateID = ("TURBOPACK compile-time value", "template_koqdypd");
            const publicKey = ("TURBOPACK compile-time value", "qldg1xugdiIePpSAs");
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(serviceID, templateID, payload, publicKey);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Thank you! Your submission has been received!");
            reset(initialValues);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to send message, please try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "form-block-charcoal dark-mode w-form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/ContactForm.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                id: "email-form",
                name: "email-form",
                className: "form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-fields",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "form-field dark-mode w-input",
                                ...register("name"),
                                placeholder: "Name",
                                type: "text",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ContactForm.tsx",
                                lineNumber: 77,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "form-field dark-mode w-input",
                                ...register("email"),
                                placeholder: "Email",
                                type: "email",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ContactForm.tsx",
                                lineNumber: 84,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "form-field dark-mode w-input",
                                ...register("subject"),
                                placeholder: "What’s this about?",
                                type: "text",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ContactForm.tsx",
                                lineNumber: 91,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "form-field dark-mode hcih w-input",
                                ...register("message"),
                                placeholder: "How Can I Help?",
                                type: "text",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ContactForm.tsx",
                                lineNumber: 98,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/ContactForm.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: loading,
                        type: "submit",
                        className: "submit-button dark w-button",
                        children: loading ? "Sending..." : "Send"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ContactForm.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ContactForm.tsx",
                lineNumber: 75,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "error-message w-form-fail",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-block-3",
                    children: errors.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-sm mt-1",
                        children: errors.subject.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ContactForm.tsx",
                        lineNumber: 114,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ContactForm.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ContactForm.tsx",
                lineNumber: 111,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ContactForm.tsx",
        lineNumber: 73,
        columnNumber: 6
    }, this);
}
_s(ContactForm, "8HuJlFuWCa75ly5S3DUYaQ5jqqs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ContactForm;
const __TURBOPACK__default__export__ = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/projects/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/projects/[slug]/page.tsx'\n\nExpected '</', got '='");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_62bc218e._.js.map