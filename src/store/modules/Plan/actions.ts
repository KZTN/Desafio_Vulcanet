import { action } from "typesafe-actions";
import { PlansActions } from "./types";

export const LoadRequest = (id: number, type: string) =>
  action(PlansActions.LOAD_REQUEST, { id, type });
export const LoadSucess = (data: string[]) =>
  action(PlansActions.LOAD_SUCCESS, data);
export const LoadFailure = (error: string) =>
  action(PlansActions.LOAD_FAILURE, error);
