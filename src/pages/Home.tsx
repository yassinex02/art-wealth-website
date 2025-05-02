
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import artistImage from "../assets/artist.jpg";
import marketImage from "../assets/market.jpg";
import analysisImage from "../assets/analysis.jpg";

// Note: You'll need to add these images to your assets folder

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-700 text-white py-20">
        <div className="art-container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h1 className="heading-xl mb-6">Art Wealth Navigator</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Make informed art investment decisions with AI-powered market analysis
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/register">
                    <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                      Sign Up Free
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                      Log In
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="art-container">
          <h2 className="heading-lg text-center mb-12">Smart Art Investment Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
              <div className="h-48 mb-4 bg-gray-200 rounded-md overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-navy-200 flex items-center justify-center">
                  <span className="text-navy-600 font-medium">Artwork Analysis Image</span>
                </div>
              </div>
              <h3 className="heading-sm mb-2">Metadata Analyzer</h3>
              <p className="text-gray-600 mb-4">
                Compare artwork pricing with historical sales data to determine fair market value.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
              <div className="h-48 mb-4 bg-gray-200 rounded-md overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-navy-200 flex items-center justify-center">
                  <span className="text-navy-600 font-medium">Market Trends Image</span>
                </div>
              </div>
              <h3 className="heading-sm mb-2">Artist Market Pulse</h3>
              <p className="text-gray-600 mb-4">
                Track artist popularity and market trends to identify rising stars and stable investments.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
              <div className="h-48 mb-4 bg-gray-200 rounded-md overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-navy-200 flex items-center justify-center">
                  <span className="text-navy-600 font-medium">Risk Analysis Image</span>
                </div>
              </div>
              <h3 className="heading-sm mb-2">Liquidity Risk Score</h3>
              <p className="text-gray-600 mb-4">
                Evaluate artwork liquidity and potential resale timeline based on comprehensive market data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-800 text-white text-center">
        <div className="art-container">
          <h2 className="heading-lg mb-6">Start Making Smarter Art Investments Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Join art collectors and investors who use our platform to make data-driven decisions.
          </p>
          {!isAuthenticated && (
            <Link to="/register">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                Create Your Free Account
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
