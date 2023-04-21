import microservice from "../../assets/microservice.jfif";
import eventdriven from "../../assets/eventdriven.jfif";
import solid from "../../assets/solid.jfif";
import mono_vs_micro from "../../assets/mono_vs_micro.png";
import eda_explain from "../../assets/eda_explain.png";
import ocp_wrong from "../../assets/ocp_wrong.png";
import ocp_right from "../../assets/ocp_right.png";
import lsp_wrong from "../../assets/lsp_wrong.png";
import dip_wrong from "../../assets/dip_wrong.png";
import dip_right from "../../assets/dip_right.png";

export const articles = [
  {
    id: 1,
    path_suffix: "microservice_architecture",
    title: "Microservice Architecture",
    subtitle: `တကယ်တန်းရေးချင်တာက Event Driven Architecture အကြောင်းရေးချင်တာ ဒါပေမယ့် Microservice မသိဘဲနားမလည်နိုင်တော့ Microservice အကြောင်းအရင်ရှင်းပြချင်တယ် Microservices အကြောင်းမပြောခင် Monolithic အကြောင်းအရင်သိဖို့လိုပြန်တယ်။`,
    bg_image: microservice,
    duration: "1min read",
    genre: "Software Architecture",
    date: "Aug 16, 2022",
    body: [
      {
        content_title: "",
        content_body: `တကယ်တန်းရေးချင်တာက Event Driven Architecture အကြောင်းရေးချင်တာ ဒါပေမယ့် Microservice မသိဘဲနားမလည်နိုင်တော့ Microservice အကြောင်းအရင်ရှင်းပြချင်တယ်။
        Microservices အကြောင်းမပြောခင် Monolithic အကြောင်းအရင်သိဖိုလိုပြန်တယ်။`,
        image: "",
      },
      {
        content_title: "Monolithic",
        content_body: `Monolithic ဆိုတာ application တစ်ခုထဲမှာကို ကိုလိုတဲ့ modules တွေကိုခွဲပြီးအကုန်လုံးကိုတစ်နေရာတည်းမှာimplementလုပ်ထားတဲ့ Architecture ပုံစံပေါ့။ တော်တော်များများပုံမှန်ရေးနေကြပုံစံမျိုးပေါ့။ application ရှိမယ်ပြီးရင်လိုအပ်မယ့် domain တွေခွဲထားပြီးapiတွေကိုdatabaseတခုတည်းကိုသွားချိတ်ထားမယ်ပေါ့။ တခါတလေကျတော့လဲကြားထဲမှာ failover ခံကြတယ်ပေါ့။ ဒါကတော့ Monolithic ဖြစ်ပြီး three-tier architecture လိုလဲခေါ်ကြတယ်။`,
        image: "",
      },
      {
        content_title: "",
        content_body: `Microservice မှာကျတော့ Monolithic မှာခွဲထားတဲ့ modules တွေကို application တစ်ခုတည်းအောက်မှာမထားတော့ဘဲ module တစ်ခုချင်းဆီကို Service တစ်ခုချင်းဆီအဖြစ်ခွဲထုတ်လိုက်တာပါ။ အဲ့လိုခွဲထုတ်လိုက်တဲ့ module တခုချင်းဆီမှာကိုယ်ပိုင် database တစ်ခုချင်းဆီနဲ့ application state ရှိပါတယ်။ အဲ့လို ကိုယ်ပိုင်ရပ်တည်နိုင်အောင်ရေးတာကို Microservice Architecture လို့ခေါ်တယ်။ ရှင်းအောင်ပြောရရင်တော့ Monolithic မှာ module ခွဲတဲ့ပုံစံနဲ့တူပြီးခွဲလိုက်တဲ့moduleကို သူကိုယ်တိုင် dependent ဖြစ်အောင်လုပ်လိုက်တဲ့ပုံစံမျိုးပါဘဲ။`,
        image: "",
      },
      {
        content_title: "Pros",
        content_body: `Microservice ကိုအသုံးပြုပြီးရလာတဲ့အကျိုးကျေးဇူးတွေအများကြီးထဲကမှ နောက်နေ့ရေးမယ့် Event Driven Architecture နဲ့ဆက်စပ်ပြီးပြောချင်တဲ့တစ်ချက်ဘဲ highlight လုပ်ပြီးပြောပါတော့မယ်။ အဲ့တာကတော့ Domain-Driven ဖြစ်သွားတာပေါ့။ ကိုကMonolithicကိုအသုံးပြုပြီး service တစ်ခုကိုchanges လုပ်ချင်တဲ့အခါတစ်ခါservicesတွေကိုထိခိုက်မှုရှိနိုင်လားလိုက်စင်းစားရတယ်။ Microservice နဲ့ဆိုဒါတွေစင်းစားစရာမလိုဘဲကိုchangeချင်တဲ့ service ကိုchangeလိုက်ရုံဘဲ အကြောင်းကတော့သူကတခြားserviceတွေကို depend ဖြစ်မနေလိုဘဲ။`,
        image: "",
      },
      {
        content_title: "",
        content_body: `ဒါပေမယ့်တခါတလေကျတော့ service တစ်ခုဟာနောက်serviceတစ်ခုဆီကdataရတော့မှprocessလုပ်မယ့်serviceဖြစ်ပြီးတော့dataပေးရမယ့်serviceဟာလဲနောက်serviceတစ်ခုဆီကdataရမှprocessလုပ်မယ့်serviceမျိုးဖြစ်နေပြီးchainပုံစံမျိုးဖြစ်နေတယ်။ တစ်နည်းအားဖြင့် Async operation ဖြစ်သွားတယ်ပေါ့။ အဲ့တော့ပြန်စင်းစားကြည့်ရင် microservice အနေနဲ့ခွဲထုတ်ထားတဲ့ service တစ်ခုချင်းဆီဟာ monolithic ပုံစံမျိုးနဲ့ complex ဖြစ်နေတယ်ပေါ့။ အဲ့လို problem မျိုးကို‌ဖြေရှင်းဖို့ Event Driven Architecture ဆိုတာကိုအသုံးပြုကြတယ်။`,
        image: "",
      },
      {
        content_title: "",
        content_body: ``,
        image: mono_vs_micro,
      },
    ],
    image_src: [
      {
        link: "https://www.pinterest.com/pin/602989837613647952/",
      },
      {
        link: "https://medium.com/javanlabs/micro-services-versus-monolithic-architecture-what-are-they-e17ddc8d3910",
      },
    ],
  },
  {
    id: 2,
    path_suffix: "event_driven_architecture",
    title: "Event Driven Architecture",
    subtitle:
      "Event Driven Architecture အကြောင်းကိုမဖတ်ခင်အရင်ဆုံး Microservice အကြောင်းကိုဖတ်စေလိုပါတယ်။ Microservice အကြောင်းကိုတော့ရှေ့ကစာမျက်နှာမှာသွားဖတ်နိုင်ပါတယ်။",
    bg_image: eventdriven,
    duration: "1min read",
    genre: "Software Architecture",
    date: "Aug 17, 2022",
    body: [
      {
        content_title: "Why do we need Event Driven Architecture?",
        content_body: `Microservice ရဲ့အဓိကရည်ရွယ်ချက်ကိုက services တွေတစ်ခုနဲ့တစ်ခု decoupled ဖြစ်ပြီးကိုယ်တိုင် ရပ်တည်စေချင်တယ်ပေါ့။ ဒါပေမယ့်မနေ့ကပြောသလို service တစ်ခုဟာနောက် service တစ်ခုဆီက data ရမှ process လုပ်မယ်ဆိုရင် ဒါဟာ decoupled မဖြစ်တော့ဖူး တစ်ခုပေါ်တစ်ခုမှီခိုနေပြီ။ အဲ့အခါ service တစ်ခုကသာshut down သွားမယ်ဆိုသူ့ကိုမှီခိုတဲ့တခြား service တွေပါ shut down ပြီး system တစ်ခုလုံးshut down သွားနိုင်တယ်။ အဲ့လိုဖြစ်စေတဲ့အကြောင်းအရင်းကတော့ services တွေဟာတစ်ခုနဲ့တစ်ခုတိုက်ရိုက်ဆက်သွယ်ပြီး response မလာမချင်း wait နေလို့ဘဲ။  အဲ့လိုproblem မျိုးကို Event Driven Architecture ကိုသုံးပြီးဖြေရှင်းနိုင်တယ်။ `,
        image: "",
      },
      {
        content_title: "What is event?",
        content_body: `Event Driven Architecture အကြောင်းစရမယ်ဆိုအရင်ဆုံး Event ဆိုတာဘာလဲပေါ့။ Event ဆိုတာ User ကတခုခုလုပ်လိုက်တဲ့အခါ ဥပမာ website လေးရဲ့ reload button ကိုနှိပ်လိုက်တဲ့အခါ web page လေး reload ဖြစ်သွားဖိုနောက်ကွယ်မှာရှိတဲ့ software system ထဲမှာအလုပ်လုပ်သွားပြီးတော့မှရလာတဲ့ result ကို Event လိုခေါ်တယ်။ အဲ့တော့ user ကြောင့်ဖြစ်လာတဲ့ software action တစ်ခုကို Event လို့ခေါ်တာပေါ့။`,
        image: "",
      },
      {
        content_title: "Components and Features",
        content_body: `Event Driven Architecture တစ်ခုမှာဘာတွေပါလဲဆိုတော့ Event Producer, Event Routerနဲ့ Event Consumer ဆိုပြီးပါတယ်။ Event Producer ဆိုတာ event တွေကိုဖြစ်စေတဲ့ services တွေပေါ့။ ဖြစ်ပေါ်လာတဲ့ event တွေက response ပြန်မှအလုပ်လုပ်မယ့် services တွေကို Event Consumer လိုခေါ်တယ်။ Event Router ရဲ့တာဝန်ကတော့ဖြစ်လာတဲ့ events တွေကိုသက်ဆိုင်ရာ Consumers တွေဆီရောက်အောင်ကြားထဲက filter လုပ်ပေးတာပေါ့။ ပြောချင်တာကတော့ services တွေဟာခုနက problem ကလိုတစ်ခုနဲ့တစ်ခုတိုက်ရိုက်မဆက်သွယ်တော့ဘဲကြားထဲက router ကိုခံပြီးဆက်သွယ်ကြတယ်။ အဲ့တော့ Producer ကလဲသူ produce လိုက်တဲ့ event ဟာဘယ် consumer ဆီရောက်သွားလဲမသိတော့သလို consumer ဟာလဲသူယူလိုက်တဲ့ event ဟာဘယ် Producer က produce လုပ်ပါတယ်ဆိုတာမသိတော့ဖူး။ decoupled ဖြစ်သွားပြီပေါ့။ 
        အပေါ်ကပြောခဲ့တဲ့ pattern အတိုင်းအလုပ်လုပ်ဖို့အတွက် event streaming platform တွေကိုအသုံးပြုကြတယ် Azure IoT Hub, Apache Kafka စသဖြင့်ပေါ့။ သူတိုဟာpipeline သဖွယ်အလုပ်လုပ်ကြတယ်။ APIs (Services) တွေဟာ pipeline နဲ့ချိတ်ဆက်ပြီးတော့ events တွေကို pipeline ထဲကိုပိုပြီး ကိုလိုချင်တဲ့ events တွေကိုလဲ router ကြားခံပြီး pipeline ထဲကနေပြန်ယူကြတယ်။ လိုချင်တဲ့ event မတွေ့မချင်း pipeline ထဲမှာ queue ပုံစံပတ်နေတယ်ပေါ့။ ဆိုလိုချင်ဝာာကတော့ pipeline နဲ့ချိတ်ဆက်ထားတဲ့ APIs (Services)တွေဟာ Producers ဖြစ်နိုင်သလို Consumer လဲဖြစ်နိုင်ပြီး တလှည့်ဆီဖြစ်နေနိုင်တယ်ပေါ့။
        ဟိုးအပေါ်မှာပြောခဲ့တဲ့ services တွေ decouple မဖြစ်တဲ့ problem ကို event streaming pipeline တွေသုံးပြီးဖြေရှင်းလိုက်တဲ့ pattern ကို Event Driven Architecture လို့ခေါ်ပါတယ်။`,
        image: "",
      },
      {
        content_title: "",
        content_body: ``,
        image: eda_explain,
      },
    ],
    image_src: [
      {
        link: "https://www.pinterest.com/pin/29625310038972705/",
      },
      {
        link: "https://aws.amazon.com/event-driven-architecture/#:~:text=What%20is%20an%20Event-Driven%20Architecture%3F&text=An%20event-driven%20architecture%20uses,on%20an%20e-commerce%20website",
      },
    ],
  },
  {
    id: 3,
    path_suffix: "solid",
    title: "SOLID Principle",
    subtitle:
      "ကျွန်တော်တို့ code တွေရေးကြတဲ့အခါ business logic အရမှန်သွားရုံနဲ့ကိုရေးတဲ့ code ကအဆင်ပြေသွားပြီလိုပြောလိုမရဖူးဗျ။ ကို code က maintainable, understandable, flexible ဖြစ်ရဲ့လားဆိုတာတွေထည့်စင်းစားဖို့လိုတယ်။",
    bg_image: solid,
    duration: "2min read",
    genre: "Software Architecture",
    date: "Oct 03, 2022",
    body: [
      {
        content_title: "",
        content_body:
          "ကျွန်တော်တို code တွေရေးကြတဲ့အခါ business logic အရမှန်သွားရုံနဲ့ကိုရေးတဲ့ code ကအဆင်ပြေသွားပြီလိုပြောလိုမရဖူးဗျ။ ကို code က maintainable, understandable, flexible ဖြစ်ရဲ့လားဆိုတာတွေထည့်စင်းစားဖို့လိုတယ်။ ဒါမှသာနောင်တချိန် ကိုcodeကိုသူများကလွှယူတာဘဲဖြစ်ဖြစ် features အသစ်တွေထပ်ထည့်ဝာာဘဲဖြစ်ဖြစ်အဆင်ပြေမှာ။ ဒီနေရာမှာ Architecture pattern တွေ Design pattern တွေဆိုတာအရေးပါလာတာပေါ့။ ဘယ် Architecture ဘယ် Design pattern ဖြစ်ဖြစ်သူတိုလိုက်နာရတဲ့ rule ရှိတယ်ဗျ။ အဲ့တာကတော့ SOLID principles ဘဲဖြစ်ပါတယ်။",
        image: "",
      },
      {
        content_title: "Single Responsibility Principle(SRP)",
        content_body:
          '"A module should be responsible to one, and only one, actor". သဘောကတော့ module တခုစီတိုင်းဟာသက်ဆိုင်ရာ responsibilities တွေကိုဘဲစုထားရမယ် reason of change သည်တစ်ခုသာရှိရမယ်လိုဆိုလိုချင်တာပါ။ Robert C Martin ရဲ့exampleနဲ့ဘဲပြရမယ်ဆိုရင် Employee class တစ်ခုမှာ calculatePay() [Accountingနဲ့သက်ဆိုင်] reportHours() [HRနဲ့သက်ဆိုင်] save() [Database Administrator နဲ့သက်ဆိုင်] ဆိုတဲ့ responsibility 3ခုရှိတယ်ဆိုကြပါစို့။ အဲ့အခါ payment ပြောင်းသွားရင်လဲ Employee class ကိုပြင်ရမယ် database ပြောင်းသွားရင်လဲ Employee classကိုပြင်ရမယ် reason to change သည်တစ်ခုထက်ပိုလာပြီ။ အဲ့တော့ဒါသည် SRP ကိုချိုးဖောက်နေပြီ။ အကျိုးဆက်အနေနဲ့တော့ Duplication conflict တွေ Merge conflict တွေဖြစ်လာမယ် code သည် reuseable မဖြစ်တော့ဖူး။ Maintenance ပိုင်းအားနည်းလာမယ်။ ဒါတွေကိုရှောင်ရှားချင်တယ်ဆိုရင်တော့ module တစ်ခုကိုchangesလုပ်ချင်တဲ့အခါနောက် module ‌တစ်ခုကို affect မဖြစ်အောင်ခွဲပြီးရေးရပါတယ်ဒါကို seperation of concerns (SoC)လိုသုံးနှုန်းပါတယ်။',
        image: "",
      },
      {
        content_title: "Open-closed Principle(OCP)",
        content_body:
          '"Open for extension, close for modification". Modification ဆိုတာရေးပြီးသားcodeကိုပြန်ပြင်တာဖြစ်ပြီး extension ဆိုတာ functions အသစ်တွေထပ်ထည့်တာကိုဆိုလိုပါတယ်။ အဲ့တော့ OCP ရဲ့သဘောကရှိပြီးသားcodeကိုပြုပြင်မှုမရှိဘဲfuntionsအသစ်တွေထည့်ချင်တယ်လို့ရည်ရွယ်တာပါ။',
        image: "",
      },
      {
        content_title: "",
        content_body:
          "အပေါ်မှာပြထားတဲ့ code ဟာ OCPကိုချိုးဖောက်ပါတယ်။တကယ်လို့ကျွန်တော်တို့က TripleRoom ဆိုဘယ်လောက်ကျလဲတွက်ချင်တဲ့အခါ if statement တစ်ကြောင်းထပ်ထည့်ရပါလိမ့်မယ်။ အဲ့တော့ရှိပြီးသားcodeကိုပြင်တာဖြစ်တဲ့အတွက် OCP ကိုချိုးဖောက်ပါတယ်။",
        image: ocp_wrong,
      },
      {
        content_title: "",
        content_body:
          "အထက်ပါ code အတိုင်း polymorphism ကိုအသုံးပြုပြီးရေးမယ်ဆိုရင်တော့ OCP ကိုလိုက်နာပါတယ်။ တကယ်လို့ကိုက QuadRoom ထပ်ထည့်ချင်တဲ့အခါလဲရှိပြီးသား calculateCharges ကိုသွားထိစရာမလိုဘဲထပ်ထည့်နိုင်ပါတဲ့အတွက် OCP နဲ့ကိုက်ညီပါပြီ။ OCP နဲ့ကိုက်ညီမှုမရှိတဲ့အခါ code တွေဟာတခုခုထပ်ထည့်တိုင်းလိုက်ပြီး changes ဖြစ်နေပါလိမ့်မယ်။ ",
        image: ocp_right,
      },
      {
        content_title: "Liskov Substitution Principle(LSP)",
        content_body: `"If class A is a subtype of class B, we should be able to replace B with A without disturbing the behaviour of our program". သဘောကတော့ child object တွေသည် parent class က  method တွေကို reference လုပ်တဲ့အခါ အပြောင်းအလဲမရှိဘဲလုပ်နိုင်ရမယ်လိုဆိုလိုပါတယ်။`,
        image: "",
      },
      {
        content_title: "",
        content_body: `အထက်ပါ code သည် LSP ကိုသွေဖယ်တဲ့ example ဖြစ်ပါတယ်။ Child class ဖြစ်တဲ့ Eagle အတွက် Bird parent class က method ၂ခုလုံးကို reference လုပ်ဖို့အဆင်ပြေပေမယ့် Penguin class အတွက်က canFly method ဟာ exception ကိုဖြစ်စေတယ်။ ဒါကြောင့် ဒါသည် LSP ကိုချိုးဖောက်ပါတယ်။ LSP သည် inheritance ကိုနည်းမှန်လမ်းမှန်သုံးတတ်အောင်ညွှန်ပြတဲ့ principle လိုပြောလို့ရပါတယ်။`,
        image: lsp_wrong,
      },
      {
        content_title: "Interface Segregation Principle(ISP)",
        content_body: `ISP ဟာ SRP နဲ့ဆက်စပ်ပါတယ်။ ISP ရဲ့ပေးချင်တဲ့ theme ကတော့ interface တစ်ခုတည်းမှာမလိုအပ်ဘဲ methods တွေအများကြီးစုစည်းမထားဖို့ဖြစ်ပါတယ်။ အကြောင်းကတော့အဲ့ interface ကို implement လုပ်မယ့် class သည်မလိုအပ်တဲ့ method တွေကိုပါ override လုပ်မိနေချင်းကနေကာကွယ်နိုင်အောင်ဖြစ်ပါတယ်။ အဲ့တော့ interface တစ်ခုမှာသက်ဆိုင်ရာ method တွေသာထားရှိသင့်ပါတယ်။`,
        image: "",
      },
      {
        content_title: "Dependency Inversion Principle(DIP)",
        content_body: `အရင်ဆုံး dependency ဆိုတာဘာလဲနားလည်ရပါမယ်။ module တစ်ခုသည်အခြား module တစ်ခုပေါ်မှာမှီခိုနေတာကို dependency လိုခေါ်ပါတယ်။ ဥပမာ class တစ်ခုက အခြား class တစ်ခုကို extend လုပ်တာမျိုးပေါ့။ ဒီနေရာမှာ DIP ကဘာပြောလဲဆိုရင် module တစ်ခုသည် concrete class and functions တွေအစား interface or abstract class တွေနဲ့ relation ချိတ်သင့်တယ်လိုဆိုတယ်။ Decoupling ဖြစ်အောင်ပေါ့။`,
        image: "",
      },
      {
        content_title: "",
        content_body: `အထက်ပါ code သည် DIP ကိုသွေဖယ်ပါတယ် tightly coupled ဖြစ်နေပါတယ်။ အကြောင်းကတော့ StandardKeyboard ဆိုတဲ့ concrete class ပေါ်မှာမှီခိုနေလို့ပါ။ ကျွန်တော်တို့က WirelessKeyboard ကိုပြောင်းသုံးချင်တဲ့အခါအဆင်မပြေနိုင်တော့ပါဖူး။`,
        image: dip_wrong,
      },
      {
        content_title: "",
        content_body: `အထက်ပါ code သည် DIP ကိုလိုက်နာပါတယ်။ အကြောင်းကတော့ StandardKeyboard WirelessKeyboard တို့လို concrete class ပေါ်မှာတိုက်ရိုက်မမှီခိုတော့ဘဲ Keyboard interface ပေါ်မှာမှီခိုလိုက်တဲ့အတွက်ဖြစ်ပါတယ်။ အကျိူးကျေးဇူးအနေနဲ့ ကျွန်တော်တို့ကြိုက်နှစ်သက်ရာ keyboard အမျိုးအစားကိုအသုံးပြုနိုင်ပြီဖြစ်ပါတယ်။`,
        image: dip_right,
      },
    ],
    image_src: [
      {
        link: "https://www.pinterest.com/pin/704813410451524503/",
      },
    ],
  },
];
