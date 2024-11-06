import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface ProjectCardProps {
    title: string;
    headerDesc?: string;
    content: string;
    footer?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, headerDesc = '', content, footer = ''}) => {

    return (
        <div className="w-52 h-52 flex items-start justify-center">
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{headerDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{content}</p>
            </CardContent>
            <CardFooter>
              <p>{footer}</p>
            </CardFooter>
          </Card>
        </div>
    )
};

export default ProjectCard;