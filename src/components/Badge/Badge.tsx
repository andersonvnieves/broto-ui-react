import { cva, type VariantProps } from "class-variance-authority";

const badge = cva(
    "font-sans rounded-md font-medium border",
    {
        variants: {
            variant: {
                default: "bg-primary-bg text-primary-base border-success-border",
                success: "bg-success-bg text-success-base border-success-border",
            },
            size: {
                sm: "px-2 py-1 text-sm",
                md: "px-[12px] py-[8px] text-base",
                lg: "px-6 py-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "success",
            size: "md",
        },
    }
);

export interface BadgeProps
    extends VariantProps<typeof badge> {
    label: string;
}

export const Badge = ({ label, variant, size }: BadgeProps) => {
    return (
        <button className={badge({ variant, size })} >
            {label}
        </button>
    );
};
