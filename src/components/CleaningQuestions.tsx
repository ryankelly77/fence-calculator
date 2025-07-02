import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Droplets, AlertTriangle } from 'lucide-react';

interface CleaningQuestionsProps {
  needsCleaning: boolean;
  onCleaningChange: (needs: boolean) => void;
}

const CleaningQuestions: React.FC<CleaningQuestionsProps> = ({
  needsCleaning,
  onCleaningChange
}) => {
  const [fenceAge, setFenceAge] = React.useState<string>('');
  const [hasMold, setHasMold] = React.useState(false);
  const [hasStaining, setHasStaining] = React.useState(false);

  React.useEffect(() => {
    // Auto-select cleaning for 2-5 years old
    if (fenceAge === 'medium') {
      onCleaningChange(true);
    }
    // Auto-suggest cleaning based on other conditions
    const shouldClean = fenceAge === 'old' || hasMold || hasStaining;
    if (shouldClean && !needsCleaning) {
      onCleaningChange(true);
    }
  }, [fenceAge, hasMold, hasStaining, needsCleaning, onCleaningChange]);

  return (
    <Card className="border-blue-100 bg-blue-50/30">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg text-blue-800">
          <Droplets className="h-5 w-5" />
          Cleaning Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-base font-medium">How old is your fence?</Label>
          <RadioGroup
            value={fenceAge}
            onValueChange={setFenceAge}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new" id="new-fence" />
              <Label htmlFor="new-fence">Less than 2 years old</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium-fence" />
              <Label htmlFor="medium-fence">2-5 years old</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="old" id="old-fence" />
              <Label htmlFor="old-fence">Over 5 years old</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="mold"
              checked={hasMold}
              onCheckedChange={(checked) => setHasMold(!!checked)}
            />
            <Label htmlFor="mold" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              Has mold, mildew, or green discoloration
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="staining"
              checked={hasStaining}
              onCheckedChange={(checked) => setHasStaining(!!checked)}
            />
            <Label htmlFor="staining" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              Has water stains or irrigation marks
            </Label>
          </div>
        </div>

        <div className="flex items-center space-x-2 p-3 bg-white rounded-lg border">
          <Checkbox
            id="final-cleaning"
            checked={needsCleaning}
            onCheckedChange={(checked) => onCleaningChange(!!checked)}
          />
          <Label htmlFor="final-cleaning" className="font-medium">
            Include professional soft washing
          </Label>
        </div>

        {(hasMold || hasStaining) && (
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Recommendation:</strong> Professional cleaning is highly recommended for optimal stain adhesion and longevity.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CleaningQuestions;