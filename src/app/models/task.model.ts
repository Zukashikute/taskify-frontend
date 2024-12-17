export class Task {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public status: 'pending' | 'in-progress' | 'completed',
    public dueDate: string
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueDate = dueDate;
  }
}
