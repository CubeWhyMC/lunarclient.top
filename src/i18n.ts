import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "nav.home": "Home",
            "nav.download": "Download",
            "nav.weave": "Weave Index",
            "nav.docs": "Docs",
            "nav.sponsor": "Sponsor",
            "nav.analysis": "Analysis",
            "btn.download": "DOWNLOAD",
            "home.subtitle": "Open Source & Free",
            "home.motd1": "Yet Another Lunar Client Launcher",
            "home.motd2": "Make LunarClient Great Again",
            "home.motd3": "Your Next Minecraft Launcher",
            "home.motd4": "The 1# LunarClient Launcher",
            "home.features.title": "Key Features",
            "home.features.electron": "No Electron",
            "home.features.opensource": "Fully Open Source",
            "home.features.ads": "No ads",
            "home.features.weave": "Support Weave",
            "home.features.javaagents": "Support Javaagents",
            "home.features.tiny": "Small file size, less than 20mb",
            "home.features.downloader": "Support multi-threaded downloading",
            "home.features.login": "Support login from your favorite browser",
            "home.features.jre": "One Java, run anywhere",
            "home.features.cross-platform": "Cross Platform",
            "home.features.linux": "Our developers love GNU/Linux, and Celestial has good support for Linux",
            "home.divider1": "Still undecided between using the official launcher or Celestial? Read on!",
            "home.showcase.title": "Showcase",
            "home.showcase.opensource.title": "Free and Open source",
            "home.showcase.opensource": "We love open source, we don't install mandatory telemetry in the launcher",
            "home.showcase.pages.title": "Tiny Pages",
            "home.showcase.pages": "Get rid of unnecessary bloated pages, built for launching games. You just need to double-click the Jar file and it'll starts quickly.",
            "home.showcase.electron.title": "No Electron",
            "home.showcase.electron": "We don't use the bloated Electron.js, we use Kotlin/JVM to write a launcher that is less than 20MB in size",
            "home.showcase.tiny.title": "Lightweight size",
            "home.showcase.tiny": "Celestial is designed to be lightweight and provides a time-saving and storage-saving solution for many players and it has received unanimous praise.",
            "home.showcase.addons.title": "Addons support",
            "home.showcase.addons": "Use your favorite Addons with Celestial, we support Weave,Javaagents,Fabric (1.17+) and Celepatch addons",
            "home.showcase.cross-platform.title": "Powerful Cross Platform",
            "home.showcase.cross-platform": "Celestial's developers take cross-platform seriously, and you can even run LunarClient on your Android phone (via Termux proot).",
            "home.showcase.community.title": "Plentiful support",
            "home.showcase.community": "Celestial Community is a vibrant community, we will update frequently, welcome you to join our Discord,we are waiting for you!",
            "download.title": "Download Celestial",
            "download.btn": "DOWNLOAD",
            "download.latest": "Latest Version: ",
            "download.warn.mirror": "Are you in Mainland China? I think you should use GitHub mirrors",
            "download.warn.mirror.origin-link": "Origin Link:",
            "download.discord": "Join our Discord community",
            "download.changelog": "View changelog",
            "download.cosmetics": "Get UNLIMITED cosmetics today!",
            "home.divider2": "You have scrolled to the bottom, click here to download",
            "weave.loading": "Loading...",
            "weave.old": "Switch to the old experience",
            "weave.update-time": "Update time:",
            "weave.disclaimer": "The mods on this page may have cheating functions. If you are banned, it has nothing to do with the developers of Celestial. We do not guarantee that all mods can work properly. If you encounter problems, please ask the mod developer.",
            "sponsor.title": "Sponsor LunarCN",
            "sponsor.subtitle": "Your support keeps the LunarCN community vibrant",
            "sponsor.paymentMethods": "Payment Methods",
            "sponsor.wechat": "WeChat Pay",
            "sponsor.alipay": "Alipay",
            "sponsor.sponsor": "Sponsor Now",
            "sponsor.leaderboard": "Sponsor Leaderboard",
            "sponsor.name": "Name",
            "sponsor.amount": "Amount",
            "sponsor.message": "Message",
            "sponsor.support": "Join Our Community",
            "analysis.title": "User Analysis",
            "analysis.current_users":"Users Count",
            "analysis.online_now":"Online Users Count",
            "analysis.web_users":"Web Users Count",
            "analysis.no-data": "No data available",
            "dashboard.login": "Login into Lunar API",
            "dashboard.login.tip": "DO NOT input the Minecraft thing in the form",
            "dashboard.login.process": "Process Login",
            "dashboard.login.register-link": "Or...Register a LunarCN account",
            "cosmetics.title": "unlimited cosmetics for free!",
            "cosmetics.download.catbox": "Get it now (Catbox)",
            "cosmetics.download.123pan": "Get it now (123pan)",
            "cosmetics.source.sorry": "The content of the server is closed source for the time being. If you have the ability to improve it, you can apply to join us on Discord.",
            "cosmetics.tutorial": "Add the Javaagent you just downloaded to Celestial to enjoy unlimited cosmetics & emotes",
            "cosmetics.tip": "If you like our work, please share it with your friends!",
            "cosmetics.source": "Source code (clientside stuff)",
            "footer.eula":"Privacy&EULA",
            "privacy.title": "Privacy Policy",
            "privacy.effective_date": "Effective Date: 1 March 2025",
            "privacy.data_collection.title": "Data Collection",
            "privacy.data_collection. content": "We always adhere to the principle that user privacy is paramount. Lunarclient.top or Celestial ",
            "privacy.data_collection.highlight": "No personal user information is collected, stored or processed." ,
            "privacy.data_usage.title": "Data Usage",
            "privacy.data_usage.content": "As we do not collect any user data, there is no data usage or sharing. All your actions and game data exists only on the local device." ,
            "privacy.third_party.title": "Third Party Services",
            "privacy.third_party.content": "We do not share data with any third party services as we do not collect any user data ourselves." ,
            "privacy.security.title": "Safety and Security",
            "privacy.security.content": "Even though we do not need to store user data, we still take industry-standard security measures to protect the integrity of the client and ensure that you have the safest gaming experience possible." ,
            "privacy.contact.title": "Contact Us",
            "privacy.contact.content": "If you have any questions about our privacy policy, please feel free to contact us by email at:",
            "privacy.last_updated": "This Privacy Policy was last updated on 2025 March 21st March",
        }
    },
    zh: {
        translation: {
            "nav.home": "主页",
            "nav.download": "下载",
            "nav.weave": "Weave插件市场",
            "nav.docs": "文档",
            "nav.sponsor": "赞助",
            "nav.analysis": "公开统计数据",
            "btn.download": "下载",
            "home.subtitle": "开源免费",
            "home.motd1": "另一个LunarClient启动器",
            "home.motd2": "让LC再次辉煌",
            "home.motd3": "你的下一个Minecraft启动器",
            "home.motd4": "1# LunarClient Launcher",
            "home.features.title": "主要功能",
            "home.features.electron": "没有Electron",
            "home.features.opensource": "完全开源",
            "home.features.ads": "没有广告",
            "home.features.weave": "支持Weave",
            "home.features.javaagents": "支持Javaagents",
            "home.features.tiny": "只有不到20MB",
            "home.features.downloader": "支持多线程下载",
            "home.features.login": "在你最喜欢的浏览器里登录Minecraft账户",
            "home.features.jre": "一个Java, 到处运行",
            "home.features.cross-platform": "支持跨平台",
            "home.features.linux": "我们的开发者热爱GNU/Linux,Celestial对Linux有很好的支持",
            "home.divider1": "还没想好要用官方启动器还是Celestial吗? 接着往下看!",
            "home.showcase.title": "展示",
            "home.showcase.opensource.title": "免费的,开源的",
            "home.showcase.opensource": "我们拥抱开源，我们不会在启动器中强制安装遥测",
            "home.showcase.pages.title": "简洁的页面",
            "home.showcase.pages": "摆脱不必要的臃肿页面，专为启动游戏而设计。您只需双击 Jar 文件即可启动游戏",
            "home.showcase.electron.title": "没有 Electron",
            "home.showcase.electron": "我们不使用臃肿的Electron.js编写,我们使用Kotlin/JVM编写的启动器只有不到20MB的大小",
            "home.showcase.tiny.title": "很简洁",
            "home.showcase.tiny": "Celestial 设计很简单, 为众多玩家提供了节省时间和存储的解决方案，获得了很多好评",
            "home.showcase.addons.title": "支持加载项",
            "home.showcase.addons": "在Celestial中使用你最喜欢的模组,我们支持Weave,Javaagents和Celepatch",
            "home.showcase.cross-platform.title": "优秀的跨平台",
            "home.showcase.cross-platform": "Celestial的开发者很看重跨平台,你甚至可以在你的手机上运行LunarClient (通过 Termux proot).",
            "home.showcase.community.title": "友好的社区",
            "home.showcase.community": "Celestial Community 是一个充满活力的社区，我们会经常更新，欢迎您加入我们的 Discord，我们等您！",
            "download.title": "下载Celestial",
            "download.btn": "下载",
            "download.latest": "最新版本: ",
            "download.warn.mirror": "你在中国大陆吗?我建议你用镜像源",
            "download.warn.mirror.origin-link": "源链接",
            "download.discord": "加入我们的Discord社区",
            "download.changelog": "看看更新了什么",
            "download.cosmetics": "现在获取全饰品! 可以被其他人看到!",
            "home.divider2": "你已经看完全部内容了,快点击按钮下载吧",
            "weave.loading": "加载中...",
            "weave.old": "切换到旧版",
            "weave.update-time": "更新时间",
            "weave.disclaimer": "本页面的Mod可能带有作弊功能,如果你被封禁与Celestial的开发者无关. 我们不确保所有Mod都可以正常工作,如果遇到问题请询问Mod开发者",
            "sponsor.title": "赞助LunarCN",
            "sponsor.subtitle": "您的赞助对LunarCN社区的发展至关重要",
            "sponsor.paymentMethods": "赞助方式",
            "sponsor.wechat": "微信支付",
            "sponsor.alipay": "支付宝",
            "sponsor.sponsor": "现在赞助",
            "sponsor.leaderboard": "赞助榜",
            "sponsor.name": "名字",
            "sponsor.amount": "金额",
            "sponsor.message": "留言",
            "sponsor.support": "加入我们",
            "analysis.title": "用户统计数据",
            "analysis.current_users":"用户总数",
            "analysis.online_now":"在线用户",
            "analysis.web_users":"网页用户",
            "analysis.no-data": "没有统计数据",
            "dashboard.login": "登录到山寨API",
            "dashboard.login.tip": "这里的内容不是你的Minecraft用户信息",
            "dashboard.login.process": "登录",
            "dashboard.login.register-link": "或者...注册一个账户",
            "cosmetics.title": "免费的饰品!",
            "cosmetics.tip": "如果你喜欢我们的工作,请将它分享给你的朋友!",
            "cosmetics.tutorial": "在Celestial中加入你刚刚下载Javaagent即可享受无限的饰品!",
            "cosmetics.source.sorry": "服务端的内容暂时是闭源的,如果你有能力进行改进你可以在Discord申请加入我们",
            "cosmetics.download.catbox": "我等不及了,赶紧让我下载 (Catbox)",
            "cosmetics.download.123pan": "我等不及了,赶紧让我下载 (123pan)",
            "cosmetics.source": "源代码 (客户端部分)",
            "footer.eula":"最终用户协议&隐私政策",
            "privacy.title":"隐私政策",
            "privacy.effective_date":"生效日期：2025年3月1日",
            "privacy.data_collection.title":"数据收集",
            "privacy.data_collection.content":"我们始终坚持用户隐私至上的原则。 Lunarclient.top或Celestial ",
            "privacy.data_collection.highlight":"不会收集、存储或处理任何用户个人信息。",
            "privacy.data_usage.title":"数据使用",
            "privacy.data_usage.content":"由于我们不收集任何用户数据，因此不存在数据使用或共享的情况。您的所有操作和游戏数据都仅存在于本地设备上。",
            "privacy.third_party.title":"第三方服务",
            "privacy.third_party.content":"我们不会与任何第三方服务共享数据，因为我们本身不收集任何用户数据。",
            "privacy.security.title":"安全保障",
            "privacy.security.content":"尽管我们不需要存储用户数据，但我们仍然采取了行业标准的安全措施来保护客户端的完整性，确保您获得最安全的游戏体验。",
            "privacy.contact.title":"联系我们",
            "privacy.contact.content":"如果您对我们的隐私政策有任何疑问，请随时通过邮件联系我们：",
            "privacy.last_updated":"本隐私政策最后更新于2025年3月21日",
        }
    }
};

const options = {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng'
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        detection: options,
        resources,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;