import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ImageWithSkeletonProps extends HTMLMotionProps<"img"> {
    containerClassName?: string;
}

export default function ImageWithSkeleton({
    className,
    containerClassName,
    alt,
    ...props
}: ImageWithSkeletonProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            {isLoading && (
                <Skeleton className="absolute inset-0 w-full h-full" />
            )}
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                onLoad={() => setIsLoading(false)}
                className={cn("w-full h-full object-cover", className)}
                alt={alt}
                {...props}
            />
        </div>
    );
}
