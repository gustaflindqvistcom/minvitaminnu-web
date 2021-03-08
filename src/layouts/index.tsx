import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Helmet from 'react-helmet';
import Header from '../compontents/header';

const Layout = ({ children, data }) => {
    return (
        <div className="space-y-4">
            <div className="container p-8 bg-blue-200">
                <>{children}</>
            </div>
        </div>
    )
}

export default Layout;
