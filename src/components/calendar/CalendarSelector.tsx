
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Clock } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/home/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/home/ui/popover";
import { Button } from "@/components/home/ui/button";
import { Label } from "@/components/home/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/home/ui/radio-group";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface CalendarSelectorProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  timePreference: string;
  setTimePreference: (time: string) => void;
}

const CalendarSelector = ({ 
  date, 
  setDate, 
  timePreference, 
  setTimePreference 
}: CalendarSelectorProps) => {
  const isPastDay = (day: Date) => {
    return day < new Date(new Date().setHours(0, 0, 0, 0));
  };
  
  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };
  
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="date">Date du rendez-vous</Label>
        <div className="mt-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className={cn(
                  "w-full justify-start text-left font-normal", 
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "dd MMMM yyyy", {
                  locale: fr
                }) : <span>Sélectionnez une date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent 
                mode="single" 
                selected={date} 
                onSelect={setDate} 
                disabled={date => isPastDay(date) || isWeekend(date)} 
                locale={fr} 
                className="pointer-events-auto" 
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      {date && (
        <div className="space-y-2">
          <Label>Préférence horaire</Label>
          <RadioGroup 
            value={timePreference} 
            onValueChange={setTimePreference} 
            className="grid grid-cols-2 gap-4 pt-2"
          >
            <div className="flex items-center w-full">
              <RadioGroupItem value="Matin" id="matin" className="peer sr-only" />
              <Label 
                htmlFor="matin" 
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer w-full text-center h-full"
              >
                <Clock className="mb-2 h-5 w-5" />
                <span className="font-medium">Matin</span>
                <span className="text-xs text-muted-foreground">9h - 12h</span>
              </Label>
            </div>
            
            <div className="flex items-center w-full">
              <RadioGroupItem value="Après-midi" id="apres-midi" className="peer sr-only" />
              <Label 
                htmlFor="apres-midi" 
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
  );
};

export default CalendarSelector;
