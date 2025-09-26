import {
  Image as ImageIcon,
  Video,
  Pencil,
  Sparkles,
  Ruler,
  Mic,
  PersonStanding,
  Paintbrush,
} from "lucide-react";

export const features = [
  {
    title: "Image",
    isNew: true,
    description: "Generate images with custom styles in Flux and Ideogram.",
    icon: ImageIcon,
    iconBg: "bg-gradient-to-br from-gray-200 to-gray-400",
  },
  {
    title: "Video",
    isNew: false,
    description: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
    icon: Video,
    iconBg: "bg-yellow-400",
  },
  {
    title: "Realtime",
    isNew: false,
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: Pencil,
    iconBg: "bg-blue-400",
  },
  {
    title: "Enhancer",
    isNew: true,
    description: "Upscale and enhance images and videos up to 22K.",
    icon: Sparkles,
    iconBg: "bg-black",
  },
  {
    title: "Edit",
    isNew: true,
    description: "Add objects, change style, or expand photos and generations.",
    icon: Ruler,
    iconBg: "bg-gradient-to-br from-purple-600 to-purple-800",
  },
  {
    title: "Video Lipsync",
    isNew: true,
    description: "Lip sync any video to any audio.",
    icon: Mic,
    iconBg: "bg-gradient-to-br from-green-300 to-green-600",
  },
  {
    title: "Motion Transfer",
    isNew: true,
    description: "Transfer motion to images and animate characters.",
    icon: PersonStanding,
    iconBg: "bg-black",
  },
  {
    title: "Train",
    isNew: false,
    description: "Teach Krea to replicate your style, products, or characters.",
    icon: Paintbrush,
    iconBg: "bg-pink-500",
  },
];
