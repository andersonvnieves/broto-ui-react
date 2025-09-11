import { cva, type VariantProps } from "class-variance-authority";
import { DynamicIcon } from 'lucide-react/dynamic';

const iconButton = cva(
    "font-sans rounded-md font-medium transition-colors border",
    {
        variants: {
            variant: {
                primary: "bg-primary-bg text-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-border",
                secondary: "bg-secondary-bg text-text-primary hover:bg-secondary-hover active:bg-secondary-active border-secondary-border",
            },
            size: {
                sm: "p-1 text-sm",
                md: "p-[8px] text-base",
                lg: "p-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

const iconStyles = cva("shrink-0", {
    variants: {
        variant: {
            primary: "text-primary-base",
            secondary: "text-text-primary",
        },
        size: {
            sm: "w-4 h-4",
            md: "w-5 h-5",
            lg: "w-6 h-6",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

export interface IconButtonProps
    extends VariantProps<typeof iconButton> {
    icon: string;
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const IconButton = ({ icon, variant, size, onClick, ...props }: IconButtonProps) => {
    return (
        <button
            type="button"
            className={iconButton({ variant, size })}
            onClick={onClick}
            {...props}
        >
            <DynamicIcon name={icon}  className={iconStyles({ variant, size })} />
        </button>
    );
};
