import { cva, type VariantProps } from "class-variance-authority";

const progressBar = cva(
    "h-full transition-all duration-300 rounded-full",
    {
        variants: {
            variant: {
                primary: "bg-primary-base",
                secondary: "bg-blue-500",
            }
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export interface ProgressBarProps
    extends VariantProps<typeof progressBar> {
    percentage: number;
}

export const ProgressBar = ({ percentage, variant, ...props }: ProgressBarProps) => {
    const barWidth = Math.min(Math.max((percentage / 100) * 100, 0), 100);
    return (
        <div className="w-full h-[6px] bg-surface-active rounded-full overflow-hidden" {...props}>
            <div
                className={progressBar({ variant })}
                style={{ width: `${barWidth}%` }}
            />
        </div>
    );
};
