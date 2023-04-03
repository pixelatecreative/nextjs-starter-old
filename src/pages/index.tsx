import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Index() {
  return (
    <Main
      meta={
        <Meta
          title="Pixelate Starter • Anasayfa"
          description="Pixelate Starter projesi anasayfasıdır."
        />
      }
    >
      <h1>Pixelate Starter</h1>
    </Main>
  );
}
