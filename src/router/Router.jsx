import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";

import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

// Routerを別コンポーネントとして切り出す
export const Router = () => {
  return (
    // {/*  レンダリングをSwitchとrouteで行う。
    //   どのpathの場合、どのコンポーネントかをswitchに書いていく */}
    <Switch>
      {/* exactを使用して完全一致の条件をつけてあげる */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        // renderでアロー関数の中にrouteで囲った中身を書くことで短く書くことができる
        // renderにpropsをデフォルトで受け取ってくれている。routing情報が含まれている
        // 厳密に確実にurlのネスト先のページのリンクを定義できる
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
