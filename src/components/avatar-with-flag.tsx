import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvatarWithFlagProps {
  src: string
  alt: string
  fallback: string
  flag: string
}

export function AvatarWithFlag({ src, alt, fallback, flag }: AvatarWithFlagProps) {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="absolute bottom-0 right-0 overflow-hidden w-3 h-3">
        <img src={flag} alt="" />
      </div>
    </div>
  )
}

