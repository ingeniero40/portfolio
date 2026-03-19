import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Acceso defensivo a los datos del JSON
const rawImages = (data as any)?.placeholderImages || [];
export const PlaceHolderImages: ImagePlaceholder[] = Array.isArray(rawImages) ? rawImages : [];

// Objeto de respaldo en caso de que no se encuentre ninguna imagen o el ID sea inválido
const defaultPlaceholder: ImagePlaceholder = {
  id: 'default',
  description: 'Default placeholder',
  imageUrl: 'https://picsum.photos/seed/default/800/600',
  imageHint: 'professional placeholder'
};

/**
 * Obtiene un objeto de imagen de marcador de posición por su ID.
 * Implementa una lógica defensiva para evitar errores de 'undefined'.
 */
export function getPlaceholderById(id: string): ImagePlaceholder {
  if (PlaceHolderImages.length === 0) {
    return defaultPlaceholder;
  }
  
  const found = PlaceHolderImages.find(img => img.id === id);
  return found || PlaceHolderImages[0] || defaultPlaceholder;
}