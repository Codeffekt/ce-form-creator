import { CanvasLayoutConfig } from "@codeffekt/ce-canvas-nodes";
import { FormRoot, IndexType } from "@codeffekt/ce-core-data";

export const PROJECT_FORMAT_VERSION = "1.0";

export interface ProjectFormatContext {
    name: string;
    ctime: number;
    mtime: number;
    version: string;
    author: string;
    entryPoint?: IndexType;
}

export interface ProjectFormat {
    context: ProjectFormatContext;    
    forms: FormRoot[];
    layout: CanvasLayoutConfig;   
}