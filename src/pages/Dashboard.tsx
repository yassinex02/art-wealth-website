
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, AlertTriangle, Flag } from "lucide-react";

const Dashboard = () => {
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
    },
  ]);

  return (
    <div className="py-10 px-4">
      <div className="art-container">
        <div className="grid gap-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="heading-lg mb-2">Your Dashboard</h1>
              <p className="text-gray-600">Get insights on your art investments</p>
            </div>
            <Link to="/analysis">
              <Button className="mt-4 md:mt-0 bg-navy-800 hover:bg-navy-700">
                Analyze New Artwork
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
                <CardTitle className="text-sm font-medium text-amber-800">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-700">Low Risk</div>
                <p className="text-amber-600 text-sm mt-1">7 low risk, 1 medium risk artworks</p>
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
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
