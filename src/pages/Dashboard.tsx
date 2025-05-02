
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, AlertTriangle, Flag, LineChart, Upload } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dashboard = () => {
  const [userRole, setUserRole] = useState("investor");
  const [recentArtworks] = useState([
    {
      id: 1,
      artist: "Jean-Michel Basquiat",
      title: "Untitled (Skull)",
      year: 1982,
      medium: "Acrylic and mixed media on canvas",
      valuation: "Fair",
      trend: "Rising",
      risk: "Low",
      predictedPrice: 12500000,
      expertLowEst: 10000000,
      expertHighEst: 15000000,
      confidenceInterval: "±12%",
    },
    {
      id: 2,
      artist: "Yayoi Kusama",
      title: "Pumpkin",
      year: 2015,
      medium: "Acrylic on canvas",
      valuation: "High",
      trend: "Stable",
      risk: "Medium",
      predictedPrice: 780000,
      expertLowEst: 650000,
      expertHighEst: 850000,
      confidenceInterval: "±15%",
    },
    {
      id: 3,
      artist: "Banksy",
      title: "Girl with Balloon",
      year: 2002,
      medium: "Screen print on paper",
      valuation: "Low",
      trend: "Rising",
      risk: "Low",
      predictedPrice: 420000,
      expertLowEst: 350000,
      expertHighEst: 500000,
      confidenceInterval: "±10%",
    },
  ]);

  const getRoleSpecificText = (role) => {
    switch (role) {
      case "investor":
        return {
          title: "Your Art Investment Dashboard",
          subtitle: "Get insights on potential art investments",
          cta1: "Estimate Artwork Value",
          cta2: "Explore Model Insights",
        };
      case "advisor":
        return {
          title: "Art Advisory Dashboard",
          subtitle: "Advanced analytics for client portfolios",
          cta1: "Generate Valuation Report",
          cta2: "View Model Performance",
        };
      case "explorer":
        return {
          title: "Art Market Explorer",
          subtitle: "Discover art valuation insights",
          cta1: "Try Artwork Estimation",
          cta2: "Learn About Our Models",
        };
      default:
        return {
          title: "Your Dashboard",
          subtitle: "Art market insights and valuations",
          cta1: "Analyze Artwork",
          cta2: "Explore Insights",
        };
    }
  };

  const roleSpecificText = getRoleSpecificText(userRole);

  return (
    <div className="py-10 px-4">
      <div className="art-container">
        <div className="grid gap-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="heading-lg mb-2">{roleSpecificText.title}</h1>
              <p className="text-gray-600">{roleSpecificText.subtitle}</p>
              <p className="text-blue-600 font-medium mt-2">Empowering Art Investment Decisions with AI Transparency</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Select value={userRole} onValueChange={setUserRole}>
                <SelectTrigger className="w-[200px] mb-4">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="investor">I'm an HNWI</SelectItem>
                  <SelectItem value="advisor">I'm a wealth advisor</SelectItem>
                  <SelectItem value="explorer">I'm just exploring</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/analysis">
              <Button className="w-full h-20 text-lg flex items-center bg-navy-800 hover:bg-navy-700">
                <Upload className="mr-2 h-6 w-6" />
                {roleSpecificText.cta1}
              </Button>
            </Link>
            <Link to="/insights">
              <Button variant="outline" className="w-full h-20 text-lg flex items-center border-navy-300">
                <LineChart className="mr-2 h-6 w-6" />
                {roleSpecificText.cta2}
              </Button>
            </Link>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-emerald-800">Valuation Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-700">8 Artworks</div>
                <p className="text-emerald-600 text-sm mt-1">5 fairly priced, 2 overpriced, 1 underpriced</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700">6 Rising</div>
                <p className="text-blue-600 text-sm mt-1">2 stable artists, 0 declining markets</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-amber-800">Model Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-700">R² 0.82</div>
                <p className="text-amber-600 text-sm mt-1">MAE: $4,230 | Accuracy: 89%</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Analyses */}
          <div>
            <h2 className="heading-md mb-4">Recent Artwork Analyses</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Artworks</TabsTrigger>
                <TabsTrigger value="valuation">Valuation</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
                <TabsTrigger value="risk">Risk</TabsTrigger>
                <TabsTrigger value="model">Model Performance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {recentArtworks.map((artwork) => (
                  <Card key={artwork.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="font-serif font-medium text-lg">{artwork.title}</h3>
                          <p className="text-gray-600">{artwork.artist}, {artwork.year}</p>
                          <p className="text-sm text-gray-500">{artwork.medium}</p>
                          <div className="mt-2 flex flex-col">
                            <span className="text-sm">
                              <span className="font-medium">AI Estimate:</span> ${artwork.predictedPrice.toLocaleString()}
                              <span className="ml-2 text-xs text-gray-500">{artwork.confidenceInterval}</span>
                            </span>
                            <span className="text-sm">
                              <span className="font-medium">Expert Range:</span> ${artwork.expertLowEst.toLocaleString()} - ${artwork.expertHighEst.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                          <div className={`flex items-center px-3 py-1 rounded-full text-sm ${
                            artwork.valuation === "Fair" 
                              ? "bg-emerald-100 text-emerald-700" 
                              : artwork.valuation === "High"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            <Flag className="h-4 w-4 mr-1" />
                            {artwork.valuation} Price
                          </div>
                          
                          <div className={`flex items-center px-3 py-1 rounded-full text-sm ${
                            artwork.trend === "Rising" 
                              ? "bg-blue-100 text-blue-700" 
                              : "bg-gray-100 text-gray-700"
                          }`}>
                            <TrendingUp className="h-4 w-4 mr-1" />
                            {artwork.trend}
                          </div>
                          
                          <div className={`flex items-center px-3 py-1 rounded-full text-sm ${
                            artwork.risk === "Low" 
                              ? "bg-emerald-100 text-emerald-700" 
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            <AlertTriangle className="h-4 w-4 mr-1" />
                            {artwork.risk} Risk
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="valuation">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Valuation analyses will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trends">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Trend analyses will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="risk">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Risk analyses will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="model">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">AI Model Performance</h3>
                      <p className="text-gray-600">
                        Our primary model uses OLS + PCA text features for artwork valuation, with CLIP image analysis as a fallback.
                        Performance metrics are tracked with each prediction.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">R² Score</p>
                          <p className="text-xl font-bold">0.82</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">Mean Absolute Error</p>
                          <p className="text-xl font-bold">$4,230</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">Average Error Margin</p>
                          <p className="text-xl font-bold">±12.5%</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
