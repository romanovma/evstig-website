import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive2021Page() {
    const images = getImagesForCategory('archive-2021');

    return <ImageGallery images={images} title="Archive 2021" />;
}