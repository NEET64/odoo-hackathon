import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

const ReportCrime = () => {
  const form = useForm({
    // resolver: zodResolver(crimeSchema),
    defaultValues: {
      typeOfCrime: "",
      location: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
      image: "",
      description: "",
    },
  });

  const navigate = useNavigate();
  const fileRef = form.register("file");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (values) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      values.coordinates.latitude = latitude;
      values.coordinates.longitude = longitude;
    });
    console.log(values);
    // setIsLoading(true);
    // let promise = axios.post(
    //   `${import.meta.env.VITE_BACKEND_URL}/api/crime`,
    //   values,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       // Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   }
    // );

    // toast.promise(promise, {
    //   loading: "Loading...",
    //   success: (response) => {
    //     navigate("/crime");
    //     return response.data.message;
    //   },
    //   error: (error) => error.response.data.message,
    //   finally: () => setIsLoading(false),
    // });
  };

  return (
    <div className="grid gap-4 p-4 mt-16 sm:px-6 md:gap-8">
      <Card className="w-full max-w-xl mx-auto rounded-lg shadow-md overflow-hidden">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader className="border-b border-slate-200 dark:border-zinc-800">
              <CardTitle>Report Crime</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-3 py-5">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => {
                  return (
                    <FormItem className="space-y-2 sm:col-span-2">
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          placeholder="Book Thumbnail"
                          {...fileRef}
                          onChange={(event) => {
                            field.onChange(
                              event.target?.files?.[0] ?? undefined
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="typeOfCrime"
                render={({ field }) => (
                  <FormItem className="space-y-2 ">
                    <FormLabel className="text-left">Type of Crime</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
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
                        <SelectItem value="drug-possession">
                          Drug Possession
                        </SelectItem>
                        <SelectItem value="prostitution">
                          Prostitution
                        </SelectItem>
                        <SelectItem value="embezzlement">
                          Embezzlement
                        </SelectItem>
                        <SelectItem value="stalking">Stalking</SelectItem>
                        <SelectItem value="animal-cruelty">
                          Animal Cruelty
                        </SelectItem>
                        <SelectItem value="homicide">Homicide</SelectItem>
                        <SelectItem value="forgery">Forgery</SelectItem>
                        <SelectItem value="child-abuse">Child Abuse</SelectItem>
                        <SelectItem value="identity-theft">
                          Identity Theft
                        </SelectItem>
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
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="space-y-2 sm:col-span-3">
                    <FormLabel className="text-left">Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Location of the Crime" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem className="space-y-2 sm:col-span-2">
                    <FormLabel className="text-left">Author</FormLabel>
                    <FormControl>
                      <Input placeholder="Author of the Book" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              {/* <FormField
                control={form.control}
                name="year_published"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="text-left">Year</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Year Published"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="space-y-2 sm:col-span-3">
                    <FormLabel className="text-left">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter a brief summary of the book..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="border-t border-slate-200 px-6 py-4 dark:border-zinc-800">
              {isLoading ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default ReportCrime;
