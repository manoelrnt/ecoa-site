import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Users, Award, Eye, Heart, Shield } from 'lucide-react'
import professionalsImage from '../assets/professionals.jpg'
import environmentImage from '../assets/environment-business.png'

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Ética e transparência',
      description: 'Conduzimos nossos trabalhos com total transparência e ética profissional'
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Responsabilidade técnica e legal',
      description: 'Assumimos total responsabilidade técnica por nossos serviços'
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: 'Compromisso com o cliente',
      description: 'Nosso foco é sempre atender as necessidades específicas de cada cliente'
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Respeito ao território e ao meio ambiente',
      description: 'Valorizamos a sustentabilidade e o respeito ao meio ambiente'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Atualização constante',
      description: 'Mantemos nossa equipe sempre atualizada com as melhores práticas'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: 'Valorização do diálogo com os órgãos ambientais',
      description: 'Cultivamos relacionamentos sólidos com os órgãos reguladores'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Quem Somos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça a história, missão e valores da Ecoa Consultoria Ambiental
          </p>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Fundada em 2017, a Ecoa é uma consultoria ambiental especializada em transformar as 
                exigências legais em soluções técnicas viáveis e alinhadas à realidade de cada cliente. 
                Atuamos em toda a região, atendendo propriedades rurais, empreendimentos e empresas que 
                precisam se adequar às normas ambientais.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Oferecemos suporte técnico contínuo, linguagem clara e foco em resultados efetivos, 
                sempre buscando facilitar o diálogo entre clientes, meio ambiente e órgãos reguladores.
              </p>
            </div>
            <div>
              <img 
                src={professionalsImage} 
                alt="Equipe de profissionais" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={environmentImage} 
                alt="Meio ambiente e sustentabilidade" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Equipe</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nossa equipe é formada por profissionais ambientais com formação no Brasil e nos EUA, 
                incluindo especializações e mestrado em áreas como Tecnologia para o Desenvolvimento 
                Sustentável, com expertise em licenciamento ambiental, monitoramento, tratamento de 
                água e efluentes, entre outras áreas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Além disso, a Ecoa possui participação ativa na diretoria da Associação Regional de 
                Proteção Ambiental (ARPA) do Alto Paraopeba e Vale do Piranga, reforçando o compromisso 
                com o fortalecimento do setor ambiental na região.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações e Experiência */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certificações e Experiência</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Registrada no Conselho Regional de Química (CRQ) e habilitada pelo Cadastro Técnico 
                Federal do IBAMA, a Ecoa tem sólida experiência em licenciamento ambiental, tratamento 
                de água e efluentes, monitoramento e regularizações rurais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atuação Regional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Atuação Regional e Representatividade</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Com sede em Conselheiro Lafaiete, Minas Gerais, a Ecoa possui representatividade 
                institucional no Conselho Municipal de Meio Ambiente (CODEMA), participando ativamente 
                das decisões e políticas ambientais locais.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Essa atuação reforça nosso compromisso com a legalidade, sustentabilidade e a escuta 
                das demandas territoriais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Visão */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Visão</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Ser referência em consultoria ambiental no estado de Minas Gerais, reconhecida pela 
                excelência técnica, responsabilidade institucional e atuação ética junto aos clientes 
                e órgãos reguladores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa atuação e relacionamento com clientes e parceiros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Compromisso */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Nosso Compromisso</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Nosso trabalho é facilitar o diálogo entre clientes, meio ambiente e órgãos reguladores, 
            combinando conhecimento técnico aprofundado com atenção às particularidades regionais e 
            necessidades individuais.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About

