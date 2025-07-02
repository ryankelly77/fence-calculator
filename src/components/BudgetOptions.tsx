import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ExternalLink, CreditCard, Calculator, Calendar, ShoppingCart, MessageCircle, Upload } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';

interface BudgetOptionsProps {
  originalPrice: number;
  budget: number;
}

const BudgetOptions: React.FC<BudgetOptionsProps> = ({ originalPrice, budget }) => {
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([]);
  const [hasCompetingQuote, setHasCompetingQuote] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  const discounts = [
    { id: 'military', label: 'Military Discount', value: 0.10 },
    { id: 'senior', label: 'Senior Discount (65+)', value: 0.10 },
    { id: 'loe', label: 'Law Enforcement', value: 0.10 },
    { id: 'teacher', label: 'Teacher/Educator', value: 0.05 },
    { id: 'firsttime', label: 'First Time Customer', value: 0.05 },
    { id: 'referral', label: 'Referral Discount', value: 0.05 }
  ];
  
  const totalDiscount = selectedDiscounts.reduce((total, id) => {
    const discount = discounts.find(d => d.id === id);
    return total + (discount?.value || 0);
  }, 0);
  
  const cappedDiscount = Math.min(totalDiscount, 0.20);
  const discountedPrice = originalPrice * (1 - cappedDiscount);
  const monthlyPayment = (discountedPrice * 1.18) / 36;
  
  const handleDiscountChange = (discountId: string, checked: boolean) => {
    if (checked) {
      setSelectedDiscounts([...selectedDiscounts, discountId]);
    } else {
      setSelectedDiscounts(selectedDiscounts.filter(id => id !== discountId));
    }
  };
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };
  
  const handleAcornFinancing = () => {
    window.open('https://www.acornfinance.com', '_blank', 'noopener,noreferrer');
  };
  
  const budgetAbovePrice = budget >= originalPrice;
  
  if (budgetAbovePrice) {
    return (
      <div className="space-y-6">
        <Card className="border-green-200 bg-green-50/30">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Your Project's Estimated Price
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-lg text-green-700">
              Your budget of {formatPrice(budget)} is sufficient for this project estimated at {formatPrice(originalPrice)}.
            </p>
            <p className="text-gray-600">
              Ready to get started? Click below to book your project and we'll schedule a time to visit your property to finalize details and begin work.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book Now & Schedule Property Visit
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const finalPrice = totalDiscount > 0 ? discountedPrice : originalPrice;
  const stillOverBudget = finalPrice > budget;
  
  return (
    <div className="space-y-6">
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader>
          <CardTitle className="text-red-800 flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Your Project's Estimated Price
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-red-700 mb-4">
            Project Cost: {formatPrice(originalPrice)} | Your Budget: {formatPrice(budget)}
          </p>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Price Above Budget - We Have Options!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <Card className="border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-blue-800">Option 1: Schedule Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Meet with our team to explore ways to reduce costs while maintaining quality.</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full" asChild>
                    <a href="https://raptor-services.com/schedule-your-appointment/" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Appointment
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-green-800">Option 2: Apply Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {discounts.map((discount) => (
                      <div key={discount.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={discount.id}
                          checked={selectedDiscounts.includes(discount.id)}
                          onCheckedChange={(checked) => handleDiscountChange(discount.id, !!checked)}
                        />
                        <label htmlFor={discount.id} className="text-sm font-medium">
                          {discount.label} ({(discount.value * 100).toFixed(0)}%)
                        </label>
                      </div>
                    ))}
                  </div>
                  {totalDiscount > 0 && (
                    <div className="p-3 bg-green-100 rounded-lg mb-4">
                      <div className="flex flex-col gap-2">
                        <Badge className="bg-green-600 text-white w-fit">
                          Total Discount: {(cappedDiscount * 100).toFixed(0)}%
                        </Badge>
                        {totalDiscount > 0.20 && (
                          <Badge variant="outline" className="text-xs w-fit">
                            Max 20% discount applied
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg font-bold text-green-800 mt-2">
                        New Price: {formatPrice(discountedPrice)}
                      </p>
                    </div>
                  )}
                  {totalDiscount > 0 && (
                    <Button className="bg-green-600 hover:bg-green-700 w-full" asChild>
                      <a href="https://raptor-services.com/schedule-your-appointment/" target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Book Now
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
              
              <Card className="border-purple-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Option 3: Financing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm font-medium text-purple-800 mb-1">Acorn Financing Available</p>
                      <p className="text-lg font-bold text-purple-900">
                        {formatPrice(monthlyPayment)}/month
                      </p>
                      <p className="text-xs text-purple-600">36 months @ 18% APR</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-2">Or, We Also Accept These Cards:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Visa</Badge>
                        <Badge variant="outline">Mastercard</Badge>
                        <Badge variant="outline">Discover</Badge>
                        <Badge variant="outline">American Express</Badge>
                      </div>
                    </div>
                    <Button 
                      onClick={() => window.open('https://www.acornfinance.com/apply?d=AHLEJ', '_blank')}
                      className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Apply with Acorn Financing
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-amber-200 bg-amber-50/30">
          <CardHeader>
            <CardTitle className="text-amber-800 text-lg">
              Important Cost Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Longer-Lasting Results:</strong> Investing in premium stain and professional application now means fewer maintenance costs later. Our high-quality stains are formulated to resist Texas heat, UV damage, mildew, and harsh weather far better than lower-grade products. This means your fence keeps its rich, vibrant appearance for years—without the need for frequent re-staining.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Superior Protection Against the Elements:</strong> Texas weather is no joke. Between intense sun, rain, and humidity, untreated or poorly stained wood deteriorates fast. Our process deeply penetrates the wood and seals it against moisture, UV rays, and insect damage. This added layer of protection extends the life of your fence by several years, preventing expensive repairs or early replacement.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Professional Craftsmanship That Shows:</strong> Our experienced team doesn’t just "spray and go." We prep every surface thoroughly, apply stain with precision, and ensure even, consistent coverage. The result is a high-end finish that elevates your curb appeal. Cutting corners here often leads to streaks, patchy coverage, or stain that wears unevenly—and those results are far more costly to fix later.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Peace of Mind Included:</strong> Your project is backed by a <strong>1-year transferable warranty</strong>, covering peeling, cracking, and other application issues. That’s real value—not something most budget services provide. If you sell your home, this warranty even adds value to the new buyer, showing care and quality investment in the property.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Real Cost Savings Over Time:</strong> While the initial quote may be a bit higher, our customers save significantly over time. Lower-cost staining options often require full re-dos in 1–2 years. Our stains typically last 3–5 years before needing a refresh, which means fewer interruptions, fewer bills, and better overall return on your investment.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Enhanced Appearance = Higher Property Value:</strong> A beautifully stained fence doesn’t just protect your property—it adds visual appeal that can improve perceived home value. Whether you're staying for the long haul or planning to sell, first impressions matter.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>We Don’t Cut Corners—And Neither Should You:</strong> Budget jobs often skip important prep steps like proper power washing or sanding, which leads to adhesion failure. We take the time to do things right from the start, so you don’t end up paying more to fix it later.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Flexible Scheduling and Local, Trusted Support:</strong> We’re a local business that prides itself on personal service, fast turnaround times, and being there when you need us. You’re not dealing with a big-box crew—you’re getting neighborly care with professional results.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BudgetOptions;