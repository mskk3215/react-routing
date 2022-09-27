import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = () => {
  //urlパラメータ取得
  const { id } = useParams();
  //useLOcationというhooksで、queryの情報を分割代入で取得。
  const { search } = useLocation();
  //URLSearchParamsはqueryparameterを便利に使えるメソッドを提供している
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
