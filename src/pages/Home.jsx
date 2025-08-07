import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Users, Award, Clock, Star } from 'lucide-react'
import heroImage from '../assets/hero-landscape.jpg'
import sustainabilityImage from '../assets/sustainability.jpg'

const Home = () => {
  const services = [
    {
      title: 'Licenciamento Ambiental',
      description: 'Obtenção de licenças ambientais municipais e estaduais para seu empreendimento.',
      icon: '🏭'
    },
    {
      title: 'Regularização Rural',
      description: 'CAR, outorgas, supressão de vegetação e adequação às normas ambientais rurais.',
      icon: '🌱'
    },
    {
      title: 'Assessoria e Consultoria Técnica',
      description: 'Acompanhamento de processos e suporte técnico especializado.',
      icon: '📋'
    },
    {
      title: 'Projetos e Monitoramento',
      description: 'Elaboração de projetos técnicos e monitoramento da qualidade ambiental.',
      icon: '🔬'
    }
  ]

  const differentials = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Atendimento técnico e humanizado',
      description: 'Linguagem clara e foco nas necessidades de cada cliente'
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Relação sólida com os órgãos ambientais',
      description: 'Experiência e credibilidade junto aos órgãos reguladores'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: 'Embasamento legal atualizado',
      description: 'Conhecimento técnico aprofundado e sempre atualizado'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: 'Suporte contínuo',
      description: 'Acompanhamento antes, durante e após o processo'
    }
  ]

  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'Fazenda Santa Clara',
      rating: 5,
      text: 'Excelente atendimento! A Ecoa nos ajudou com toda a regularização ambiental da nossa propriedade rural. Profissionais muito competentes e atenciosos.'
    },
    {
      name: 'João Santos',
      company: 'Indústria Metalúrgica JM',
      rating: 5,
      text: 'Conseguimos nossa licença ambiental de forma rápida e eficiente. A equipe da Ecoa é muito profissional e conhece bem os processos.'
    },
    {
      name: 'Ana Costa',
      company: 'Empreendimentos Verdes',
      rating: 5,
      text: 'Recomendo a Ecoa para qualquer empresa que precise de consultoria ambiental. Eles facilitaram todo o processo burocrático para nós.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">ECOA</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Consultoria Ambiental</p>
          <Button 
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4"
          >
            <a 
              href="https://wa.me/5531992351153?text=Olá! Gostaria de falar com um especialista da Ecoa Consultoria Ambiental."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com um especialista
            </a>
          </Button>
        </div>
      </section>

      {/* Sobre a Ecoa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ecoa Consultoria Ambiental
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A Ecoa é uma consultoria ambiental registrada no CRQ e inscrita no IBAMA, que desde 2017 
                oferece soluções em licenciamento ambiental, regularizações rurais e sustentabilidade aplicada. 
                Com sede em Conselheiro Lafaiete, Minas Gerais, é representante do setor de serviços ambientais 
                no CODEMA do município.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nosso trabalho busca ser uma ponte técnica e acessível entre o cliente e os órgãos ambientais, 
                garantindo conformidade legal, atendimento humanizado e tranquilidade de deixar toda burocracia 
                sob nossa responsabilidade.
              </p>
              <Button 
                asChild
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <a 
                  href="https://wa.me/5531992351153?text=Olá! Gostaria de falar com um especialista da Ecoa Consultoria Ambiental."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale com um especialista
                </a>
              </Button>
            </div>
            <div>
              <img 
                src={sustainabilityImage} 
                alt="Sustentabilidade e meio ambiente" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que fazemos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em consultoria ambiental para empresas e propriedades rurais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    asChild
                  >
                    <a href="/servicos">Saiba mais</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos diferenciais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos diferenciais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Por que escolher a Ecoa para sua consultoria ambiental
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {differential.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {differential.title}
                </h3>
                <p className="text-gray-600">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a 
                href="https://wa.me/5531992351153?text=Olá! Gostaria de solicitar um orçamento gratuito da Ecoa Consultoria Ambiental."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicite um orçamento gratuito
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600">
              Depoimentos de quem confia na Ecoa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

