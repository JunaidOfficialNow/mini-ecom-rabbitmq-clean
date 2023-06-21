export interface IUserCreateListenerMessenger {
  execute(data: any): Promise<void>;
}