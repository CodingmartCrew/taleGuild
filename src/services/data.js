
const categories=[
        {
            logo: "hi",
            name:'ALL',
        },
        {
            logo: 'sample',
            name:'EPIC FANTASY',
        },
        {
            logo: 'sample',
            name:'SCIENCE FICTION',
        },
        {
            logo: 'sample',
            name:'ROMANCE',
        },
        {
            logo: 'sample',
            name:'ESSAYS',
        },
        {
            logo: 'sample',
            name:'NON FICTION',
        },
        {
            logo: 'sample',
            name:'ADVENTURE',
        },
        {
            logo: 'sample',
            name:'FANFICTION',
        },
        {
            logo: 'sample',
            name:'HORROR',
        },
        {
            logo: 'sample',
            name:'COMEDY',
        },
        {
            logo: 'sample',
            name:'POTERY',
        },
        {
            logo: 'sample',
            name:'THRILLER',
        },
        {
            logo: 'sample',
            name:'MYSTERY',
        },
        {
            logo: 'sample',
            name:'TRAGEDY',
        },
        {
            logo: 'sample',
            name:'FANTASY',
        },
        {
            logo: 'sample',
            name:'HISTORICAL FICTION',
        },
        {
            logo: 'sample',
            name:'ADULT 18+',
        },
        {
            logo: 'sample',
            name:'BIOGRAPHY',
        },
        {
            logo: 'sample',
            name:'FAIRY TALE',
        },
        {
            logo: 'sample',
            name:'DRAMA',
        },
        {
            logo: 'sample',
            name:'DETECTIVE',
        },
        {
            logo: 'sample',
            name:'INSPIRATIONAL',
        },
        {
            logo: 'sample',
            name:'CHILDREN',
        },
        {
            logo: 'sample',
            name:'MICROFICTION',
        },
        
];
const languages=[
    {
        name:'ALL',
    },
    {
        name:'ALBANIAN',
    },
    {
        name:'ARABIC',
    },
    {
        name:'ARMENIAN',
    },
    {
        name:'BELARUSIAN',
    },
    {
        name:'BOSNIAN',
    },
    {
        name:'BULGARIAN',
    },
    {
        name:'CHINESE',
    },
    {
        name:'CROATIAN',
    },
    {
        name:'CZECH',
    },
    {
        name:'DANISH',
    },
    {
        name:'ENGLISH',
    },
    {
        name:'ESTONIAN',
    },
    {
        name:'FINNISH',
    },
    {
        name:'GEORGIAN',
    },
    {
        name:'GERMAN',
    }, {
        name:'GREEK',
    }, {
        name:'HEBREW',
    }, {
        name:'HINDI',
    }, {
        name:'HUNGARIAN',
    }, {
        name:'ICELANDIC',
    }, {
        name:'INDONESIAN',
    }, {
        name:'IRISH',
    }, {
        name:'ITALIAN',
    }, {
        name:'JAPANESE',
    }, {
        name:'KOREAN',
    }, {
        name:'LATIN',
    }, {
        name:'LATVIAN',
    }, {
        name:'LITHUANIAN',
    }, {
        name:'MACEDONIAN',
    },
    {
        name:'NORWEGIAN',
    },
    {
        name:'PERSIAN',
    },
    {
        name:'POLISH',
    },
    {
        name:'PORTUGUESE',
    },
    {
        name:'ROMANIAN',
    },
    {
        name:'RUSSIAN',
    },
    {
        name:'SERBIAN',
    },
    {
        name:'SLOVAK',
    },
    {
        name:'SLOVENIAN',
    },
    {
        name:'SPANISH',
    },
    {
        name:'SWEDISH',
    },
    {
        name:'TURKISH',
    },
    {
        name:'UKRAINIAN',
    },
    {
        name:'VIETNAMESE',
    }
];

const filterTitle=['Categories','Languages'];

const midSectionTitle=['Recent stories','Popular stories'];

const rightSectionTitle=['My stories','Saved stories', 'Drafts'];

const sampleStories=[
    {
        title: 'Planet oxsk',
        category: ['science fiction','epic','fantasy'],
        comments: 6,
        creator:{
            name:'taleguild',
            nickName: 'Wizard of TaleGuild',
            profileImage: 'https://api.taleguild.com/uploads/thumbnail_wizard_of_taleguild_avatar_0bacb785f6.png',
        },
        createdAt: '5 months ago',
        description: 'A simple description',
        likes: 5,
        saves: 2,
        titleImage: 'https://api.taleguild.com/uploads/small_taleguild_epic_fantasy_img_01_4113f1e58c.png',
        views: 8,
    },
    {
        title: 'Planet oxsk 2',
        category: ['science fiction','epic','fantasy'],
        comments: 6,
        creator:{
            name:'taleguild',
            nickName: 'Wizard of TaleGuild 2',
            profileImage: 'https://api.taleguild.com/uploads/thumbnail_wizard_of_taleguild_avatar_0bacb785f6.png',
        },
        createdAt: '5 months ago',
        description: 'A simple description 2',
        likes: 5,
        saves: 2,
        titleImage: 'https://api.taleguild.com/uploads/small_taleguild_epic_fantasy_img_01_4113f1e58c.png',
        views: 8,
    },
];

export {
    categories,
    languages,
    rightSectionTitle,
    midSectionTitle,
    filterTitle,
    sampleStories
};