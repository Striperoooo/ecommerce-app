export interface Product {
    id: number;
    slug: string;
    name: string;
    image: ImageSet;
    category: string;
    categoryImage: ImageSet;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: ProductIncludes[];
    gallery: GalleryImages;
    others: ProductOther[];
}

interface ImageSet {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface ProductIncludes {
    quantity: number;
    item: string;
}

interface GalleryImages {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
}

interface ProductOther {
    slug: string;
    name: string;
    image: ImageSet;
}


