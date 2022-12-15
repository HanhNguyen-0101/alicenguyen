import _ from "lodash";
import { ISkillModel } from "../types/skill.type";

class SkillModel implements ISkillModel {
  public id: string;
  public name: string;
  public description: string;
  public rate: number;

  constructor(id: string | null, name: string | null, description: string, rate: number) {
    this.id = id || "";
    this.name = name || "";
    this.description = description || "";
    this.rate = rate || 0;
  }

  // public subscribe(onChange) {
  //   this.onChanges.push(onChange);
  // }

  // public inform() {
  //   Utils.store(this.key, this.todos);
  //   this.onChanges.forEach(function (cb) { cb(); });
  // }

  // public addTodo(title : string) {
  //   this.todos = this.todos.concat({
  //     id: Utils.uuid(),
  //     title: title,
  //     completed: false
  //   });

  //   this.inform();
  // }

  // public toggleAll(checked : Boolean) {
  //   // Note: It's usually better to use immutable data structures since they're
  //   // easier to reason about and React works very well with them. That's why
  //   // we use map(), filter() and reduce() everywhere instead of mutating the
  //   // array or todo items themselves.
  //   this.todos = this.todos.map<ITodo>((todo : ITodo) => {
  //     return Utils.extend({}, todo, {completed: checked});
  //   });

  //   this.inform();
  // }

  // public toggle(todoToToggle : ITodo) {
  //   this.todos = this.todos.map<ITodo>((todo : ITodo) => {
  //     return todo !== todoToToggle ?
  //       todo :
  //       Utils.extend({}, todo, {completed: !todo.completed});
  //   });

  //   this.inform();
  // }

  // public destroy(todo : ITodo) {
  //   this.todos = this.todos.filter(function (candidate) {
  //     return candidate !== todo;
  //   });

  //   this.inform();
  // }

  // public save(todoToSave : ITodo, text : string) {
  //   this.todos = this.todos.map(function (todo) {
  //     return todo !== todoToSave ? todo : Utils.extend({}, todo, {title: text});
  //   });

  //   this.inform();
  // }

  // public clearCompleted() {
  //   this.todos = this.todos.filter(function (todo) {
  //     return !todo.completed;
  //   });

  //   this.inform();
  // }
}

export { SkillModel };

const filterSkillsByNameList = (skills: Array<ISkillModel>, nameList: Array<string>) => {
  // return _.filter(
  //   skills,
  //   function (o: ISkillModel) {
  //     return _.includes(nameList, o.name.toLowerCase());
  //   }
  // );
};
export const supportFunction = {
  filterSkillsByNameList,
};
