export interface Leader {
  name: string;
  title: string;
  image: string | null;
  sourceFilename: string;
  verification: 'verified-reviewed' | 'missing-reviewed-asset';
}

export const leadership: Leader[] = [
  { name: 'A.J. Rexhepi', title: 'Chief Executive Officer', image: '/assets/about/AJ-Rexhepi-e1426108307628-300x440.jpg', sourceFilename: 'AJ-Rexhepi-e1426108307628-300x440.jpg', verification: 'verified-reviewed' },
  { name: 'Jacob Sirotkin', title: 'Chief Operating Officer', image: '/assets/about/team-jacob-2.jpg', sourceFilename: 'team-jacob-2.jpg', verification: 'verified-reviewed' },
  { name: 'Michael Catanzaro', title: 'Chief Financial Officer', image: '/assets/about/Michael-Catanzaro.jpg', sourceFilename: 'Michael-Catanzaro.jpg', verification: 'verified-reviewed' },
  { name: 'Alexandra Bruno', title: 'Managing Director, Operations', image: '/assets/about/leadership/Alexandra-Bruno.webp', sourceFilename: 'Alexandra-Bruno-300x440.jpg', verification: 'verified-reviewed' },
  { name: 'Michael Donuk', title: 'Managing Director, Property Management', image: '/assets/about/leadership/Michael-Donuk.webp', sourceFilename: 'Michael-Donuk-300x420.jpg', verification: 'verified-reviewed' },
  { name: 'Russell Heigel', title: 'Managing Director', image: '/assets/about/leadership/Russel-Heigel.webp', sourceFilename: 'Russel-Heigel-300x420.jpg', verification: 'verified-reviewed' },
  { name: 'Adam Zerka', title: 'Managing Director', image: '/assets/about/leadership/Adam-Zerka.webp', sourceFilename: 'Adam-Zerka-300x420.jpg', verification: 'verified-reviewed' },
  { name: 'Yahaira Barrera', title: 'Director of Operations', image: '/assets/about/leadership/image4r4r.webp', sourceFilename: 'image4r4r-300x420.jpg', verification: 'verified-reviewed' },
  { name: 'Maggie Nieves Sosa', title: 'Director of Closing & Transfer Department', image: '/assets/about/leadership/Maggie-Nieves1.webp', sourceFilename: 'Maggie-Nieves1-300x420.jpg', verification: 'verified-reviewed' },
];
