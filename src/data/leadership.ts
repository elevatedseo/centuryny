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
  { name: 'Alexandra Bruno', title: 'Managing Director, Operations', image: null, sourceFilename: 'Alexandra-Bruno-300x440.jpg', verification: 'missing-reviewed-asset' },
  { name: 'Michael Donuk', title: 'Managing Director, Property Management', image: null, sourceFilename: 'Michael-Donuk.jpg', verification: 'missing-reviewed-asset' },
  { name: 'Russell Heigel', title: 'Managing Director', image: null, sourceFilename: 'Russel-Heigel.jpg', verification: 'missing-reviewed-asset' },
  { name: 'Adam Zerka', title: 'Managing Director', image: null, sourceFilename: 'Adam-Zerka.jpg', verification: 'missing-reviewed-asset' },
  { name: 'Yahaira Barrera', title: 'Director of Operations', image: null, sourceFilename: 'image4r4r.jpg', verification: 'missing-reviewed-asset' },
  { name: 'Maggie Nieves Sosa', title: 'Director of Closing & Transfer Department', image: null, sourceFilename: 'Maggie-Nieves1.jpg', verification: 'missing-reviewed-asset' },
];
