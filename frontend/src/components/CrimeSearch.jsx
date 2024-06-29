import { CalendarIcon, Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const CrimeSearch = () => {
  const [location, setLocation] = useState("");
  const [crimeType, setCrimeType] = useState("");
  const [date, setDate] = useState(null);

  return (
    <div className="relative flex-1 grid gap-2 pt-2 mr-2 border-b-2 border-slate-700 pb-2">
      <div className="relative flex-1 flex gap-2">
        <Search className="absolute left-2.5 top-2.5 h-5 w-5 dark:text-zinc-50" />
        <span className="hidden sm:flex absolute right-24">
          <kbd className="pointer-events-none border-slate-200 inline-flex h-6 select-none items-center gap-1 rounded border my-2 px-2 text-[15px] font-medium opacity-100 dark:bg-zinc-800 dark:text-zinc-500 dark:border-zinc-800 ">
            <span className="text-xs">⌘</span>K
          </kbd>
        </span>
        <Input
          id="search"
          type="search"
          placeholder="Location, Address, or Crime"
          className="w-full rounded-lg bg-background pl-10 pr-14"
          onChange={(e) => {
            setLocation(e.target.value.trim());
          }}
        />
        <Button variant="outline">Search</Button>
      </div>

      <div className="flex gap-2">
        <Select onValueChange={(value) => setCrimeType(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a crime type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Crime Type</SelectLabel>
              <SelectItem value="burglary">Burglary</SelectItem>
              <SelectItem value="assault">Assault</SelectItem>
              <SelectItem value="theft">Theft</SelectItem>
              <SelectItem value="vandalism">Vandalism</SelectItem>
              <SelectItem value="hit-and-run">Hit and Run</SelectItem>
              <SelectItem value="arson">Arson</SelectItem>
              <SelectItem value="fraud">Fraud</SelectItem>
              <SelectItem value="shoplifting">Shoplifting</SelectItem>
              <SelectItem value="domestic-violence">
                Domestic Violence
              </SelectItem>
              <SelectItem value="public-intoxication">
                Public Intoxication
              </SelectItem>
              <SelectItem value="cybercrime">Cybercrime</SelectItem>
              <SelectItem value="trespassing">Trespassing</SelectItem>
              <SelectItem value="kidnapping">Kidnapping</SelectItem>
              <SelectItem value="drug-possession">Drug Possession</SelectItem>
              <SelectItem value="prostitution">Prostitution</SelectItem>
              <SelectItem value="embezzlement">Embezzlement</SelectItem>
              <SelectItem value="stalking">Stalking</SelectItem>
              <SelectItem value="animal-cruelty">Animal Cruelty</SelectItem>
              <SelectItem value="homicide">Homicide</SelectItem>
              <SelectItem value="forgery">Forgery</SelectItem>
              <SelectItem value="child-abuse">Child Abuse</SelectItem>
              <SelectItem value="identity-theft">Identity Theft</SelectItem>
              <SelectItem value="harassment">Harassment</SelectItem>
              <SelectItem value="car-theft">Car Theft</SelectItem>
              <SelectItem value="extortion">Extortion</SelectItem>
              <SelectItem value="bribery">Bribery</SelectItem>
              <SelectItem value="hate-crime">Hate Crime</SelectItem>
              <SelectItem value="human-trafficking">
                Human Trafficking
              </SelectItem>
              <SelectItem value="possession-of-illegal-weapons">
                Possession of Illegal Weapons
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CrimeSearch;
