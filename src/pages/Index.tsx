import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'Осенний худи',
      price: 2999,
      image: '/img/0038281c-4d36-46ff-a5c8-f452214560d2.jpg',
      rating: 4.9,
      reviews: 47
    },
    {
      id: 2,
      name: 'Винтажная футболка',
      price: 1599,
      image: '/img/4204467a-d813-430e-bad9-bd787a9f7343.jpg',
      rating: 4.8,
      reviews: 32
    },
    {
      id: 3,
      name: 'Сумка для души',
      price: 1299,
      image: '/img/c111bb7b-f483-4e0d-a815-3b5805a2f16f.jpg',
      rating: 4.7,
      reviews: 28
    }
  ];

  const reviews = [
    {
      name: 'Алексей К.',
      text: 'Качество на высоте! Худи очень мягкий и теплый.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Мария С.',
      text: 'Футболка села идеально, ткань приятная к телу.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'Дмитрий Л.',
      text: 'Сумка прочная и стильная, беру уже вторую!',
      rating: 5,
      avatar: '👨‍🚀'
    }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">С</span>
              </div>
              <h1 className="text-xl font-bold text-primary">Саня для души</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={16} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Мерч для души
              <span className="block text-primary mt-2">в осеннем стиле</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Уютная одежда и аксессуары, которые согревают не только тело, но и душу. 
              Каждая вещь создана с любовью для особенных моментов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={addToCart}>
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Heart" size={20} className="mr-2" />
                О бренде
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Популярные товары
            </h2>
            <p className="text-muted-foreground text-lg">
              Самые любимые вещи наших покупателей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90">
                      <Icon name="Star" size={12} className="mr-1 fill-current text-yellow-500" />
                      {product.rating}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()}₽</span>
                    <span className="text-sm text-muted-foreground">{product.reviews} отзывов</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={addToCart}
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button className="flex-1" onClick={addToCart}>
                      Купить сейчас
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Отзывы покупателей
            </h2>
            <p className="text-muted-foreground text-lg">
              Что говорят наши клиенты о наших товарах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">{review.avatar}</div>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-current text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Payment */}
      <section id="delivery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Доставка и оплата
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставим ваш заказ в течение 1-3 дней по всей России</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Удобная оплата</h3>
              <p className="text-muted-foreground">Принимаем карты, переводы и наличные при получении</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">30 дней на возврат и обмен товара</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              О нас
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              «Саня для души» — это не просто бренд одежды, это философия комфорта и уюта. 
              Мы создаем вещи, которые становятся частью вашей жизни, согревают в холодные дни 
              и дарят ощущение домашнего тепла где бы вы ни находились.
            </p>
            <p className="text-muted-foreground mb-8">
              Каждая вещь в нашей коллекции продумана до мелочей: от выбора мягких натуральных 
              тканей до минималистичного дизайна, который никогда не выйдет из моды.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться с нами
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://t.me/prosto_sani13" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram канал
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Footer */}
      <footer className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">С</span>
                </div>
                <span className="font-semibold">Саня для души</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Мерч, который согревает душу и дарит уют в любую погоду.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Худи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Футболки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Помощь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Размеры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Icon name="Mail" size={14} className="mr-2" />
                  @paintion208
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={14} className="mr-2" />
                  <a href="tel:+79521426352" className="hover:text-primary transition-colors">
                    +7 (952) 142-63-52
                  </a>
                </li>
                <li className="flex items-center">
                  <Icon name="MessageCircle" size={14} className="mr-2" />
                  <a href="https://t.me/prosto_sani13" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    @prosto_sani13
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Саня для души. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;