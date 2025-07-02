import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ruler, Sparkles, Wrench } from 'lucide-react';

const StepHeader = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <Card className="border-2 border-blue-200 bg-blue-50/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg text-blue-800">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              1
            </div>
            <Ruler className="h-5 w-5" />
            Fence Size
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-700">
            Tell us how big your fence is by entering the linear feet for both 6-foot and 8+ foot sections.
          </p>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 bg-green-50/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg text-green-800">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              2
            </div>
            <Sparkles className="h-5 w-5" />
            Cleaning Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-green-700">
            Let us know if your fence needs cleaning before staining for the best results.
          </p>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 bg-orange-50/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg text-orange-800">
            <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              3
            </div>
            <Wrench className="h-5 w-5" />
            Repair Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-orange-700">
            Identify any repairs needed before staining to ensure a professional finish.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepHeader;