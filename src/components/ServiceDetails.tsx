import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Droplets, Wrench, Palette } from 'lucide-react';

const ServiceDetails = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="border-green-200 bg-green-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-green-800 text-lg">
            <Shield className="h-5 w-5" />
            UV Protection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-green-700">
            2 coats of premium UV-resistant stain for maximum protection and longevity.
          </p>
          <Badge variant="secondary" className="mt-2">
            $9-10/linear ft
          </Badge>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-blue-800 text-lg">
            <Droplets className="h-5 w-5" />
            Soft Washing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-700">
            Professional cleaning to remove mold, mildew, and stains for optimal adhesion.
          </p>
          <Badge variant="secondary" className="mt-2">
            $3-4/linear ft
          </Badge>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-orange-800 text-lg">
            <Wrench className="h-5 w-5" />
            Repairs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-orange-700">
            Professional repair services to restore your fence before staining.
          </p>
          <div className="space-y-1 mt-2">
            <Badge variant="outline" className="text-xs">Minor: $250</Badge>
            <Badge variant="outline" className="text-xs">Major: $750</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-purple-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-purple-800 text-lg">
            <Palette className="h-5 w-5" />
            Stain Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-purple-700">
            Choose from transparent or solid color stains in your preferred color.
          </p>
          <Badge variant="secondary" className="mt-2">
            Waterproof
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDetails;