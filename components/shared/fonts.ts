import { Inter, Lusitana } from 'next/font/google'
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const inter = Inter({ subsets: ['latin'] })

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
