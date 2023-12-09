import { RouteProps } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { CatalogPage } from "../../pages/CatalogPage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  REGISTRATION = "registration",
  CATALOG = "catalog",
  // ABOUT = 'about',
  // PROFILE = 'profile',
  // ARTICLES = 'articles',
  // ARTICLE_DETAILS = 'article_details',
  // // last
  // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.REGISTRATION]: "/registration",
  [AppRoutes.CATALOG]: "/catalog",
  // [AppRoutes.PROFILE]: '/profile/', // + :id
  // [AppRoutes.ARTICLES]: '/articles',
  // [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  // // последний
  // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.REGISTRATION]: {
    path: RoutePath.registration,
    element: <RegistrationPage />,
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <CatalogPage />,
  },
  // [AppRoutes.ABOUT]: {
  //     path: RoutePath.about,
  //     element: <AboutPage />,
  // },
  // [AppRoutes.PROFILE]: {
  //     path: `${RoutePath.profile}:id`,
  //     element: <ProfilePage />,
  //     authOnly: true,
  // },
  // [AppRoutes.ARTICLES]: {
  //     path: RoutePath.articles,
  //     element: <ArticlesPage />,
  //     authOnly: true,
  // },
  // [AppRoutes.ARTICLE_DETAILS]: {
  //     path: `${RoutePath.article_details}:id`,
  //     element: <ArticleDetailsPage />,
  //     authOnly: true,
  // },
  // // last
  // [AppRoutes.NOT_FOUND]: {
  //     path: RoutePath.not_found,
  //     element: <NotFoundPage />,
  // },
};
