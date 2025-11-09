import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive2022Page() {
    const images = getImagesForCategory('archive-2022');

    return <ImageGallery images={images} title="Archive 2022" />;
}