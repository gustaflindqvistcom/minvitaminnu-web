// import { ToolNavigationItem } from "../navigation/ToolNavigationItem";
// import { LinkInfo } from "./LinkInfo";
// import { SanityNode } from "../../config/build/models/node";
// import { GatsbyPageContext } from "../pages/GatsbyPageContext";
// import { PageProps } from "gatsby";
// import { SanityImageSourceExt } from "./SanityImageSourceExt";
// import { RouteInfo } from "./RouteInfo";

export class SiteSettings {
    title: string;
    // logoImage: SanityImageSourceExt;
    // mainNavigation: {
    //     title: string;
    //     color: string;
    //     firstLevelItems: {
    //         title: string;
    //         subitems: {
    //             title: string;
    //             description?: string;
    //             link: SanityNode;
    //         }[];
    //     }[];
    // }[];
    // toolNavigation: ToolNavigationItem[];
    // promotedLinks: {
    //     title: string;
    //     description?: string;
    //     link: SanityNode & {
    //         slug: {
    //             current: string;
    //         };
    //     };
    //     icon: string;
    // }[];
    // markets: {
    //     title: string;
    //     url: string;
    //     flagId: string;
    // }[];
    // footer: {
    //     links: LinkInfo[];
    //     linkSections: {
    //         links: LinkInfo[];
    //     }[];
    //     policyLinks: LinkInfo[];
    //     contactCta: LinkInfo;
    //     marketButtonTitle: string;
    //     illustration?: SanityImageSourceExt;
    // };
    // siteContact: {
    //     phoneNumber: string;
    //     visitorAddress: string;
    //     socialMedia: {
    //         facebook: string;
    //         linkedin: string;
    //         twitter: string;
    //         youtube: string;
    //     };
    // };
    // integrationSettings: {
    //     stockTicker: {
    //         active: boolean;
    //         tickerId: string;
    //         url: string;
    //         accessToken: string;
    //     };
    // };
    // routeInfo: RouteInfo;
}

// export type PagePropsBase<DataType, PageContextType = GatsbyPageContext> = 
//     PageProps<
//         DataType & {
//             siteSettings: SiteSettings;
//         }, 
//         PageContextType
//     >;