
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Clock } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/home/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/home/ui/popover";
import { Button } from "@/components/home/ui/button";
import { Label } from "@/components/home/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/home/ui/radio-group";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/home/ui/separator";

interface CalendarSelectorProps {
  date1: Date | undefined;
  setDate1: (date: Date | undefined) => void;
  pref1: number;
  setPref1: (pref: number) => void;
  date2: Date | undefined;
  setDate2: (date: Date | undefined) => void;
  pref2: number;
  setPref2: (pref: number) => void;
}

const CalendarSelector = ({ 
  date1, 
  setDate1,
  pref1,
  setPref1, 
  date2,
  setDate2,
  pref2,
  setPref2
}: CalendarSelectorProps) => {
  const isPastDay = (day: Date) => {
    return day < new Date(new Date().setHours(0, 0, 0, 0));
  };
  
  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };
  
  return (
    <div className="space-y-6">
      {/* First Date Selection */}
      <div className="space-y-4 border border-border rounded-md p-4">
        <h3 className="text-md font-medium">Premier choix de date</h3>
        <div>
          <Label htmlFor="date1">Date du rendez-vous</Label>
          <div className="mt-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className={cn(
                    "w-full justify-start text-left font-normal", 
                    !date1 && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date1 ? format(date1, "dd MMMM yyyy", {
                    locale: fr
                  }) : <span>Sélectionnez une date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent 
                  mode="single" 
                  selected={date1} 
                  onSelect={setDate1} 
                  disabled={date => isPastDay(date) || isWeekend(date)} 
                  locale={fr} 
                  className="pointer-events-auto" 
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {date1 && (
          <div className="space-y-2">
            <Label>Préférence horaire</Label>
            <RadioGroup 
              value={pref1.toString()} 
              onValueChange={(val) => setPref1(parseInt(val))} 
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center w-full">
                <RadioGroupItem value="1" id="matin1" className="peer sr-only" />
                <Label 
                  htmlFor="matin1" 
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer w-full text-center h-full"
                >
                  <Clock className="mb-2 h-5 w-5" />
                  <span className="font-medium">Matin</span>
                  <span className="text-xs text-muted-foreground">9h - 12h</span>
                </Label>
              </div>
              
              <div className="flex items-center w-full">
                <RadioGroupItem value="2" id="apres-midi1" className="peer sr-only" />
                <Label 
                  htmlFor="apres-midi1" 
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer w-full text-center h-full"
                >
                  <Clock className="mb-2 h-5 w-5" />
                  <span className="font-medium">Après-midi</span>
                  <span className="text-xs text-muted-foreground">14h - 17h</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}
      </div>

      {/* Second Date Selection */}
      <div className="space-y-4 border border-border rounded-md p-4">
        <h3 className="text-md font-medium">Second choix de date</h3>
        <div>
          <Label htmlFor="date2">Date alternative</Label>
          <div className="mt-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className={cn(
                    "w-full justify-start text-left font-normal", 
                    !date2 && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date2 ? format(date2, "dd MMMM yyyy", {
                    locale: fr
                  }) : <span>Sélectionnez une date alternative</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent 
                  mode="single" 
                  selected={date2} 
                  onSelect={setDate2} 
                  disabled={date => isPastDay(date) || isWeekend(date)} 
                  locale={fr} 
                  className="pointer-events-auto" 
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {date2 && (
          <div className="space-y-2">
            <Label>Préférence horaire</Label>
            <RadioGroup 
              value={pref2.toString()} 
              onValueChange={(val) => setPref2(parseInt(val))} 
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center w-full">
                <RadioGroupItem value="1" id="matin2" className="peer sr-only" />
                <Label 
                  htmlFor="matin2" 
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer w-full text-center h-full"
                >
                  <Clock className="mb-2 h-5 w-5" />
                  <span className="font-medium">Matin</span>
                  <span className="text-xs text-muted-foreground">9h - 12h</span>
                </Label>
              </div>
              
              <div className="flex items-center w-full">
                <RadioGroupItem value="2" id="apres-midi2" className="peer sr-only" />
                <Label 
                  htmlFor="apres-midi2" 
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer w-full text-center h-full"
                >
                  <Clock className="mb-2 h-5 w-5" />
                  <span className="font-medium">Après-midi</span>
                  <span className="text-xs text-muted-foreground">14h - 17h</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarSelector;
