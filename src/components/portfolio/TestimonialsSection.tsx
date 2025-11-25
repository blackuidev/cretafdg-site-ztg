import * as React from "react";
import { cn } from "@/components/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO, Tech Solutions",
    quote:
      "The UI/UX design provided was exceptional. It transformed our product into a user-friendly and aesthetically pleasing experience. Highly recommend!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Jane%20Doe",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Product Manager, Innovate Co.",
    quote:
      "Working with this team was a pleasure. Their attention to detail and ability to capture our vision for the product's interface was outstanding.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=John%20Smith",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Founder, Creative Agency",
    quote:
      "Our website's conversion rates significantly increased after the design overhaul. The user experience is intuitive and beautiful.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Alice%20Johnson",
  },
  {
    id: 4,
    name: "Bob Williams",
    role: "Marketing Director, Global Brands",
    quote:
      "From wireframes to the final polished UI, the process was smooth and collaborative. The end result exceeded our expectations.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Bob%20Williams",
  },
  {
    id: 5,
    name: "Carol White",
    role: "Lead Developer, Software Corp.",
    quote:
      "The designs were not only visually stunning but also incredibly well-structured, making implementation a breeze for our development team.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Carol%20White",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from businesses and individuals who have experienced our
              exceptional UI/UX design.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3 p-2"
              >
                <Card className="h-full flex flex-col justify-between shadow-lg dark:bg-gray-800">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
