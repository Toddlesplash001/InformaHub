
import { Link, useLocation } from "react-router-dom";
import { Home, Grid, BookmarkCheck, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-16 z-50">
      <Link to="/">
        <Button variant={isActive('/') ? 'default' : 'ghost'} size="sm" className="flex flex-col items-center p-1 h-auto">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Button>
      </Link>
      <Link to="/categories">
        <Button variant={isActive('/categories') ? 'default' : 'ghost'} size="sm" className="flex flex-col items-center p-1 h-auto">
          <Grid className="h-5 w-5" />
          <span className="text-xs mt-1">Categories</span>
        </Button>
      </Link>
      <Link to="/bookmarks">
        <Button variant={isActive('/bookmarks') ? 'default' : 'ghost'} size="sm" className="flex flex-col items-center p-1 h-auto">
          <BookmarkCheck className="h-5 w-5" />
          <span className="text-xs mt-1">Saved</span>
        </Button>
      </Link>
      <Link to="/login">
        <Button variant={isActive('/login') ? 'default' : 'ghost'} size="sm" className="flex flex-col items-center p-1 h-auto">
          <LogIn className="h-5 w-5" />
          <span className="text-xs mt-1">Login</span>
        </Button>
      </Link>
    </div>
  );
};

export default MobileNav;
