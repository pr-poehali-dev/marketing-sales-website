import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">MARKETING & SALES</h1>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">Команда</button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Профессиональный маркетинг для вашего бизнеса</h2>
              <p className="text-xl mb-8 text-white/90">Увеличиваем продажи и строим узнаваемость бренда через эффективные маркетинговые стратегии</p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('contacts')} size="lg" variant="secondary" className="font-semibold">
                  Получить консультацию
                </Button>
                <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/1c088ca1-c66f-47a3-a9e9-7ba1b9882eb3.jpg" 
                alt="Marketing Strategy" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Комплексные решения для развития вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
                <CardTitle>Стратегический маркетинг</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Разработка долгосрочных стратегий роста и позиционирования на рынке
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Digital-маркетинг</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Продвижение в интернете, SMM, контекстная реклама, SEO-оптимизация
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-primary" size={24} />
                </div>
                <CardTitle>Отдел продаж</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Построение и оптимизация систем продаж, обучение персонала
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-primary" size={24} />
                </div>
                <CardTitle>Аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Анализ рынка, конкурентов, эффективности маркетинговых кампаний
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда профессионалов с многолетним опытом в сфере маркетинга и продаж. 
                Наша миссия — помогать бизнесу расти через эффективные маркетинговые решения и 
                инновационные подходы к продажам.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                За годы работы мы реализовали более 200 проектов для компаний различного масштаба — 
                от стартапов до крупных корпораций.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl">Индивидуальный подход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Каждый проект уникален. Мы разрабатываем стратегии под конкретные цели и особенности вашего бизнеса.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl">Измеримые результаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Работаем на результат с постоянным мониторингом KPI и прозрачной отчетностью.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl">Комплексный подход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    От стратегии до реализации — все услуги под ключ для максимальной эффективности.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Эксперты с подтвержденным опытом в маркетинге и продажах</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Алексей Иванов", role: "Директор по маркетингу", icon: "User" },
              { name: "Мария Петрова", role: "Руководитель отдела продаж", icon: "User" },
              { name: "Дмитрий Смирнов", role: "Digital-стратег", icon: "User" },
              { name: "Анна Волкова", role: "Аналитик", icon: "User" }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} className="text-primary" size={48} />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Компания</label>
                <Input placeholder="Название компании" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea placeholder="Расскажите о вашем проекте..." rows={6} />
              </div>
              
              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Phone" className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Mail" className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@marketing-sales.ru</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="MapPin" className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Примерная, 10</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MARKETING & SALES</h3>
              <p className="text-white/80">Профессиональные решения для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Стратегический маркетинг</li>
                <li>Digital-маркетинг</li>
                <li>Отдел продаж</li>
                <li>Аналитика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Кейсы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@marketing-sales.ru</li>
                <li>Москва, ул. Примерная, 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 Marketing & Sales. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
