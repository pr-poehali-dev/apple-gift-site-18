import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const giftCards = [
    { id: 1, amount: 1000, price: 1000, image: '/img/b668cd3d-1c2e-4784-a76c-f565cbff83d4.jpg' },
    { id: 2, amount: 2000, price: 2000, image: '/img/b668cd3d-1c2e-4784-a76c-f565cbff83d4.jpg' },
    { id: 3, amount: 5000, price: 5000, image: '/img/b668cd3d-1c2e-4784-a76c-f565cbff83d4.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F7]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" size={24} className="text-[#007AFF]" />
              <h1 className="text-xl font-semibold text-gray-900">Apple Gift Cards</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-gray-900 transition-colors">Каталог</a>
              <a href="#payment" className="text-gray-600 hover:text-gray-900 transition-colors">Оплата</a>
              <a href="#contacts" className="text-gray-600 hover:text-gray-900 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#007AFF] to-[#5856D6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-6xl font-light mb-6 tracking-tight">Apple Gift Cards</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Дарите возможности. Получайте любимые приложения, игры, музыку и многое другое.
            </p>
            <Button size="lg" className="bg-white text-[#007AFF] hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Выбрать карту
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-gray-900 mb-4">Выберите номинал</h3>
            <p className="text-gray-600 text-lg">Мгновенная доставка на email</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card key={card.id} className="relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Gift" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-light text-center">{card.amount} ₽</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-light text-gray-900 mb-2">{card.price} ₽</p>
                    <p className="text-sm text-gray-500">Мгновенная доставка</p>
                  </div>
                  <Button className="w-full bg-[#007AFF] hover:bg-[#0056CC] text-white py-3">
                    Купить сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-gray-900 mb-4">Быстрая покупка</h3>
            <p className="text-gray-600 text-lg">Заполните форму и получите карту мгновенно</p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-center">Оформление заказа</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="amount" className="text-sm font-medium text-gray-700">Номинал</Label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007AFF] focus:border-transparent">
                    <option>1000 ₽</option>
                    <option>2000 ₽</option>
                    <option>5000 ₽</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Имя получателя</Label>
                <Input id="name" placeholder="Иван Иванов" className="mt-1" />
              </div>
              <Button className="w-full bg-[#007AFF] hover:bg-[#0056CC] text-white py-3 text-lg">
                Оплатить картой
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-[#F2F2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-gray-900 mb-4">Контакты</h3>
            <p className="text-gray-600 text-lg">Мы готовы помочь вам 24/7</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Icon name="Mail" size={32} className="text-[#007AFF] mx-auto mb-4" />
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <p className="text-gray-600">support@giftcards.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Icon name="Phone" size={32} className="text-[#007AFF] mx-auto mb-4" />
                <h4 className="text-lg font-medium mb-2">Телефон</h4>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Icon name="MessageCircle" size={32} className="text-[#007AFF] mx-auto mb-4" />
                <h4 className="text-lg font-medium mb-2">Чат</h4>
                <p className="text-gray-600">Онлайн поддержка</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Gift" size={20} className="text-[#007AFF]" />
              <span className="text-sm text-gray-600">Apple Gift Cards</span>
            </div>
            <p className="text-sm text-gray-500">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;