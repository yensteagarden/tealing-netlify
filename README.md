# 茶靈語解碼 Netlify 部署指南

## 部署步驟

1. 建立 GitHub Repository，將本專案程式碼上傳。

2. 註冊或登入 [Netlify](https://www.netlify.com/) 帳號。

3. 在 Netlify 建立新網站，選擇「Import from Git」並連結你的 GitHub Repo。

4. 在 Netlify 網站設定 > Build & Deploy > Environment 中新增環境變數：  
   - 名稱：OPENAI_API_KEY  
   - 值：你的 OpenAI API 金鑰

5. Build command 留空或填入適合的指令（通常無需填，因為沒有編譯步驟）。

6. Publish directory 設為根目錄（/）。

7. 部署完成後，Netlify 會提供你的網站網址。

8. 你可以使用以下 iframe 代碼，將此功能嵌入到你主網站中：

```html
<iframe src="你的Netlify網址" style="border:none; width:100%; height:600px;"></iframe>
