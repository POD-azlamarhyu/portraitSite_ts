import {workTypes,skillTypes,importImage,hobbysTypes,hobbysdescType,worktechTypes,topImage,skillCardCol, urls} from './type';

export const url: urls= {
    urlBlog:"https://www.s-gakuenblog.com/",
    urlGit:"https://github.com/POD-azlamarhyu",
    urlTwitter:"https://twitter.com/Inc_capitalist",
};

export const webTitle: string = "Jiro's Portrait Site";
// export const topImage = require("../../public/portrait_top.png").default;
// export const topImage2 = require("../../public/portraitsite_top2.png").default;
// export const topImage3 = require("../../public/portraitsite_top3.png").default;

export const topImages:topImage[] = [
    {   
        id:0,
        image:require("../../public/topimage1.png").default,
    },
    {   
        id:1,
        image:require("../../public/topimage2.png").default,
    },
    {   
        id:2,
        image:require("../../public/topimage3.png").default,
    },
    {   
        id:3,
        image:require("../../public/topimage4.png").default,
    }
];

export const copyright: string = "shell varng 2022";

const skillCardCol:skillCardCol = {
    red:`bg-gradient-to-r from-fuchsia-500 to-fuchsia-200 w-full md:w-132 md:h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform`,
    blue:`bg-gradient-to-r from-blue-500 to-blue-200 md:w-132 w-full md:h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform`,
    indigo:`bg-gradient-to-r from-indigo-500 to-indigo-200 w-full md:w-132 md:h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform`,
    green:`bg-gradient-to-r from-gray-500 to-gray-200 w-full md:w-132 md:h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform`
}

export const hobbysCardContents:hobbysTypes[] = [
    {
        id: 0,
        image: require("../../public/travel.png").default,
        title: "Travel　-鉄道旅行-",
        description: [
            {
                id: 0,
                param:"自分の趣味の中で最も優先度が高く，お金もかかっているものです．鉄道で日本各地に赴いては，自分がその場に生きていたことをカメラで記録しています．",
                
            },
            {
                id: 1,
                param: "今，日本はどんどん鉄路が消えていっている状態です．少しでも，皆様に鉄道に興味を持っていただくための活動もしていきたいと考えております．",
            }
        ],
    },
    {
        id: 1,
        image: require("../../public/gadget.png").default,
        title: "Gadget　-PC＆ガジェット-",
        description: [
            {
                id: 0,
                param: "PCやカメラ，スマートフォンなどのガジェット類がとても好きです．パソコンはPCパーツを一つ一つ選んで組んだり，PC周辺機器でより便利で生産性を上げる品がないか日々探してます．",
            },
            {
                id :1,
                param: "PCパーツも色々調べたり，旅で使うカメラなども選んでいます．",
            }
        ],
    },
    {
        id: 2,
        image: require("../../public/anime.png").default,
        title: "Anime&Comic　-アニメ&漫画-",
        description: [
            {
                id: 0,
                param: "日本の文化，アニメなどもお金が比較的かからない趣味として楽しんでいます．TVを私は捨てたので，VODサービスオンリーで視聴しています．",
            },
            {
                id: 1,
                param: "他にも，漫画，ラノベなども嗜んでおります．さらに，二次創作を某小説投稿サイトにて執筆しております．",
            }
        ],
    },
    {
        id: 3,
        image: require("../../public/money_kabuken.png").default,
        title: "Assets Management　-資産運用-",
        description: [
            {
                id: 0,
                param: "今の日本の状況から打開するために，自分の資産の置き方を考えた結果，自身で資産を運用しています．",
            },
            {
                id: 1,
                param: "中でも，株式に投資し，少しでも資産を増やす努力をすることを当たり前にし続けた結果趣味となりました．"
            }
        ]
    },
    {
        id: 4,
        image: require("../../public/blogimg.png").default,
        title: "発信",
        description: [
            {
                id: 0,
                param: "ブログにて, 自分の経験や知識を少しでも役立ててもらえればと思い, 発信しております. "
            },
            {
                id: 1,
                param: "発信内容はプログラミングやガジェットなどの技術系, 資産運用やクレジットカードに関する金融系の2系統で発信を行っております. "
            }
        ]
    }
];

