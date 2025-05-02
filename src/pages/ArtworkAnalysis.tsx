
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, TrendingDown, AlertTriangle, Info, Flag } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Mock data for the charts
const marketTrendData = [
  { name: '2019', value: 100 },
  { name: '2020', value: 120 },
  { name: '2021', value: 110 },
  { name: '2022', value: 140 },
  { name: '2023', value: 155 },
  { name: '2024', value: 180 },
];

const comparableSalesData = [
  { name: 'Sale 1', price: 42000 },
  { name: 'Sale 2', price: 55000 },
  { name: 'Sale 3', price: 48000 },
  { name: 'Sale 4', price: 60000 },
  { name: 'Sale 5', price: 51000 },
  { name: 'Your Art', price: 52338 },
];

const ArtworkAnalysis = () => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const [formData, setFormData] = useState({
    artist: "",
    title: "",
    year: "",
    medium: "",
    dimensions: "",
    price: "",
    auction: "",
    condition: "excellent",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast({
        title: "Analysis complete",
        description: "Your artwork has been analyzed successfully",
      });
    }, 2000);
  };

  return (
    <div className="py-10 px-4">
      <div className="art-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-2 text-center">Analyze Artwork</h1>
          <p className="text-gray-600 text-center mb-8">Enter artwork details for comprehensive market analysis</p>

          {!showResults ? (
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Artwork Information</CardTitle>
                <CardDescription>
                  Provide as much detail as possible for the most accurate analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="artist">Artist Name *</Label>
                      <Input
                        id="artist"
                        name="artist"
                        value={formData.artist}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Pablo Picasso"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="title">Artwork Title *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. The Weeping Woman"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="year">Year Created *</Label>
                      <Input
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. 1937"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="medium">Medium *</Label>
                      <Input
                        id="medium"
                        name="medium"
                        value={formData.medium}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Oil on canvas"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dimensions">Dimensions</Label>
                      <Input
                        id="dimensions"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        placeholder="e.g. 60 x 49 cm"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price">Price or Estimate (USD) *</Label>
                      <Input
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. 52338"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="auction">Auction House or Gallery</Label>
                      <Input
                        id="auction"
                        name="auction"
                        value={formData.auction}
                        onChange={handleInputChange}
                        placeholder="e.g. Christie's"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="condition">Condition</Label>
                      <Select 
                        value={formData.condition} 
                        onValueChange={(value) => handleSelectChange("condition", value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                          <SelectItem value="unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any other details that might be relevant to the analysis"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-navy-800 hover:bg-navy-700"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze Artwork"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h2 className="heading-md mb-4">Analysis Results: {formData.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">{formData.artist}</div>
                  <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">{formData.year}</div>
                  <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">{formData.medium}</div>
                  <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">${formData.price}</div>
                </div>
              </div>
              
              <Tabs defaultValue="metadata">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="metadata">Metadata Analysis</TabsTrigger>
                  <TabsTrigger value="market">Market Pulse</TabsTrigger>
                  <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
                </TabsList>
                
                <TabsContent value="metadata" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Flag className="h-5 w-5 mr-2 text-emerald-600" />
                        Price Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-medium">Fair Pricing</h4>
                            <p className="text-gray-600">This artwork is priced within the fair market range based on comparable sales.</p>
                          </div>
                          <div className="flex items-center px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700">
                            Fairly Priced
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          The current price of ${formData.price} falls within the middle range of recent comparable sales,
                          which have averaged between $45,000 and $58,000 for similar works.
                        </p>
                      </div>
                      
                      <div className="h-72">
                        <h4 className="text-lg font-medium mb-4">Comparable Sales</h4>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={comparableSalesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`$${value}`, "Price"]} />
                            <Bar 
                              dataKey="price" 
                              fill="#10B981" 
                              radius={[4, 4, 0, 0]}
                              name="Price" 
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="market" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                        Artist Market Trends
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-medium">Rising Market</h4>
                            <p className="text-gray-600">This artist's market has shown consistent growth over the past 5 years.</p>
                          </div>
                          <div className="flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            Rising
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {formData.artist}'s work has appreciated by approximately 16% annually since 2019,
                          outperforming the broader art market which grew at 9% during the same period.
                        </p>
                      </div>
                      
                      <div className="h-72">
                        <h4 className="text-lg font-medium mb-4">Price Index (2019-2024)</h4>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={marketTrendData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`${value} (index)`, "Market Value"]} />
                            <Area 
                              type="monotone" 
                              dataKey="value" 
                              stroke="#3B82F6" 
                              fill="#93C5FD" 
                              name="Market Value" 
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="risk" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-amber-600" />
                        Risk Assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <AlertTriangle className="h-4 w-4 mr-1 text-emerald-600" />
                            Liquidity Risk: Low
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Works by {formData.artist} typically sell within 3-6 months when priced appropriately.
                            There is strong collector demand for pieces from this period.
                          </p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <AlertTriangle className="h-4 w-4 mr-1 text-emerald-600" />
                            Authenticity Risk: Low
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {formData.auction ? `${formData.auction}'s` : "The seller's"} provenance records appear complete. 
                            No red flags detected in the authenticity documentation.
                          </p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <AlertTriangle className="h-4 w-4 mr-1 text-amber-600" />
                            Condition Risk: Medium
                          </h4>
                          <p className="text-gray-600 text-sm">
                            The {formData.condition} condition indicates some considerations for long-term value.
                            A professional conservation assessment is recommended.
                          </p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Info className="h-4 w-4 mr-1 text-blue-600" />
                            Auction Estimate Confidence
                          </h4>
                          <p className="text-gray-600 text-sm">
                            The current price estimate appears reliable based on recent auction results
                            for similar works by {formData.artist} from this period.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-navy-50 rounded-lg">
                        <h4 className="font-medium mb-2">Overall Assessment</h4>
                        <p className="text-gray-700">
                          This artwork represents a relatively low-risk investment with good potential for appreciation
                          based on the artist's rising market. The price is fair, and there are no significant authenticity concerns.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setShowResults(false)}>
                  Back to Form
                </Button>
                <Button className="bg-navy-800 hover:bg-navy-700">
                  Save Analysis
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkAnalysis;
