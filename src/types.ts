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

export interface ImageSet {
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface ProductIncludes {
    quantity: number;
    item: string;
}

export interface GalleryImages {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
}

export interface ProductOther {
    slug: string;
    name: string;
    image: ImageSet;
}


