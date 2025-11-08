# Image Management System

This system eliminates duplication by centralizing all image data in one place. You only need to define each image once and can then assign it to multiple categories.

## How to Add a New Image

### Step 1: Add Image Data
Add your new image to the `IMAGES` object in `/data/images.js`:

```javascript
export const IMAGES = {
    // ... existing images ...

    'your-new-image-key': {
        filename: 'your-image-file.jpg',
        title: 'Your Image Title',
        size: '50 x 70 cm',
        year: '2024',
        status: 'Available', // or 'Sold out'
        medium: 'Acrylic and Oil on Canvas'
    }
};
```

### Step 2: Assign to Categories
Add the image key to any categories where you want it to appear in the `CATEGORIES` object:

```javascript
export const CATEGORIES = {
    'portfolio-people': [
        // ... existing images ...
        'your-new-image-key'  // Add here to show in People page
    ],
    'portfolio-still-lives': [
        'your-new-image-key'  // Add here to show in Still Lives page
    ],
    // ... other categories
};
```

## Available Categories

### Portfolio Categories:
- `portfolio-people` - People page
- `portfolio-still-lives` - Still Lives page
- `portfolio-interiors` - Interiors page
- `portfolio-animals` - Animals page
- `portfolio-drawings` - Drawings page

### Archive Categories:
- `archive-2016-2018` - Archive 2016-2018 page
- `archive-2019` - Archive 2019 page
- `archive-2020` - Archive 2020 page
- `archive-2021` - Archive 2021 page
- `archive-2022` - Archive 2022 page
- `archive-2023` - Archive 2023 page
- `archive-2024` - Archive 2024 page
- `archive-2025` - Archive 2025 page

## Benefits of This System

1. **No Duplication**: Each image is defined only once
2. **Easy Management**: Add new images in one place
3. **Flexible Assignment**: Same image can appear in multiple categories
4. **Consistent Data**: All pages use the same image metadata
5. **Easy Updates**: Change image status or details in one place

## Example: Adding a New Painting

```javascript
// 1. Add to IMAGES object
'sunset-dreams': {
    filename: 'sunset-dreams-2024.jpg',
    title: 'Sunset Dreams',
    size: '80 x 100 cm',
    year: '2024',
    status: 'Available',
    medium: 'Acrylic and Oil on Canvas'
}

// 2. Add to desired categories
'portfolio-interiors': [
    // existing images...
    'sunset-dreams'
],
'portfolio-people': [
    // existing images...
    'sunset-dreams'
],
'archive-2024': [
    // existing images...
    'sunset-dreams'
]
```

The image will now automatically appear on the Interiors, People, and Archive 2024 pages!