import type { Metadata } from 'next';

import { AppConfig } from '@/utils/app-config';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function Page() {
  return <h1 className={styles.h1}>{AppConfig.title}</h1>;
}
