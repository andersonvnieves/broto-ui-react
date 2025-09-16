import { cva, type VariantProps } from "class-variance-authority";

const input = cva(
    "font-sans rounded-md font-medium transition-colors border",
    {
        variants: {
            variant: {
                primary: "bg-secondary-bg text-text-primary hover:bg-secondary-hover active:bg-secondary-active border-secondary-border",
            },
            size: {
                sm: "px-2 py-1 text-sm",
                md: "px-[12px] py-[8px] text-base",
                lg: "px-6 py-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface InputProps
    extends VariantProps<typeof input> {
    placeholder: string;
    onClick?: () => void;
}

export const Input = ({ placeholder, variant, size, onClick, ...props }: InputProps) => {
    return (
        <input
            type="text"
            className={input({ variant, size })}
            onClick={onClick}
            placeholder={placeholder}
            {...props}
        />
    );
};