export const worksCardContents:workTypes[] = [
    {
        id: 0,
        image: require("../../public/portrait_e.png").default,
        title: "Portrait Site",
        description: "紹介サイト作成したいと思ったのでNextの練習も兼ねて作成しました．",
        useTech: [
            {
                id:0,
                mark: "devicon-javascript-plain colored",
            },
            {
                id: 1,
                mark:"devicon-nextjs-plain-wordmark colored", 
            },
            {
                id:2,
                mark:"devicon-materialui-plain colored",
            },
            {
                id:3,
                mark:"devicon-tailwindcss-plain colored",
            }
        ],
        repository:"https://github.com/POD-azlamarhyu/portraitSite",
    },
    {
        id: 1,
        image: require("../../public/toweet_e.png").default,
        title: "Django Tweet App",
        description: "twitterのクローンをDjangoの練習も兼ねて作成しました．",
        useTech: [
            {
                id:0,
                mark: "devicon-python-plain colored",
            },
            {
                id: 1,
                mark:"devicon-django-plain-wordmark colored",
            },
            {
                id:2,
                mark:"devicon-javascript-plain colored",
            },
            {
                id:3,
                mark:"devicon-bootstrap-plain colored"
            }
        ],
        repository:"https://github.com/POD-azlamarhyu/Twitter_clone_with_Django"
    },
    {
        id: 2,
        image:'',
        title: "Stock data scraiping",
        description: "株のデータを収集するために作成しました．",
        useTech: [
            {
                id:0,
                mark: "devicon-python-plain colored",
            },
            {
                id: 1,
                mark:"devicon-numpy-original colored"
            }
        ],
        repository: "https://github.com/POD-azlamarhyu/getStockdata",
    },
    {
        id: 3,
        image: require("../../public/watch_e.png").default,
        title: "JS Web Watch",
        description: "DOMの理解のため，WEB時計を作成しました．",
        useTech: [
            {
                id:0,
                mark: "devicon-javascript-plain colored",
            }
            
        ],
        repository: "https://github.com/POD-azlamarhyu/Javascript_light_watch",
    },
    {
        id: 4,
        image: require("../../public/unity_e.png").default,
        title: "Unity Ball Rolling Game",
        description: "Unityを使った3Ｄコースゲームです．",
        useTech: [
            
            {
                id:0,
                mark: "devicon-csharp-plain colored",
            },
            {
                id: 1,
                mark:"devicon-unity-original colored"
            },
        ],
        repository: "https://github.com/POD-azlamarhyu/unity_tutorial_scrollegame",
    },
    {
        id: 5,
        image: require("../../public/portrait_e.png").default,
        title: "Portrait Site TypeScript ver.",
        description: "上記自己紹介サイトのTypeScript版です. ",
        useTech: [
            {
                id:0,
                mark: "devicon-typescript-plain colored",
            },
            {
                id: 1,
                mark:"devicon-nextjs-plain-wordmark colored", 
            },
            {
                id:2,
                mark:"devicon-materialui-plain colored",
            },
            {
                id:3,
                mark:"devicon-tailwindcss-plain colored",
            }
        ],
        repository:"https://github.com/POD-azlamarhyu/portraitSite_ts",
    },
];

