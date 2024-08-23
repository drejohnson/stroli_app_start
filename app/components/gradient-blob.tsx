import { cn } from "@/lib/utils";

interface BlobProps {
  fromColor: string;
  toColor: string;
  viaColor?: string;
  className?: string;
}

const GradientBlob: React.FC<BlobProps> = ({ fromColor, toColor, viaColor, className }) => {
  return (
    <div className="absolute inset-0 overflow-x-clip -z-10 pointer-events-none">
    <div 
      className={cn(
        "absolute rounded-full filter blur-3xl bg-gradient-to-r",
        fromColor,
        viaColor,
        toColor,
        className
      )}></div>
    </div>
  );
};

export default GradientBlob