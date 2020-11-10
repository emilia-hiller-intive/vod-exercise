import { ApiDataProcessorType } from "./types";
import { STATUS_CODE } from "../../consts";

export const isStatusSuccessful = (status: number): boolean =>
  status >= STATUS_CODE.OK && status <= STATUS_CODE.NOT_MODIFIED;

export const getProcessed = (
  data: any,
  processData?: ApiDataProcessorType
): any => processData?.(data) || data;
