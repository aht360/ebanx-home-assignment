import { AccountController } from "../controller/accountController.ts";
import { AccountModel } from "../models/accountModel.ts";
import { AccountService } from "../services/accountService.ts";

let accountModel: AccountModel | null = null;
export const getAccountModel = () => {
  if (!accountModel) {
    accountModel = new AccountModel();
  }
  return accountModel;
};

let accountService: AccountService | null = null;
export const getAccountService = () => {
  if (!accountService) {
    accountService = new AccountService(getAccountModel());
  }
  return accountService;
};

let accountController: AccountController | null = null;
export const getAccountController = () => {
  if (!accountController) {
    accountController = new AccountController(getAccountService());
  }
  return accountController;
};
