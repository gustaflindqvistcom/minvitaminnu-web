import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";

import Layout from "../containers/layout";
import "./styles/layout.css"

const page = data.page || data.route.page;


const Page = (props) => {
    const { data, errors } = props;

    return (
        <Layout>
            <div className="pt-24">{page.title}</div>
        </Layout>
    );

}
export default Page;