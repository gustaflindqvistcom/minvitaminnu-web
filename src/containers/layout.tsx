import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../compontents/header';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
        };
    }

    render() {
        const {
            children,
        } = this.props;
        return (
            <div>
                <Header siteTitle="Min Vitamin" />
                <div className="container mx-auto bg-yellow-200">

                    <>
                        <>{children}</>
                    </>
                </div>
            </div>
        );
    }
}

export default Layout;
