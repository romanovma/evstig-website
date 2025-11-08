// Centralized image database - add new images here only once
export const IMAGES = {
    'untitled-fragment': {
        filename: '11668259-WPVHXNIG-6.jpg',
        title: 'Untitled Fragment',
        size: '60 x 80 cm',
        year: '2023',
        status: 'Available',
        medium: 'Acrylic and Oil on Canvas'
    },
    'morning-reflection': {
        filename: '11751521-ZGGPOUGM-6.jpg',
        title: 'Morning Reflection',
        size: '50 x 70 cm',
        year: '2024',
        status: 'Sold out',
        medium: 'Acrylic and Oil on Canvas'
    },
    'abstract-portrait-3': {
        filename: '11825369-IGCXFMVJ-6.jpg',
        title: 'Abstract Portrait No. 3',
        size: '45 x 60 cm',
        year: '2023',
        status: 'Available',
        medium: 'Acrylic and Oil on Canvas'
    },
    'contemplation': {
        filename: '11825407-KWEUJXJL-6.jpg',
        title: 'Contemplation',
        size: '70 x 90 cm',
        year: '2024',
        status: 'Sold out',
        medium: 'Acrylic and Oil on Canvas'
    },
    'study-in-light': {
        filename: '11825439-XKCRVTGE-6.jpg',
        title: 'Study in Light',
        size: '40 x 55 cm',
        year: '2023',
        status: 'Available',
        medium: 'Acrylic and Oil on Canvas'
    },
    'evening-shadows': {
        filename: '11829185-NKIPWYBI-6.jpg',
        title: 'Evening Shadows',
        size: '65 x 85 cm',
        year: '2024',
        status: 'Available',
        medium: 'Acrylic and Oil on Canvas'
    },
    'inner-landscape': {
        filename: '11949687-XOVOBOEH-6.jpg',
        title: 'Inner Landscape',
        size: '55 x 75 cm',
        year: '2023',
        status: 'Sold out',
        medium: 'Acrylic and Oil on Canvas'
    },
    'quiet-moment': {
        filename: '12006253-VWLQODMZ-6.jpg',
        title: 'Quiet Moment',
        size: '50 x 65 cm',
        year: '2024',
        status: 'Available',
        medium: 'Acrylic and Oil on Canvas'
    },
    'fragment-of-memory': {
        filename: '12011951-KEYRDVIV-6.jpg',
        title: 'Fragment of Memory',
        size: '60 x 80 cm',
        year: '2023',
        status: 'Sold out',
        medium: 'Acrylic and Oil on Canvas'
    },
    'atmospheric-study': {
        filename: '12072631-XGKUXYAT-6.jpg',
        title: 'Atmospheric Study',
        size: '45 x 60 cm',
        year: '2024',
        status: 'Available',
        medium: 'Acrylic and Oil on Canvas'
    },
    'untitled-portrait': {
        filename: '12107375-YLNGQJFA-6.jpg',
        title: 'Untitled Portrait',
        size: '70 x 95 cm',
        year: '2023',
        status: 'Available',
        medium: 'Acrylic and Oil on Canvas'
    },
    'silent-conversation': {
        filename: '12165847-NAXVHSYO-6.jpg',
        title: 'Silent Conversation',
        size: '55 x 70 cm',
        year: '2024',
        status: 'Sold out',
        medium: 'Acrylic and Oil on Canvas'
    },
    'abstract-figure': {
        filename: '12323969-QWEKFGJP-6.jpg',
        title: 'Abstract Figure',
        size: '50 x 65 cm',
        year: '2023',
        status: 'Available',
        medium: 'Acrylic and Oil on Canvas'
    },
    'temporal-form': {
        filename: '12374871-JCQLPUFF-6.jpg',
        title: 'Temporal Form',
        size: '65 x 85 cm',
        year: '2024',
        status: 'Sold out',
        medium: 'Acrylic and Oil on Canvas'
    }
};

// Category assignments - define which images appear in which categories
export const CATEGORIES = {
    // Portfolio categories
    'portfolio-people': [
        'untitled-fragment',
        'morning-reflection',
        'abstract-portrait-3',
        'contemplation',
        'study-in-light',
        'evening-shadows',
        'inner-landscape',
        'quiet-moment',
        'fragment-of-memory',
        'atmospheric-study',
        'untitled-portrait',
        'silent-conversation',
        'abstract-figure',
        'temporal-form'
    ],
    'portfolio-still-lives': [
        'abstract-portrait-3',
        'inner-landscape',
        'atmospheric-study'
    ],
    'portfolio-interiors': [
        'morning-reflection',
        'evening-shadows',
        'silent-conversation'
    ],
    'portfolio-animals': [
        'contemplation',
        'quiet-moment'
    ],
    'portfolio-drawings': [
        'study-in-light',
        'untitled-portrait',
        'abstract-figure'
    ],

    // Archive categories
    'archive-2023': [
        'untitled-fragment',
        'fragment-of-memory'
    ],
    'archive-2024': [
        'temporal-form'
    ]
};

// Helper function to get images for a specific category
export function getImagesForCategory(categoryKey) {
    const imageKeys = CATEGORIES[categoryKey] || [];
    return imageKeys.map(key => ({
        id: key,
        ...IMAGES[key]
    }));
}

// Helper function to get all categories an image appears in
export function getCategoriesForImage(imageKey) {
    const categories = [];
    for (const [categoryKey, imageKeys] of Object.entries(CATEGORIES)) {
        if (imageKeys.includes(imageKey)) {
            categories.push(categoryKey);
        }
    }
    return categories;
}