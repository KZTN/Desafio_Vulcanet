import { action } from "typesafe-actions";
import { CartActions } from "./types";

export const ChoosePlan = (data: String[], type: string) =>
  action(CartActions.CHOOSE_PLAN, { data, type });

export const UpdateAttendants = (amount: number, cost: number) =>
  action(CartActions.UPDATE_ATTENDANTS, { amount, cost });
