export interface PropertyDetail {
  slug: string;
  title: string;
  address: string | null;
  imageFolder: string;
}

export const propertyDetails: PropertyDetail[] = [
  { slug: '160-east-22nd-street-2', title: '160 East 22nd Street', address: 'New York, NY 10010', imageFolder: '160-east-22nd-street' },
  { slug: '205-water-street-2', title: '205 Water Street', address: 'Brooklyn, NY 11201', imageFolder: '205-water-street' },
  { slug: '29-45-tenants-corp-2', title: '29/35/45 East 9th Street', address: 'New York, NY 10003', imageFolder: '29-45-tenants-corp' },
  { slug: '303-east-33rd-street-condo-2', title: '303 East 33rd Street', address: 'New York, NY 10016', imageFolder: '303-east-33rd-street-condo' },
  { slug: '400-park-avenue-south-2', title: '400 Park Avenue South', address: 'New York, NY 10016', imageFolder: '400-park-avenue-south' },
  { slug: '440-east-79th-street-2', title: '440 East 79th Street', address: 'New York, NY 10075', imageFolder: '440-east-79th-street' },
  { slug: '444-east-86th-street-owners-corp', title: '444 East 86th Street', address: 'New York, NY 10028', imageFolder: '444-east-86th-street-owners-corp' },
  { slug: 'brooklyn-pierhouse', title: 'Brooklyn Pierhouse', address: null, imageFolder: 'brooklyn-pierhouse' },
  { slug: 'cherokee-owners-corp-2', title: '508 East 78th Street', address: 'New York, NY 10075', imageFolder: 'cherokee-owners-corp' },
  { slug: 'morgan-house-condominium', title: '153 East 87th Street', address: 'New York, NY 10028', imageFolder: 'morgan-house-condominium' },
  { slug: 'abingdon-condo-2', title: '320 West 12th Street', address: 'New York, NY 10014', imageFolder: 'abingdon-condo' },
];

export const propertyImages = (property: PropertyDetail) =>
  [1, 2, 3].map((number) => `/assets/property-detail/${property.imageFolder}/${number}.webp`);
