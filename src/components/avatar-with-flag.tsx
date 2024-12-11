import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvatarWithFlagProps {
  src: string
  alt: string
  fallback: string
  flag: string
}

export function AvatarWithFlag({ src, alt, fallback, flag }: AvatarWithFlagProps) {
    console.log("src", src);
    console.log("alt", alt);
    console.log("fallback", fallback);
    console.log("flag", flag);
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="absolute bottom-0 right-0 rounded-full overflow-hidden w-4 h-4 border-2 border-white">
        <img src={flag} alt="flag" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

