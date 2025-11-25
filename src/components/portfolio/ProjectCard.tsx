import Link from "next/link";
import Image from "next/image";
import { ThreeDPerspectiveCard } from "@/components/ui/3d-perspective-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  tags?: string[];
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectLink,
  tags,
}: ProjectCardProps) => {
  return (
    <ThreeDPerspectiveCard className="w-full h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={projectLink} className="block w-full h-full group">
        <div className="flex flex-col h-full p-4 bg-card text-card-foreground">
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground flex-grow mb-4 line-clamp-3">
            {description}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <Button className="mt-auto w-full">
            View Project
          </Button>
        </div>
      </Link>
    </ThreeDPerspectiveCard>
  );
};
