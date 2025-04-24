import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function PageWrapper({ children }: Props){
    return (
        <div className = "min-h-screen bg-gray-50 text-gray-900 p-4">
            {children}
        </div>
    )
}