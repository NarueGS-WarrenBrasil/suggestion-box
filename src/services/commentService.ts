import suggestionService from "./suggestionService";
export default {
  add: (comments: object[], comment: object, id: number, target: object) => {
    comments.push(comment);
    suggestionService.put(id, target);
  },
};
