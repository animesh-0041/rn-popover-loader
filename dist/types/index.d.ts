import React from "react";
interface RnPopoverLoaderProps {
    loaderColor?: string;
    loaderSize?: "small" | "large";
    loadingText?: string;
    loadingTextColor?: string;
    showLoader?: boolean;
}
export declare const RnPopoverLoader: React.FC<RnPopoverLoaderProps>;
export default RnPopoverLoader;
