---
title: "如何使用 dub.sh 創建簡短的網址"
seo: "使用dub創建短網址"
author: "Peter yang"
info: "雙龍體育CEO"
img: "/1D7F9E91-14B0-4914-9FBD-0E46CE340A78.png"
category: "blog"
date: "2024-01-7"
bannerImage: "/blog.jpg"
tags:
    - blog
---
如果你經常需要在網上分享一些長長的網址，你可能會覺得很麻煩，因為它們不方便複製、傳送或記憶。有沒有一種方法可以把這些網址變得更簡潔、更美觀呢？答案是有的，那就是使用連結縮短器。連結縮短器是一種服務，它可以把一個長網址轉換成一個短網址，並且保持原網址的功能。這樣，你就可以更容易地分享你的網址，而且還可以獲得一些額外的好處，比如統計網址的點擊數、設置網址的有效期限、生成二維碼等等。
![dub](https://github.com/dubinc/dub/assets/28986134/8f70a87f-4f13-426a-9785-a47f77433edd)
在這篇文章中，我要介紹一個開源的連結縮短器，它叫做 dub.sh。dub.sh 是一個基於 Vercel Edge Functions 和 Upstash Redis 構建的連結縮短器，它具有以下的特點
- 1.內置分析：dub.sh 為你的網址提供強大的分析儀表板，包括地理位置、設備和瀏覽器信息。
- 2.自定義域名：你可以在 dub.sh 上輕鬆配置自定義域名，只需將 A/CNAME 記錄添加到你的 DNS 提供商即可。這是基於 Vercel Domains API 構建的。
- 3.QR Code 生成器：你可以輕鬆生成和自定義 QR Code，它們可以用於傳單、海報、簡報等等。
- 4.OG Image Proxy：你可以在你的目標網址前添加一個自定義的 OG Image。機器人如 Twitter/Facebook 會看到這個圖片，而用戶會被重定向到你的目標網址。

## 如何部署你自己的 dub.sh [.text-3xl .font-extrabold .leading-tight .text-gray-900 .lg:mb-6 .lg:text-4xl .dark:text-white]

你可以部署你自己的 dub.sh 托管版本，以獲得更大的隱私和控制。只需點擊[這個連結](https://ssport.eu.org/dub)，就可以在 Vercel 部署一個隨時可用的 dub.sh 版本。你需要有一個 Vercel 的帳號，並且授權 dub.sh 存取你的帳號。然後，你可以選擇你的專案名稱、部署區域、環境變數等設置。部署完成後，你就可以訪問你的 dub.sh 網站，並且開始創建短網址了。

## 如何使用 dub.sh 創建短網址 [.text-3xl .font-extrabold .leading-tight .text-gray-900 .lg:mb-6 .lg:text-4xl .dark:text-white]

使用 dub.sh 創建短網址非常簡單，只需幾個步驟：

- 1.登錄你的 dub.sh 帳號，或者使用 電子郵件 或 Google 帳號登錄。
- 2.登入完後你會訪問welcome頁面，可以選擇使用自己的網址或dub的網址。
- 3.你會看到一個新的短網址，它的格式是 https://your-domain/key或dub.Sh/key，其中 your-domain 是你的 dub.sh 域名，key 是一個隨機生成的字串。你可以複製這個網址，或者點擊「Copy」按鈕。
- 4.你也可以點擊「Edit」按鈕，來自定義你的短網址。你可以修改 key 的值，或者添加一個密碼、一個有效期限、一個 OG Image 等等。
- 5.你可以點擊「Stats」按鈕，來查看你的短網址的分析數據，包括總點擊數、地理位置分佈、設備和瀏覽器統計等等。
- 6.你可以點擊「QR Code」按鈕，來生成一個二維碼，它包含你的短網址。你可以下載或分享這個二維碼，或者自定義它的顏色、大小、邊距等等。

## 結語 [.text-3xl .font-extrabold .leading-tight .text-gray-900 .lg:mb-6 .lg:text-4xl .dark:text-white]

dub.sh 是一個開源的連結縮短器，它可以幫助你創建簡短的網址，並且提供內置的分析功能和自定義域名。你可以部署你自己的 dub.sh 版本，或者使用官方的 dub.sh 服務。使用 dub.sh 創建短網址非常簡單，只需幾個步驟，你就可以享受更方便、更美觀、更有趣的網址分享體驗了。如果你對 dub.sh 有興趣，你可以訪問它的[官方網站](https://dub.co)，或者查看它的[源代碼](https://ssport.eu.org/dub)。希望這篇文章對你有所幫助，謝謝你的閱讀。
