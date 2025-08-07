import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Factory, 
  TreePine, 
  FileText, 
  FlaskConical, 
  Droplets, 
  Shield,
  Leaf,
  Building,
  Zap
} from 'lucide-react'

const Services = () => {
  const serviceCategories = [
    {
      title: 'Licenciamento Ambiental Municipal e Estadual',
      icon: <Factory className="w-8 h-8 text-green-600" />,
      services: [
        'Obtenção de Dispensa de Licenciamento Ambiental',
        'Obtenção de Licenciamento Ambiental Simplificado (LAS Cadastro)',
        'Obtenção de Licenciamento Ambiental Trifásico: Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO)',
        'Obtenção de Licenciamento Ambiental Concomitante (LAC)',
        'Obtenção de Licenciamento Ambiental Corretivo',
        'Elaboração de Relatório Ambiental Simplificado (RAS)',
        'Elaboração de Relatório de Controle Ambiental (RCA) e Plano de Controle Ambiental (PCA)',
        'Elaboração de Plano de Recuperação de Áreas Degradadas (PRAD)',
        'Elaboração de Estudo de Impacto Ambiental (EIA) e Relatório de Impacto Ambiental (RIMA)',
        'Elaboração de Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
        'Elaboração de Layout e Planta Baixa',
        'Elaboração de Estudo de Critérios Locacionais relacionados à Reserva da Biosfera, Unidades de Conservação, Corredores Ecológicos ou Sítios Ramsar',
        'Elaboração de pedido de Ampliação ou Renovação da Licença de Operação'
      ]
    },
    {
      title: 'Regularização de Supressão de Vegetação e Intervenção Ambiental',
      icon: <TreePine className="w-8 h-8 text-green-600" />,
      services: [
        'Obtenção de Autorização para Intervenção Ambiental (AIA) em Área de Preservação Permanente (APP) e Reserva Legal',
        'Elaboração de Plano de Intervenção Ambiental (PIA) e PIA Simplificado',
        'Elaboração de Planta Topográfica Planimétrica',
        'Elaboração de Arquivo Digital Vetorial Georreferenciado (formato shapefile e KML)',
        'Regularização de Supressão de Árvores Isoladas',
        'Elaboração de Projeto de Recomposição de Áreas Degradadas e Alteradas (PRADA)',
        'Elaboração de Projeto Técnico de Reconstituição da Flora (PTRF)',
        'Elaboração de Proposta de Compensação Ambiental por Intervenção',
        'Elaboração de Projeto de Preservação ou Recuperação da Vegetação Nativa',
        'Elaboração de Inventário Ambiental (levantamento qualitativo e quantitativo de vegetação nativa ou exótica)',
        'Elaboração de Estudo Técnico para comprovação de inexistência de alternativa técnica e locacional',
        'Emissão de Documento de Arrecadação Estadual (DAES)'
      ]
    },
    {
      title: 'Regularização para Produção de Carvão',
      icon: <Zap className="w-8 h-8 text-green-600" />,
      services: [
        'Obtenção da Declaração de Colheita de Florestas Plantadas e Produção de Carvão (DCF)',
        'Cadastro de Plantio Florestal junto ao órgão ambiental competente',
        'Comunicação de Colheita e Produção conforme exigências legais',
        'Regularização no Sistema Nacional de Controle da Origem dos Produtos Florestais (Sinaflor/IBAMA)',
        'Emissão do Documento de Origem Florestal (DOF) para transporte e rastreabilidade da produção'
      ]
    },
    {
      title: 'Projetos Técnicos e Monitoramento',
      icon: <FlaskConical className="w-8 h-8 text-green-600" />,
      services: [
        'Elaboração de Projetos de Dimensionamento de Estação de Tratamento de Efluentes (ETE)',
        'Responsabilidade Técnica pelo tratamento de água potável',
        'Responsabilidade Técnica pelo tratamento de piscinas',
        'Monitoramento da Qualidade da Água'
      ]
    },
    {
      title: 'Consultoria e Assessoria Ambiental',
      icon: <FileText className="w-8 h-8 text-green-600" />,
      services: [
        'Análise e interpretação de exigências legais emitidas por órgãos ambientais',
        'Acompanhamento de processos ambientais junto aos órgãos competentes',
        'Planejamento ambiental de empreendimentos desde a concepção à implantação',
        'Suporte em reuniões técnicas e vistorias com fiscais ambientais',
        'Adequação documental e técnica de processos em andamento'
      ]
    },
    {
      title: 'Regularizações Rurais',
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      services: [
        'Elaboração de Cadastro Ambiental Rural (CAR)',
        'Cadastro e Elaboração de Outorga de Uso da Água',
        'Obtenção de Certidão de Uso Insignificante de Recursos Hídricos',
        'Regularização para Construção de Lagoas e Barramentos',
        'Elaboração de Avaliação Ambiental de Terrenos para viabilidade técnica de uso e ocupação do solo'
      ]
    },
    {
      title: 'Regularização no IBAMA',
      icon: <Shield className="w-8 h-8 text-green-600" />,
      services: [
        'Cadastro no Cadastro Técnico Federal – Atividades Potencialmente Poluidoras (CTF/APP)',
        'Cadastro no Cadastro Técnico Federal – Atividades e Instrumentos de Defesa Ambiental (CTF/AIDA)'
      ]
    },
    {
      title: 'Defesas e Perícias Ambientais',
      icon: <Building className="w-8 h-8 text-green-600" />,
      services: [
        'Elaboração de Respostas a Autos de Infração para fins de recurso, defesa técnica ou negociação com o órgão ambiental',
        'Realização de Perícias Ambientais Judiciais e Extrajudiciais'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluções completas em consultoria ambiental para empresas e propriedades rurais
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {category.icon}
                      <h2 className="text-2xl font-bold text-gray-900 ml-4">
                        {category.title}
                      </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{service}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outros Serviços</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Elaboração de Estudos, Laudos e Relatórios Técnicos Ambientais
                </h3>
                <p className="text-gray-700">
                  Documentos técnicos especializados para atender demandas específicas de cada projeto.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Serviços Personalizados
                </h3>
                <p className="text-gray-700">
                  Desenvolvemos soluções customizadas para atender necessidades específicas do seu projeto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de consultoria ambiental?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu projeto a estar em 
            conformidade com as normas ambientais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
              asChild
            >
              <a 
                href="https://wa.me/5531992351153?text=Olá! Gostaria de solicitar um orçamento para consultoria ambiental."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
              asChild
            >
              <a href="/contato">
                Falar Conosco
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

