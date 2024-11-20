/*

package.json dosyası, bir Node.js projesinin yapılandırma dosyasıdır ve projeye dair tüm önemli bilgileri barındırır. Bu dosya, bağımlılıkları, komutları, sürüm bilgilerini ve proje hakkında açıklamaları içerir.


1. name
Projenin adı. Bu, npm (Node Package Manager) üzerinde veya diğer ortamlar tarafından proje tanımlanırken kullanılır.
Örnek:  "name": "my-app"

2. version
Projenin sürümünü  belirtir
Örnek:  "version": "1.0.0"

3. description
Projeye dair kısa bir açıklama. Proje hakkında bilgi verir.
Örnek:  "description": "A simple web application built with Node.js"

4. main
Projenin giriş noktası (başlangıç dosyası). Bu, Node.js'in projeyi çalıştırırken ilk olarak yükleyeceği dosyadır. Genellikle index.js veya app.js gibi bir dosya olur.
Örnek:  "main": "index.js"

5. author
Projenin yazarı veya geliştiren kişi/kişiler hakkında bilgi verir.
Örnek:  "author": "John Doe"

6. dependencies
Projenin çalışabilmesi için gerekli olan bağımlılıklar. Bu anahtar altında, proje için kullanılan npm paketleri yer alır. Paketler ve sürümleri belirtilir.
Örnek:
"dependencies": {
  "express": "^4.17.1",
  "mongoose": "^5.9.10"
}

7. devDependencies
Proje geliştirilirken kullanılan, ancak üretim ortamında gerekmeyen bağımlılıklar. Örneğin, test kütüphaneleri, geliştirme araçları (webpack, babel, nodemon vb.) burada yer alır.
Örnek:
json
Kodu kopyala
"devDependencies": {
  "nodemon": "^2.0.4",
  "mocha": "^8.2.1"
}

** 8. scripts
Projeye ait betikler (scripts). Bu anahtar, proje ile ilgili komutları tanımlamak için kullanılır. Örneğin, test komutları veya proje başlatma komutları burada yer alır.
Yaygın örnekler:
start: Projeyi başlatmak için kullanılan komut (genellikle node index.js).
test: Testleri çalıştırmak için komut.
dev: Geliştirme ortamında çalıştırmak için komut.
Örnek:
"scripts": {
  "start": "node index.js",
  "test": "mocha",
  "dev": "nodemon index.js"
}

** 9. keywords
Proje ile ilgili anahtar kelimeler. Bu, projenin npm üzerinde daha kolay bulunmasını sağlar. Genellikle proje türüne dair kelimeler eklenir.
Örnek:  "keywords": ["node", "express", "web-app"]

** 10. license
Projenin lisans türünü belirtir. Bu, projenin nasıl kullanılabileceğini ve dağıtılabileceğini tanımlar. En yaygın lisanslar arasında MIT, GPL-3.0, Apache-2.0 vb. bulunur.
Örnek:  "license": "MIT"

** 11. engines
Projenin çalışması için gerekli olan Node.js sürümünü veya diğer ortamları belirten bir anahtardır. Bu, projenin yalnızca belirli sürümlerde çalışmasını sağlamak için kullanılır.
Örnek:
"engines": {
  "node": ">=14.0.0"
}

** 12. repository
Projenin kaynak kodunun bulunduğu depo (repository) bilgisi. GitHub veya diğer versiyon kontrol sistemlerine işaret eder.
Örnek:
"repository": {
  "type": "git",
  "url": "https://github.com/user/my-app.git"
}

** 13. bugs
Projede karşılaşılan hatalarla ilgili iletişim kurulacak yer. Genellikle bir GitHub issues sayfasına bağlantı verilir.
Örnek:
"bugs": {
  "url": "https://github.com/user/my-app/issues"
}

** 14. homepage
Projenin ana sayfası ya da canlı demo bağlantısı. Proje hakkında daha fazla bilgi almak isteyen kullanıcılar için bir bağlantı sunar.
Örnek:
"homepage": "https://my-app.com"

** 15. config
Proje için özel yapılandırma ayarlarının saklandığı alandır. Genellikle özel ayarları içeren anahtarlar burada tanımlanabilir.
Örnek:
"config": {
  "port": "3000"
}







*/
