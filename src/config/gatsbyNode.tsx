import { CreatePagesArgs, CreateResolversArgs, CreateSchemaCustomizationArgs } from "gatsby";
import { GatsbyNode } from "gatsby";


import { createBlogPostPage } from "./build/createBlogPostPage";

export const createPages: GatsbyNode["createPages"] = async (
    args: CreatePagesArgs
) => {
    await createBlogPostPage("/blogg", graphql, actions, reporter);
};