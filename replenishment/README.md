# Vue.js 商品型錄頁
[完整頁面連結 ![external link](https://raw.githubusercontent.com/google/material-design-icons/master/content/1x_web/ic_link_black_18dp.png)](http://www.rghknives.com.tw/static/replenishment/)

### ![Clip](https://raw.githubusercontent.com/google/material-design-icons/master/editor/1x_web/ic_attach_file_black_24dp.png) 目標
需求端希望將網站內具特定屬性商品（設定有剛補貨屬性），製作成單一頁面，消費者便於瀏覽。
<hr>

### ![Pen](https://raw.githubusercontent.com/google/material-design-icons/master/image/1x_web/ic_edit_black_24dp.png) 開發重點

(以下非真實頁面檔案結構)

##### [api.php](https://github.com/justinpan/rgh-work/blob/master/replenishment/api.php) →  用 PHP 寫伺服器端商品資料 API。
+ 設定 header 型態：
```PHP
header('Content-Type: application/json');
```
+ 取得 url 變數，控制商品資料的時間區間，或控制商品筆書。
+ 從 DB 查詢符合時間、筆書區間，排除售完/下架條件商品資料。
+ 以 JSON 格式回傳：
```PHP
echo json_encode($dbdata, JSON_HEX_QUOT | JSON_HEX_TAG);
```

##### [app.js](https://github.com/justinpan/rgh-work/blob/master/replenishment/app.js) → Vue.js 接 API 資料迭代出頁面。
+ 在 mounted() hook 用 [axios](https://github.com/axios/axios) 取得 api 資料，同時計算資料筆數，並
+ 由於品牌資料在其他 DB table 中，為便利作業，預先將品牌處理成一個陣列，帶入 id 數值便可轉換出字串。[原始碼 ➠](https://github.com/justinpan/rgh-work/blob/b82b2e0eafff019f923da06c56b2696ee76bfd13/replenishment/app.js#L19)
+ 以 CDN 方式在頁面內載入 [Vue-Lazyload](https://www.npmjs.com/package/vue-lazyload)，並在 Vue 內引用：
```JS
  Vue.use(VueLazyload, {
    preLoad: 1.5,
    error: '/static/img/img-err-250.jpg',
    loading: '/static/img/img-err-250.jpg',
    attempt: 1
  });
```