import type { Metadata } from 'next';

import { AppConfig } from '@/utils/app-config';

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function Page() {
  return <h1>{AppConfig.title}</h1>;
}
