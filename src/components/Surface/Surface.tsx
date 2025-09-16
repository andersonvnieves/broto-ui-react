import type {ReactNode} from "react";

export interface SurfaceProps {
    children?: ReactNode;
}
export const Surface = ({ children, ...props }: SurfaceProps) => {
    return (
        <main className="p-[20px] rounded-[15px] bg-surface-base-light border border-surface-border" {...props}>
            {children}
        </main>
    );
};
