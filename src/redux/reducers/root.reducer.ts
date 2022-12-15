import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import skillReducer from "./skill.reducer";
import contactReducer from "./contact.reducer";
import blogReducer from "./blog.reducer";
import categoryReducer from "./category.reducer";
import mediaReducer from "./media.reducer";
import organizationReducer from "./organization.reducer";
import projectReducer from "./project.reducer";
import subCategoryReducer from "./subCategory.reducer";
import loadingReducer from "./loading.reducer";
import drawerReducer from "./drawer.reducer";
import treeReducer from "./tree.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    skill: skillReducer,
    contact: contactReducer,
    blog: blogReducer,
    category: categoryReducer,
    media: mediaReducer,
    organization: organizationReducer,
    project: projectReducer,
    subCategory: subCategoryReducer,
    loading: loadingReducer,
    drawer: drawerReducer,
    tree: treeReducer,
});
export type AuthState = ReturnType<typeof rootReducer>;
export type SkillState = ReturnType<typeof rootReducer>;
export type ContactState = ReturnType<typeof rootReducer>;
export type BlogState = ReturnType<typeof rootReducer>;
export type CategoryState = ReturnType<typeof rootReducer>;
export type MediaState = ReturnType<typeof rootReducer>;
export type OrganizationState = ReturnType<typeof rootReducer>;
export type ProjectState = ReturnType<typeof rootReducer>;
export type SubCategoryState = ReturnType<typeof rootReducer>;
export type LoadingState = ReturnType<typeof rootReducer>;
export type DrawerState = ReturnType<typeof rootReducer>;
export type TreeState = ReturnType<typeof rootReducer>;

export default rootReducer;