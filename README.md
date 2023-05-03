Bu bir [Next.js](https://nextjs.org/) uygulamasıdır ve Pixelate Creative içinde geliştirilen projeler için template görevi üstlenmektedir.

## Template Kullanımı

Projede [yarn](https://yarnpkg.com/) ile paket yönetimi yapılmaktadır. Projede hangi paket yöneticisinin olduğunu otomatik olarak algılayan [antfu/ni](https://github.com/antfu/ni) paketi ile çalışma ortamı tamamlanmaktadır. Bunların kurulumları:

```bash
npm i -g @antfu/ni yarn
```

Kurulumlar sonrasında uygulamayı ayağa kaldırmak için aşağıdaki komut şöyle:

```bash
nr dev
```

Bu komut, projeyi [http://localhost:3300](http://localhost:3300) adresinde çalıştıracaktır.
