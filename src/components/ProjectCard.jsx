import React from "react";

// Define the props interface for type safety and clarity
export const ProjectCard = React.forwardRef(({ 
  className, 
  imgSrc, 
  title, 
  description, 
  link, 
  linkText = "View Project", 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white text-gray-900 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl ${className || ''}`}
      {...props}
    >
      {/* Card Image Section */}
      <div className="aspect-video overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Card Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-green-600">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-gray-600">{description}</p>
        
        {/* Card Link/CTA */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-600 transition-all duration-300 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {linkText}
          <svg className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;

