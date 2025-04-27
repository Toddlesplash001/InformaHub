
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, Home, BookmarkCheck, Category } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              TrendSpot
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="ghost" size="icon">
                <Category className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/bookmarks">
              <Button variant="ghost" size="icon">
                <BookmarkCheck className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button>
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
