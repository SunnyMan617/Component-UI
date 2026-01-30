import { Component } from "@/types/component";
import ButtonComponent from "@/components/previews/ButtonComponent";
import CardComponent from "@/components/previews/CardComponent";
import BadgeComponent from "@/components/previews/BadgeComponent";
import InputComponent from "@/components/previews/InputComponent";
import AlertComponent from "@/components/previews/AlertComponent";
import AvatarComponent from "@/components/previews/AvatarComponent";

export const components: Component[] = [
  {
    id: "button",
    name: "Button",
    description: "Beautiful gradient buttons with hover effects",
    tags: ["Button", "Interactive", "Gradient"],
    preview: <ButtonComponent />,
    code: `// Button Component
<button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
  Click Me
</button>`,
  },
  {
    id: "card",
    name: "Card",
    description: "Modern card component with shadow and hover effects",
    tags: ["Card", "Layout", "Shadow"],
    preview: <CardComponent />,
    code: `// Card Component
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
  <h3 className="text-xl font-bold mb-2">Card Title</h3>
  <p className="text-gray-600 dark:text-gray-400">Card description goes here</p>
</div>`,
  },
  {
    id: "badge",
    name: "Badge",
    description: "Colorful badges for labels and tags",
    tags: ["Badge", "Label", "Tag"],
    preview: <BadgeComponent />,
    code: `// Badge Component
<span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
  Badge
</span>`,
  },
  {
    id: "input",
    name: "Input",
    description: "Styled input fields with focus states",
    tags: ["Input", "Form", "Interactive"],
    preview: <InputComponent />,
    code: `// Input Component
<input
  type="text"
  placeholder="Enter text..."
  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
/>`,
  },
  {
    id: "alert",
    name: "Alert",
    description: "Alert messages with different variants",
    tags: ["Alert", "Notification", "Message"],
    preview: <AlertComponent />,
    code: `// Alert Component
<div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
  <p className="text-blue-800 dark:text-blue-200">This is an alert message</p>
</div>`,
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "User avatar with fallback and status indicator",
    tags: ["Avatar", "User", "Profile"],
    preview: <AvatarComponent />,
    code: `// Avatar Component
<div className="relative inline-block">
  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
    JD
  </div>
  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>`,
  },
];