export const skillCardContents:skillTypes[] = [
    {
        id: 0,
        image: "devicon-python-plain colored",
        title: "Python 3",
        stars: 4,
        description: "最も触れている言語の一つです．",
        color: skillCardCol.blue,
    },
    {
        id: 1,
        image: "devicon-c-plain colored",
        title: "C lang",
        stars: 1,
        description: "ポインターでメモリ管理の勉強を行うため，使ってました．",
        color: skillCardCol.blue,
    },
    {
        id: 2,
        image: "devicon-csharp-plain colored",
        title: "C#",
        stars: 2,
        description: "主にWindows開発とUnityでのゲーム開発で使っています．FPS作りたい．",
        color: skillCardCol.blue,
    },
    {
        id: 3,
        image: "devicon-javascript-plain colored",
        title: "JavaScript",
        stars: 4,
        description: "フロントエンドの開発で主に使っています．",
        color: skillCardCol.red,
    },
    {
        id: 4,
        image: "devicon-typescript-plain colored",
        title: "TypeScript",
        stars: 2,
        description: "JSと並行して型付になれるため勉強していきます．",
        color: skillCardCol.red,
    },
    {
        id: 5,
        image: "devicon-java-plain colored",
        title: "Java",
        stars: 2,
        description: "主に研究でのAndroid開発に使っています．",
        color: skillCardCol.blue,
    },
    {
        id:6,
        image: "devicon-ruby-plain colored",
        title: "Ruby",
        stars: 3,
        description: "大学の授業のほか，サーバサイド言語の習得のため学んでいます．",
        color: skillCardCol.blue,
    },

    {
        id: 7,
        image: "devicon-android-plain colored",
        title: "Android",
        stars: 2,
        description: "研究のほか，個人開発でアプリの方面も触っています．",
        color: skillCardCol.green,
    },
    {
        id: 8,
        image: "devicon-react-original colored",
        title: "React JS",
        stars: 4,
        description: "フレームワークの中で最も触っています．",
        color: skillCardCol.green
    },
    {
        id: 9,
        image: "devicon-nextjs-plain-wordmark colored",
        title: "Next JS",
        stars: 4,
        description: "フレームワークの中で最も触っています．SSGやSSRをするためにやっています．",
        color: skillCardCol.green,
    },
    {
        id: 10,
        image: "devicon-django-plain-wordmark colored",
        title: "Django",
        stars: 3,
        description: "サーバサイドのフレームワークとして使っています．Pythonが最もなれているのでこれを選びました．",
        color: skillCardCol.green,
    },
    {
        id:11,
        image: "devicon-rails-plain colored",
        title: "Ruby on Rails",
        stars: 1,
        description: "日本はRailsが実務で使われていることが多いので勉強しています．",
        color :skillCardCol.green,
    },
    {
        id: 12,
        image: "devicon-unity-original colored",
        title: "Unity",
        stars: 2,
        description: "ゲームエンジンとして使っています．",
        color: skillCardCol.green,
    },
    {
        id:13,
        image: "devicon-postgresql-plain colored",
        title: "PostgreSQL",
        stars: 4,
        description: "データベースでOSSなので使っています．SQLは実務でかなり鍛えられました．",
        color: skillCardCol.indigo,
    },
    {
        id: 14,
        image: "devicon-git-plain colored",
        title: "Git",
        stars: 4,
        description: "ソースコード管理に使ってます．",
        color: skillCardCol.indigo,
    },
    {
        id:15,
        image: "devicon-github-original colored",
        title: "GitHub",
        stars: 4,
        description: "Gitのウェブサービスとして使ってます．",
        color: skillCardCol.indigo,
    },
    {
        id:16,
        image: "devicon-tensorflow-original colored",
        title: "Tensorflow",
        stars: 3,
        description: "機械学習で使っています．",
        color: skillCardCol.blue,
    },
    {
        id:17,
        image: "devicon-tailwindcss-plain colored",
        title: "Tailwind CSS",
        stars: 4,
        description: "フロントエンドで重宝しています．かなりの頻度で使っていますので結構覚えました．",
        color: skillCardCol.red,
    },
    {
        id:18,
        image: "devicon-bulma-plain colored",
        title: "Bulma",
        stars: 2,
        description: "フロントエンドでサブのCSSフレームワークとして使ってます．最近はあまり使ってません．",
        color: skillCardCol.red,
    },
    {
        id:19,
        image: "devicon-sass-original colored",
        title: "SASS (SCSS)",
        stars: 2,
        description: "CSSをより効率的に書くために使ってます．",
        color: skillCardCol.red,
    },
];