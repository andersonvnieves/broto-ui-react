import type {ReactNode} from "react";

export interface PanelProps {
    children?: ReactNode;
}
export const Panel = ({ children, ...props }: PanelProps) => {
    return (
        <section className="p-[8px] rounded-[15px] bg-surface-highlight-light" {...props}>
            {children}
        </section>
    );
};
