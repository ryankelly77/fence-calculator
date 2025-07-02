import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Calculator, Upload, DollarSign } from 'lucide-react';
import StepHeader from './StepHeader';
import CleaningQuestions from './CleaningQuestions';
import BudgetOptions from './BudgetOptions';
import { formatPrice } from '@/lib/formatPrice';

interface CalculatorState {
  linearFeet6: number;
  linearFeet8: number;
  needsCleaning: boolean;
  repairType: 'none' | 'minor' | 'major';
  budget: number;
  photos: File[];
}

const FenceCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    linearFeet6: 0,
    linearFeet8: 0,
    needsCleaning: false,
    repairType: 'none',
    budget: 0,
    photos: []
  });

  const [quote, setQuote] = useState<number | null>(null);
  const [showBudgetOptions, setShowBudgetOptions] = useState(false);

  const calculatePrice = () => {
    const { linearFeet6, linearFeet8, needsCleaning, repairType } = state;
    
    let totalCost = 0;
    
    // 6-foot fence costs
    totalCost += linearFeet6 * 9; // Staining
    if (needsCleaning) totalCost += linearFeet6 * 3; // Cleaning
    
    // 8-foot fence costs
    totalCost += linearFeet8 * 10; // Staining
    if (needsCleaning) totalCost += linearFeet8 * 4; // Cleaning
    
    // Repair costs
    if (repairType === 'minor') totalCost += 250;
    if (repairType === 'major') totalCost += 750;
    
    setQuote(totalCost);
    
    // Check if over budget
    if (state.budget > 0 && totalCost > state.budget) {
      setShowBudgetOptions(true);
    } else {
      setShowBudgetOptions(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setState({...state, photos: Array.from(e.target.files)});
    }
  };

  const totalLinearFeet = state.linearFeet6 + state.linearFeet8;
  const overBudgetAmount = quote && state.budget > 0 && quote > state.budget ? quote - state.budget : 0;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card className="border-2 border-blue-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="h-6 w-6" />
            Fence Staining Cost Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <StepHeader />
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-800 border-b-2 border-blue-200 pb-2">Step 1: Fence Size</h3>
              <div>
                <Label htmlFor="linearFeet6" className="text-lg font-semibold">6-Foot Fence (Linear Feet)</Label>
                <Input
                  id="linearFeet6"
                  type="number"
                  value={state.linearFeet6 || ''}
                  onChange={(e) => setState({...state, linearFeet6: Number(e.target.value)})}
                  className="mt-2 text-lg"
                  placeholder="Enter linear feet for 6ft sections"
                />
              </div>
              
              <div>
                <Label htmlFor="linearFeet8" className="text-lg font-semibold">8+ Foot Fence (Linear Feet)</Label>
                <Input
                  id="linearFeet8"
                  type="number"
                  value={state.linearFeet8 || ''}
                  onChange={(e) => setState({...state, linearFeet8: Number(e.target.value)})}
                  className="mt-2 text-lg"
                  placeholder="Enter linear feet for 8ft+ sections"
                />
              </div>
              
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-800">
                  Total Linear Feet: {totalLinearFeet}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-800 border-b-2 border-green-200 pb-2 mb-4">Step 2: Cleaning Assessment</h3>
              
              <div className="mt-4">
                <CleaningQuestions
                  needsCleaning={state.needsCleaning}
                  onCleaningChange={(needs) => setState({...state, needsCleaning: needs})}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-800 border-b-2 border-orange-200 pb-2">Step 3: Repair Requirements</h3>
              <Card className="border-orange-100 bg-orange-50/30">
                <CardContent className="pt-6">
                  <RadioGroup
                    value={state.repairType}
                    onValueChange={(value: 'none' | 'minor' | 'major') => setState({...state, repairType: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="no-repair" />
                      <Label htmlFor="no-repair">No repairs needed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="minor" id="minor-repair" />
                      <Label htmlFor="minor-repair">Minor repairs</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="major" id="major-repair" />
                      <Label htmlFor="major-repair">Major repairs</Label>
                    </div>
                  </RadioGroup>
                  
                  {(state.repairType === 'minor' || state.repairType === 'major') && (
                    <div className="mt-4">
                      <Label htmlFor="photos" className="text-base font-medium">Upload Photos</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4">
                        <Input
                          id="photos"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                        <Label htmlFor="photos" className="cursor-pointer flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600">
                          <Upload className="h-5 w-5" />
                          <span>Click to upload</span>
                        </Label>
                        {state.photos.length > 0 && (
                          <p className="mt-2 text-sm text-green-600">{state.photos.length} photo(s) selected</p>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Budget section simplified */}
          <div className="w-full bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-lg p-6">
            <div className="max-w-md">
              <Label htmlFor="budget" className="text-lg font-semibold text-amber-700">Budget ($)</Label>
              <Input
                id="budget"
                type="number"
                value={state.budget || ''}
                onChange={(e) => setState({...state, budget: Number(e.target.value)})}
                className="mt-2 text-lg border-amber-300 focus:border-amber-500"
                placeholder="Enter your budget"
              />
            </div>
          </div>
          
          <Button
            onClick={calculatePrice}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-6"
            disabled={totalLinearFeet === 0}
          >
            <DollarSign className="mr-2 h-5 w-5" />
            Calculate Quote
          </Button>
          
          {quote !== null && (
            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Your Project's Estimated Price</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Badge variant="secondary" className="text-xl p-3 mb-2">
                    Total: {formatPrice(quote)}
                  </Badge>
                  {overBudgetAmount > 0 && (
                    <div className="mt-2">
                      <Badge variant="destructive" className="text-lg p-2">
                        {formatPrice(overBudgetAmount)} over budget
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {showBudgetOptions && quote !== null && (
            <BudgetOptions originalPrice={quote} budget={state.budget} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FenceCalculator;