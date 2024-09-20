import { CanvasNodeLayoutConfig } from "@codeffekt/ce-canvas-nodes";
import { FormRoot } from "@codeffekt/ce-core-data";

export const PROJECT_FORMAT_VERSION = "1.0";

export interface ProjectFormatContext {
    name: string;
    ctime: number;
    mtime: number;
    version: string;
    author: string;
}

export interface ProjectFormat {
    context: ProjectFormatContext;    
    forms: FormRoot[];
    layout: CanvasNodeLayoutConfig[];
}