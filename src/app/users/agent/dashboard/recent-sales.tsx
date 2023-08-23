import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function RecentSales({dasboard}) {
  return (
    <div className="space-y-8 ">
      {dasboard.rs.map((a)=>(
        <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>{a.city}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{a.reciever}</p>
                  <p className="text-sm text-muted-foreground">
                    {a.email}
                  </p>
                </div>
                <div className="ml-auto font-medium">+{a.charges}</div>
              </div>
        ))}

      
     
    </div>
  )
}
