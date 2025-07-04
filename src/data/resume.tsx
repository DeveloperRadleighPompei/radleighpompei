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
    "Rust",
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
          type: "Github repo",
          href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/CIFAR10-Resnet18/main.py",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/resnet18.png",
      video:
        "",
    },
    {
      title: "DCGAN MNIST",
      href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/MNIST-GAN/main.py",
      active: true,
      description:
          "Used the MNIST dataset with normalization and no data augmentation. The model is a DCGAN with a transposed convolutional generator and a convolutional discriminator, both using batch normalization and non-linear activations. Training was done using the Adam optimizer with β1=0.5, learning rate scheduling, and binary cross-entropy loss. The network was trained for 100 epochs, successfully generating realistic handwritten digits.",
      technologies: [
        "Python",
        "Pytorch"
      ],
      links: [
        {
          type: "Github repo",
          href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/MNIST-GAN/main.py",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dcgan.png",
      video:
          "",
    },
    {
      title: "Housing price",
      href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/MNIST-GAN/main.py",
      active: true,
      description:
          "Created 2 ai models to predict housing prices in 2 areas. Accurate with in $24,000 of selling price!",
      technologies: [
        "Sklearn",
        "Pytorch",
        "Pandas ",
      ],
      links: [
        {
          type: "Github repo",
          href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/house.png",
      video:
          "",
    },
    {
      title: "Secure Password Manager in Rust",
      href: "https://github.com/DeveloperRadleighPompei/Radleigh-ML/blob/main/MNIST-GAN/main.py",
      active: true,
      description:
          "Password manager programmed in rust. Used Argon2id encryption for master password and aesgcm for password vault, master password hash computed each vault operation which is used to unlock and edit the vault, this vault is then encoded in aesgcm.",
      technologies: [
        "Rust",
        "Argon2",
        "AES-GCM",
      ],
      links: [
        {
          type: "Github repo",
          href: "https://github.com/DeveloperRadleighPompei/rust-password-manager/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/password.png",
      video:
          "",
    },
  ],
} as const;
