import type { SvgComponent } from "astro/types"
//import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
//import RSS from "@/assets/icons/rss.svg"
import Twitter from "@/assets/icons/x.svg"

export const SITE = {
  title: "jvf.dev",
  description: "A hub for software development insights.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/opengraph-image.png",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  //{ href: "/projects", label: "Projects" },
  //{ href: "/authors", label: "Authors" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://x.com/thejvfdev", label: "X", icon: Twitter },
  { href: "https://github.com/thejvfdev", label: "GitHub", icon: GitHub },
  //{ href: "mailto:joao@jvf.dev", label: "Email", icon: Email },
  //{ href: "/rss.xml", label: "RSS", icon: RSS },
]
