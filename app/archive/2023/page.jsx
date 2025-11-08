import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive2023Page() {
    const images = getImagesForCategory('archive-2023');

    return <ImageGallery images={images} title="Archive 2023" />;
}