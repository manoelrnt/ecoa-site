import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Download, ExternalLink } from 'lucide-react'

const LegalDocs = () => {
  const documents = [
    {
      title: 'Registro no Conselho Regional de Química (CRQ)',
      description: 'Documento que comprova o registro da empresa no CRQ',
      type: 'PDF',
      status: 'Ativo'
    },
    {
      title: 'Cadastro Técnico Federal - IBAMA',
      description: 'Habilitação no Cadastro Técnico Federal do IBAMA',
      type: 'PDF',
      status: 'Ativo'
    },
    {
      title: 'Alvará de Funcionamento',
      description: 'Alvará municipal de funcionamento da empresa',
      type: 'PDF',
      status: 'Ativo'
    },
    {
      title: 'Certidão de Dispensa de Licenciamento',
      description: 'Certidão municipal de dispensa de licenciamento ambiental',
      type: 'PDF',
      status: 'Ativo'
    },
    {
      title: 'Certificado de Responsabilidade Técnica',
      description: 'Certificados de responsabilidade técnica dos profissionais',
      type: 'PDF',
      status: 'Ativo'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Documentos Legais</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Registros e certificações da Ecoa Consultoria Ambiental
          </p>
        </div>
      </section>

      {/* Informações Gerais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparência e Credibilidade</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A Ecoa Consultoria Ambiental mantém todos os seus registros e certificações 
              atualizados e disponíveis para consulta, garantindo total transparência em 
              nossa atuação profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Registros Profissionais
                </h3>
                <p className="text-gray-600">
                  Todos os nossos profissionais possuem registro nos conselhos competentes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Habilitações Oficiais
                </h3>
                <p className="text-gray-600">
                  Habilitados junto aos órgãos ambientais competentes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Documentação Atualizada
                </h3>
                <p className="text-gray-600">
                  Mantemos toda documentação sempre atualizada e válida
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lista de Documentos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Documentos Disponíveis</h2>
            <p className="text-xl text-gray-600">
              Consulte nossos registros e certificações
            </p>
          </div>

          <div className="space-y-6">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600">{doc.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-500">Tipo: {doc.type}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            doc.status === 'Ativo' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Legais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Informações da Empresa</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dados Empresariais</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Razão Social:</span>
                    <p className="text-gray-600">Ecoa Consultoria Ambiental</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">CNPJ:</span>
                    <p className="text-gray-600">26.960.573/0001-50</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Fundação:</span>
                    <p className="text-gray-600">2017</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Sede:</span>
                    <p className="text-gray-600">Conselheiro Lafaiete, Minas Gerais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Representatividade</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">CODEMA:</span>
                    <p className="text-gray-600">Representante do setor de serviços ambientais</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">ARPA:</span>
                    <p className="text-gray-600">Participação na diretoria da Associação Regional de Proteção Ambiental</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Região de Atuação:</span>
                    <p className="text-gray-600">Alto Paraopeba e Vale do Piranga</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nota sobre Documentos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Verificação de Documentos
            </h3>
            <p className="text-blue-700">
              Para verificar a autenticidade de qualquer documento ou obter cópias atualizadas, 
              entre em contato conosco através dos canais oficiais. Todos os documentos são 
              mantidos atualizados conforme as exigências legais.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LegalDocs

