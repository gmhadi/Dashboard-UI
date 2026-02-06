import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden animate-slide-up">
      {/* Header Background */}
      <div className="h-24 bg-gradient-to-r from-primary to-primary/80" />
      
      {/* Profile Content */}
      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="-mt-12 mb-4">
          <Avatar className="h-24 w-24 border-4 border-card shadow-elevated">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" alt="Profile" />
            <AvatarFallback className="text-2xl">JD</AvatarFallback>
          </Avatar>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-card-foreground">John Doe</h3>
              <Badge>Pro</Badge>
            </div>
            <p className="text-muted-foreground">Product Designer</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>john@acme.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Joined March 2023</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button className="flex-1">Edit Profile</Button>
            <Button variant="outline" className="flex-1">View Activity</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
