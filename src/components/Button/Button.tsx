import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
    "font-sans rounded-md font-medium transition-colors border",
    {
        variants: {
            variant: {
                primary: "bg-primary-bg text-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-border",
                secondary: "bg-secondary-bg text-text-primary hover:bg-secondary-hover active:bg-secondary-active border-secondary-border",
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

export interface ButtonProps
    extends VariantProps<typeof button> {
    label: string;
    onClick?: () => void;
}

export const Button = ({ label, variant, size, onClick, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={button({ variant, size })}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
