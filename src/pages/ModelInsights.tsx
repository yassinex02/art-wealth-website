
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// Mock data for the charts
const performanceData = [
  { name: 'OLS + PCA Text', accuracy: 89, r2: 0.82, mae: 4230 },
  { name: 'CLIP Image Only', accuracy: 78, r2: 0.71, mae: 7850 },
  { name: 'Combined Model', accuracy: 91, r2: 0.85, mae: 3900 },
  { name: 'Human Expert', accuracy: 93, r2: 0.88, mae: 3400 },
];

const errorDistribution = [
  { price: "< $100k", ai: 8.2, human: 7.1 },
  { price: "$100k-$500k", ai: 12.5, human: 10.2 },
  { price: "$500k-$1M", ai: 15.8, human: 12.5 },
  { price: "$1M-$5M", ai: 18.2, human: 15.3 },
  { price: "> $5M", ai: 21.4, human: 17.8 },
];

const featureImportance = [
  { feature: "Artist reputation", score: 0.42 },
  { feature: "Text embeddings", score: 0.28 },
  { feature: "Auction house", score: 0.14 },
  { feature: "Medium", score: 0.09 },
  { feature: "Size", score: 0.07 },
];

const ModelInsights = () => {
  return (
    <div className="py-10 px-4">
      <div className="art-container max-w-6xl mx-auto">
        <div className="grid gap-8">
          <div>
            <h1 className="heading-lg mb-2">Model Insights</h1>
            <p className="text-gray-600 mb-8">
              Explore the performance and methodology behind our AI valuation models
            </p>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="explainability">Explainability</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Model Architecture</CardTitle>
                    <CardDescription>How our AI valuation system works</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>Our primary valuation model uses Ordinary Least Squares (OLS) regression with Principal Component Analysis (PCA) on text features extracted from artwork metadata.</p>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Core Components:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>OLS regression with PCA-transformed text features</li>
                          <li>CLIP image embedding fallback for visual analysis</li>
                          <li>Human expert range benchmarking</li>
                          <li>Confidence interval calculation</li>
                        </ul>
                      </div>
                      
                      <p className="text-sm text-gray-600 italic">
                        Note: Image-only models consistently underperform text-based models in our research,
                        which is why we prioritize metadata-driven analysis.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Research Highlights</CardTitle>
                    <CardDescription>Key findings from our master's thesis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-blue-800">Transparency Builds Trust</h4>
                        <p className="text-sm">
                          Our research shows that HNWI and wealth managers significantly prefer AI systems 
                          that explain their reasoning over black-box solutions.
                        </p>
                      </div>
                      
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-emerald-800">Human-AI Partnership</h4>
                        <p className="text-sm">
                          Systems that position AI as a decision support tool rather than a replacement
                          for human expertise see 78% higher adoption rates.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-amber-800">Accuracy vs. Explainability</h4>
                        <p className="text-sm">
                          Users preferred slightly less accurate models (87% vs 89%) when they offered
                          clear explanation of their reasoning process.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="performance">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Model Comparison</CardTitle>
                    <CardDescription>Performance metrics across different valuation approaches</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                          <Tooltip />
                          <Legend />
                          <Bar yAxisId="left" dataKey="accuracy" name="Accuracy (%)" fill="#8884d8" />
                          <Bar yAxisId="left" dataKey="r2" name="R² Score" fill="#82ca9d" />
                          <Bar yAxisId="right" dataKey="mae" name="MAE ($)" fill="#ffc658" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Error Distribution by Price Range</CardTitle>
                    <CardDescription>AI vs Human Expert error margins (%)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={errorDistribution} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="price" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="ai" name="AI Error %" fill="#8884d8" />
                          <Bar dataKey="human" name="Human Error %" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="methodology">
              <Card>
                <CardHeader>
                  <CardTitle>Valuation Methodology</CardTitle>
                  <CardDescription>Technical approach to AI valuation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Processing Pipeline</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">1. Text Feature Extraction</h4>
                        <p className="text-sm text-gray-600">
                          Artwork metadata (artist, title, medium, size) is processed through NLP embeddings 
                          to create numerical representations
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">2. Dimensionality Reduction</h4>
                        <p className="text-sm text-gray-600">
                          PCA reduces the high-dimensional embeddings to key components that 
                          capture most of the variation in the data
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">3. Model Training</h4>
                        <p className="text-sm text-gray-600">
                          OLS regression trained on historical auction data with PCA components as inputs
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">4. Image Analysis (Fallback)</h4>
                        <p className="text-sm text-gray-600">
                          When metadata is limited, CLIP or ViT models analyze visual elements to supplement predictions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Feature Importance</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={featureImportance} margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="feature" type="category" />
                          <Tooltip />
                          <Bar dataKey="score" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="explainability">
              <Card>
                <CardHeader>
                  <CardTitle>AI Explainability</CardTitle>
                  <CardDescription>Understanding how our valuations work</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-white border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Sample Explanation</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800">Predicted Price: $125,000</h4>
                          <p className="text-sm text-blue-700">Confidence: ±12% ($110,000 - $140,000)</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Key Contributing Factors:</h4>
                          <ul className="space-y-3">
                            <li className="flex items-center">
                              <span className="bg-emerald-100 text-emerald-700 rounded-full px-2 py-1 text-xs mr-2">42%</span>
                              <span className="font-medium">Artist reputation</span>
                              <span className="ml-2 text-gray-600 text-sm">
                                - Artist has established market history with 28 previous auction sales
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="bg-emerald-100 text-emerald-700 rounded-full px-2 py-1 text-xs mr-2">28%</span>
                              <span className="font-medium">Text embeddings from title</span>
                              <span className="ml-2 text-gray-600 text-sm">
                                - Semantic similarity to highly valued works
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-xs mr-2">14%</span>
                              <span className="font-medium">Auction house reputation</span>
                              <span className="ml-2 text-gray-600 text-sm">
                                - Premium venue correlates with higher value
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-xs mr-2">9%</span>
                              <span className="font-medium">Medium and materials</span>
                            </li>
                            <li className="flex items-center">
                              <span className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs mr-2">7%</span>
                              <span className="font-medium">Physical dimensions</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className="font-medium text-amber-800">Model Limitations</h4>
                          <p className="text-sm text-amber-700">
                            This prediction has moderate confidence due to limited recent sales data for similar works.
                            We recommend consulting an expert for additional verification.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white border rounded-lg p-6">
                        <h4 className="font-medium mb-3">How We Handle Uncertainty</h4>
                        <p className="text-gray-600 text-sm">
                          Unlike black-box models, our system explicitly communicates when data is sparse 
                          or the prediction confidence is low. This transparent approach helps build trust
                          by acknowledging the limitations of AI valuation.
                        </p>
                      </div>
                      
                      <div className="bg-white border rounded-lg p-6">
                        <h4 className="font-medium mb-3">Human-AI Collaboration</h4>
                        <p className="text-gray-600 text-sm">
                          Our research shows that AI valuations are most effective when considered alongside
                          human expert opinions. The system intentionally presents both AI predictions and
                          expert estimates (when available) to encourage thoughtful evaluation.
                        </p>
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
  );
};

export default ModelInsights;
