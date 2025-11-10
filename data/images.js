// Centralized image database - add new images here only once
export const IMAGES = {
    'before after 2': {
        filename: 'IMG_9371.jpeg',
        title: 'before after 2',
        size: '80 x 100 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
    'before after': {
        filename: 'IMG_9285.jpeg',
        title: 'before after',
        size: '80 x 100 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
    'lemon soda': {
        filename: 'IMG_8951.jpeg',
        title: 'lemon soda',
        size: '50 x 50 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
     'watermelon': {
        filename: '8416840e-c3b2-4d1c-b506-0b63f35223a0.jpeg',
        title: 'watermelon',
        size: '80 x 100 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
    'idle hours': {
        filename: '532de5ee-d8b8-4c1b-a3d0-fd99fbd80bdf.jpeg',
        title: 'idle hours',
        size: '80 x 100 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
        'chrysanthemums and roses': {
        filename: 'sold_IMG_8811.jpeg',
        title: 'chrysanthemums and roses',
        size: '80 x 100 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'pink flowers and chrysanthemum': {
        filename: '5_pink flowers and chrysantemu_1560.jpeg',
        title: 'pink flowers and chrysanthemum',
        size: '80 x 100 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
    'turtle neck sweater': {
        filename: 'sold_IMG_8756.jpeg',
        title: 'turtle neck sweater',
        size: '40 x 50 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'peonies in blue interior': {
        filename: 'sold_IMG_8597.jpeg',
        title: 'peonies in blue interior',
        size: '50 x 50 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'gown': {
        filename: 'sold_IMG_8220.jpeg',
        title: 'gown',
        size: '60 x 60 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'pink dress': {
        filename: 'sold_pink dress_70x100cm_1200EUR.jpeg',
        title: 'pink dress',
        size: '80 x 100 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'untitled #20 (red thread series)': {
        filename: 'sold_IMG_7631.jpeg',
        title: 'untitled #20 (red thread series)',
        size: '80 x 100 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'apple': {
        filename: 'sold_IMG_7401.jpeg',
        title: 'apple',
        size: '80 x 80 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'three girls': {
        filename: 'sold_IMG_7373.jpeg',
        title: 'three girls',
        size: '80 x 100 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'frilly collar': {
        filename: 'sold_IMG_7263.jpeg',
        title: 'frilly collar',
        size: '60 x 60 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'velvety': {
        filename: 'sold_83522af4-ccc6-4360-8a14-9fb5886dd8e7.jpeg',
        title: 'velvety',
        size: '80 x 100 cm',
        year: '2025',
        status: 'sold out',
        medium: 'oil on canvas'
    },
    'untitled #18': {
        filename: 'renewed_IMG_7666.jpeg',
        title: 'untitled #18',
        size: '80 x 80 cm',
        year: '2024',
        status: 'available',
        medium: 'oil on canvas'
    },
    'untitled #21': {
        filename: 'IMG_7791.jpeg',
        title: 'untitled #21',
        size: '80 x 100 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
    'dark blue interior': {
        filename: 'IMG_7406.jpeg',
        title: 'dark blue interior',
        size: '80 x 100 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
    'two bowls with mandarins and oranges': {
        filename: 'IMG_8615.jpg',
        title: 'two bowls with mandarins and oranges',
        size: '60 x 60 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
    'cozy rustical': {
        filename: '8_cozy rustical_460.jpeg',
        title: 'cozy rustical',
        size: '50 x 50 cm',
        year: '2025',
        status: 'available',
        medium: 'oil on canvas'
    },
       'two women in heels and headbands': {
        filename: 'IMG_6368.jpeg',
        title: 'two women in heels and headbands',
        size: '80 x 100 cm',
        year: '2024',
        status: 'available',
        medium: 'oil on canvas'
    }
};

// Category assignments - define which images appear in which categories
export const CATEGORIES = {
    // Portfolio categories
    'portfolio-people': [
        'pink dress',
        'chrysanthemums and roses',
        'pink flowers and chrysanthemum',
        'turtle neck sweater',
        'gown',
        'untitled #20 (red thread series)',
        'apple',
        'three girls',
        'frilly collar',
        'untitled #21',
        'dark blue interior',
        'lemon soda',
        'watermelon',
        'two women in heels and headbands',
        'idle hours'
    ],
    'portfolio-still-lives': ['peonies in blue interior', 'two bowls with mandarins and oranges'],
    'portfolio-interiors': ['velvety', 'before after', 'before after 2'],
    'portfolio-animals': ['untitled #18', 'cozy rustical'],
    'portfolio-drawings': [],

    // Archive categories
    'archive-2016-2018': [],
    'archive-2019': [],
    'archive-2020': [],
    'archive-2021': [],
    'archive-2022': [],
    'archive-2023': [],
    'archive-2024': ['two women in heels and headbands', 'untitled #18',],
    'archive-2025': [
        'before after 2',
        'before after',
        'watermelon',
        'idle hours',
        'lemon soda',
        'cozy rustical',
        'two bowls with mandarins and oranges',
        'velvety',
        'chrysanthemums and roses',
        'pink flowers and chrysanthemum',
        'turtle neck sweater',
        'peonies in blue interior',
        'gown',
        'untitled #20 (red thread series)',
        'apple',
        'three girls',
        'frilly collar',
        'pink dress',
        'untitled #21',
        'dark blue interior',
        
        
        
        
               
    ]
};

// Helper function to get images for a specific category
export function getImagesForCategory(categoryKey) {
    const imageKeys = CATEGORIES[categoryKey] || [];
    return imageKeys.map((key) => ({
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
