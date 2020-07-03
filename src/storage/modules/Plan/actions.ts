import { action } from "typesafe-actions";
import { PlansActions } from "./types";

export const LoadRequest = (literal_number: number) =>
  action(PlansActions.LOAD_REQUEST, literal_number);
export const LoadSucess = (data: string[]) =>
  action(PlansActions.LOAD_SUCCESS, data);
export const LoadFailure = (error: string) =>
  action(PlansActions.LOAD_FAILURE, error);
