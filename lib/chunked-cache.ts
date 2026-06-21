import { ChunkedExcelProcessor } from "./chunked-excel-processor"

export const chunkedProcessorCache = new Map<string, ChunkedExcelProcessor>()
export const chunkedRecommendationCache = new Map<string, any[]>()
