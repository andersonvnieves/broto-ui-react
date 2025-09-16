import { cva, type VariantProps } from "class-variance-authority";

const card = cva(
    "font-sans rounded-md font-medium transition-colors border",
    {
        variants: {
            variant: {
                primary: "bg-primary-bg text-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-border disabled:bg-primary-inactive",
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

export interface CardProps
    extends VariantProps<typeof card> {
    label: string;
    onClick?: () => void;
}

export const Card = ({ label, variant, size, onClick, ...props }: CardProps) => {
    return (
        <div className={'bg-surface-light rounded-[15px] p-[3px]'}>
            <div className={`bg-surface-highlight p-[12px] rounded-[12px] min-w-[200px] min-h-[150px] border border-surface-border `}>

            </div>
            <div className={'px-[6px] py-[6px]'}>

            </div>
        </div>
    );
};
