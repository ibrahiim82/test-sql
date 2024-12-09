/*
SCSS
CSS Preprosessorler
CSS preprosessorler, CSS'in geliştirilmiş ve genişletilmiş versiyonlarını oluşturmak için kullanılan araçlardır. Bu araçlar, CSS yazımını daha etkili, modüler ve yönetilebilir hale getirmek için çeşitli özellikler sunarlar. CSS preprosessorler, daha sonra CSS'e derlenerek tarayıcılar tarafından anlaşılabilen düz CSS koduna dönüştürülür.

CSS preprosessorlerin sağladığı temel özellikler şunlardır:
Değişkenler: Değerleri depolayarak tekrar kullanılabilirlik sağlar. Değişkenler, stil kodunda kullanılan renkler, fontlar, uzunluklar gibi değerleri tek bir yerden yönetmeyi ve kolayca değiştirmeyi sağlar.
Nesting: CSS kurallarını iç içe geçmiş bir yapıda yazmayı sağlar. Bu sayede, karmaşık veya derinlemesine seçicilere gerek kalmadan daha düzenli ve okunabilir bir stil kodu oluşturulabilir.
Mixinler: Tekrar kullanılabilir stil bloklarını tanımlayarak stil özelliklerini kolayca eklemeyi sağlar. Mixinler, stil kodunda kullanılan karmaşık veya tekrar eden stil tanımlarını birleştirmek için kullanılır.
Partials ve @import: Büyük stil dosyalarını daha küçük parçalara bölebilir ve yönetilebilir hale getirebilir. Partials, stil kodunun farklı dosyalara bölünerek daha iyi bir organizasyon sağlamasını sağlar. @import ise bu parçaları ana stil dosyasına dahil etmek için kullanılır.
Operatörler: Matematiksel işlemleri ve renk manipülasyonunu destekler. Bu sayede, stil kodunda hesaplamalar yapmak veya renkleri manipüle etmek daha kolay hale gelir.
Koşullu ifadeler: If-else yapısı ile stil kodunu kontrol etmenizi sağlar. Belirli koşullara göre farklı stil tanımları yapabilir veya farklı değerleri kullanabilirsiniz.
CSS preprosessorler, stil kodunun daha iyi bir organizasyon ve daha kolay bir şekilde yazılmasını sağlayarak geliştirme sürecini daha verimli hale getirir. Popüler CSS preprosessorler arasında SCSS (Sassy CSS), Less ve Stylus bulunmaktadır. Bu araçlar, web geliştiricilere CSS yazımını geliştirmek ve daha etkili bir şekilde çalışmak için güçlü araçlar sunarlar.

SCSS Nedir?
SCSS, Sassy CSS'nin kısaltmasıdır ve CSS'e daha fazla özellik ve esneklik ekleyen bir CSS preprosessordür.

SCSS kullanmanın bazı avantajları şunlardır:

Değişkenler: Değerleri depolayarak tekrar kullanılabilirlik sağlar.
Nesting: İç içe geçmiş yapılar oluşturarak kodu daha okunabilir hale getirir.
Mixins: Tekrar kullanılabilir kod bloklarını tanımlayarak stil özelliklerini kolayca ekleyebilirsiniz.
Partials ve @import: Büyük stil dosyalarını daha küçük parçalara bölebilir ve yönetilebilir hale getirebilirsiniz.
Operatörler: Matematiksel işlemleri ve renk manipülasyonunu destekler.
Koşullu ifadeler: If-else yapısı ile stil kodunu kontrol etmenizi sağlar.
SCSS dosyaları, CSS dosyalarına dönüştürülmeden önce SCSS yorumlanır. Bu, daha gelişmiş ve etkili bir şekilde stil kodu yazmanıza olanak tanır.

SASS/SCSS Terminal Komutları
SASS, komut satırı üzerinden çalışabilen bir CSS preprosessor'dür. İşte bazı SASS terminal komutları:

sass --watch input.scss:output.css: `input.scss` dosyasını izleyerek her değişiklikte otomatik olarak `output.css` dosyasını oluşturur.
sass input.scss output.css: `input.scss` dosyasını derleyerek `output.css` dosyasını oluşturur.
sass --watch input-dir:output-dir: `input-dir` klasörünü izleyerek her değişiklikte otomatik olarak `output-dir` klasöründe CSS dosyalarını oluşturur.
sass --style compressed input.scss output.css: `input.scss` dosyasını derleyerek sıkıştırılmış (`compressed`) bir `output.css` dosyası oluşturur.
Bu komutlar, SASS dosyalarınızı derlemek, izlemek ve çıktı almak için kullanılabilir. Komutları terminalde çalıştırarak SASS işlemlerini gerçekleştirebilirsiniz.


    sass --watch input.scss:output.css
    sass input.scss output.css
    sass --watch input-dir:output-dir
    sass --style compressed input.scss output.css
  
Değişkenler
Değişkenler, stil değerlerini depolamak ve tekrar kullanmak için kullanılır.


$primary-color: #007bff;
$secondary-color: #6c757d;

.box {
  color: $primary-color;
  background-color: $secondary-color;
}
    
Nesting (Yerleştirme)
Nesting, iç içe geçmiş stil kuralları oluşturmak için kullanılır.


.box {
  width: 200px;
  height: 200px;

  p {
    color: #333;
  }

  a {
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
}
    
BEM Notasyonu ve SCSS Nesting Örneği
BEM notasyonu ile SCSS kullanarak class isimlerini birleştirebilir ve daha düzenli bir CSS kodu elde edebilirsiniz. Bu, kodunuzun daha okunabilir ve bakımı daha kolay hale gelmesine yardımcı olur.


    <span class="block">
        <span class="block__element">
            <span class="block__element--modifier"></span>
        </span>
    </span>

  .block {
  background-color: #f5f5f5;
  padding: 10px;

  &__element {
    / Element özellikleri

    &--modifier {
        / Modifier özellikleri
    }
  }

  
}
  
Mixin
Mixin, tekrar eden stil kodlarını yeniden kullanmak için kullanılır.


@mixin box-shadow($x, $y, $blur, $color) {
  box-shadow: $x $y $blur $color;
}

.box {
  @include box-shadow(0px, 0px, 5px, rgba(0, 0, 0, 0.3));
}
    
Include
Include, mixin'leri stil koduna dahil etmek için kullanılır.


@mixin box-shadow($x, $y, $blur, $color) {
  box-shadow: $x $y $blur $color;
}

.box {
  @include box-shadow(0px, 0px, 5px, rgba(0, 0, 0, 0.3));
}
    
Operatörler
Operatörler, matematiksel hesaplamaları ve değer manipülasyonunu yapmak için kullanılır.


$box-width: 200px;
$box-height: 150px;
$padding: 20px;

.box {
  width: $box-width;
  height: $box-height;
  padding: $padding;
  margin: ($box-width + $padding) / 2;
}
    
If-Else
If-Else, koşullu ifadeleri kullanarak stil kodunu kontrol etmek için kullanılır.


$box-width: 200px;
$box-height: 150px;

.box {
  @if $box-width > $box-height {
    width: $box-width;
  } @else {
    height: $box-height;
  }
}
    
For Döngüsü
For döngüsü, tekrarlayıcı bir yapı kullanarak stil kodlarını dinamik olarak oluşturmak için kullanılır.


@for $i from 1 through 5 {
  .list-item-#{$i} {
    color: darken($primary-color, $i * 10%);
  }
}
    
Partials ve @import
`Partials`, SCSS dosyalarını daha küçük parçalara bölmek için kullanılan bir yöntemdir. `@import` ise bu parçalara referans yapmamızı sağlar.


    / _variables.scss
    / _mixins.scss
    / styles.scss
     _variables.scss, _mixins.scss ve styles.scss gibi dosya isimleri, partial dosyalarını temsil etmektedir.

    SCSS partial dosyaları _ ile başlar ve genellikle tek bir özelliği veya bir mixin'i içerir. 
    Bu partial dosyaları daha sonra ana stil dosyası olan styles.scss dosyasında @import ile referans alınır.

    Örneğin, styles.scss dosyasında _variables.scss ve _mixins.scss dosyalarını import etmek istediğimizde şu şekilde yapabiliriz:
    @import 'variables';
    @import 'mixins';

    */