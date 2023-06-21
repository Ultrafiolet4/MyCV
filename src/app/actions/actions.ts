export class ChangeName {
  static readonly type = '[Name] Change';

  constructor(public payload: string) {}
}

export class DeleteName {
  static readonly type = '[Name] Delete';
}
