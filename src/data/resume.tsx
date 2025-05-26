import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Radleigh Pompei",
  initials: "RJP",
  url: "https://radleighpompei.vercel.app/",
  description:
    "I like programming machine learning models in pytorch. I also like robotics!",
  summary:
      "I have also programmed devices too including, Raspberry pi 4, raspberry pi pico, esp32 s3, arduino uno r3 and adafuit rp2040",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Pytorch",
    "Pandas",
    "Seaborn",
    "Matplotlib",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/articles", icon: NotebookIcon, label: "Articles" },
  ],
  contact: {
    email: "radleighpompei@gmail.com",
    tel: "N/A",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/developerradleighpompei",
        icon: Icons.github,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  projects: [
    {
      title: "Resnet18 CIFAR10",
      href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/CIFAR10-Resnet18/main.py",
      active: true,
      description:
        "Used data augmentation (random crop, horizontal flip) and normalization. The model uses of residual BasicBlocks with skip connections, with 4 layers stacked. Training uses SGD with momentum, weight decay, and a step LR scheduler over 50 epochs. Final model achieves just over 90% accuracy on the test set.",
      technologies: [
        "Python",
        "Pytorch"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/CIFAR10-Resnet18/main.py",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/resnet18.png",
      video:
        "",
    },
    {
      title: "Resnet18 CIFAR10",
      href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/CIFAR10-Resnet18/main.py",
      active: true,
      description:
          "Used data augmentation (random crop, horizontal flip) and normalization. The model uses of residual BasicBlocks with skip connections, with 4 layers stacked. Training uses SGD with momentum, weight decay, and a step LR scheduler over 50 epochs. Final model achieves just over 90% accuracy on the test set.",
      technologies: [
        "Python",
        "Pytorch"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/CIFAR10-Resnet18/main.py",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/resnet18.png",
      video:
          "",
    },
  ],
} as const;
