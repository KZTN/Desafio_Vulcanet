import { action } from "typesafe-actions";
import { CartActions, Plan } from "./types";

export const ChoosePlan = (data: Plan, type: string) =>
  action(CartActions.CHOOSE_PLAN, { data, type });

export const UpdateAttendants = (amount: number, cost: number) =>
  action(CartActions.UPDATE_ATTENDANTS, { amount, cost });

export const ChangePlanType = (type: string) =>
  action(CartActions.CHANGE_PLAN_TYPE, type);
